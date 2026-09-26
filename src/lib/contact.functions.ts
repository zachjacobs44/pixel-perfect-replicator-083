import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  message: z.string().min(1).max(4000),
});

const TO_ADDRESS = "support@jurniglp.com";

/**
 * Delivers the contact form to support@jurniglp.com.
 * Uses the project's transactional email sender once an email domain is set up;
 * until then the submission is recorded in the server log so nothing is lost.
 */
export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    const from = process.env["EMAIL_FROM"] ?? "Jurni GLP <support@jurniglp.com>";

    const text = `New contact form message\n\nName: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;

    if (!apiKey) {
      console.log("[contact] email sender not configured yet; submission:", {
        to: TO_ADDRESS,
        ...data,
      });
      return { ok: true, delivered: false };
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [TO_ADDRESS],
        reply_to: data.email,
        subject: `Contact form — ${data.name}`,
        text,
      }),
    });

    if (!res.ok) {
      console.error("[contact] email send failed", res.status, await res.text());
      return { ok: true, delivered: false };
    }

    return { ok: true, delivered: true };
  });
