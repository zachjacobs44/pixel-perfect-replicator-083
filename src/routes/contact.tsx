import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent, type ReactNode } from "react";

import { sendContactMessage } from "@/lib/contact.functions";
import { contactSchema, SERVICE_CONSENT_TEXT, MARKETING_CONSENT_TEXT } from "@/lib/contact-schema";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { STAK_PHONE_DISPLAY, STAK_SMS_HREF } from "@/components/jurni/StakCTA";
import { SITE_URL, SOCIAL_IMAGE } from "@/lib/site";

const TITLE = "Contact Jurni GLP";
const DESCRIPTION =
  "Questions about Jurni GLP, your subscription, or a message you received. We reply within one business day.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: Contact,
});

const inputClass =
  "mt-2 w-full rounded-[var(--radius-chip)] border bg-[var(--white)] px-4 py-3 text-[17px] md:text-[18px] outline-none focus:border-ink";

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      className="flex flex-col gap-1 border-b py-4 md:flex-row md:items-baseline md:gap-6"
      style={{ borderColor: "var(--hairline)" }}
    >
      <div className="label-over md:w-[170px] md:shrink-0">{label}</div>
      <div className="text-[17px] md:text-[18px]">{children}</div>
    </div>
  );
}

const emptyForm = { name: "", email: "", phone: "", message: "", consent_service: false, consent_marketing: false, accept_terms: false };

function Contact() {
  const send = useServerFn(sendContactMessage);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState(
    "That didn't send. Please email contact@jurniglp.com.",
  );
  const [form, setForm] = useState(emptyForm);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();

    if (status === "sending") return;
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      setErrorMessage(parsed.error.issues[0]?.message ?? "Please check the form fields.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const result = await send({ data: form });
      if (result.ok) {
        setStatus("sent");
        setForm(emptyForm);
      } else {
        setErrorMessage(result.error);
        setStatus("error");
      }
    } catch {
      setErrorMessage("That didn't send. Please email contact@jurniglp.com.");
      setStatus("error");
    }
  }

  return (
    <section className="section-y">
      <div className="content-column max-w-[760px]">
        <h1 className="display-section">Contact Jurni GLP.</h1>
        <p className="mt-4 text-[17px] md:text-[18px]">
          Questions about Jurni GLP, your subscription, or a message you received. We reply within one business day.
        </p>

        <div className="mt-10">
          <Row label="Email">
            <a href="mailto:contact@jurniglp.com" className="underline">
              contact@jurniglp.com
            </a>
          </Row>
          <Row label="Text us">
            <a href={STAK_SMS_HREF} className="underline">
              {STAK_PHONE_DISPLAY}
            </a>
          </Row>
        </div>

        <form onSubmit={onSubmit} noValidate className="mt-12">
          <label className="block">
            <span className="label-over">Name</span>
            <input
              required
              name="name"
              autoComplete="name"
              maxLength={120}
              className={inputClass}
              style={{ borderColor: "var(--hairline)" }}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>

          <label className="mt-6 block">
            <span className="label-over">Email</span>
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              maxLength={200}
              className={inputClass}
              style={{ borderColor: "var(--hairline)" }}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>

          <label className="mt-6 block">
            <span className="label-over">Phone number</span>
            <input
              required
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              className={inputClass}
              style={{ borderColor: "var(--hairline)" }}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </label>

          <label className="mt-6 block">
            <span className="label-over">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              maxLength={4000}
              className={inputClass}
              style={{ borderColor: "var(--hairline)" }}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>

          <div className="mt-7 space-y-6">
            {([
              ["consent_service", SERVICE_CONSENT_TEXT],
              ["consent_marketing", MARKETING_CONSENT_TEXT],
            ] as const).map(([name, text]) => (
              <label key={name} htmlFor={name} className="flex cursor-pointer items-start gap-3 text-[17px] md:text-[18px]">
                <Checkbox id={name} name={name} checked={form[name]} className="mt-1 h-5 w-5" onCheckedChange={(checked) => setForm({ ...form, [name]: checked === true })} />
                <span className="min-w-0">{text}</span>
              </label>
            ))}
            <label htmlFor="accept_terms" className="flex cursor-pointer items-start gap-3 text-[17px] md:text-[18px]">
              <Checkbox id="accept_terms" name="accept_terms" required checked={form.accept_terms} className="mt-1 h-5 w-5" aria-describedby={status === "error" ? "contact-error" : undefined} onCheckedChange={(checked) => setForm({ ...form, accept_terms: checked === true })} />
              <span className="min-w-0">I accept the <Link to="/privacy" className="underline">Privacy Policy</Link> and <Link to="/terms" className="underline">Terms of Service</Link>.</span>
            </label>
          </div>

          <Button
            type="submit"
            disabled={status === "sending"}
            className="press-spring mt-7 inline-flex h-[60px] items-center justify-center rounded-[var(--radius-chip)] bg-[image:var(--grad-button)] px-8 font-body text-[18px] font-semibold text-primary-foreground shadow-[var(--shadow-button)] disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </Button>

          {status === "sent" ? (
            <p role="status" className="mt-4 text-[17px] font-semibold" style={{ color: "var(--text-cyan)" }}>
              Sent. We&rsquo;ll reply within one business day.
            </p>
          ) : null}
          {status === "error" ? (
            <p id="contact-error" role="alert" className="mt-4 text-[17px] font-semibold">{errorMessage}</p>
          ) : null}
        </form>

        <p className="fine-print mt-8">
          Message frequency varies. Message and data rates may apply. Reply STOP to end, HELP for
          help.
        </p>
      </div>
    </section>
  );
}
