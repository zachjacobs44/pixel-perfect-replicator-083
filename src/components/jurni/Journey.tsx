import { JourneyCTA } from "./StakCTA";
import { SectionLabel } from "./SectionPlaceholder";
import { StakBubble, UserBubble, useInViewOnce } from "./Bubbles";

type Msg = { s?: string; u?: string };
const STAGES: { label: string; line: string; msgs: Msg[] }[] = [
  {
    label: "THE FIRST WEEK",
    line: "You have a prescription, a pamphlet, and a lot of questions.",
    msgs: [
      { u: "I just started a GLP-1. What now?" },
      { s: "Start with the one thing most people get wrong in week one: eat on a schedule, even when you're not hungry. Three small meals, protein first. I'll check in tonight. What did you have for lunch?" },
    ],
  },
  {
    label: "THE NAUSEA WEEK",
    line: "Somewhere in the first month, your stomach has opinions.",
    msgs: [
      { u: "nauseous since yesterday. is this normal" },
      { s: "Common in the first days after a dose, and it usually fades. Smaller meals, nothing greasy, sip water through the day instead of a lot at once. If you can't keep fluids down or it's still here Thursday, call your practice. I'll check on you tonight." },
    ],
  },
  {
    label: "THE DOSE GOES UP",
    line: "Every few weeks the dose steps up, and the first days feel like starting over.",
    msgs: [
      { s: "Tomorrow's your first shot at the new dose. The next few days can feel like week one again. I've moved your dinners to the lighter ones and pushed Thursday's lift to Saturday. Want me to text you tomorrow night?" },
      { u: "yes" },
    ],
  },
  {
    label: "REAL LIFE",
    line: "Birthdays, work dinners, your mother's cooking. The world doesn't know you're on this.",
    msgs: [
      { u: "client dinner thursday, they picked the steakhouse. wedding in 3 weeks and my cholesterol's not great" },
      { u: "https://www.example-steakhouse.com/menu" },
      { s: "Read it. You like tuna tartare, so start there. Then the grilled branzino, not the ribeye, with the greens instead of the creamed spinach. Skip the bread basket and you're on plan for the wedding. If they order dessert, one bite is fine." },
    ],
  },
  {
    label: "THE PLATEAU",
    line: "The scale stops. This is the week most people quit.",
    msgs: [
      { u: "scale hasn't moved in 2 weeks. kind of over it" },
      { s: "Two flat weeks after 14 pounds down isn't a stall. It's your body catching up. Your protein's been on target 5 of 7 days and your waist is down an inch since August. The scale is the slowest number you have. Keep going. I'll show you the trend on your Page." },
    ],
  },
  {
    label: "REFILLS AND LOGISTICS",
    line: "Pharmacies, shortages, travel, the shot you forgot in the fridge.",
    msgs: [
      { s: "Your refill window opens Friday. Want a text Thursday night so you're not calling the pharmacy on a Saturday?" },
      { u: "yes pls. also traveling next week, 3 time zones" },
      { s: "Set. For the trip, I've moved your reminders to local time. Ask your prescriber about timing the shot across the zones. I'll remind you to ask on Thursday." },
    ],
  },
  {
    label: "MONTHS IN",
    line: "The weight is coming off. The job now is keeping your muscle, your habits, and your momentum.",
    msgs: [
      { u: "lower back is sore after the workout. what stretches should i do" },
      { s: "Three, twenty seconds each: knees to chest, a gentle twist each side, and child's pose. Go easy today." },
      { u: "had a brownie batter protein bar for breakfast" },
      { s: "Logged, 20g of protein. How's the back feeling after those stretches?" },
      { s: "Three months in. Down 22 pounds, protein on target most days, lifts twice a week since September. Here's next month: one more lift, a slightly higher protein target, and we start paying attention to how your clothes fit instead of only the scale. Want the week-one plan now?" },
      { u: "yes" },
      { s: "Sent. It's on your Page too." },
    ],
  },
];

function Stage({ stage }: { stage: (typeof STAGES)[number] }) {
  const [ref, seen] = useInViewOnce<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className="relative grid gap-5 md:grid-cols-[2fr_3fr] md:gap-10 md:pl-10"
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? "none" : "translateY(14px)",
        transition: "opacity 420ms var(--ease-spring), transform 420ms var(--ease-spring)",
      }}
    >
      <span aria-hidden="true" className="absolute left-[-5px] top-2 hidden h-[11px] w-[11px] rounded-full bg-magenta md:block" />
      <div>
        <span className="label-over inline-block rounded-[var(--radius-chip)] px-3 py-1 text-[14px] max-md:bg-yellow max-md:text-paper md:p-0 md:text-ink">
          {stage.label}
        </span>
        <p className="mt-3 text-[18px] italic leading-[1.45]">{stage.line}</p>
      </div>
      <div className="flex flex-col gap-3">
        {stage.msgs.map((m, i) => (m.s ? <StakBubble key={i}>{m.s}</StakBubble> : <UserBubble key={i} text={m.u!} />))}
      </div>
    </li>
  );
}

export function Journey() {
  return (
    <section id="journey" className="section-y">
      <div className="content-column">
        <SectionLabel>YOUR GLP-1 JOURNEY</SectionLabel>
        <h2 className="display-section mt-4 max-w-[900px]">
          Here&apos;s what the next six months look like. And how Stak walks you through each one.
        </h2>
        <p className="mt-6 max-w-[600px] text-[20px] leading-[1.5]">
          Every stage of a GLP-1 has a moment where people get stuck. Stak is built for those moments.
        </p>
        <ol className="mt-12 flex flex-col gap-14 md:border-l md:border-hairline">
          {STAGES.map((s) => (
            <Stage key={s.label} stage={s} />
          ))}
        </ol>
        <div className="mt-14">
          <JourneyCTA />
        </div>
      </div>
    </section>
  );
}
