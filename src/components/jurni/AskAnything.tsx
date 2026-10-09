import { STAK_PHONE } from "./StakCTA";
import { trackCta } from "@/lib/analytics";
import { SectionLabel } from "./SectionPlaceholder";

export const ASK_PROMPTS = [
  "Find me a restaurant near me tonight that'll work on a small appetite.",
  "Read this menu and tell me what to order.",
  "What should I be doing this week?",
  "Plan a week of dinners around what's in my fridge.",
  "I'm at a wedding Saturday. Help me get through the buffet.",
  "Log my shot. Left thigh. Tuesday night.",
  "Why hasn't the scale moved in two weeks?",
  "Send me three reminders a day to log my meals.",
  "My jeans fit. Tell someone.",
];

export const askHref = (text: string) => `sms:${STAK_PHONE}?&body=${encodeURIComponent(text)}`;

const MEDS = ["Wegovy", "Ozempic", "Zepbound", "Mounjaro", "Wegovy pill", "Foundayo", "Rybelsus", "Saxenda", "Victoza", "Trulicity"];

function MedRow({ hidden }: { hidden?: boolean }) {
  return (
    <div className="med-row label-over text-[14px] text-ink" aria-hidden={hidden ? "true" : undefined}>
      {MEDS.map((m, i) => (
        <span key={m} className="whitespace-nowrap">
          {m}
          {i < MEDS.length - 1 || !hidden ? <span className={i === MEDS.length - 1 ? "med-tail" : ""}>&nbsp;·&nbsp;</span> : <span>&nbsp;·&nbsp;</span>}
        </span>
      ))}
    </div>
  );
}

export function AskAnything() {
  return (
    <section id="ask" className="section-y">
      <div className="content-column">
        <SectionLabel>ASK IT ANYTHING</SectionLabel>
        <h2 className="display-section mt-4 max-w-[860px]">It&apos;s an agent. Ask for what you need.</h2>
        <p className="mt-6 max-w-[600px] text-[19px] leading-[1.5] text-muted">Tap one to start, or type your own.</p>
        <ul className="mx-auto mt-10 grid max-w-[900px] gap-3 md:grid-cols-2">
          {ASK_PROMPTS.map((p) => (
            <li key={p} className="flex md:justify-end even:md:justify-start">
              <a
                href={askHref(p)}
                onClick={() => trackCta("cta_text", "ask")}
                className="block w-fit max-w-full rounded-[18px] rounded-br-[6px] bg-frame px-4 py-3.5 text-[17px] leading-[1.4] text-ink transition-transform duration-200 ease-[var(--ease-spring)] hover:-translate-y-0.5 focus-visible:-translate-y-0.5 active:scale-[0.97]"
              >
                {p}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-[17px] font-bold">Works with every GLP-1. Injection or pill.</p>
        <div className="med-marquee mt-4 overflow-hidden" role="list" aria-label="Wegovy, Ozempic, Zepbound, Mounjaro, Wegovy pill, Foundayo, Rybelsus, Saxenda, Victoza, Trulicity">
          <div className="med-track">
            <MedRow />
            <MedRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
