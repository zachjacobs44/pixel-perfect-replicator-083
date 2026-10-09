import { WhiteCard } from "./Card";
import { SectionLabel } from "./SectionPlaceholder";
import { StakBubble, UserBubble } from "./Bubbles";

const cardTitle = "font-display text-[24px] font-extrabold leading-[1.05]";
const cardBody = "mt-2.5 text-[16px] leading-[1.5] text-muted";

/* A small "plan card" that looks like a Stak artifact: the week at a glance. */
function PlanCard() {
  const rows = [
    ["Mon", "Chicken + rice bowl", "Walk 25 min"],
    ["Tue", "Salmon, greens", "Lift · 20 min"],
    ["Wed", "Leftovers", "Rest"],
    ["Thu", "Turkey chili", "Lift · 20 min"],
    ["Fri", "Shot day · light dinner", "Walk"],
  ];
  return (
    <div className="night-screen rounded-[var(--radius-card)] p-5 shadow-[var(--shadow-phone)]">
      <div className="flex items-baseline justify-between">
        <span className="font-display text-[18px] font-extrabold">Your week</span>
        <span className="text-[13px]" style={{ color: "var(--stak-slate)" }}>week 12 · 110g protein</span>
      </div>
      <div className="mt-3 divide-y" style={{ borderColor: "rgba(243,238,232,.12)" }}>
        {rows.map(([d, m, w]) => (
          <div key={d} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 py-2.5 text-[14px]" style={{ borderColor: "rgba(243,238,232,.12)" }}>
            <span className="font-semibold" style={{ color: "var(--stak-amber)" }}>{d}</span>
            <span>{m}</span>
            <span style={{ color: "var(--stak-slate)" }}>{w}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 inline-block rounded-[10px] px-3 py-1.5 text-[13px] font-semibold" style={{ background: "var(--stak-surface)", color: "var(--stak-amber-light)" }}>
        Grocery list ready · 11 items
      </div>
    </div>
  );
}

export function YouGetAPlan() {
  const cards = [
    { t: "A plan from day one.", b: "Protein, meals, movement, check-ins. You never have to figure out what to do next." },
    { t: "Adjusted as you go.", b: "Dose changes, bad weeks, travel. Stak reworks the plan before you ask." },
    { t: "Texted, not handed over.", b: "No PDF. Stak texts you the next step when it's time." },
  ];
  return (
    <section id="plan" className="section-y">
      <div className="content-column grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionLabel>WHAT YOU GET</SectionLabel>
          <h2 className="display-section mt-4 max-w-[640px]">You don&apos;t just get answers. You get a plan.</h2>
          <p className="mt-6 max-w-[520px] text-[19px] leading-[1.5] text-muted">
            Stak asks what you&apos;re on, what you&apos;re working toward, and what you like to eat. Then it sets you up and walks you through it, week by week.
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
        <div className="phone-glow mx-auto w-full max-w-[420px]">
          <PlanCard />
        </div>
      </div>
    </section>
  );
}

export function HowYouTalk() {
  const items = [
    { t: "Text it.", b: "Full sentences, half sentences, one word." },
    { t: "Call it.", b: "Talk it through. Stak texts you the recap." },
    { t: "Send a photo.", b: "Your plate, a menu, a label. It reads it and logs it." },
    { t: "Send a link.", b: "The restaurant, the recipe. It tells you what to order or skip." },
    { t: "Let it text you.", b: "Dose days, refill days, and the quiet weeks." },
    { t: "Any language.", b: "Stak answers in the one you text in." },
  ];
  return (
    <section id="how" className="section-y">
      <div className="content-column">
        <SectionLabel>HOW YOU TALK TO IT</SectionLabel>
        <h2 className="display-section mt-4 max-w-[760px]">Text it. Call it. Send it a photo or a link.</h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ t, b }) => (
            <div key={t} className="border-t pt-5" style={{ borderColor: "var(--hairline)" }}>
              <h3 className={cardTitle}>{t}</h3>
              <p className={cardBody}>{b}</p>
            </div>
          ))}
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
              <SectionLabel>WHAT STAK ISN&apos;T</SectionLabel>
              <h3 className="display mt-3 text-[28px]">Your provider.</h3>
              <p className="mt-3 text-[17px] leading-[1.5] text-muted">
                Stak won&apos;t change your dose or diagnose anything. When a symptom needs a clinician, it says so and tells you to call your practice, with the timing already noted.
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
