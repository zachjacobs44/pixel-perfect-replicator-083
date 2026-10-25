import { Link } from "@tanstack/react-router";
import { useState } from "react";

import type { DrugContent } from "@/content/drugs/types";
import { Pricing } from "./Pricing";
import { IPhoneFrame } from "./IPhoneFrame";
import { SectionLabel } from "./SectionPlaceholder";
import { ClosingCTA, StakCTA, TextStakButton } from "./StakCTA";
import { StakAvatar } from "./Wordmark";
import { WhiteCard } from "./Card";

/* ---------- Hero ---------- */

function DrugPhone({ convo }: { convo: DrugContent["hero"]["convo"] }) {
  return (
    <div className="phone-glow mx-auto w-full max-w-[350px] lg:mx-0 lg:max-w-[380px]">
      <IPhoneFrame eager>
        <div className="night-screen flex h-full flex-col px-3.5 pb-5 pt-[18%]">
          <div className="flex items-center gap-2.5 border-b border-hairline pb-2.5">
            <StakAvatar size={28} />
            <span className="font-display text-[16px] font-extrabold">Jurni GLP</span>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {convo.map((line, i) =>
              line.from === "user" ? (
                <div
                  key={i}
                  className="message-arrive ml-auto max-w-[84%] rounded-[16px] rounded-br-[6px] bg-frame p-3 text-[15px] leading-[1.35] text-ink"
                  style={{ animationDelay: `${i * 400}ms` }}
                >
                  {line.text}
                </div>
              ) : (
                <div key={i} className="message-arrive max-w-[92%]" style={{ animationDelay: `${i * 400}ms` }}>
                  <StakAvatar size={18} />
                  <div
                    className="mt-1.5 rounded-[16px] rounded-bl-[6px] border-l-[3px] border-magenta p-3 text-[15px] leading-[1.35]"
                    style={{ background: "var(--grad-white)", boxShadow: "var(--shadow-white)" }}
                  >
                    {line.text}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </IPhoneFrame>
    </div>
  );
}

function Hero({ d }: { d: DrugContent }) {
  return (
    <section className="content-column pb-10 pt-8 md:pb-16 md:pt-12">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(300px,0.7fr)] lg:gap-14">
        <div className="min-w-0">
          <StakAvatar size={56} onPaper />
          <p className="label-over mt-4 text-[14px] text-magenta">{d.hero.label}</p>
          <h1 className="display-hero mt-4 max-w-[760px]">{d.hero.headline}</h1>
          <p className="mt-7 max-w-[44ch] text-[20px] leading-[1.45] md:text-[22px]">{d.hero.sub}</p>
          <StakCTA section="drug" className="mt-7" />
        </div>
        <DrugPhone convo={d.hero.convo} />
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */

function How({ d }: { d: DrugContent }) {
  return (
    <section className="section-y">
      <div className="content-column">
        <SectionLabel>THE MEDICINE</SectionLabel>
        <h2 className="display-section mt-4 max-w-[760px]">{d.how.heading}</h2>
        <div className="mt-8 max-w-[680px] space-y-5 text-[19px] leading-[1.55]">
          {d.how.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Dose ladder ---------- */

function Ladder({ d }: { d: DrugContent }) {
  const n = d.ladder.steps.length;
  return (
    <section className="section-y">
      <div className="content-column">
        <SectionLabel>THE DOSE LADDER</SectionLabel>
        <h2 className="display-section mt-4 max-w-[760px]">{d.ladder.heading}</h2>
        <p className="mt-6 max-w-[640px] text-[19px] leading-[1.5] text-muted">{d.ladder.intro}</p>

        <div className="mt-10 max-w-[820px]">
          <ol className="flex items-end gap-1.5 sm:gap-3" aria-label={`${d.name} dose steps`}>
            {d.ladder.steps.map((s, i) => {
              const h = 48 + Math.round((i / (n - 1)) * 120);
              const isMaint = s.tag === "maintenance";
              const isStart = s.tag === "start";
              return (
                <li key={s.mg} className="flex flex-1 flex-col items-center gap-2">
                  <span className="font-display text-[18px] font-extrabold leading-none sm:text-[24px]">{s.mg}</span>
                  <div
                    className="w-full rounded-t-[10px] sm:rounded-t-[12px]"
                    style={{
                      height: h,
                      background: isMaint ? "var(--grad-button)" : "var(--grad-white)",
                      boxShadow: isMaint ? "var(--shadow-button)" : "var(--shadow-white)",
                      border: isStart ? "2px dashed var(--stak-amber)" : "1px solid var(--hairline)",
                    }}
                    aria-hidden="true"
                  />
                  <span className="sr-only">{s.tag ?? "step"}</span>
                </li>
              );
            })}
          </ol>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-muted">
            <span className="inline-flex items-center gap-2"><span aria-hidden="true" className="inline-block h-3 w-5 rounded-[4px]" style={{ background: "var(--grad-button)" }} />Maintenance doses</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true" className="inline-block h-3 w-5 rounded-[4px] bg-white" style={{ border: "2px dashed var(--stak-amber)" }} />Starting dose only</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true" className="inline-block h-3 w-5 rounded-[4px] bg-white" style={{ border: "1px solid var(--hairline)" }} />Steps in between</span>
          </div>
        </div>
        <p className="fine-print mt-3 max-w-[720px]">{d.ladder.note}</p>

        <WhiteCard className="mt-8 min-h-0 max-w-[720px]">
          <p className="label-over text-[12px] text-muted">WHO DECIDES</p>
          <p className="mt-2 text-[17px] leading-[1.5]">{d.ladder.whoDecides}</p>
        </WhiteCard>
      </div>
    </section>
  );
}

/* ---------- Side effects ---------- */

function SideEffects({ d }: { d: DrugContent }) {
  return (
    <section className="section-y">
      <div className="content-column">
        <SectionLabel>WHAT TO EXPECT</SectionLabel>
        <h2 className="display-section mt-4 max-w-[760px]">{d.sideEffects.heading}</h2>
        <p className="mt-6 max-w-[640px] text-[19px] leading-[1.5] text-muted">{d.sideEffects.intro}</p>

        {/* Phones: stacked cards */}
        <ul className="mt-8 grid gap-3 md:hidden">
          {d.sideEffects.rows.map((r) => (
            <li key={r.name} className="rounded-[var(--radius-card)] border border-hairline bg-white p-4">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[17px] font-bold">{r.name}</span>
                <span className="whitespace-nowrap font-display text-[18px] font-extrabold text-[var(--stak-amber-deep)]">{r.howOften}</span>
              </div>
              <p className="mt-2 text-[15px] leading-[1.45] text-muted">{r.jurniDoes}</p>
            </li>
          ))}
        </ul>
        {/* Larger screens: table */}
        <div className="mt-10 hidden max-w-[900px] overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-white md:block">
          <table className="w-full border-collapse text-left text-[16px] leading-[1.45]">
            <thead>
              <tr className="border-b border-hairline">
                <th scope="col" className="label-over px-5 py-4 text-[12px] font-semibold text-muted">Side effect</th>
                <th scope="col" className="label-over px-5 py-4 text-[12px] font-semibold text-muted">How often</th>
                <th scope="col" className="label-over px-5 py-4 text-[12px] font-semibold text-muted">What Jurni GLP does</th>
              </tr>
            </thead>
            <tbody>
              {d.sideEffects.rows.map((r) => (
                <tr key={r.name} className="border-b border-hairline last:border-b-0 align-top">
                  <th scope="row" className="px-5 py-4 font-bold">{r.name}</th>
                  <td className="whitespace-nowrap px-5 py-4 font-display text-[18px] font-extrabold text-[var(--stak-amber-deep)]">{r.howOften}</td>
                  <td className="px-5 py-4 text-muted">{r.jurniDoes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="fine-print mt-3 max-w-[720px]">{d.sideEffects.note}</p>
      </div>
    </section>
  );
}

/* ---------- Does for you ---------- */

function DoesForYou({ d }: { d: DrugContent }) {
  return (
    <section className="section-y">
      <div className="content-column">
        <SectionLabel>WHAT YOU GET</SectionLabel>
        <h2 className="display-section mt-4 max-w-[760px]">{d.doesForYou.heading}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {d.doesForYou.items.map((it) => (
            <WhiteCard key={it.title} className="min-h-0 justify-start">
              <h3 className="font-display text-[22px] font-extrabold leading-[1.1]">{it.title}</h3>
              <p className="mt-3 text-[16px] leading-[1.5] text-muted">{it.body}</p>
            </WhiteCard>
          ))}
        </div>
        <div className="mt-10">
          <TextStakButton section="drug" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Call your prescriber ---------- */

function CallIf({ d }: { d: DrugContent }) {
  return (
    <section className="section-y">
      <div className="content-column">
        <SectionLabel>SAFETY</SectionLabel>
        <h2 className="display-section mt-4 max-w-[760px]">{d.callIf.heading}</h2>
        <p className="mt-6 max-w-[640px] text-[19px] leading-[1.5] text-muted">{d.callIf.intro}</p>
        <ul className="mt-8 grid max-w-[900px] gap-3 md:grid-cols-2">
          {d.callIf.items.map((t) => (
            <li key={t} className="flex gap-3 rounded-[var(--radius-card)] border border-hairline bg-white p-4 text-[16px] leading-[1.45]">
              <span aria-hidden="true" className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: "var(--stak-amber)" }} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div
          className="mt-5 max-w-[900px] rounded-[var(--radius-card)] border-l-[6px] bg-white p-5 text-[16px] font-semibold leading-[1.45]"
          style={{ borderColor: "var(--stak-amber)", boxShadow: "var(--shadow-white)" }}
        >
          {d.callIf.emergency}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none" className="shrink-0"
      style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 300ms cubic-bezier(.2,1.4,.4,1)" }}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Faq({ d }: { d: DrugContent }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="questions" className="section-y">
      <div className="content-column">
        <SectionLabel>QUESTIONS</SectionLabel>
        <h2 className="display-section mt-4">{d.name} questions, answered from the label.</h2>
        <div className="mt-10 max-w-[820px] border-t border-hairline">
          {d.faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-hairline">
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={`dfaq-${i}`} onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-[20px] font-bold">
                    {item.q}
                    <Chevron open={isOpen} />
                  </button>
                </h3>
                <div id={`dfaq-${i}`} hidden={!isOpen} className="pb-6 pr-8 text-[17px] leading-[1.5]">
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Sources ---------- */

function Sources({ d }: { d: DrugContent }) {
  return (
    <section className="content-column pb-14">
      <div className="max-w-[820px] border-t border-hairline pt-6 text-[14px] leading-[1.5] text-muted">
        <p>
          Medication facts on this page come from the FDA-approved {d.name} labeling, revised {d.labelDate}, and are summarized in plain language. They are not medical advice. Jurni GLP is a behavioral support service; it does not prescribe, diagnose, or change treatment. Your prescriber decides your dose. {d.name} is a trademark of {d.maker}, which is not affiliated with Jurni GLP.
        </p>
        <ul className="mt-3 space-y-1">
          {d.sources.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline">{s.label}</a>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Also see: <Link to="/" className="underline">how Jurni GLP works</Link> · <Link to="/privacy" className="underline">Privacy</Link> · <Link to="/terms" className="underline">Terms</Link>
        </p>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

export function DrugPage({ d }: { d: DrugContent }) {
  return (
    <>
      <Hero d={d} />
      <How d={d} />
      <Ladder d={d} />
      <SideEffects d={d} />
      <DoesForYou d={d} />
      <CallIf d={d} />
      <Faq d={d} />
      <Pricing />
      <Sources d={d} />
      <ClosingCTA />
    </>
  );
}
