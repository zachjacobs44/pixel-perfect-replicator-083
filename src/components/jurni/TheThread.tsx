import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { IPhoneFrame } from "./IPhoneFrame";
import { SectionLabel } from "./SectionPlaceholder";
import { ThreadCTA } from "./StakCTA";
import { StakAvatar } from "./Wordmark";

type Msg =
  | { from: "stak"; text: string }
  | { from: "user"; text: string }
  | { from: "photo"; caption: string }
  | { from: "call"; text: string };

type Chapter = { label: string; line: string; messages: Msg[] };

const CHAPTERS: Chapter[] = [
  {
    label: "A PHOTO, NOT A FOOD DIARY",
    line: "Send the plate. Stak does the math.",
    messages: [
      { from: "photo", caption: "dinner" },
      {
        from: "stak",
        text: "Logged. Salmon, rice, green beans. About 38g of protein, which puts you at 94 for the day against your 110. A Greek yogurt before bed closes the gap. If you're not hungry, don't force it. The week matters more than the night.",
      },
    ],
  },
  {
    label: "A MENU LINK",
    line: "Send the restaurant. Stak reads the menu for you.",
    messages: [
      { from: "user", text: "dinner thursday with my sister, she picked cheesecake factory" },
      { from: "user", text: "https://www.thecheesecakefactory.com/menu" },
      {
        from: "stak",
        text: "Read it. Three that will sit well on the new dose and get you near your protein: the grilled salmon, the chicken piccata, or the shrimp scampi if you want lighter. Portions there are built for two. Ask for the box when you order, not after.",
      },
    ],
  },
  {
    label: "A SIDE EFFECT",
    line: "It logs the small things. It knows which things aren't small.",
    messages: [
      {
        from: "user",
        text: "took my shot last night. stomach's been rough since and now it's kind of in my back",
      },
      {
        from: "stak",
        text: "Logged for Tuesday. Stomach pain that moves into your back is not one I talk anyone through. Call your prescriber's office now. If it gets worse before you reach them, go in. I've noted when it started so you can tell them exactly.",
      },
      { from: "user", text: "ok calling" },
    ],
  },
  {
    label: "PLANS, NOT HOMEWORK",
    line: "Ask for a week. Get a week.",
    messages: [
      { from: "user", text: "can you plan dinners and workouts for the rest of the week" },
      {
        from: "stak",
        text: "Done. Four dinners built around the chicken and salmon you already like, each under 20 minutes, each over 35g of protein. Grocery list is on your Page. Two short lifts, Tuesday and Thursday, and a long walk Saturday. I kept them short on purpose. You told me week two at a new dose runs low.",
      },
    ],
  },
  {
    label: "REMINDERS",
    line: "On your calendar, not on a list you'll lose.",
    messages: [
      { from: "user", text: "remind me about the lifts" },
      {
        from: "stak",
        text: "On your calendar with a nudge an hour before. I also added a 12:30 lunch reminder. Lunch is the meal you skip, and skipping it is why 4pm gets ugly.",
      },
    ],
  },
  {
    label: "A CALL, ON THE DRIVE HOME",
    line: "Some things are easier said than typed.",
    messages: [
      { from: "call", text: "Voice call · 4 min" },
      {
        from: "stak",
        text: "Good talking just now. The short version: headaches are common in the first week at a new dose. Water through the day, and mention it to your practice Thursday if they're still around.",
      },
    ],
  },
  {
    label: "ANY LANGUAGE",
    line: "Same number. Whichever language is easier that day.",
    messages: [
      { from: "user", text: "can i text you in spanish sometimes? easier when i'm at my mom's" },
      { from: "stak", text: "Claro. Mismo número, cuando quieras." },
    ],
  },
  {
    label: "IT TEXTS FIRST",
    line: "The days that matter are the days you're least likely to remember.",
    messages: [
      {
        from: "stak",
        text: "Refill window opens today. Want a text Thursday night before the next one?",
      },
      { from: "user", text: "yes pls" },
      { from: "stak", text: "Set. Your Page is updated. Week 12, down 14 pounds. That flat week is behind you." },
    ],
  },
];

