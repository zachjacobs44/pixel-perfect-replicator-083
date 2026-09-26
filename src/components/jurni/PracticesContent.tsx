import type { ReactNode } from "react";

import { CyanCard, DarkCard, MagentaCard, WhiteCard, YellowCard } from "./Card";
import { SectionLabel } from "./SectionPlaceholder";

const STEPS = [
  ["1", "The prescription.", "It happens in the conversation you're already having."],
  ["2", "The speakerphone moment.", "At the end of the visit, the patient calls Stak on speakerphone. Thirty seconds."],
  ["3", "Set up before the parking lot.", "Their Page exists before they reach the car, with your name on it."],
];

function Benefit({ t, children }: { t: string; children: ReactNode }) {
  return (
    <>
      <h3 className="font-display text-[26px] font-extrabold leading-[1.05]">{t}</h3>
      <p className="mt-6 text-[17px] leading-[1.5]">{children}</p>
    </>
  );
}

export function PracticesContent() {
  return (
    <section className="section-y">
      <div className="mx-auto w-full max-w-[820px] px-5">
        <SectionLabel>FOR PRACTICES</SectionLabel>
        <h1 className="display-section mt-4">
          The support your GLP-1 patients ask you for, without adding it to your day.
        </h1>
        <p className="mt-6 text-[20px] leading-[1.5]">
          Jurni GLP is a number your patients text or call between visits. Stak answers the &quot;is this
          normal&quot; questions, logs what they&apos;re doing, reaches out on dose and refill days, and
          routes anything clinical back to you. No software, no integration, no cost to the practice.
        </p>

        <div className="mt-16"><SectionLabel>HOW THE INTRODUCTION WORKS</SectionLabel></div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {STEPS.map(([n, t, b]) => (
            <WhiteCard key={n} className="min-h-0 justify-start">
              <p className="font-display text-[40px] font-extrabold leading-none text-magenta">{n}</p>
              <h3 className="mt-4 text-[20px] font-bold">{t}</h3>
              <p className="mt-2 text-[17px] leading-[1.5]">{b}</p>
            </WhiteCard>
          ))}
        </div>

        <div className="mt-16"><SectionLabel>WHAT YOUR PRACTICE GETS</SectionLabel></div>
        <div className="mt-5 grid auto-rows-fr gap-5 md:grid-cols-2">
          <MagentaCard><Benefit t="Fewer interruptions.">The is-this-normal calls go to Stak, not your front desk. The ones that need you come to you, with a timeline attached.</Benefit></MagentaCard>
          <CyanCard><Benefit t="Your name on it.">Patients experience it as your program. Co-branded Page, co-branded referral card, your practice link.</Benefit></CyanCard>
          <YellowCard><Benefit t="A patient who stays in touch.">Dose days, refill days, flat weeks. Stak keeps them engaged with the plan you wrote.</Benefit></YellowCard>
          <DarkCard className="text-paper"><Benefit t="Nothing to set up.">No EHR integration. No patient data leaves your practice. No staff time beyond one 30-minute walkthrough.</Benefit></DarkCard>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <WhiteCard className="min-h-0 justify-start">
            <p className="label-over text-[14px]">FOR AESTHETIC PROVIDERS</p>
            <h3 className="mt-4 font-display text-[26px] font-extrabold leading-[1.05]">The relationship continues after the weight comes off.</h3>
            <p className="mt-4 text-[17px] leading-[1.5]">Your patient stays in a daily conversation through a year of visible change, when skin, contouring and injectables become relevant. Milestone moments can carry an offer from your practice.</p>
          </WhiteCard>
          <WhiteCard className="min-h-0 justify-start">
            <p className="label-over text-[14px]">FOR CLINICAL PRACTICES</p>
            <h3 className="mt-4 font-display text-[26px] font-extrabold leading-[1.05]">A seat in the evidence.</h3>
            <p className="mt-4 text-[17px] leading-[1.5]">Clinical practices can join the randomized, refill-verified persistence study we&apos;re running. Your patients get the support; your practice becomes a study site.</p>
          </WhiteCard>
        </div>

        <YellowCard className="mt-5 min-h-0">
          <p className="label-over text-[14px] text-ink">WHAT IT ISN&apos;T</p>
          <p className="mt-4 text-[17px] leading-[1.5]">Behavioral support only. Stak doesn&apos;t diagnose, prescribe, or change a dose, and it directs defined symptoms back to you.</p>
        </YellowCard>

        <div className="mt-16"><SectionLabel>COST</SectionLabel></div>
        <p className="mt-4 text-[20px] leading-[1.5]">Free to the practice. Patients pay $29.99 a month after two free weeks, and nothing during the first two weeks.</p>

        <div className="mt-16"><SectionLabel>GETTING STARTED</SectionLabel></div>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-[18px] leading-[1.5]">
          <li>Tell us your GLP-1 patient count.</li>
          <li>A 30-minute walkthrough for your team.</li>
          <li>Referral cards and your practice link arrive.</li>
          <li>Introduce Stak in the room.</li>
        </ol>

        <div className="mt-10 flex flex-col gap-3 min-[420px]:flex-row">
          <a href="/card" target="_blank" rel="noopener" className="press-spring inline-flex h-[60px] items-center justify-center rounded-full px-8 font-display text-[20px] font-bold text-white" style={{ background: "var(--grad-magenta)", boxShadow: "var(--shadow-magenta)" }}>
            Download the referral card
          </a>
          <a href="mailto:practices@jurniglp.com" className="press-spring inline-flex h-[60px] items-center justify-center rounded-full border-2 border-ink px-8 font-display text-[20px] font-bold text-ink">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
