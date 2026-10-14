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