const stakBubble =
  "mt-1.5 rounded-[18px] rounded-bl-[6px] border-l-[3px] border-magenta p-3.5 text-[17px] leading-[1.35]";
const userBubble =
  "ml-auto max-w-[84%] rounded-[18px] rounded-br-[6px] bg-primary p-3.5 text-primary-foreground text-[17px] leading-[1.35] break-words";

function PhoneGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M6.6 3.5h2.6l1.4 4.1-2 1.4a11.5 11.5 0 0 0 6.4 6.4l1.4-2 4.1 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Message({ msg, compact = false }: { msg: Msg; compact?: boolean }) {
  if (msg.from === "stak") {
    return (
      <div className="max-w-[92%]">
        {!compact && <StakAvatar size={20} />}
        <div className={compact ? "mt-1.5 rounded-[16px] rounded-bl-[6px] border-l-[3px] border-magenta p-2.5 text-[15px] leading-[1.35]" : stakBubble} style={{ background: "var(--grad-white)", boxShadow: "var(--shadow-white)" }}>
          {msg.text}
        </div>
      </div>
    );
  }
  if (msg.from === "user") return <div className={compact ? "ml-auto max-w-[84%] rounded-[16px] rounded-br-[6px] bg-primary p-2.5 text-primary-foreground text-[15px] leading-[1.35] break-words" : userBubble}>{msg.text}</div>;
  if (msg.from === "photo") {
    return (
      <div className={`${userBubble} w-[84%] p-2`}>
        <div
          className={`flex ${compact ? "aspect-[2/1]" : "aspect-[4/3]"} w-full items-center justify-center rounded-[12px] bg-paper text-[15px] text-muted`}
          role="img"
          aria-label="dinner photo"
        >
          dinner photo
        </div>
        <div className="px-1.5 pb-1 pt-2">{msg.caption}</div>
      </div>
    );
  }
  return (
    <div
      className="flex max-w-[92%] items-center gap-3 rounded-[18px] p-3.5"
      style={{ background: "var(--grad-white)", boxShadow: "var(--shadow-white)" }}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-frame text-ink">
        <PhoneGlyph />
      </span>
      <div>
        <div className="text-[15px] font-bold">{msg.text}</div>
        <div className="text-[15px] text-muted">Stak</div>
      </div>
    </div>
  );
}

function Group({ chapter, compact = false }: { chapter: Chapter; compact?: boolean }) {
  return (
    <div className={`flex flex-col ${compact ? "gap-3" : "gap-4"}`}>
      {chapter.messages.map((m, i) => (
        <Message key={i} msg={m} compact={compact} />
      ))}
    </div>
  );
}

function MobileThread() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const chapter = CHAPTERS[active];
  if (!chapter) return null;
  const move = (direction: number) => setActive(current => Math.max(0, Math.min(CHAPTERS.length - 1, current + direction)));
  return (
    <div className="mt-8 lg:hidden" data-mobile-thread>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <select aria-label="Conversation chapter" value={active} onChange={event => setActive(Number(event.target.value))} className="h-12 min-w-0 w-full rounded-md border border-hairline bg-surface px-3 text-[14px] font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          {CHAPTERS.map((item, index) => <option key={item.label} value={index}>{item.label}</option>)}
        </select>
        <span className="shrink-0 text-[14px] tabular-nums text-muted">{active + 1} / {CHAPTERS.length}</span>
      </div>
      <div className="mt-5 min-h-[76px]" aria-live="polite" aria-atomic="true">
        <p className="text-[21px] font-semibold leading-[1.35]">{chapter.line}</p>
      </div>
      <div className="mx-auto w-full max-w-[350px]" onTouchStart={event => {
        const touch = event.touches[0];
        if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
      }} onTouchEnd={event => {
        const touch = event.changedTouches[0];
        const start = touchStart.current;
        touchStart.current = null;
        if (!touch || !start) return;
        const dx = touch.clientX - start.x;
        const dy = touch.clientY - start.y;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1);
      }}>
        <IPhoneFrame>
          <div className="flex h-full flex-col bg-paper px-3 pb-4 pt-[18%]">
            <div className="mb-4 flex shrink-0 items-center gap-2.5 border-b border-hairline pb-2.5"><StakAvatar size={28} /><span className="text-[17px] font-semibold">Stak</span></div>
            <div key={active} data-mobile-conversation aria-live="polite">
              <Group chapter={chapter} compact />
            </div>
          </div>
        </IPhoneFrame>
      </div>
      <div className="mt-4 grid grid-cols-[48px_minmax(0,1fr)_48px] items-center gap-3">
        <Button variant="outline" size="icon" className="h-12 w-12" aria-label="Previous conversation" title="Previous conversation" disabled={active === 0} onClick={() => move(-1)}><ArrowLeft /></Button>
        <div className="flex justify-center gap-1" aria-label="Conversation progress">
          {CHAPTERS.map((item, index) => <Button key={item.label} variant="ghost" size="icon" className="h-11 w-6 min-w-0 px-0" aria-label={`Show ${item.label.toLowerCase()}`} aria-pressed={index === active} title={item.label} onClick={() => setActive(index)}><span className={`h-1.5 w-3 rounded-full ${index === active ? "bg-primary" : "bg-muted/40"}`} /></Button>)}
        </div>
        <Button variant="outline" size="icon" className="h-12 w-12" aria-label="Next conversation" title="Next conversation" disabled={active === CHAPTERS.length - 1} onClick={() => move(1)}><ArrowRight /></Button>
      </div>
    </div>
  );
}

