import { STAK_PHONE } from "./StakCTA";

export const ASK_PROMPTS = [
  "Find me a restaurant near me tonight that'll work on a small appetite.",
  "Read this menu and tell me what to order.",
  "What should I be doing this week?",
  "Plan a week of dinners around what's in my fridge.",
  "I'm at a wedding Saturday. Help me get through the buffet.",
  "Log my shot. Left thigh. Tuesday night.",
  "Why hasn't the scale moved in two weeks?",
  "Send me three reminders a day to log my meals.",
  "How much protein should I be eating?",
];

export const askHref = (text: string) => `sms:${STAK_PHONE}?&body=${encodeURIComponent(text)}`;

const MEDS = ["Wegovy", "Ozempic", "Zepbound", "Mounjaro", "Wegovy pill", "Foundayo", "Rybelsus", "Saxenda", "Victoza", "Trulicity"];

export function MedRow({ hidden }: { hidden?: boolean }) {
  return (
    <div className="med-row font-display text-[30px] font-extrabold uppercase leading-none text-ink md:text-[48px]" aria-hidden={hidden ? "true" : undefined}>
      {MEDS.map((m, i) => (
        <span key={m} className="whitespace-nowrap">
          {m}
          {i < MEDS.length - 1 || !hidden ? <span className={`px-4 text-[var(--stak-amber)] md:px-6 ${i === MEDS.length - 1 ? "med-tail" : ""}`}>·</span> : <span className="px-4 text-[var(--stak-amber)] md:px-6">·</span>}
        </span>
      ))}
    </div>
  );
}

