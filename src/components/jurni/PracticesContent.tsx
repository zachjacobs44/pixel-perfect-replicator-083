import type { ReactNode } from "react";

import { DarkCard, WhiteCard, YellowCard } from "./Card";
import { SectionLabel } from "./SectionPlaceholder";
import { StakBubble, UserBubble } from "./Bubbles";

const title = "font-display text-[24px] font-extrabold leading-[1.05]";
const body = "mt-3 text-[17px] leading-[1.5]";
const muted = "text-muted";
const lead = "mt-5 max-w-[680px] text-[18px] leading-[1.5] text-muted";

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-16 md:mt-24">
      <SectionLabel>{label}</SectionLabel>
      {children}
    </div>
  );
}

/* A text from the practice's front desk, as the patient's phone shows it. */
function OfficeBubble({ children }: { children: ReactNode }) {
  return (
    <div className="w-fit max-w-[88%] rounded-[18px] rounded-bl-[6px] p-3.5 text-[16px] leading-[1.4]" style={{ background: "rgba(243,238,232,.10)", color: "var(--stak-cream, #F3EEE8)" }}>
      {children}
    </div>
  );
}

function PatientBubble({ text }: { text: string }) {
  return (
    <div className="ml-auto w-fit max-w-[88%] rounded-[18px] rounded-br-[6px] p-3.5 text-[16px] leading-[1.4]" style={{ background: "var(--stak-amber)", color: "#0B1417" }}>
      {text}
    </div>
  );
}