function DesktopThread() {
  const [active, setActive] = useState(0);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const screenRef = useRef<HTMLDivElement>(null);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let idx = 0;
      labelRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < mid) idx = i;
      });
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const screen = screenRef.current;
    const group = groupRefs.current[active];
    if (!screen || !group) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = group.offsetTop + group.offsetHeight - screen.clientHeight + 24;
    screen.scrollTo({ top: Math.max(0, target), behavior: reduce ? "auto" : "smooth" });
  }, [active]);

  return (
    <div className="mt-16 hidden grid-cols-[350px_minmax(0,1fr)] gap-20 lg:grid">
      <div>
        <div className="sticky top-[96px]">
          <IPhoneFrame>
            <div className="flex h-full flex-col bg-paper px-3.5 pt-[18%]">
              <div className="flex items-center gap-2.5 border-b border-hairline pb-2.5">
                <StakAvatar size={28} />
                <span className="font-display text-[16px] font-extrabold">Stak</span>
              </div>
              <div ref={screenRef} className="relative flex-1 overflow-hidden" aria-hidden="false">
                <div className="flex flex-col gap-4 pb-6 pt-5">
                  {CHAPTERS.map((c, i) => (
                    <div
                      key={c.label}
                      ref={(el) => {
                        groupRefs.current[i] = el;
                      }}
                    >
                      <Group chapter={c} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </IPhoneFrame>
        </div>
      </div>
      <ol className="flex flex-col">
        {CHAPTERS.map((c, i) => (
          <li
            key={c.label}
            className="flex min-h-[62svh] flex-col justify-center first:justify-start last:min-h-[70svh]"
          >
            <div
              ref={(el) => {
                labelRefs.current[i] = el;
              }}
              className="transition-colors duration-300"
              style={{ color: i === active ? "var(--ink)" : "var(--muted)" }}
            >
              <div className={`label-over text-[14px] text-inherit ${i === active ? "font-extrabold" : ""}`}>
                {c.label}
              </div>
              <p className={`mt-3 max-w-[440px] text-[22px] leading-[1.35] ${i === active ? "font-bold" : ""}`}>
                {c.line}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function TheThread() {
  return (
    <section id="the-thread" className="section-y [&_.label-over]:text-[14px]">
      <div className="content-column">
        <SectionLabel>THE THREAD</SectionLabel>
        <h2 className="display-section mt-4 max-w-[760px]">One week. One number.</h2>
        <p className="mt-6 max-w-[560px] text-[20px] leading-[1.5]">
          A photo, a link, a phone call, a Tuesday that didn&apos;t go well. Everything below happened in one text thread, without an app.
        </p>
        <MobileThread />
        <DesktopThread />
        <div className="mt-10">
          <ThreadCTA />
        </div>
      </div>
    </section>
  );
}
