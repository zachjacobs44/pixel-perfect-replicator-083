import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { contactSchema } from "@/lib/contact-schema";

// Where form notices are delivered.
const TO_ADDRESSES = ["zachary@jurniglp.com", "contact@jurniglp.com"];
const FROM = { name: "Jurni GLP", address: "noreply@notify.jurniglp.com" };
const SENDER_DOMAIN = "notify.jurniglp.com";

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * Public, validated write-only intake. Consent records are private and saved
 * before best-effort email; no submission content is logged.
 */
export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => data)
  .handler(async ({ data }): Promise<ContactResult> => {
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      return {
        ok: false,
        error: parsed.error.issues[0]?.message ?? "Please check the form fields.",
      };
    }
    const values = parsed.data;

    try {
      // Only this validated insert is privileged. No public read or general CRUD.
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const ip = getRequestHeader("cf-connecting-ip")
        ?? getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim()
        ?? getRequestHeader("x-real-ip");
      const { error } = await supabaseAdmin.from("contact_submissions").insert({
        name: values.name,
        email: values.email,
        phone_e164: values.phone,
        message: values.message,
        consent_service: values.consent_service,
        consent_marketing: values.consent_marketing,
        accept_terms: values.accept_terms,
        consent_text_version: "2026-10-14",
        user_agent: getRequestHeader("user-agent")?.slice(0, 2000) ?? null,
        ip: ip?.slice(0, 200) ?? null,
        source: "/contact",
      });
      if (error) throw new Error("Contact record insert failed");
    } catch {
      console.error("[contact] record insert failed");
      return { ok: false, error: "That didn't send. Please email contact@jurniglp.com." };
    }

    const text = `Jurni Health, Inc. — New contact form message\n\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nService SMS consent: ${values.consent_service}\nMarketing SMS consent: ${values.consent_marketing}\nAccept terms: ${values.accept_terms}\nConsent text version: 2026-10-14\nSource: /contact\n\n${values.message}`;

    // Best-effort notice via Lovable Emails; the record above is the source of truth.
    try {
      const { sendLovableEmail } = await import("@lovable.dev/email-js");
      const apiKey = process.env["LOVABLE_API_KEY"];
      if (!apiKey) throw new Error("LOVABLE_API_KEY is not configured");
      const escaped = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      for (const to of TO_ADDRESSES) {
        try {
          await sendLovableEmail(
            {
              to,
              from: FROM,
              sender_domain: SENDER_DOMAIN,
              reply_to: values.email,
              subject: `Contact form — ${values.name}`,
              text,
              html: `<pre style="font-family: sans-serif; white-space: pre-wrap;">${escaped}</pre>`,
              purpose: "transactional",
              label: "contact-notification",
              idempotency_key: crypto.randomUUID(),
            },
            { apiKey, sendUrl: process.env["LOVABLE_SEND_URL"] },
          );
        } catch (error) {
          console.error("[contact] email send failed", to, error);
        }
      }
    } catch (error) {
      console.error("[contact] email send failed", error);
    }

    return { ok: true };
  });
