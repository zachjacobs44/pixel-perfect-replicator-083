import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { contactSchema } from "@/lib/contact-schema";

// Where form notices are delivered. Until jurniglp.com is verified in Resend, the fallback
// sender can only reach the Resend account owner, so this is Zach's inbox. Switch back to
// contact@jurniglp.com once the domain is verified.
const TO_ADDRESS = process.env["CONTACT_TO_ADDRESS"] ?? "zachary@jurniglp.com";

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

    const apiKey = process.env["RESEND_API_KEY"];
    const fromAddress = process.env["EMAIL_FROM"]?.match(/<([^>]+)>/)?.[1]
      ?? process.env["EMAIL_FROM"] ?? "contact@jurniglp.com";
    const from = `Jurni Health, Inc. <${fromAddress}>`;

    const text = `Jurni Health, Inc. — New contact form message\n\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nService SMS consent: ${values.consent_service}\nMarketing SMS consent: ${values.consent_marketing}\nAccept terms: ${values.accept_terms}\nConsent text version: 2026-10-14\nSource: /contact\n\n${values.message}`;

    if (!apiKey) {
      return { ok: true };
    }

    const send = (fromHeader: string) =>
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
        body: JSON.stringify({
          from: fromHeader,
          to: [TO_ADDRESS],
          reply_to: values.email,
          subject: `Contact form — ${values.name}`,
          text,
        }),
      });

    try {
      let res = await send(from);
      if (res.status === 403 && fromAddress !== "onboarding@resend.dev") {
        // Domain not verified yet in Resend: fall back to Resend's shared sender so the notice still arrives.
        console.error("[contact] sender domain not verified; retrying from onboarding@resend.dev");
        res = await send("Jurni GLP <onboarding@resend.dev>");
      }
      if (!res.ok) {
        console.error("[contact] email send failed", res.status);
        return { ok: true };
      }
    } catch {
      console.error("[contact] email send threw");
      return { ok: true };
    }

    return { ok: true };
  });
