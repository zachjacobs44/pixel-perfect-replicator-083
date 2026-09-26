import { useEffect, useState } from "react";

import { findPractice, readRememberedPractice, rememberPractice } from "@/lib/referring-practices";
import { IPhoneFrame } from "./IPhoneFrame";
import { StakCTA } from "./StakCTA";
import { StakAvatar } from "./Wordmark";

const DEFAULT_EYEBROW = "YOUR DOCTOR SENT YOU HERE.";

function PhoneMock() {
  return (
    <figure className="mx-auto w-full max-w-[350px] lg:mx-0">
      <IPhoneFrame eager>
        <div className="flex h-full flex-col bg-paper px-3.5 pb-5 pt-[13%]">
          <div className="flex items-center gap-2.5 border-b border-hairline pb-2.5">
            <StakAvatar size={28} />
            <span className="font-display text-[16px] font-extrabold">Stak</span>
          </div>

          <div className="mt-4 flex flex-col gap-3.5">
            <div className="message-arrive max-w-[92%]" style={{ animationDelay: "0ms" }}>
              <StakAvatar size={18} />
              <div
                className="mt-1.5 rounded-[16px] rounded-bl-[6px] border-l-[3px] border-magenta p-3 text-[15px] leading-[1.35]"
                style={{ background: "var(--grad-white)", boxShadow: "var(--shadow-white)" }}
              >
                Morning. Dose day, week 12, your first at the higher dose. Small meals today, nothing
                greasy tonight.
              </div>
            </div>

            <div
              className="message-arrive ml-auto max-w-[84%] rounded-[16px] rounded-br-[6px] bg-frame p-3 text-[15px] leading-[1.35]"
              style={{ animationDelay: "400ms" }}
            >
              ok so far. weird thing, walked past the office bagels and didn&apos;t want one
            </div>

            <div className="message-arrive max-w-[92%]" style={{ animationDelay: "800ms" }}>
              <StakAvatar size={18} />
              <div
                className="mt-1.5 rounded-[16px] rounded-bl-[6px] border-l-[3px] border-magenta p-3 text-[15px] leading-[1.35]"
                style={{ background: "var(--grad-white)", boxShadow: "var(--shadow-white)" }}
              >
                That&apos;s the food noise quieting down. Twelve weeks ago you told me those bagels were
                the hardest part of your week.
              </div>
            </div>
          </div>
        </div>
      </IPhoneFrame>
      <figcaption className="mt-4 text-center text-[15px] text-muted">
        What a week with Stak looks like. The full conversation is below.
      </figcaption>
    </figure>
  );
}

export function HomeHero({ referralSlug }: { referralSlug?: string | undefined }) {
  const [eyebrow, setEyebrow] = useState(DEFAULT_EYEBROW);

  useEffect(() => {
    const querySlug = new URLSearchParams(window.location.search).get("from") ?? undefined;
    const suppliedSlug = referralSlug ?? querySlug;
    const practice = findPractice(suppliedSlug);
    if (practice) {
      rememberPractice(practice.slug);
      setEyebrow(`${practice.name} SENT YOU HERE.`);
      return;
    }

    if (suppliedSlug) {
      setEyebrow(DEFAULT_EYEBROW);
      return;
    }

    const remembered = readRememberedPractice();
    setEyebrow(remembered ? `${remembered.name} SENT YOU HERE.` : DEFAULT_EYEBROW);
  }, [referralSlug]);

  return (
    <section id="hero" className="content-column py-10 md:py-16 lg:flex lg:min-h-[calc(100svh-64px)] lg:items-center">
      <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.22fr)_minmax(300px,0.78fr)] lg:gap-12">
        <div>
          <p className="label-over text-[14px] text-magenta">{eyebrow}</p>
          <h1 className="display-hero mt-4 max-w-[720px]">
            Your doctor handles the medication. Stak handles everything between visits.
          </h1>
          <p className="mt-5 max-w-[34ch] text-[20px] leading-[1.42] md:text-[22px]">
            Stak is a number you text or call, any hour, with whatever comes up on a GLP-1. Is this
            normal. What do I eat tonight. Why does this week feel different from last week. It
            answers, it remembers what you told it, and it checks in on the days that tend to be hard.
          </p>
          <StakCTA section="hero" className="mt-7" />
        </div>
        <PhoneMock />
      </div>
    </section>
  );
}