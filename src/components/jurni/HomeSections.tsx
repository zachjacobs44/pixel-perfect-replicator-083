import { WhiteCard } from "./Card";
import { SectionLabel } from "./SectionPlaceholder";
import { StakBubble, UserBubble } from "./Bubbles";
import { Moment } from "./Moment";
import { ASK_PROMPTS, MedRow, askHref } from "./AskAnything";
import { trackCta } from "@/lib/analytics";

const cardTitle = "font-display text-[24px] font-extrabold leading-[1.05]";
const cardBody = "mt-2.5 text-[16px] leading-[1.5] text-muted";

/* The plan as the user actually receives it: today, big and legible, with the week behind it. */
function PlanCard() {
  const days = [
    { d: "M", state: "done" },
    { d: "T", state: "done" },
    { d: "W", state: "done" },
    { d: "T", state: "today" },
    { d: "F", state: "next" },
    { d: "S", state: "next" },
    { d: "S", state: "next" },
  ] as const;
  const upcoming = [
    ["Fri", "Shot day. Light dinner, early night."],
    ["Sat", "Grocery run. Your list is ready, 11 items."],
    ["Sun", "Walk 30 min. Cook the chicken for the week."],
  ];
  const line = "rgba(243,238,232,.12)";
  return (
    <div className="night-screen rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-phone)] md:p-7">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold uppercase tracking-[.08em]" style={{ color: "var(--stak-slate)" }}>Your plan · Week 12</span>
        <span className="text-[13px]" style={{ color: "var(--stak-slate)" }}>3 of 7 done</span>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1.5">
        {days.map(({ d, state }, i) => (
          <div
            key={i}
            className="flex h-9 items-center justify-center rounded-[10px] text-[13px] font-semibold"
            style={
              state === "today"
                ? { background: "var(--stak-amber)", color: "#0B1417" }
                : state === "done"
                  ? { background: "rgba(242,166,90,.18)", color: "var(--stak-amber-light)" }
                  : { border: `1px solid ${line}`, color: "var(--stak-slate)" }
            }
            aria-label={state === "today" ? "Today" : undefined}
          >
            {state === "done" ? "✓" : d}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <span className="text-[13px] font-semibold uppercase tracking-[.08em]" style={{ color: "var(--stak-amber)" }}>Today · Thursday</span>
        <p className="font-display mt-2 text-[34px] font-extrabold leading-[1.0] md:text-[40px]">
          Lift, 20 min.
          <br />
          Turkey chili tonight.
        </p>
        <p className="mt-3 text-[16px] leading-[1.5]" style={{ color: "var(--stak-slate)" }}>
          The back-friendly set. Chili is already in the fridge, 38g protein.
        </p>
      </div>

      <div className="mt-6 divide-y border-t" style={{ borderColor: line }}>
        {upcoming.map(([d, t]) => (
          <div key={d} className="grid grid-cols-[44px_1fr] items-baseline gap-3 py-3 text-[15px]" style={{ borderColor: line }}>
            <span className="font-semibold" style={{ color: "var(--stak-amber)" }}>{d}</span>
            <span style={{ color: "var(--stak-cream, #F3EEE8)" }}>{t}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-[12px] px-3.5 py-3 text-[14px]" style={{ background: "var(--stak-surface)" }}>
        <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: "var(--stak-amber)" }} />
        <span style={{ color: "var(--stak-amber-light)" }}>Texted to you at 5:30, every day. Reply to change anything.</span>
      </div>
    </div>
  );
}

export function YouGetAPlan() {
  const cards = [
    { t: "A plan from day one.", b: "Protein, meals, movement, check-ins. You never have to figure out what to do next." },
    { t: "Adjusted as you go.", b: "Dose changes, bad weeks, travel. It reworks the plan before you ask." },
    { t: "Delivered by text.", b: "No app to open, no PDF to read. It texts you the next step when it's time." },
  ];
  return (
    <section id="plan" className="section-y">
      <div className="content-column grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionLabel>WHAT YOU GET</SectionLabel>
          <h2 className="display-section mt-4 max-w-[640px]">You don&apos;t just get answers. You get a plan.</h2>
          <p className="mt-6 max-w-[520px] text-[19px] leading-[1.5] text-muted">
            Jurni GLP asks what you&apos;re on, what you&apos;re working toward, and what you like to eat. Then it sets you up and walks you through it, week by week.
          </p>
          <div className="mt-8 grid gap-3">
            {cards.map(({ t, b }) => (
              <WhiteCard key={t} className="min-h-0 p-5">
                <div>
                  <h3 className={cardTitle}>{t}</h3>
                  <p className={cardBody}>{b}</p>
                </div>
              </WhiteCard>
            ))}
          </div>
        </div>
        <div className="phone-glow mx-auto w-full max-w-[460px]">
          <PlanCard />
        </div>
      </div>
    </section>
  );
}

export function HowYouTalk() {
  const items = [
    { t: "Text it.", b: "Full sentences, half sentences, one word. Any language." },
    { t: "Call it.", b: "Talk it through out loud. The recap arrives by text." },
    { t: "Send a photo.", b: "Your fridge, your plate, a menu, a label. It reads it and tells you what to do." },
    { t: "Send a link.", b: "The restaurant, the recipe. It tells you what to order or skip." },
    { t: "Let it text you.", b: "Dose days, refill days, and the quiet weeks in between." },
    { t: "Ask it to do things.", b: "Find a restaurant, plan the week, set reminders. It does the work." },
  ];
  return (
    <section id="how" className="section-y">
      <div className="content-column">
        <SectionLabel>HOW IT WORKS</SectionLabel>
        <h2 className="display-section mt-4 max-w-[760px]">Text it. Call it. Send it a photo or a link.</h2>
        <p className="mt-6 max-w-[560px] text-[19px] leading-[1.5] text-muted">
          Jurni GLP lives in your messages. No app needed, nothing to fill in.
        </p>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ t, b }) => (
            <div key={t} className="border-t pt-5" style={{ borderColor: "var(--hairline)" }}>
              <h3 className={cardTitle}>{t}</h3>
              <p className={cardBody}>{b}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 text-[19px] font-semibold">Send it a photo of your fridge, for example.</p>
        <div className="mt-5">
          <Moment />
        </div>
        <p className="mt-14 text-[19px] font-semibold">Start with one of these, or type your own.</p>
        <ul className="mt-5 flex flex-wrap gap-3">
          {ASK_PROMPTS.map((p) => (
            <li key={p}>
              <a
                href={askHref(p)}
                onClick={() => trackCta("cta_text", "ask")}
                className="block w-fit max-w-full rounded-[18px] rounded-br-[6px] bg-frame px-4 py-3 text-[16px] leading-[1.4] text-ink transition-transform duration-200 ease-[var(--ease-spring)] hover:-translate-y-0.5 focus-visible:-translate-y-0.5 active:scale-[0.97]"
              >
                {p}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 border-y py-8 md:mt-20 md:py-10" style={{ borderColor: "var(--hairline)" }}>
        <p className="content-column text-[17px] font-semibold text-muted md:text-[19px]">Works with every GLP-1. Injection or pill.</p>
        <div className="med-marquee mt-5 overflow-hidden md:mt-6" role="list" aria-label="Wegovy, Ozempic, Zepbound, Mounjaro, Wegovy pill, Foundayo, Rybelsus, Saxenda, Victoza, Trulicity">
          <div className="med-track">
            <MedRow />
            <MedRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatStakIsnt() {
  return (
    <section className="pb-[72px] md:pb-[96px]">
      <div className="content-column">
        <WhiteCard className="min-h-0 p-7 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <SectionLabel>WHAT IT ISN&apos;T</SectionLabel>
              <h3 className="display mt-3 text-[28px]">Your provider.</h3>
              <p className="mt-3 text-[17px] leading-[1.5] text-muted">
                Jurni GLP won&apos;t change your dose or diagnose anything. When a symptom needs a clinician, it says so and tells you to call your practice, with the timing already noted.
              </p>
            </div>
            <div className="night-screen rounded-[16px] p-4">
              <UserBubble text="took my shot last night. stomach's been rough since and now it's kind of in my back" />
              <StakBubble className="mt-3">Logged for Tuesday. Stomach pain that moves into your back is not one I talk anyone through. Call your prescriber&apos;s office now. I&apos;ve noted when it started so you can tell them exactly.</StakBubble>
            </div>
          </div>
        </WhiteCard>
      </div>
    </section>
  );
}
