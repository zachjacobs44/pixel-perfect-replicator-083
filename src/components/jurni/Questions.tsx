import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

import { SectionLabel } from "./SectionPlaceholder";

const ITEMS: { q: string; a: ReactNode }[] = [
  { q: "What do I text it first?", a: "Anything. Most people open with the question they felt silly asking at their last visit. Or tap the button and it starts with \"I just started a GLP-1. What now?\"" },
  { q: "What does Stak actually do day to day?", a: "It runs your plan. It tells you what to eat and when, how much to move, when to weigh in, and when your dose or refill is coming. It checks in on the hard days and adjusts the plan when your life or your dose changes. You ask it whatever comes up in between." },
  { q: "Is Stak a real person?", a: "No. Stak is an AI, built for people on GLP-1s. It's there every hour of every day. When something needs a person, it tells you to call your practice." },
  { q: "Do I need to download anything?", a: "No. Stak lives in the messaging and phone apps already on your phone." },
  { q: "Which medications does it work with?", a: "Any GLP-1: Wegovy, Ozempic, Zepbound, Mounjaro, the Wegovy pill, Foundayo, and the rest. Injection or pill." },
  { q: "Does it speak my language?", a: "Yes. Text or call in whatever language you think in. Stak answers in the same one, and you can switch mid-conversation." },
  { q: "What if I stop taking my medication?", a: "Stak keeps showing up. Pausing or stopping is part of a lot of people's story, and it doesn't end the conversation." },
  {
    q: "Is what I tell it private?",
    a: (
      <>
        It stays between you, Stak, and the Page only you can open. Your mobile number is never sold or shared for marketing. The details are in our{" "}
        <Link to="/privacy" className="underline">Privacy Policy</Link>.
      </>
    ),
  },
  { q: "How do I make it stop?", a: "Reply STOP to any message and they end immediately. Reply START if you change your mind." },
  { q: "My provider gave me this number. Is this their program?", a: "Your provider chose Jurni GLP as support alongside your prescription, and their name is on your Page. Jurni GLP is a separate service. It doesn't make medical decisions and never changes your treatment." },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none"
      className="shrink-0"
      style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 300ms cubic-bezier(.2,1.4,.4,1)" }}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Questions() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="questions" className="section-y">
      <div className="content-column">
        <SectionLabel>QUESTIONS</SectionLabel>
        <h2 className="display-section mt-4">Questions.</h2>
        <div className="mt-10 max-w-[820px] border-t border-hairline">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-hairline">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-[20px] font-bold"
                  >
                    {item.q}
                    <Chevron open={isOpen} />
                  </button>
                </h3>
                <div id={`faq-${i}`} hidden={!isOpen} className="pb-6 pr-8 text-[17px] leading-[1.5]">
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
