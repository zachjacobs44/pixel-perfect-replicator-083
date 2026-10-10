import { JourneyCTA } from "./StakCTA";
import { SectionLabel } from "./SectionPlaceholder";
import { StakBubble, UserBubble, useInViewOnce } from "./Bubbles";
import { Photo } from "./Photo";

type Msg = { s?: string; u?: string };
const STAGES: { label: string; line: string; msgs: Msg[]; photo?: "table" | "scale" | "sneakers"; feature?: boolean }[] = [
  {
    label: "THE FIRST WEEK",
    line: "You have a prescription, a pamphlet, and a lot of questions.",
    msgs: [
      { u: "I just started a GLP-1. What now?" },
      { s: "Start with the one thing most people get wrong in week one: eat on a schedule, even when you're not hungry. Three small meals, protein first. I'll check in tonight. What did you have for lunch?" },
    ],
  },
  {
    label: "REAL LIFE",
    line: "Birthdays, work dinners, your mother's cooking. The world doesn't know you're on this.",
    photo: "table",
    msgs: [
      { u: "client dinner thursday, they picked the steakhouse. wedding in 3 weeks and my cholesterol's not great" },
      { u: "https://www.example-steakhouse.com/menu" },
      { s: "Read it. You like tuna tartare, so start there. Then the grilled branzino, not the ribeye, with the greens instead of the creamed spinach. Skip the bread basket and you're on plan for the wedding. If they order dessert, one bite is fine." },
    ],
  },
  {
    label: "THE PLATEAU",
    line: "The scale stops. This is the week most people quit.",
    photo: "scale",
    feature: true,
    msgs: [
      { u: "scale hasn't moved in 2 weeks. kind of over it" },
      { s: "Two flat weeks after 14 pounds down isn't a stall. It's your body catching up. Your protein's been on target 5 of 7 days and your waist is down an inch since August. The scale is the slowest number you have. Keep going. I'll show you the trend on your Page." },
      { u: "ok. still annoying" },
      { s: "It is. That's allowed. Tomorrow's lift is still on." },
    ],
  },
  {
    label: "MONTHS IN",
    line: "The weight is coming off. The job now is keeping your muscle, your habits, and your momentum.",
    photo: "sneakers",
    msgs: [
      { u: "lower back is sore after the workout. what stretches should i do" },
      { s: "Three, twenty seconds each: knees to chest, a gentle twist each side, and child's pose. Go easy today." },
      { u: "had a brownie batter protein bar for breakfast" },
      { s: "Logged, 20g of protein. How's the back feeling after those stretches? Three months in, by the way: down 22 pounds, lifts twice a week since September. Next month's plan is on your Page." },
    ],
  },
];

function Stage({ stage }: { stage: (typeof STAGES)[number] }) {
  const [ref, seen] = useInViewOnce<HTMLLIElement>();
  const reveal = {
    opacity: seen ? 1 : 0,
    transform: seen ? "none" : "translateY(14px)",
    transition: "opacity 420ms var(--ease-spring), transform 420ms var(--ease-spring)",
  } as const;
  const thread = (
    <div className="night-screen flex flex-col gap-3 rounded-[18px] p-4 shadow-[var(--shadow-white)]">
      {stage.msgs.map((m, i) => (m.s ? <StakBubble key={i}>{m.s}</StakBubble> : <UserBubble key={i} text={m.u ?? ""} />))}
    </div>
  );
  const label = (
    <span className="label-over inline-block rounded-[var(--radius-chip)] px-3 py-1 text-[14px] max-md:bg-[var(--stak-amber)] max-md:text-[var(--stak-ground)] md:p-0 md:text-[var(--stak-amber-deep)]">
      {stage.label}
    </span>
  );

  if (stage.feature) {
    /* The plateau breaks the grid: a full-width night band, photo left, the conversation large. */
    return (
      <li ref={ref} className="night-screen relative -mx-5 overflow-hidden rounded-[var(--radius-sheet)] p-6 md:mx-0 md:p-10" style={reveal}>
        <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
          <div>
            {stage.photo ? <Photo name={stage.photo} alt="" ratio="4 / 5" className="max-w-[360px]" /> : null}
          </div>
          <div>
            <span className="label-over text-[14px]" style={{ color: "var(--stak-amber)" }}>{stage.label}</span>
            <p className="display mt-3 text-[30px] md:text-[40px]">{stage.line}</p>
            <div className="mt-6 flex flex-col gap-3">
              {stage.msgs.map((m, i) => (m.s ? <StakBubble key={i}>{m.s}</StakBubble> : <UserBubble key={i} text={m.u ?? ""} />))}
            </div>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li ref={ref} className="relative grid gap-5 md:grid-cols-[2fr_3fr] md:gap-10 md:pl-10" style={reveal}>
      <span aria-hidden="true" className="absolute left-[-5px] top-2 hidden h-[11px] w-[11px] rounded-full bg-[var(--stak-amber)] md:block" />
      <div>
        {label}
        <p className="mt-3 text-[18px] leading-[1.45] text-muted">{stage.line}</p>
        {stage.photo ? <Photo name={stage.photo} alt="" ratio="4 / 3" className="mt-6 hidden max-w-[320px] md:block" /> : null}
      </div>
      {thread}
    </li>
  );
}

export function Journey() {
  return (
    <section id="journey" className="section-y">
      <div className="content-column">
        <SectionLabel>YOUR GLP-1 JOURNEY</SectionLabel>
        <h2 className="display-section mt-4 max-w-[900px]">
          Here is what the next six months look like, and how Stak walks you through each stage.
        </h2>
        <p className="mt-6 max-w-[600px] text-[19px] leading-[1.5] text-muted">
          Every stage has a moment where people get stuck. Stak is built for those moments.
        </p>
        <ol className="mt-12 flex flex-col gap-14 md:border-l md:border-hairline [&>li.night-screen]:md:ml-[-1px]">
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
