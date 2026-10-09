import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Wordmark } from "./Wordmark";
import { TextStakButton } from "./StakCTA";

/* Homepage sections, in page order. On other pages these link back to the homepage anchor. */
const NAV = [
  { label: "What you get", hash: "plan" },
  { label: "Your journey", hash: "journey" },
  { label: "Your Page", hash: "the-page" },
  { label: "Pricing", hash: "pricing" },
  { label: "Questions", hash: "questions" },
] as const;

const linkClass = "text-[16px] font-semibold text-ink/80 transition-colors hover:text-ink";

function NavLinks({ onNavigate, className }: { onNavigate?: () => void; className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";
  return (
    <>
      {NAV.map(({ label, hash }) =>
        onHome ? (
          <a key={hash} href={`#${hash}`} onClick={onNavigate} className={`${linkClass} ${className ?? ""}`.trim()}>
            {label}
          </a>
        ) : (
          <Link key={hash} to="/" hash={hash} onClick={onNavigate} className={`${linkClass} ${className ?? ""}`.trim()}>
            {label}
          </Link>
        ),
      )}
      <Link to="/practices" onClick={onNavigate} className={`${linkClass} ${className ?? ""}`.trim()}>
        For practices
      </Link>
    </>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        background: "color-mix(in srgb, var(--paper) 88%, transparent)",
        backdropFilter: "saturate(1.2) blur(10px)",
        WebkitBackdropFilter: "saturate(1.2) blur(10px)",
        borderColor: "var(--hairline)",
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <div className="content-column flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="Jurni GLP home" className="shrink-0" onClick={() => setOpen(false)}>
          <Wordmark tone="ink" className="h-5 md:h-6" />
        </Link>

        <nav aria-label="Site" className="hidden items-center gap-7 lg:flex">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-3">
          <TextStakButton section="hero" compact />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border lg:hidden"
            style={{ borderColor: "var(--hairline)", background: "var(--white)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="site-menu"
          className="border-t lg:hidden"
          style={{ background: "var(--paper)", borderColor: "var(--hairline)" }}
        >
          <nav aria-label="Site" className="content-column flex flex-col py-3">
            <NavLinks onNavigate={() => setOpen(false)} className="border-b py-4 text-[20px]" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
