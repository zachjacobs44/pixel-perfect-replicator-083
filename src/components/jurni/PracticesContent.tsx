import { useEffect, useState, type ReactNode } from "react";

import { WhiteCard, YellowCard } from "./Card";
import { SectionLabel } from "./SectionPlaceholder";
import { StakBubble, UserBubble } from "./Bubbles";

type Track = "aesthetic" | "clinical";
const TRACK_KEY = "jurni.practices.track";

const title = "font-display text-[24px] font-extrabold leading-[1.05]";
const body = "mt-3 text-[17px] leading-[1.5]";
const lead = "mt-5 max-w-[680px] text-[18px] leading-[1.5] text-muted";
const eyebrow = "text-[13px] font-semibold uppercase tracking-[.08em] text-[var(--stak-amber-deep)]";

/* ---------- small pieces ---------- */

/* The night surface as a card. DarkCard renders white in the paper theme, so this is the real dark panel. */
function NightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`night-screen flex flex-col justify-between rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-phone)] ${className}`}>
      {children}
    </div>
  );
}

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-16 md:mt-24">
      <SectionLabel>{label}</SectionLabel>
      {children}
    </div>
  );
}

function Dots({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-[17px] leading-[1.5]">
      {items.map((m) => (
        <li key={m} className="flex gap-3">
          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--stak-amber-deep)]" />
          <span>{m}</span>
        </li>
      ))}
    </ul>
  );
}

