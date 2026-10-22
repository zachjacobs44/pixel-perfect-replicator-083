import { JourneyCTA } from "./StakCTA";
import { SectionLabel } from "./SectionPlaceholder";
import { PhotoBubble, StakBubble, UserBubble, useInViewOnce } from "./Bubbles";
import { Photo } from "./Photo";

type Msg = { s?: string; u?: string; p?: boolean };
const STAGES: { label: string; line: string; msgs: Msg[]; photo?: "bedside" | "table" | "scale" | "evening"; alt?: string; feature?: boolean }[] = [
  {
    label: "THE FIRST WEEK",
    line: "You have a prescription, a pamphlet, and a lot of questions.",
    photo: "bedside",
    alt: "A pharmacy bag and a glass of water on a nightstand",
    msgs: [
      { p: true, u: "picked it up. kind of nervous" },
      { s: "That's normal. Take the first dose on the day your provider told you, and keep it to the same day each week. I'll remind you the night before. Week one is simple: three small meals, protein first, water all day. Text me after the first dose and tell me how you feel." },
    ],
  },
  {
    label: "REAL LIFE",
    line: "Birthdays, work dinners, your mother's cooking. No one else at the table is on this.",
    photo: "table",
    alt: "A hand holding a phone over a restaurant menu, taking a photo of it",
    msgs: [
      { p: true, u: "client dinner. they picked the steakhouse. what do i order" },
      { s: "I can read it from here. Start with the tuna tartare. Then the grilled branzino with the greens instead of the creamed spinach. Skip the bread basket. If they order dessert, one bite is fine. You're still on plan for the wedding." },
    ],
  },
  {
    label: "THE PLATEAU",
    line: "The scale stops. This is the week most people quit.",
    photo: "scale",
    alt: "A bathroom scale on the floor",
    feature: true,
    msgs: [
      { p: true, u: "same number as two weeks ago" },
      { s: "Two flat weeks after 14 pounds down isn't a stall. It's your body catching up. Your protein has been on target 5 of 7 days and your waist is down an inch since August. The scale is the slowest number you have. Keep going. The trend is on your Page." },
      { u: "ok. still annoying" },
      { s: "It is. That's allowed. Tomorrow's lift is still on." },
    ],
  },
  {
    label: "MONTHS IN",
    line: "The weight is coming off. The job now is keeping your muscle, your habits, and your momentum.",
    photo: "evening",
    alt: "Dumbbells on a mat by the window after a home workout",
    msgs: [
      { p: true, u: "done. back held up fine" },
      { s: "Logged. That's three lifts this week, two weeks running. Three months in: down 22 pounds, and you've kept every bit of muscle we can measure. Next month's plan is on your Page. It adds a fourth day if you want it." },
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
    <div className="night-screen flex flex-col gap-3 self-start rounded-[18px] p-4 shadow-[var(--shadow-white)] md:self-center">
      {stage.msgs.map((m, i) => (m.s ? <StakBubble key={i}>{m.s}</StakBubble> : m.p && stage.photo ? <PhotoBubble key={i} photo={stage.photo} alt={stage.alt ?? ""} text={m.u ?? ""} /> : <UserBubble key={i} text={m.u ?? ""} />))}
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
              {stage.msgs.map((m, i) => (m.s ? <StakBubble key={i}>{m.s}</StakBubble> : m.p && stage.photo ? <PhotoBubble key={i} photo={stage.photo} alt={stage.alt ?? ""} text={m.u ?? ""} /> : <UserBubble key={i} text={m.u ?? ""} />))}
            </div>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li ref={ref} className="relative grid gap-5 md:grid-cols-[2fr_3fr] md:items-center md:gap-10 md:pl-10" style={reveal}>
      <span aria-hidden="true" className="absolute left-[-5px] top-2 hidden h-[11px] w-[11px] rounded-full bg-[var(--stak-amber)] md:block" />
      <div>
        {label}
        <p className="mt-3 text-[18px] leading-[1.45] text-muted">{stage.line}</p>
        {stage.photo ? <Photo name={stage.photo} alt={stage.alt ?? ""} ratio="4 / 5" className="mt-6 hidden md:block" /> : null}
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
          {"Here is how Jurni\u00a0GLP walks you through each stage of your GLP-1 journey."}
        </h2>
        <p className="mt-6 max-w-[600px] text-[19px] leading-[1.5] text-muted">
          Every stage has a moment where people get stuck. Jurni GLP is built for those moments.
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
