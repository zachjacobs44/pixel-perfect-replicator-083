import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/** Lenient input shape: anything unexpected is coerced here, then validated in
 * the handler so a bad submission returns a friendly result instead of throwing. */
const rawSchema = z.object({
  name: z.unknown().transform((v) => (typeof v === "string" ? v.trim() : "")),
  email: z.unknown().transform((v) => (typeof v === "string" ? v.trim() : "")),
  message: z.unknown().transform((v) => (typeof v === "string" ? v.trim() : "")),
});

const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  message: z.string().min(1).max(4000),
});

const TO_ADDRESS = "support@jurniglp.com";

export type ContactResult =
  | { ok: true; delivered: boolean }
  | { ok: false; error: string };

/**
 * Delivers the contact form to support@jurniglp.com.
 * Uses the project's transactional email sender once an email domain is set up;
 * until then the submission is recorded in the server log so nothing is lost.
 */
export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data) => rawSchema.parse(data ?? {}))
  .handler(async ({ data }): Promise<ContactResult> => {
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      return {
        ok: false,
        error: "Please add your name, a valid email address, and a message.",
      };
    }
    const values = parsed.data;

    const apiKey = process.env["RESEND_API_KEY"];
    const from = process.env["EMAIL_FROM"] ?? "Jurni GLP <support@jurniglp.com>";

    const text = `New contact form message\n\nName: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;

    if (!apiKey) {
      console.log("[contact] email sender not configured yet; submission:", {
        to: TO_ADDRESS,
        ...values,
      });
      return { ok: true, delivered: false };
    }

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [TO_ADDRESS],
          reply_to: values.email,
          subject: `Contact form — ${values.name}`,
          text,
        }),
      });

      if (!res.ok) {
        console.error("[contact] email send failed", res.status, await res.text());
        return { ok: true, delivered: false };
      }
    } catch (error) {
      console.error("[contact] email send threw", error);
      return { ok: true, delivered: false };
    }

    return { ok: true, delivered: true };
  });
