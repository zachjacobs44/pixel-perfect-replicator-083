import { CyanCard, DarkCard, MagentaCard, WhiteCard, YellowCard } from "./Card";
import { SectionLabel } from "./SectionPlaceholder";

const title = "font-display text-[26px] font-extrabold leading-[1.05]";
const body = "mt-3 text-[17px] leading-[1.5]";

export function PracticesContent() {
  const steps = [
    ["1", "The prescription.", "It happens in the conversation you're already having."],
    ["2", "The speakerphone moment.", "At the end of the visit, the patient texts or calls Stak from their own phone. Thirty seconds."],
    ["3", "Set up before the parking lot.", "Their Page exists before they reach the car, with your name on it."],
  ];
  const gets = [
    { C: MagentaCard, t: "A patient who stays in touch.", b: "Dose days, refill days, flat weeks. Stak keeps them engaged with the plan you wrote, every day, between visits." },
    { C: CyanCard, t: "Milestones that bring them back.", b: "When a patient hits a milestone, Stak can deliver an offer from your practice. Designed with your team, around your treatment menu." },
    { C: YellowCard, t: "Fewer interruptions.", b: "The is-this-normal calls go to Stak. When something needs you, Stak tells the patient to call you, with the timing already noted." },
    { C: DarkCard, t: "Your name on it.", b: "Co-branded Page. Patients experience it as part of your care." },
    { C: WhiteCard, t: "Nothing to set up.", b: "No EHR integration. No patient information leaves your practice. One 30-minute walkthrough." },
  ];
  return (
    <section className="section-y">
      <div className="content-column max-w-[820px]">
        <SectionLabel>FOR PRACTICES</SectionLabel>
        <h1 className="display-section mt-4">
          A turnkey GLP-1 support program for your practice. Your patients stay on it, and stay with you.
        </h1>
        <p className="mt-6 text-[20px] leading-[1.5]">
          Stak is Jurni GLP&apos;s AI agent. You introduce it at the prescription. From then on it supports your patient every day between visits, keeps them on the plan you wrote, carries your name, and brings them back to you. No software, no staff time, no cost to the practice.
        </p>

        <div className="mt-14"><SectionLabel>HOW THE INTRODUCTION WORKS</SectionLabel></div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {steps.map(([n, t, b]) => (
            <WhiteCard key={n}>
              <div>
                <p className="font-display text-[40px] font-extrabold leading-none text-magenta">{n}</p>
                <h2 className={`${title} mt-4`}>{t}</h2>
                <p className={body}>{b}</p>
              </div>
            </WhiteCard>
          ))}
        </div>

        <div className="mt-14"><SectionLabel>WHAT YOUR PRACTICE GETS</SectionLabel></div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {gets.map(({ C, t, b }, i) => (
            <C key={t} className={i === gets.length - 1 ? "md:col-span-2" : undefined}>
              <div>
                <h2 className={title}>{t}</h2>
                <p className={body}>{b}</p>
              </div>
            </C>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <WhiteCard>
            <div>
              <SectionLabel>FOR AESTHETIC PROVIDERS</SectionLabel>
              <h2 className={`${title} mt-3`}>The relationship continues after the weight comes off.</h2>
              <p className={body}>Your patient stays in a daily conversation through a year of visible change, when skin, contouring and injectables become relevant.</p>
            </div>
          </WhiteCard>
          <WhiteCard>
            <div>
              <SectionLabel>FOR CLINICAL PRACTICES</SectionLabel>
              <h2 className={`${title} mt-3`}>A seat in the study.</h2>
              <p className={body}>Clinical practices can join the randomized, refill-verified persistence study we&apos;re running. Your patients get the support; your practice becomes a study site.</p>
            </div>
          </WhiteCard>
        </div>

        <YellowCard className="mt-4 min-h-0">
          <div>
            <SectionLabel>WHAT IT ISN&apos;T</SectionLabel>
            <p className="mt-3 text-[18px] leading-[1.5]">Behavioral support only. Stak doesn&apos;t diagnose, prescribe, or change a dose, and it directs defined symptoms back to you.</p>
          </div>
        </YellowCard>

        <div className="mt-14"><SectionLabel>GETTING STARTED</SectionLabel></div>
        <ol className="mt-5 list-decimal space-y-3 pl-6 text-[18px] leading-[1.5]">
          <li>Tell us your GLP-1 patient count.</li>
          <li>A 30-minute walkthrough for your team.</li>
          <li>Your practice link and referral card arrive.</li>
          <li>Introduce Stak at every GLP-1 prescription.</li>
        </ol>

        <div className="mt-10 flex flex-col gap-3 min-[420px]:flex-row">
          <a
            href="/card"
            target="_blank"
            rel="noreferrer"
            className="press-spring inline-flex h-[60px] items-center justify-center rounded-[var(--radius-chip)] px-8 text-[18px] font-semibold text-primary-foreground"
            style={{ background: "var(--grad-button)", boxShadow: "var(--shadow-button)" }}
          >
            Download the referral card
          </a>
          <a
            href="mailto:practices@jurniglp.com"
            className="press-spring inline-flex h-[60px] items-center justify-center rounded-[var(--radius-chip)] border-2 border-ink px-8 text-[18px] font-semibold text-ink"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
