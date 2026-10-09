import { useEffect } from "react";

import { findPractice, rememberPractice } from "@/lib/referring-practices";
import { IPhoneFrame } from "./IPhoneFrame";
import { StakCTA } from "./StakCTA";
import { StakAvatar } from "./Wordmark";

function PhoneMock() {
  return (
    <div className="phone-glow mx-auto w-full max-w-[350px] lg:mx-0 lg:max-w-[380px]">
      <IPhoneFrame eager>
        <div className="night-screen flex h-full flex-col px-3.5 pb-5 pt-[18%]">
          <div className="flex items-center gap-2.5 border-b border-hairline pb-2.5">
            <StakAvatar size={28} animated />
            <span className="font-display text-[16px] font-extrabold">Stak</span>
          </div>
          <div className="mt-4 flex flex-col gap-3.5">
            <div className="message-arrive max-w-[92%]" style={{ animationDelay: "0ms" }}>
              <StakAvatar size={18} />
              <div
                className="mt-1.5 rounded-[16px] rounded-bl-[6px] border-l-[3px] border-magenta p-3 text-[15px] leading-[1.35]"
                style={{ background: "var(--grad-white)", boxShadow: "var(--shadow-white)" }}
              >
                Dose day. Week 12, first one at the higher dose. Small meals today. Nothing greasy tonight.
              </div>
            </div>
            <div
              className="message-arrive ml-auto max-w-[84%] rounded-[16px] rounded-br-[6px] bg-frame p-3 text-[15px] leading-[1.35] text-ink"
              style={{ animationDelay: "400ms" }}
            >
              walked past the office bagels this morning and didn&apos;t even want one. weird
            </div>
            <div className="message-arrive max-w-[92%]" style={{ animationDelay: "800ms" }}>
              <StakAvatar size={18} />
              <div
                className="mt-1.5 rounded-[16px] rounded-bl-[6px] border-l-[3px] border-magenta p-3 text-[15px] leading-[1.35]"
                style={{ background: "var(--grad-white)", boxShadow: "var(--shadow-white)" }}
              >
                That&apos;s the food noise going quiet. Twelve weeks ago you told me those bagels were the hardest part of your week. Remember that on a flat week.
              </div>
            </div>
          </div>
        </div>
      </IPhoneFrame>
    </div>
  );
}

export function HomeHero({ referralSlug }: { referralSlug?: string | undefined }) {
  useEffect(() => {
    const slug = referralSlug ?? new URLSearchParams(window.location.search).get("from") ?? undefined;
    const practice = findPractice(slug);
    if (practice) rememberPractice(practice.slug);
  }, [referralSlug]);

  return (
    <section id="hero" className="content-column pb-10 pt-8 md:pb-16 md:pt-12">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(300px,0.7fr)] lg:gap-14">
        <div className="min-w-0">
          <StakAvatar size={56} animated onPaper />
          <p className="label-over mt-4 text-[14px] text-magenta">AN AI AGENT FOR PEOPLE ON A GLP-1.</p>
          <h1 className="display-hero mt-4 max-w-[720px]">
            The medicine quiets the hunger. Stak handles everything else.
          </h1>
          <p className="mt-7 max-w-[40ch] text-[20px] leading-[1.45] md:text-[22px]">
            Stak is an AI agent at one phone number. It gives you a plan and walks you through it, week by week. Text it, call it, send it a photo or a link.
          </p>
          <p className="mt-3 max-w-[40ch] text-[17px] leading-[1.5] text-muted">
            Two weeks free. No app, no card, no account.
          </p>
          <StakCTA section="hero" className="mt-7" />
        </div>
        <PhoneMock />
      </div>
    </section>
  );
}
