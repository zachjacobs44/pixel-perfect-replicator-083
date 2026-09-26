import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";

import { checkPracticesPassword } from "@/lib/practices.functions";
import { SectionPlaceholder } from "@/components/jurni/SectionPlaceholder";
import { Wordmark } from "@/components/jurni/Wordmark";

const TITLE = "For practices — Jurni GLP";
const STORAGE_KEY = "jurni.practices.access";

export const Route = createFileRoute("/practices")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: "This page is for referring practices." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: "This page is for referring practices." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jurniglp.com/practices" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: "This page is for referring practices." },
    ],
    links: [{ rel: "canonical", href: "https://jurniglp.com/practices" }],
  }),
  component: Practices,
});

function Practices() {
  const check = useServerFn(checkPracticesPassword);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const expires = Number(raw);
    if (Number.isFinite(expires) && expires > Date.now()) setUnlocked(true);
    else localStorage.removeItem(STORAGE_KEY);
  }, []);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(false);
    try {
      const result = await check({ data: { password } });
      if (result.ok) {
        localStorage.setItem(STORAGE_KEY, String(Date.now() + 30 * 24 * 60 * 60 * 1000));
        setUnlocked(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  if (unlocked) {
    return <SectionPlaceholder label="For practices" />;
  }

  return (
    <section className="section-y" style={{ background: "var(--paper)" }}>
      <div className="content-column max-w-[440px]">
        <Wordmark className="h-6" />
        <p className="mt-8 text-[17px] md:text-[18px]">This page is for referring practices.</p>

        <form onSubmit={onSubmit} className="mt-8">
          <label className="block">
            <span className="label-over">Password</span>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-[var(--radius-chip)] border bg-white px-4 py-3 text-[17px] outline-none focus:border-ink md:text-[18px]"
              style={{ borderColor: "var(--hairline)" }}
            />
          </label>

          <button
            type="submit"
            disabled={busy}
            className="press-spring mt-6 inline-flex h-[60px] w-full items-center justify-center rounded-full px-8 font-display text-[20px] font-bold text-white disabled:opacity-70"
            style={{ background: "var(--grad-magenta)", boxShadow: "var(--shadow-magenta)" }}
          >
            {busy ? "Checking…" : "Continue"}
          </button>

          {error ? (
            <p className="fine-print mt-3" style={{ color: "var(--ink)" }}>
              That password didn&rsquo;t work. Please try again.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
