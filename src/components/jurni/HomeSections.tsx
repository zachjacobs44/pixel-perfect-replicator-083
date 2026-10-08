import { CyanCard, DarkCard, MagentaCard, WhiteCard, YellowCard } from "./Card";
import { SectionLabel } from "./SectionPlaceholder";

const cardTitle = "font-display text-[26px] font-extrabold leading-[1.05]";
const cardBody = "mt-3 text-[17px] leading-[1.5]";

export function YouGetAPlan() {
  const cards = [
    { C: MagentaCard, t: "A plan from day one.", b: "Protein, meals, movement, check-ins. You never have to figure out what to do next." },
    { C: CyanCard, t: "Adjusted as you go.", b: "Dose changes, bad weeks, travel. Stak reworks the plan before you ask." },
    { C: YellowCard, t: "Walked through, not handed over.", b: "It doesn't send you a PDF. It texts you the next step when it's time." },
  ];
  return (
    <section id="plan" className="section-y">
      <div className="content-column">
        <SectionLabel>WHAT YOU GET</SectionLabel>
        <h2 className="display-section mt-4 max-w-[860px]">You don&apos;t just get answers. You get a plan.</h2>
        <p className="mt-6 max-w-[640px] text-[20px] leading-[1.5]">
          From your first message, Stak asks what medication you&apos;re on, what you&apos;re working toward, what you like to eat, and what you&apos;ve got to work out with. Then it sets you up: a daily protein target, a meal rhythm that works on a small appetite, movement that fits your energy, weigh-ins on a schedule, and a check-in on every day that tends to be hard. Then it adjusts. New dose, rough week, vacation, plateau. The plan moves with you, and Stak walks you through every step of it. It&apos;s the structure the medication was always supposed to come with.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map(({ C, t, b }) => (
            <C key={t}>
              <div>
                <h3 className={cardTitle}>{t}</h3>
                <p className={cardBody}>{b}</p>
              </div>
            </C>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowYouTalk() {
  const cards = [
    { C: MagentaCard, t: "Text it.", b: "It runs in your messages app. Full sentences, half sentences, one word." },
    { C: CyanCard, t: "Call it.", b: "Some things are easier out loud. Stak picks up, talks it through, and texts you the recap." },
    { C: YellowCard, t: "Send a photo.", b: "Your plate, a menu, a grocery shelf, the back of a package. Stak reads it, logs it, and tells you what to do with it." },
    { C: DarkCard, t: "Send a link.", b: "The restaurant you're going to. A recipe. A product. Stak reads the page and tells you what to order, cook, or skip." },
    { C: WhiteCard, t: "Let it text you.", b: "Dose days, refill days, the quiet weeks. And if you want, three texts a day asking what you ate, answered whenever you get to them. Nothing to open. Nothing to catch up on." },
    { C: CyanCard, t: "Any language.", b: "Text or call in whatever language you think in. Stak answers in the same one." },
  ];
  return (
    <section id="how" className="section-y">
      <div className="content-column">
        <SectionLabel>HOW YOU TALK TO IT</SectionLabel>
        <h2 className="display-section mt-4 max-w-[860px]">Every way you&apos;d talk to a person.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ C, t, b }) => (
            <C key={t}>
              <div>
                <h3 className={cardTitle}>{t}</h3>
                <p className={cardBody}>{b}</p>
              </div>
            </C>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KeepsWorking() {
  return (
    <section className="section-y">
      <div className="content-column">
        <div className="rounded-[var(--radius-card)] p-8 text-ink md:p-14" style={{ background: "var(--grad-dark)", boxShadow: "var(--shadow-dark)" }}>
          <SectionLabel>BETWEEN CONVERSATIONS</SectionLabel>
          <h2 className="display-section mt-4 max-w-[860px]">It keeps working when the conversation ends.</h2>
          <p className="mt-6 max-w-[640px] text-[18px] leading-[1.55]">
            Ask for a week of dinners and the grocery list is on your Page before you&apos;ve put the phone down. Tell it you&apos;re traveling and your reminders move to the new time zone. Say the scale hasn&apos;t budged and it&apos;s already gone back through your week to see what changed. You don&apos;t manage Stak. You talk to it, and things get done.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WhatStakIsnt() {
  return (
    <section className="pb-[72px] md:pb-[96px]">
      <div className="content-column">
        <WhiteCard className="p-8 md:p-14">
          <div>
            <SectionLabel>WHAT STAK ISN&apos;T</SectionLabel>
            <p className="mt-4 max-w-[760px] text-[20px] leading-[1.5]">
              Your provider. Stak won&apos;t change your dose, diagnose anything, or talk you through a symptom that needs a clinician. When something does, it says so and tells you to call your practice, with the timing already noted so you can tell them exactly when it started.
            </p>
          </div>
        </WhiteCard>
      </div>
    </section>
  );
}
