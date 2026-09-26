import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { sendContactMessage } from "@/lib/contact.functions";
import { STAK_PHONE_DISPLAY, STAK_TEL_HREF } from "@/components/jurni/StakCTA";

const TITLE = "Contact Jurni GLP";
const DESCRIPTION =
  "Questions about the service, your subscription, or messages you've received. Email, text or call Jurni GLP.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://jurniglp.com/contact" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://jurniglp.com/contact" }],
  }),
  component: Contact,
});

const inputClass =
  "mt-2 w-full rounded-[var(--radius-chip)] border bg-white px-4 py-3 text-[17px] md:text-[18px] outline-none focus:border-ink";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
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

function Contact() {
  const send = useServerFn(sendContactMessage);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState(
    "That didn’t send. Please email contact@jurniglp.com.",
  );
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    const values = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    if (!values.name || !values.email.includes("@") || !values.message) {
      setErrorMessage("Please add your name, a valid email address, and a message.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const result = await send({ data: values });
      if (result.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(result.error);
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("That didn’t send. Please email contact@jurniglp.com.");
      setStatus("error");
    }
  }

  return (
    <section className="section-y">
      <div className="content-column max-w-[760px]">
        <h1 className="display-section">Contact Jurni GLP.</h1>
        <p className="mt-4 text-[17px] md:text-[18px]">
          Questions about the service, your subscription, or messages you&rsquo;ve received.
        </p>

        <div className="mt-10">
          <Row label="Email">
            <a href="mailto:contact@jurniglp.com" className="underline">
              contact@jurniglp.com
            </a>
          </Row>
        </div>

        <form onSubmit={onSubmit} className="mt-12">
          <label className="block">
            <span className="label-over">Name</span>
            <input
              required
              name="name"
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
              className={inputClass}
              style={{ borderColor: "var(--hairline)" }}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>

          <label className="mt-6 block">
            <span className="label-over">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className={inputClass}
              style={{ borderColor: "var(--hairline)" }}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="press-spring mt-7 inline-flex h-[60px] items-center justify-center rounded-full px-8 font-display text-[20px] font-bold text-white disabled:opacity-70"
            style={{ background: "var(--grad-magenta)", boxShadow: "var(--shadow-magenta)" }}
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>

          {status === "sent" ? (
            <p className="mt-4 text-[17px] font-semibold" style={{ color: "var(--text-cyan)" }}>
              Sent. We&rsquo;ll reply within one business day.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-4 text-[17px] font-semibold">{errorMessage}</p>
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
