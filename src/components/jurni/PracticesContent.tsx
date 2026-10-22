import { DarkCard, WhiteCard, YellowCard } from "./Card";
import { SectionLabel } from "./SectionPlaceholder";
import { StakBubble, UserBubble } from "./Bubbles";

const title = "font-display text-[24px] font-extrabold leading-[1.05]";
const body = "mt-3 text-[17px] leading-[1.5]";
const muted = "text-muted";

function Block({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`mt-16 md:mt-20 ${className}`}>
      <SectionLabel>{label}</SectionLabel>
      {children}
    </div>
  );
}

function Exchange({ msgs }: { msgs: { u?: string; s?: string }[] }) {
  return (
    <div className="night-screen flex flex-col gap-3 rounded-[18px] p-4">
      {msgs.map((m, i) => (m.u ? <UserBubble key={i} text={m.u} /> : <StakBubble key={i}>{m.s}</StakBubble>))}
    </div>
  );
}

export function PracticesContent() {
  const gap = [
    {
      n: "1 in 3",
      t: "are off the medication within a year.",
      b: "Even in the best-persisting cohort measured to date, more than a third of patients who start a weight-loss GLP-1 have stopped by month twelve.",
      s: "Prime Therapeutics, Q1 2024 initiators",
    },
    {
      n: "Every 4 weeks",
      t: "is what trial patients got that yours don't.",
      b: "STEP-1 participants had individual lifestyle counseling every four weeks for 68 weeks. Real-world patients get a prescription and a pamphlet.",
      s: "Wilding et al., NEJM 2021",
    },
    {
      n: "26 to 54%",
      t: "higher odds of staying on it with structured support.",
      b: "Engagement with structured support is associated with substantially higher odds of GLP-1 persistence. The drug works. Staying on it is the part patients do alone.",
      s: "Devaraj et al., 2025",
    },
  ];

  const steps = [
    ["1", "The prescription.", "You introduce Jurni GLP in the GLP-1 conversation you are already having. One sentence."],
    ["2", "The speakerphone moment.", "Before the patient leaves, they text or call Jurni GLP from their own phone. It greets them by your practice's name. Thirty seconds."],
    ["3", "Set up before the parking lot.", "Their Page exists before they reach the car: your protocol, their dose schedule, their first week. No app, no account, nothing to fill in."],
  ];

  const gets = [
    { t: "Your name and your protocol on it.", b: "Co-branded for your practice. Your titration schedule, your dietary guidance, your rules for when to call. Patients experience it as part of your care." },
    { t: "Fewer is-this-normal calls.", b: "Nausea on day three, a missed dose, a flat week. Those go to Jurni GLP, with your protocol as the answer." },
    { t: "Defined symptoms come back to you.", b: "When something needs a clinician, it tells the patient to call your office, with the onset and timing already noted so the call is short." },
    { t: "Patients who stay on it, and stay with you.", b: "Dose days, refill days, plateau weeks. A daily thread keeps the patient on the plan you wrote and keeps your practice in the conversation. A GLP-1 program with support around the clock is something the practice down the street doesn't have." },
    { t: "Nothing to set up.", b: "No EHR integration. No patient information leaves your practice. One 30-minute walkthrough for your team, then a referral card and a practice link." },
    { t: "No cost to your practice.", b: "No software, no invoice, no staff time. You give the patient a phone number. No money moves between Jurni GLP and a prescriber. What the patient pays depends on your track, below." },
  ];

  return (
    <section className="section-y">
      <div className="content-column max-w-[880px]">
        <SectionLabel>FOR PRACTICES</SectionLabel>
        <h1 className="display-section mt-4">
          Your GLP-1 patients, supported every day between visits. On your protocol, under your name, at no cost to your practice.
        </h1>
        <p className={`mt-6 max-w-[720px] text-[19px] leading-[1.5] ${muted}`}>
          Jurni GLP is an AI agent your patients text or call from the phone they already have. You introduce it at the prescription. From then on it answers their questions, runs their plan, checks in before the hard days, and sends them back to you when something needs a clinician.
        </p>

        <Block label="THE GAP IT FILLS">
          <h2 className="display-section mt-4 max-w-[760px]">Trial patients lost 20.9%. Real-world patients are losing 3.6% to 11.9%.</h2>
          <p className={`mt-5 max-w-[640px] text-[18px] leading-[1.5] ${muted}`}>
            The difference is staying on it and reaching the right dose. A drug that transforms the body in under a year is prescribed in a ten-minute visit, and the support the trials wrapped around it never leaves the trial.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {gap.map((g) => (
              <WhiteCard key={g.n}>
                <div>
                  <p className="font-display text-[36px] font-extrabold leading-none text-[var(--stak-amber-deep)]">{g.n}</p>
                  <h2 className={`${title} mt-3 text-[21px]`}>{g.t}</h2>
                  <p className={`${body} text-[16px]`}>{g.b}</p>
                </div>
                <p className={`mt-4 text-[13px] ${muted}`}>{g.s}</p>
              </WhiteCard>
            ))}
          </div>
        </Block>

        <Block label="WHAT YOUR PATIENT GETS">
          <h2 className="display-section mt-4 max-w-[720px]">A plan from day one, and someone to ask at 9 p.m.</h2>
          <p className={`mt-5 max-w-[640px] text-[18px] leading-[1.5] ${muted}`}>
            Protein, meals, movement, dose reminders, refill reminders, and a private Page where all of it lives. It reads photos of their fridge and their menu. It speaks whatever language they do. And it knows what it isn't.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Exchange
              msgs={[
                { u: "same number as two weeks ago" },
                { s: "Two flat weeks after 14 pounds down isn't a stall. It's your body catching up. Your protein has been on target 5 of 7 days and your waist is down an inch since August. Keep going. Tomorrow's lift is still on." },
              ]}
            />
            <Exchange
              msgs={[
                { u: "took my shot last night. stomach's been rough since and now it's kind of in my back" },
                { s: "Logged for Tuesday. Stomach pain that moves into your back is something I won't guess at. Call your prescriber's office now. I've noted when it started so you can tell them exactly." },
              ]}
            />
          </div>
        </Block>

        <Block label="HOW IT WORKS IN YOUR PRACTICE">
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {steps.map(([n, t, b]) => (
              <WhiteCard key={n}>
                <div>
                  <p className="font-display text-[40px] font-extrabold leading-none text-[var(--stak-amber-deep)]">{n}</p>
                  <h2 className={`${title} mt-4`}>{t}</h2>
                  <p className={body}>{b}</p>
                </div>
              </WhiteCard>
            ))}
          </div>
        </Block>

        <Block label="WHAT YOUR PRACTICE GETS">
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {gets.map(({ t, b }) => (
              <WhiteCard key={t} className="min-h-0">
                <div>
                  <h2 className={title}>{t}</h2>
                  <p className={body}>{b}</p>
                </div>
              </WhiteCard>
            ))}
          </div>
        </Block>

        <Block label="TWO TRACKS. PICK YOURS.">
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <DarkCard className="min-h-0 p-7 md:p-8">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[.08em]" style={{ color: "var(--stak-amber)" }}>Clinical practices</p>
                <h2 className={`${title} mt-3 text-[28px]`}>Your patients pay nothing.</h2>
                <p className="mt-4 text-[17px] leading-[1.5]">
                  Gastroenterology, endocrinology, cardiology, primary care. Your patients get Jurni GLP free, for as long as they're on the medication, because they are the cohort in our persistence study.
                </p>
                <p className="mt-4 text-[17px] leading-[1.5]">
                  Your practice becomes a study site in the first randomized, refill-verified evaluation of daily AI support on GLP-1 persistence. Named site in resulting publications, with your approval. A seat on the clinical advisory group.
                </p>
                <p className="mt-5 text-[14px] font-semibold uppercase tracking-[.06em]" style={{ color: "var(--stak-slate)" }}>What you commit</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[16px] leading-[1.5]">
                  <li>Introduce Jurni GLP at every GLP-1 prescription.</li>
                  <li>One clinician champion and one staff coordinator.</li>
                  <li>The study's consent and refill-verification workflow, settled with you before anything starts.</li>
                  <li>A 20-minute review once a month.</li>
                </ul>
              </div>
            </DarkCard>
            <WhiteCard className="min-h-0 p-7 md:p-8">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[.08em] text-[var(--stak-amber-deep)]">Aesthetic practices</p>
                <h2 className={`${title} mt-3 text-[28px]`}>Your patients pay $29.99 a month. You pay nothing.</h2>
                <p className="mt-4 text-[17px] leading-[1.5]">
                  Plastic surgery, dermatology, medspa. Your patients get two weeks free, then $29.99 a month or $299 a year, billed to them directly. Your practice pays nothing.
                </p>
                <p className="mt-4 text-[17px] leading-[1.5]">
                  What you get is the thread. Through a year of visible change, your patient is in a daily conversation that carries your name. When they hit a milestone you choose, Jurni GLP texts them a reward from your practice: a credit, a treatment, a visit. Designed with your team, around your menu. The patient who finishes the weight loss is already yours when skin, contouring, and injectables become the next conversation.
                </p>
                <p className="mt-5 text-[14px] font-semibold uppercase tracking-[.06em] text-muted">What you commit</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[16px] leading-[1.5]">
                  <li>Introduce Jurni GLP at every GLP-1 prescription, and to your existing GLP-1 panel.</li>
                  <li>One named champion, about twenty minutes a week.</li>
                  <li>Your milestone rewards, set with us once.</li>
                  <li>A 20-minute review once a month.</li>
                </ul>
              </div>
            </WhiteCard>
          </div>
        </Block>

        <YellowCard className="mt-6 min-h-0">
          <div>
            <SectionLabel>WHAT IT ISN'T</SectionLabel>
            <p className="mt-3 text-[18px] leading-[1.5]">
              Behavioral support only. Jurni GLP doesn't diagnose, prescribe, or change a dose. Titration and treatment decisions stay with you. It prompts the patient to raise the dose conversation with their prescriber, never more than that, and it directs defined symptoms back to your office. No patient information leaves your practice, and nothing it does requires your EHR.
            </p>
          </div>
        </YellowCard>

        <Block label="GETTING STARTED">
          <ol className="mt-5 list-decimal space-y-3 pl-6 text-[18px] leading-[1.5]">
            <li>Tell us roughly how many GLP-1 patients are in your active panel, and which track you are.</li>
            <li>A 30-minute walkthrough for your team. We load your protocol.</li>
            <li>Your practice link and referral cards arrive.</li>
            <li>Introduce Jurni GLP at the next GLP-1 prescription.</li>
          </ol>
          <div className="mt-10 flex flex-col gap-3 min-[420px]:flex-row">
            <a
              href="mailto:practices@jurniglp.com?subject=Jurni%20GLP%20for%20our%20practice&body=Practice%3A%20%0AGLP-1%20patients%20in%20active%20panel%20(roughly)%3A%20%0ATrack%20(clinical%20or%20aesthetic)%3A%20%0ABest%20person%20to%20talk%20to%3A%20"
              className="press-spring inline-flex h-[60px] items-center justify-center rounded-[var(--radius-chip)] px-8 text-[18px] font-semibold text-primary-foreground"
              style={{ background: "var(--grad-button)", boxShadow: "var(--shadow-button)" }}
            >
              Talk to us
            </a>
            <a
              href="/card"
              target="_blank"
              rel="noreferrer"
              className="press-spring inline-flex h-[60px] items-center justify-center rounded-[var(--radius-chip)] border-2 border-ink px-8 text-[18px] font-semibold text-ink"
            >
              See the referral card
            </a>
          </div>
          <p className={`fine-print mt-6 ${muted}`}>
            Jurni GLP is a service of Jurni Health, Inc. and is not associated with, endorsed by, or sponsored by Novo Nordisk or Eli Lilly.
          </p>
        </Block>
      </div>
    </section>
  );
}