function OfficeBubble({ children }: { children: ReactNode }) {
  return (
    <div className="w-fit max-w-[88%] rounded-[18px] rounded-bl-[6px] p-3.5 text-[16px] leading-[1.4]" style={{ background: "rgba(243,238,232,.10)", color: "#F3EEE8" }}>
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

function Cards({ items, cols = 2 }: { items: { t: string; b: string }[]; cols?: 2 | 3 }) {
  return (
    <div className={`mt-5 grid gap-4 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {items.map(({ t, b }) => (
        <WhiteCard key={t} className="min-h-0">
          <div>
            <h3 className={title}>{t}</h3>
            <p className={body}>{b}</p>
          </div>
        </WhiteCard>
      ))}
    </div>
  );
}

function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-5 divide-y" style={{ borderColor: "var(--hairline)" }}>
      {items.map(({ q, a }) => (
        <div key={q} className="grid gap-2 py-6 md:grid-cols-[300px_1fr] md:gap-8" style={{ borderColor: "var(--hairline)" }}>
          <h3 className="font-display text-[20px] font-extrabold leading-[1.15]">{q}</h3>
          <p className="text-[17px] leading-[1.5]">{a}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- track picker ---------- */

function TrackPicker({ track, onPick }: { track: Track | null; onPick: (t: Track) => void }) {
  if (track) {
    return (
      <div className="mt-6 inline-flex rounded-full border p-1 text-[15px] font-semibold" style={{ borderColor: "var(--hairline)", background: "white" }}>
        {(["aesthetic", "clinical"] as Track[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => onPick(t)}
            className="rounded-full px-4 py-2 transition-colors"
            style={track === t ? { background: "#0B1417", color: "#F3EEE8" } : { color: "var(--text-muted)" }}
          >
            {t === "aesthetic" ? "Aesthetic practice" : "Clinical practice"}
          </button>
        ))}
      </div>
    );
  }
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      <button type="button" onClick={() => onPick("aesthetic")} className="press-spring text-left">
        <WhiteCard className="h-full min-h-0 transition-shadow hover:shadow-[var(--shadow-phone)]">
          <div>
            <p className={eyebrow}>I run an aesthetic practice</p>
            <h2 className={`${title} mt-3 text-[26px]`}>Plastic surgery, dermatology, medspa.</h2>
            <p className={body}>Your patients pay for Jurni GLP. You don&apos;t. You hand it to every patient who walks in on a GLP-1, whoever prescribed it, and get a year-long thread to each of them, with milestone rewards from your practice built in.</p>
          </div>
          <p className="mt-6 text-[16px] font-semibold text-[var(--stak-amber-deep)]">Read the aesthetic version &rarr;</p>
        </WhiteCard>
      </button>
      <button type="button" onClick={() => onPick("clinical")} className="press-spring text-left">
        <NightCard className="h-full min-h-0">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[.08em]" style={{ color: "var(--stak-amber)" }}>I run a clinical practice</p>
            <h2 className={`${title} mt-3 text-[26px]`}>Gastroenterology, endocrinology, cardiology, obesity medicine, bariatrics, OB/GYN, primary care.</h2>
            <p className={body}>Free for every GLP-1 patient in your practice, whoever prescribed it, and free for you. Your practice becomes a site in the study testing whether an AI agent can deliver what the trials delivered.</p>
          </div>
          <p className="mt-6 text-[16px] font-semibold" style={{ color: "var(--stak-amber)" }}>Read the clinical version &rarr;</p>
        </NightCard>
      </button>
    </div>
  );
}

/* ---------- copy ---------- */

const HERO: Record<Track, { h1: string; lead: string }> = {
  aesthetic: {
    h1: "Your GLP-1 patients, supported every day through a year of visible change. And brought back to you at every milestone.",
    lead: "Jurni GLP is an AI agent your patients text or call from the phone they already have. It carries your protocol, keeps them on the medication, and texts them a reward from your practice at the moments that matter. It is for every patient who comes through your door on a GLP-1, whether you prescribed it or not. Your patients pay for it. Your practice never does.",
  },
  clinical: {
    h1: "The support your GLP-1 patients would get inside a clinical trial. At no cost to them, and none to you.",
    lead: "Jurni GLP is an AI agent your patients text or call from the phone they already have. It carries your protocol, checks in every day, and sends defined symptoms back to your office. It is for every GLP-1 patient in your practice, whether you wrote the prescription or someone else did. They get it free because they are the cohort in the study testing whether an agent can deliver what the trials delivered.",
  },
};

const DEAL: Record<Track, string> = {
  aesthetic:
    "Every patient who walks in on a GLP-1, whoever prescribed it, gets daily support under your name, on your protocol. You get a year-long thread to each of them, with rewards from your practice delivered at every milestone, which is how they come back for the next procedure. They pay $29.99 a month after two free weeks. You pay nothing, set up nothing, and can stop any time.",
  clinical:
    "Every GLP-1 patient in your practice, whoever prescribed it, gets the support the trials had, free, under your name, on your protocol. The is-this-normal calls stop landing on your staff. Your practice becomes a named site in the study testing whether it works. You pay nothing, set up nothing, and say one sentence to each patient.",
};

const WHO: Record<Track, string> = {
  aesthetic: "Plastic surgery, dermatology, medspa, and any practice whose patients come back after the weight comes off.",
  clinical: "Gastroenterology and hepatology, endocrinology, cardiology, obesity medicine, bariatric surgery, OB/GYN and fertility, sleep medicine, nephrology, orthopedics, primary care.",
};

const MISSING = [
  "Two calls to the office. Voicemail both times.",
  "The patient had to remember it was time to increase. Nobody told him.",
  "No visit. No conversation with the prescriber.",
  "No bloodwork ordered to see how he's responding.",
  "Nothing about what the higher dose might feel like in week one.",
  "No check-in afterward. The next contact is whenever he calls again.",
];

const CHANGED = [
  "The dose check happened on your schedule, not when the patient remembered.",
  "Your office got one request, with the context already written, instead of two voicemails.",
  "The labs you want at this step got ordered because your protocol says so.",
  "The patient knew what the first week on 7.5 would feel like before it started.",
  "Someone checked in the morning after.",
  "The decision stayed yours. Jurni GLP never named a dose. It surfaced your protocol and asked.",
];

const GAP = [
  { n: "1 in 3", t: "are off the medication within a year.", b: "Even in the best-persisting cohort measured to date, more than a third of patients who start a weight-loss GLP-1 have stopped by month twelve.", s: "Prime Therapeutics, Q1 2024 initiators" },
  { n: "Every 4 weeks", t: "is what trial patients got that yours don't.", b: "STEP-1 participants had individual lifestyle counseling every four weeks for 68 weeks. Real-world patients get a prescription and a pamphlet.", s: "Wilding et al., NEJM 2021" },
  { n: "26 to 54%", t: "higher odds of staying on it with structured support.", b: "Engagement with structured support is associated with substantially higher odds of GLP-1 persistence. The drug works. Staying on it is the part patients do alone.", s: "Devaraj et al., 2025" },
];

const GAP_LINE: Record<Track, string> = {
  aesthetic: "The patient who stops at month four never books the consult that was supposed to follow the weight loss. Persistence is your retention.",
  clinical: "The difference between the trial and your panel is the program around the drug, and that program never left the trial.",
};

const PATIENT_GETS = [
  { t: "A plan from day one.", b: "Protein, meals, movement, dose days, refill days. Built from your protocol and the manufacturer's titration guidance, adjusted to the patient, delivered by text when each step is due." },
  { t: "Someone to ask at 9 p.m.", b: "Nausea, a missed dose, a restaurant menu, a flat week. Answered any hour, in any language, from your protocol. It reads photos of their fridge and their plate." },
  { t: "Check-ins before the hard days.", b: "It reaches out first on dose days, refill days, and the plateau weeks when most people quit. The patient never has to remember to ask." },
  { t: "A private Page with your name on it.", b: "Every text, call, and photo becomes one organized page: meals, workouts, shot log, labs due, what to ask at the next visit. Nothing to fill in. Your practice at the top." },
  { t: "Dose steps on time.", b: "When your protocol says a dose check is due, it tells the patient and offers to send the request to your office with their recent notes. You decide." },
  { t: "A clear line to you.", b: "When something needs a clinician, it says so, tells them to call your office, and has the onset and timing written down so the call is short." },
];

const PRACTICE_GETS_SHARED = [
  { t: "Your protocol, delivered every day.", b: "Your titration schedule, your dietary guidance, your lab cadence, your rules for when to call, alongside the manufacturer's own guidance. Loaded once. The patient hears it from Jurni GLP, in your practice's name, at the moment it applies." },
  { t: "Fewer is-this-normal calls.", b: "Those go to Jurni GLP, with your protocol as the answer. Your front desk gets the calls that need a person, and gets them with the timing already noted." },
  { t: "Nothing to set up. Nothing to pay.", b: "No EHR integration. No patient information leaves your practice. No software, no invoice, no staff time. One 30-minute walkthrough, then you give the patient a phone number. No money moves between Jurni GLP and a prescriber." },
];

const PRACTICE_GETS: Record<Track, { t: string; b: string }[]> = {
  aesthetic: [
    { t: "Every GLP-1 patient, not just the ones you prescribe.", b: "Most of your patients on a GLP-1 got it somewhere else: a telehealth service, a primary care doctor, a compounder. They are still your patients. Hand every one of them Jurni GLP and every one of them is in a daily thread that carries your name and your rewards." },
    { t: "A year-long thread to every GLP-1 patient.", b: "Through the whole arc of visible change, your patient is in a daily conversation that carries your name. When skin, contouring, and injectables become the next conversation, you are already in the room." },
    { t: "Milestone rewards, in your name, on the day they're earned.", b: "You choose the milestones and the rewards. Jurni GLP delivers them by text at the moment the patient feels it. Not a quarterly email. The day." },
    { t: "A GLP-1 program your competitors don't have.", b: "Support around the clock, under your name, for every patient you prescribe. The practice down the street is handing out a pamphlet." },
  ],
  clinical: [
    { t: "Every GLP-1 patient, not just the ones you prescribe.", b: "The patient whose PCP wrote the prescription still calls your office when the nausea hits. Put everyone on a GLP-1 in your panel on Jurni GLP, and the whole panel gets the same support, on your protocol, while your staff gets their hours back." },
    { t: "Patients who stay on it and reach the right dose.", b: "A daily thread keeps the patient on the plan you wrote through the weeks most people quit, and brings the dose conversation to you on your schedule." },
    { t: "A site in the study, with your name on the evidence.", b: "Named in resulting publications with your approval. A seat on the clinical advisory group. First access to your own panel's persistence data." },
    { t: "Shorter visits, better questions.", b: "The patient arrives with their log, their weight trend, and their questions already organized on their Page. The visit starts where it should." },
  ],
};

const MONEY: Record<Track, { h: string; b: string; commit: string[] }> = {
  aesthetic: {
    h: "Your patients pay $29.99 a month. You pay nothing.",
    b: "Two weeks free, then $29.99 a month or $299 a year, billed to the patient directly. No revenue share, no invoice, no money between your practice and Jurni GLP. Your patients are buying a program that carries your name.",
    commit: [
      "The sentence, to every patient on a GLP-1, new prescription or not, plus one text to your existing GLP-1 panel.",
      "One named champion, about twenty minutes a week.",
      "Your protocol and your milestone rewards, set with us once.",
      "A 20-minute review once a month.",
    ],
  },
  clinical: {
    h: "Your patients pay nothing. You pay nothing.",
    b: "Your patients get Jurni GLP free for as long as they're on the medication, because they are the cohort in our persistence study. That includes patients prescribed elsewhere who are in your panel. The practice pays in evidence, not dollars. No invoice, ever.",
    commit: [
      "The sentence, to every patient on a GLP-1, whether you prescribed it or not, plus one text to your existing GLP-1 panel.",
      "One clinician champion and one staff coordinator.",
      "The study's consent and refill-verification workflow, settled with you before anything starts. Under two hours of staff time a week at full enrollment.",
      "A 20-minute review once a month.",
    ],
  },
};

const FAQ_SHARED = [
  { q: "What if I didn't prescribe the GLP-1?", a: "Doesn't matter. If the patient is on one and they're in your practice, hand them Jurni GLP. It runs on your protocol for the parts you own (your visits, your labs, your rules for when to call) and on the manufacturer's titration guidance for the rest. Prescriber decisions stay with whoever wrote it." },
  { q: "Am I liable for what it tells my patients?", a: "It delivers your protocol and general behavioral support. It does not diagnose, prescribe, or change a dose, and it says so to the patient. Anything outside that, it sends back to your office. Our counsel has reviewed the boundaries; yours is welcome to." },
  { q: "What does my staff actually have to do?", a: "Say one sentence at the prescription. Hand over a card. Answer the office requests Jurni GLP forwards, which you would be fielding anyway, now with the timing already written down." },
  { q: "What happens at 2 a.m.?", a: "The patient texts, and gets an answer from your protocol. If what they describe is on your call-now list, it tells them to call your office or go to urgent care, in those words." },
  { q: "Does patient information leave my practice?", a: "No. Nothing connects to your EHR. The patient talks to Jurni GLP from their own phone and owns that relationship. We see nothing from your systems." },
  { q: "Do patients know it's an AI?", a: "Yes, from the first message. Most people prefer it for the 9 p.m. questions they would never call about, and it never pretends to be your staff." },
  { q: "What if a patient doesn't like it?", a: "They reply STOP and it ends. Nothing changes about their care with you." },
];

const FAQ: Record<Track, { q: string; a: string }[]> = {
  aesthetic: [
    { q: "I don't have a rewards program. Do I need one?", a: "No. We set three or four milestones with you in the walkthrough, using what you already offer: a consult, a credit, a treatment add-on. Jurni GLP handles the delivery and the timing." },
    { q: "Does this compete with my membership or loyalty program?", a: "It feeds it. Milestone rewards can be anything, including a membership offer at the moment the patient is most likely to say yes." },
    { q: "What does Jurni GLP get out of it?", a: "Your patients subscribe after two free weeks. That is the whole business. The practice never pays, and the practice is never the product." },
  ],
  clinical: [
    { q: "What does the study ask of my staff?", a: "Consent at enrollment, using materials we provide, and permission to confirm refill status for enrolled patients under an executed BAA. We handle IRB submission. The mechanism for refill verification is settled with your office before anything starts." },
    { q: "What if a patient doesn't want to be in the study?", a: "They still get Jurni GLP, free, as a patient of your practice. They simply aren't counted." },
    { q: "What does Jurni GLP get out of it?", a: "Evidence. Your patients are the cohort that shows whether daily AI support changes persistence. That readout is the foundation for everything we do next, and your practice is named on it." },
  ],
};

/* ---------- track-specific feature sections ---------- */

function Milestones() {
  const steps = [
    ["First 10 lb", "A complimentary skin consult, booked by text."],
    ["Month 3", "A credit toward the treatment you choose."],
    ["Halfway to goal", "A body-contouring consultation, scheduled from the thread."],
    ["Goal weight", "The conversation about what comes next, with you."],
  ];
  return (
    <Block label="THE MILESTONE STRUCTURE">
      <h2 className="display-section mt-4 max-w-[800px]">Every milestone is a text from your practice, on the day it&apos;s earned.</h2>
      <p className={lead}>
        You choose the milestones and what each one unlocks. Jurni GLP watches the patient&apos;s progress and delivers the reward in your name at the moment they feel it. Timing is the whole point: a patient who just saw a number they&apos;ve waited months for is a different person from one reading a quarterly email.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1fr] md:items-start">
        <div>
          <p className={eyebrow}>An example sequence</p>
          <div className="mt-4 divide-y" style={{ borderColor: "var(--hairline)" }}>
            {steps.map(([m, r]) => (
              <div key={m} className="grid grid-cols-[140px_1fr] gap-4 py-4" style={{ borderColor: "var(--hairline)" }}>
                <span className="font-display text-[18px] font-extrabold text-[var(--stak-amber-deep)]">{m}</span>
                <span className="text-[17px] leading-[1.5]">{r}</span>
              </div>
            ))}
          </div>
          <p className={`mt-5 text-[16px] leading-[1.5] text-muted`}>Set once with your team, around your menu. Change it any time.</p>
        </div>
        <Screen header="Jurni GLP" sub="For patients of your practice">
          <UserBubble text="187. first time under 190 since college" />
          <StakBubble>That&apos;s ten pounds since you started, and your protein has been on target most of the month. Two things. Your practice set something aside for exactly this point: a complimentary skin consultation, because this is when it starts to matter. Want me to book it? And tonight, eat normally. You earned the number; you don&apos;t have to earn it twice.</StakBubble>
          <UserBubble text="yes book it. thursday?" />
          <StakBubble>Thursday at 4:15 with their team. It&apos;s on your Page. I&apos;ll remind you Wednesday night.</StakBubble>
        </Screen>
      </div>
    </Block>
  );
}

function Study() {
  return (
    <Block label="THE STUDY">
      <h2 className="display-section mt-4 max-w-[820px]">The trials proved the drug works with a program around it. We&apos;re testing whether an AI agent can deliver that program.</h2>
      <p className={lead}>
        Every Phase 3 GLP-1 trial paired the drug with structured lifestyle support: a counselor on a schedule, a calorie target, an activity target, a dose schedule. Real-world patients get none of it. Jurni GLP delivers that program by text and call. The study measures whether it moves the number that matters.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { t: "What it measures.", b: "Persistence on the medication, verified against pharmacy refills, not self-report. Weight trajectory and dose progression alongside it." },
          { t: "How it runs.", b: "Randomized. Patients who are not assigned to Jurni GLP at enrollment receive usual care for six months, then get it at no cost. Consent at enrollment, IRB-approved before anyone is counted." },
          { t: "What your practice gets.", b: "Study-site status in the first randomized, refill-verified evaluation of daily AI support for GLP-1 patients. Named in resulting publications with your approval. A seat on the clinical advisory group. Your own panel's data first." },
        ].map(({ t, b }) => (
          <WhiteCard key={t} className="min-h-0">
            <div>
              <h3 className={title}>{t}</h3>
              <p className={body}>{b}</p>
            </div>
          </WhiteCard>
        ))}
      </div>
      <p className={`mt-6 max-w-[760px] text-[16px] leading-[1.5] text-muted`}>
        Until the readout, we make no claims about persistence beyond what the published literature supports. The study exists because a physician in an academically adjacent practice deserves evidence, not a sales deck.
      </p>
    </Block>
  );
}

/* ---------- page ---------- */

export function PracticesContent() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(TRACK_KEY);
      if (saved === "aesthetic" || saved === "clinical") setTrack(saved);
    } catch {
      /* no storage */
    }
  }, []);

  function pick(t: Track) {
    setTrack(t);
    try {
      localStorage.setItem(TRACK_KEY, t);
    } catch {
      /* no storage */
    }
  }

  const t = track;

  return (
    <section className="section-y">
      <div className="content-column max-w-[920px]">
        <SectionLabel>FOR PRACTICES</SectionLabel>
        <h1 className="display-section mt-4 max-w-[860px]">
          {t ? HERO[t].h1 : "GLP-1 support for your patients, every day between visits. Under your name, on your protocol, at no cost to your practice."}
        </h1>
        <p className={lead}>
          {t
            ? HERO[t].lead
            : "Jurni GLP is an AI agent your patients text or call from the phone they already have. What it does for your practice depends on what kind of practice you run. Pick yours."}
        </p>

        <TrackPicker track={t} onPick={pick} />

        {t ? (
            <>
            <NightCard className="mt-8 p-6 md:p-7">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[.08em]" style={{ color: "var(--stak-amber)" }}>The deal, in one breath</p>
                <p className="font-display mt-3 text-[22px] font-extrabold leading-[1.25] md:text-[26px]">{DEAL[t]}</p>
                <p className="mt-4 text-[15px] leading-[1.5]" style={{ color: "var(--stak-slate)" }}>{WHO[t]}</p>
              </div>
            </NightCard>
            {/* The real exchange */}
            <Block label="WHAT GLP-1 CARE LOOKS LIKE BETWEEN VISITS">
              <h2 className="display-section mt-4 max-w-[800px]">A real exchange. A good practice. Read what else happened.</h2>
              <p className={lead}>October 2026, between a GLP-1 patient and the specialty practice that prescribes him. The practice did exactly what was asked, promptly.</p>
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
                  <p className={eyebrow}>What didn&apos;t happen</p>
                  <Dots items={MISSING} />
                  <p className="mt-6 text-[17px] leading-[1.5] text-muted">
                    This is a patient who advocates for himself. The drug changes a body in under a year. The care around it is a ten-minute visit, a pamphlet, and whatever the patient thinks to ask.
                  </p>
                </div>
              </div>
            </Block>

            {/* The same week, with Jurni GLP */}
            <Block label="THE SAME WEEK, WITH YOUR PROTOCOL RUNNING ON JURNI GLP">
              <h2 className="display-section mt-4 max-w-[800px]">Same patient. Same practice. Same dose change. Nobody added to your workload.</h2>
              <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1fr] md:items-start">
                <Screen header="Jurni GLP" sub="For patients of your practice">
                  <StakBubble>Week 12 on 5 mg. Your practice&apos;s protocol has a dose check at this point: if the side effects have been manageable, they consider a step to 7.5. Want me to send the request to their office, with your last four weeks of notes?</StakBubble>
                  <UserBubble text="yes. nausea was only bad the first two weeks" />
                  <StakBubble>Sent. I&apos;ll let you know when they answer.</StakBubble>
                  <StakBubble>Your office approved 7.5 and sent the prescription. Two things from their protocol before you start: they want bloodwork at this step, so the lab order is on your Page with the number to book. And the first 7.5 dose is usually the rough one. Smaller dinners for three days, water all day. I&apos;ll check in the morning after.</StakBubble>
                  <UserBubble text="ok. thanks" />
                  <StakBubble>One more: your next dose check is week 8 on 7.5. I&apos;ll bring it up then. You don&apos;t have to remember.</StakBubble>
                </Screen>
                <div>
                  <p className={eyebrow}>What changed</p>
                  <Dots items={CHANGED} />
                </div>
              </div>
            </Block>

            {/* Numbers */}
            <Block label="WHY IT MATTERS">
              <h2 className="display-section mt-4 max-w-[760px]">Trial patients lost 20.9%. Real-world patients are losing 3.6% to 11.9%.</h2>
              <p className={lead}>{GAP_LINE[t]}</p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {GAP.map((g) => (
                  <WhiteCard key={g.n}>
                    <div>
                      <p className="font-display text-[36px] font-extrabold leading-none text-[var(--stak-amber-deep)]">{g.n}</p>
                      <h3 className={`${title} mt-3 text-[21px]`}>{g.t}</h3>
                      <p className={`${body} text-[16px]`}>{g.b}</p>
                    </div>
                    <p className="mt-4 text-[13px] text-muted">{g.s}</p>
                  </WhiteCard>
                ))}
              </div>
            </Block>

            {/* Track-specific feature */}
            {t === "aesthetic" ? <Milestones /> : <Study />}

            {/* What the patient gets */}
            <Block label="WHAT YOUR PATIENT GETS">
              <h2 className="display-section mt-4 max-w-[760px]">The program the trials wrapped around the drug, on the phone they already have.</h2>
              <p className={lead}>Built from your protocol and the manufacturer&apos;s titration guidance, then personalized to the patient: what they eat, how they move, what their week looks like, what language they think in. No app. No account. Nothing to fill in.</p>
              <Cards items={PATIENT_GETS} />
            </Block>

            {/* How it works */}
            <Block label="HOW IT WORKS IN YOUR PRACTICE">
              <h2 className="display-section mt-4 max-w-[760px]">One sentence in the exam room. That&apos;s the whole workflow.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  ["1", "The prescription.", "You're already having the GLP-1 conversation. At the end of it, you say one sentence."],
                  ["2", "The speakerphone moment.", "The patient texts or calls Jurni GLP from their own phone before they leave. It greets them by your practice's name. Thirty seconds."],
                  ["3", "Set up before the parking lot.", "Their Page exists before they reach the car: your protocol, their dose schedule, their first week."],
                ].map(([n, h, b]) => (
                  <WhiteCard key={n}>
                    <div>
                      <p className="font-display text-[40px] font-extrabold leading-none text-[var(--stak-amber-deep)]">{n}</p>
                      <h3 className={`${title} mt-4`}>{h}</h3>
                      <p className={body}>{b}</p>
                    </div>
                  </WhiteCard>
                ))}
              </div>
              <NightCard className="mt-4 min-h-0">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[.08em]" style={{ color: "var(--stak-amber)" }}>The sentence</p>
                  <p className="font-display mt-3 text-[26px] font-extrabold leading-[1.15] md:text-[30px]">
                    &ldquo;Before you go, text this number. It&apos;s our GLP-1 support line. It has our plan for you, it answers questions any hour, and it&apos;ll tell you when to call us. It&apos;ll be ready by the time you&apos;re in the car.&rdquo;
                  </p>
                </div>
              </NightCard>
            </Block>

            {/* What the practice gets */}
            <Block label="WHAT YOUR PRACTICE GETS">
              <Cards items={[...PRACTICE_GETS[t], ...PRACTICE_GETS_SHARED]} />
            </Block>

            {/* Money + commitment */}
            <Block label={t === "aesthetic" ? "WHO PAYS" : "WHO PAYS. NOBODY."}>
              <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <NightCard className="min-h-0 p-7 md:p-8">
                  <div>
                    <h2 className={`${title} text-[28px]`}>{MONEY[t].h}</h2>
                    <p className="mt-4 text-[17px] leading-[1.5]">{MONEY[t].b}</p>
                  </div>
                </NightCard>
                <WhiteCard className="min-h-0 p-7 md:p-8">
                  <div>
                    <p className={eyebrow}>What you commit</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] leading-[1.5]">
                      {MONEY[t].commit.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </WhiteCard>
              </div>
            </Block>

            {/* FAQ */}
            <Block label="QUESTIONS PHYSICIANS ASK">
              <Faq items={[...FAQ[t], ...FAQ_SHARED]} />
            </Block>

            <YellowCard className="mt-10 min-h-0">
              <div>
                <SectionLabel>WHAT IT ISN&apos;T</SectionLabel>
                <p className="mt-3 text-[18px] leading-[1.5]">
                  Behavioral support only. Jurni GLP doesn&apos;t diagnose, prescribe, or change a dose. Titration and treatment decisions stay with you. It surfaces your protocol and asks; it never names a dose on its own. It directs defined symptoms back to your office. No patient information leaves your practice, and nothing it does requires your EHR.
                </p>
              </div>
            </YellowCard>

            {/* Close */}
            <Block label="THE DECISION">
              <h2 className="display-section mt-4 max-w-[820px]">
                {t === "aesthetic"
                  ? "Your patients get the support the trials had. Your practice gets a year-long thread to every one of them, with your name on it. It costs you nothing and ends the day you say so."
                  : "Your patients get the support the trials had, free. Your practice gets its name on the evidence. It costs you nothing and ends the day you say so."}
              </h2>
              <p className={lead}>The question isn&apos;t whether to add it. It&apos;s why a GLP-1 patient would leave your office without it.</p>
              <ol className="mt-10 list-decimal space-y-3 pl-6 text-[18px] leading-[1.5]">
                <li>Tell us roughly how many GLP-1 patients are in your active panel.</li>
                <li>A 30-minute walkthrough for your team. We load your protocol{t === "aesthetic" ? " and set your milestones" : ""}.</li>
                <li>Your practice link and referral cards arrive.</li>
                <li>Say the sentence at the next GLP-1 prescription.</li>
              </ol>
              <div className="mt-10 flex flex-col gap-3 min-[420px]:flex-row">
                <a
                  href={`mailto:practices@jurniglp.com?subject=Jurni%20GLP%20for%20our%20practice&body=Practice%3A%20%0ATrack%3A%20${t}%0AGLP-1%20patients%20in%20active%20panel%20(roughly)%3A%20%0ABest%20person%20to%20talk%20to%3A%20`}
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
              <p className="fine-print mt-6 text-muted">
                Jurni GLP is a service of Jurni Health, Inc. and is not associated with, endorsed by, or sponsored by Novo Nordisk or Eli Lilly. The exchange near the top of this page is reproduced with the patient&apos;s permission; the practice is not identified.
              </p>
            </Block>
          </>
        ) : null}
      </div>
    </section>
  );
}