function Screen({ header, sub, children }: { header: string; sub?: string; children: ReactNode }) {
  return (
    <div className="night-screen flex flex-col rounded-[22px] p-4 md:p-5">
      <div className="border-b pb-3" style={{ borderColor: "rgba(243,238,232,.12)" }}>
        <p className="font-display text-[16px] font-extrabold">{header}</p>
        {sub ? <p className="text-[13px]" style={{ color: "var(--stak-slate)" }}>{sub}</p> : null}
      </div>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

export function PracticesContent() {
  const missing = [
    "Two calls to the office. Voicemail both times.",
    "The patient had to remember it was time to increase. Nobody told him.",
    "No visit. No conversation with the prescriber.",
    "No bloodwork ordered to see how he's responding.",
    "Nothing about what the higher dose might feel like in week one.",
    "No check-in afterward. The next contact is whenever he calls again.",
  ];

  const gap = [
    { n: "1 in 3", t: "are off the medication within a year.", b: "Even in the best-persisting cohort measured to date, more than a third of patients who start a weight-loss GLP-1 have stopped by month twelve.", s: "Prime Therapeutics, Q1 2024 initiators" },
    { n: "Every 4 weeks", t: "is what trial patients got that yours don't.", b: "STEP-1 participants had individual lifestyle counseling every four weeks for 68 weeks. Real-world patients get a prescription and a pamphlet.", s: "Wilding et al., NEJM 2021" },
    { n: "26 to 54%", t: "higher odds of staying on it with structured support.", b: "Engagement with structured support is associated with substantially higher odds of GLP-1 persistence. The drug works. Staying on it is the part patients do alone.", s: "Devaraj et al., 2025" },
  ];

  const gets = [
    { t: "Your protocol, delivered every day.", b: "Your titration schedule, your dietary guidance, your lab cadence, your rules for when to call. Loaded once. The patient hears it from Jurni GLP, in your practice's name, at the moment it applies." },
    { t: "Dose steps that happen on time.", b: "When the patient reaches the point in your protocol where a dose check is due, Jurni GLP tells them, and offers to send the request to your office. You decide. Nobody has to remember." },
    { t: "Fewer is-this-normal calls.", b: "Nausea on day three, a missed dose, a flat week. Those go to Jurni GLP, with your protocol as the answer. Your front desk gets the calls that need a person." },
    { t: "Defined symptoms come back to you.", b: "When something needs a clinician, it tells the patient to call your office, with the onset and timing already noted so the call is short." },
    { t: "Patients who stay on it, and stay with you.", b: "Dose days, refill days, plateau weeks. A daily thread keeps the patient on the plan you wrote and keeps your practice in the conversation. A GLP-1 program with support around the clock is something the practice down the street doesn't have." },
    { t: "Nothing to set up. Nothing to pay.", b: "No EHR integration. No patient information leaves your practice. No software, no invoice, no staff time. One 30-minute walkthrough, then you give the patient a phone number. No money moves between Jurni GLP and a prescriber." },
  ];

  const faq = [
    { q: "Am I liable for what it tells my patients?", a: "It delivers your protocol and general behavioral support. It does not diagnose, prescribe, or change a dose, and it says so to the patient. Anything outside that, it sends back to your office. Our counsel has reviewed the boundaries; yours is welcome to." },
    { q: "What does my staff actually have to do?", a: "Say one sentence at the prescription. Hand over a card. Answer the office requests Jurni GLP forwards, which you would be fielding anyway, now with the timing already written down." },
    { q: "What happens at 2 a.m.?", a: "The patient texts, and gets an answer from your protocol. If what they describe is on your call-now list, it tells them to call your office or go to urgent care, in those words." },
    { q: "Does patient information leave my practice?", a: "No. Nothing connects to your EHR. The patient talks to Jurni GLP from their own phone and owns that relationship. You see nothing you didn't already know, and we see nothing from your systems." },
    { q: "What if a patient doesn't like it?", a: "They reply STOP and it ends. Nothing changes about their care with you." },
    { q: "What does Jurni GLP get out of this if I'm not paying?", a: "Clinical practices: your patients are the cohort in our persistence study, which is the evidence base for everything we do next. Aesthetic practices: your patients subscribe after a free two weeks. Either way, the practice never pays, and the practice is never the product." },
  ];

  return (
    <section className="section-y">
      <div className="content-column max-w-[920px]">
        <SectionLabel>FOR PRACTICES</SectionLabel>
        <h1 className="display-section mt-4 max-w-[860px]">This is what GLP-1 care looks like between visits. Yours included.</h1>
        <p className={lead}>
          A real text exchange, October 2026, between a GLP-1 patient and the specialty practice that prescribes him. The practice did exactly what was asked, promptly. Read what else happened.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1fr] md:items-start">
          <Screen header="The practice" sub="Text message · SMS · Tuesday">
            <OfficeBubble>Thank you for calling! Sorry we missed your call. Please text us at this number or leave a voicemail and we will contact you as soon as we can! Reply STOP to unsubscribe.</OfficeBubble>
            <PatientBubble text="Calling to increase my zepbound dose and refill prescription" />
            <OfficeBubble>Ok we will create an encounter today and the dr will work on it.</OfficeBubble>
            <OfficeBubble>Done</OfficeBubble>
            <PatientBubble text="Thanks! So is the new dose 7.5 mg or 10 mg?" />
            <PatientBubble text="Ive been on 5mg the last few months" />
            <OfficeBubble>We sent 7.5</OfficeBubble>
            <PatientBubble text="Thanks!" />
          </Screen>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[.08em] text-[var(--stak-amber-deep)]">What didn&apos;t happen</p>
            <ul className="mt-4 space-y-3 text-[17px] leading-[1.5]">
              {missing.map((m) => (
                <li key={m} className="flex gap-3">
                  <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--stak-amber-deep)]" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-6 text-[17px] leading-[1.5] ${muted}`}>
              This is a good practice, and this is a patient who advocates for himself. The drug changes a body in under a year. The care around it is a ten-minute visit, a pamphlet, and whatever the patient thinks to ask.
            </p>
          </div>
        </div>

        <Block label="THE SAME WEEK, WITH YOUR PROTOCOL RUNNING ON JURNI GLP">
          <h2 className="display-section mt-4 max-w-[800px]">Same patient. Same practice. Same dose change. Nobody added to your workload.</h2>
          <p className={lead}>
            Jurni GLP is an AI agent your patients text or call from the phone they already have. It carries your protocol. Here is the exchange above, with it in the room.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1fr] md:items-start">
            <Screen header="Jurni GLP" sub="For patients of your practice">
              <StakBubble>Week 12 on 5 mg. Your practice&apos;s protocol has a dose check at this point: if the side effects have been manageable, they consider a step to 7.5. Want me to send the request to their office, with your last four weeks of notes?</StakBubble>
              <UserBubble text="yes. nausea was only bad the first two weeks" />
              <StakBubble>Sent. I&apos;ll let you know when they answer.</StakBubble>
              <StakBubble>Your office approved 7.5 and sent the prescription. Two things from their protocol before you start: they want bloodwork at this step, so I&apos;ve put the lab order on your Page with the number to book. And the first 7.5 dose is usually the rough one. Smaller dinners for three days, water all day. I'll check in the morning after.</StakBubble>
              <UserBubble text="ok. thanks" />
              <StakBubble>One more: your next dose check is week 8 on 7.5. I'll bring it up then. You don&apos;t have to remember.</StakBubble>
            </Screen>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[.08em] text-[var(--stak-amber-deep)]">What changed</p>
              <ul className="mt-4 space-y-3 text-[17px] leading-[1.5]">
                {[
                  "The dose check happened on your schedule, not when the patient remembered.",
                  "Your office got one request, with the context already written, instead of two voicemails.",
                  "The labs you want at this step got ordered because your protocol says so.",
                  "The patient knew what the first week on 7.5 would feel like before it started.",
                  "Someone checked in the morning after.",
                  "The decision stayed yours. Jurni GLP never named a dose. It surfaced your protocol and asked.",
                ].map((m) => (
                  <li key={m} className="flex gap-3">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--stak-amber-deep)]" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Block>

        <Block label="WHY IT MATTERS">
          <h2 className="display-section mt-4 max-w-[760px]">Trial patients lost 20.9%. Real-world patients are losing 3.6% to 11.9%.</h2>
          <p className={lead}>The difference is staying on it and reaching the right dose. The support the trials wrapped around the drug never left the trial.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {gap.map((g) => (
              <WhiteCard key={g.n}>
                <div>
                  <p className="font-display text-[36px] font-extrabold leading-none text-[var(--stak-amber-deep)]">{g.n}</p>
                  <h3 className={`${title} mt-3 text-[21px]`}>{g.t}</h3>
                  <p className={`${body} text-[16px]`}>{g.b}</p>
                </div>
                <p className={`mt-4 text-[13px] ${muted}`}>{g.s}</p>
              </WhiteCard>
            ))}
          </div>
        </Block>

        <Block label="HOW IT WORKS IN YOUR PRACTICE">
          <h2 className="display-section mt-4 max-w-[760px]">One sentence in the exam room. That&apos;s the whole workflow.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["1", "The prescription.", "You're already having the GLP-1 conversation. At the end of it, you say one sentence."],
              ["2", "The speakerphone moment.", "The patient texts or calls Jurni GLP from their own phone before they leave. It greets them by your practice's name. Thirty seconds."],
              ["3", "Set up before the parking lot.", "Their Page exists before they reach the car: your protocol, their dose schedule, their first week. No app, no account, nothing to fill in."],
            ].map(([n, t, b]) => (
              <WhiteCard key={n}>
                <div>
                  <p className="font-display text-[40px] font-extrabold leading-none text-[var(--stak-amber-deep)]">{n}</p>
                  <h3 className={`${title} mt-4`}>{t}</h3>
                  <p className={body}>{b}</p>
                </div>
              </WhiteCard>
            ))}
          </div>
          <DarkCard className="mt-4 min-h-0">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[.08em]" style={{ color: "var(--stak-amber)" }}>The sentence</p>
              <p className="font-display mt-3 text-[26px] font-extrabold leading-[1.15] md:text-[30px]">
                &ldquo;Before you go, text this number. It&apos;s our GLP-1 support line. It has our plan for you, it answers questions any hour, and it&apos;ll tell you when to call us. It&apos;ll be ready by the time you&apos;re in the car.&rdquo;
              </p>
            </div>
          </DarkCard>
        </Block>

        <Block label="WHAT YOUR PRACTICE GETS">
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {gets.map(({ t, b }) => (
              <WhiteCard key={t} className="min-h-0">
                <div>
                  <h3 className={title}>{t}</h3>
                  <p className={body}>{b}</p>
                </div>
              </WhiteCard>
            ))}
          </div>
        </Block>

        <Block label="TWO TRACKS. THE PRACTICE NEVER PAYS.">
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <DarkCard className="min-h-0 p-7 md:p-8">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[.08em]" style={{ color: "var(--stak-amber)" }}>Clinical practices</p>
                <h3 className={`${title} mt-3 text-[28px]`}>Your patients pay nothing.</h3>
                <p className="mt-4 text-[17px] leading-[1.5]">
                  Gastroenterology, endocrinology, cardiology, primary care. Your patients get Jurni GLP free for as long as they&apos;re on the medication, because they are the cohort in our persistence study: the first randomized, refill-verified evaluation of daily support on GLP-1 persistence.
                </p>
                <p className="mt-4 text-[17px] leading-[1.5]">
                  Your practice is a study site. Named in the resulting publications with your approval, with a seat on the clinical advisory group and first access to your own panel&apos;s persistence data.
                </p>
                <p className="mt-5 text-[14px] font-semibold uppercase tracking-[.06em]" style={{ color: "var(--stak-slate)" }}>What you commit</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[16px] leading-[1.5]">
                  <li>The sentence, at every GLP-1 prescription.</li>
                  <li>One clinician champion and one staff coordinator.</li>
                  <li>The study&apos;s consent and refill-verification workflow, settled with you before anything starts.</li>
                  <li>A 20-minute review once a month.</li>
                </ul>
              </div>
            </DarkCard>
            <WhiteCard className="min-h-0 p-7 md:p-8">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[.08em] text-[var(--stak-amber-deep)]">Aesthetic practices</p>
                <h3 className={`${title} mt-3 text-[28px]`}>Your patients pay $29.99 a month. You pay nothing.</h3>
                <p className="mt-4 text-[17px] leading-[1.5]">
                  Plastic surgery, dermatology, medspa. Your patients get two weeks free, then $29.99 a month or $299 a year, billed to them directly.
                </p>
                <p className="mt-4 text-[17px] leading-[1.5]">
                  What you get is the thread. Through a year of visible change, your patient is in a daily conversation that carries your name. When they hit a milestone you choose, Jurni GLP texts them a reward from your practice: a credit, a treatment, a visit. Set with your team, around your menu. The patient who finishes the weight loss is already yours when skin, contouring, and injectables become the next conversation.
                </p>
                <p className="mt-5 text-[14px] font-semibold uppercase tracking-[.06em] text-muted">What you commit</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[16px] leading-[1.5]">
                  <li>The sentence, at every GLP-1 prescription, and a text to your existing GLP-1 panel.</li>
                  <li>One named champion, about twenty minutes a week.</li>
                  <li>Your milestone rewards, set with us once.</li>
                  <li>A 20-minute review once a month.</li>
                </ul>
              </div>
            </WhiteCard>
          </div>
        </Block>

        <Block label="QUESTIONS PHYSICIANS ASK">
          <div className="mt-5 divide-y" style={{ borderColor: "var(--hairline)" }}>
            {faq.map(({ q, a }) => (
              <div key={q} className="grid gap-2 py-6 md:grid-cols-[300px_1fr] md:gap-8" style={{ borderColor: "var(--hairline)" }}>
                <h3 className="font-display text-[20px] font-extrabold leading-[1.15]">{q}</h3>
                <p className="text-[17px] leading-[1.5]">{a}</p>
              </div>
            ))}
          </div>
        </Block>

        <YellowCard className="mt-10 min-h-0">
          <div>
            <SectionLabel>WHAT IT ISN&apos;T</SectionLabel>
            <p className="mt-3 text-[18px] leading-[1.5]">
              Behavioral support only. Jurni GLP doesn&apos;t diagnose, prescribe, or change a dose. Titration and treatment decisions stay with you. It surfaces your protocol and asks; it never names a dose on its own. It directs defined symptoms back to your office. No patient information leaves your practice, and nothing it does requires your EHR.
            </p>
          </div>
        </YellowCard>

        <Block label="THE DECISION">
          <h2 className="display-section mt-4 max-w-[800px]">Your patients get the support the trials had. Your practice gets its name on it. It costs you nothing, needs no software, and ends the day you say so.</h2>
          <p className={lead}>The question isn&apos;t whether to add it. It&apos;s why a GLP-1 patient would leave your office without it.</p>
          <ol className="mt-10 list-decimal space-y-3 pl-6 text-[18px] leading-[1.5]">
            <li>Tell us roughly how many GLP-1 patients are in your active panel, and which track you are.</li>
            <li>A 30-minute walkthrough for your team. We load your protocol.</li>
            <li>Your practice link and referral cards arrive.</li>
            <li>Say the sentence at the next GLP-1 prescription.</li>
          </ol>
          <div className="mt-10 flex flex-col gap-3 min-[420px]:flex-row">
            <a
              href="mailto:practices@jurniglp.com?subject=Jurni%20GLP%20for%20our%20practice&body=Practice%3A%20%0AGLP-1%20patients%20in%20active%20panel%20(roughly)%3A%20%0ATrack%20(clinical%20or%20aesthetic)%3A%20%0ABest%20person%20to%20talk%20to%3A%20"
              className="press-spring inline-flex h-[60px] items-center justify-center rounded-[var(--radius-chip)] px-8 text-[18px] font-semibold text-primary-foreground"
              style={{ background: "var(--grad-button)", boxShadow: "var(--shadow-button)" }}
            >
              Start the conversation
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
            Jurni GLP is a service of Jurni Health, Inc. and is not associated with, endorsed by, or sponsored by Novo Nordisk or Eli Lilly. The exchange at the top of this page is reproduced with the patient&apos;s permission; the practice is not identified.
          </p>
        </Block>
      </div>
    </section>
  );
}
