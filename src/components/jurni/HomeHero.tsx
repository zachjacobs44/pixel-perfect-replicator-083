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
            <StakAvatar size={28} />
            <span className="font-display text-[16px] font-extrabold">Jurni GLP</span>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <div
              className="message-arrive ml-auto max-w-[84%] rounded-[16px] rounded-br-[6px] bg-frame p-3 text-[15px] leading-[1.35] text-ink"
              style={{ animationDelay: "0ms" }}
            >
              picked up my first box. what now
            </div>
            <div className="message-arrive max-w-[92%]" style={{ animationDelay: "400ms" }}>
              <StakAvatar size={18} />
              <div
                className="mt-1.5 rounded-[16px] rounded-bl-[6px] border-l-[3px] border-magenta p-3 text-[15px] leading-[1.35]"
                style={{ background: "var(--grad-white)", boxShadow: "var(--shadow-white)" }}
              >
                First dose is Thursday, so tonight there&apos;s nothing to do. Tomorrow I&apos;ll text you a short grocery list for week one: small meals, protein first, water all day.
              </div>
            </div>
            <div
              className="message-arrive ml-auto max-w-[84%] rounded-[16px] rounded-br-[6px] bg-frame p-3 text-[15px] leading-[1.35] text-ink"
              style={{ animationDelay: "800ms" }}
            >
              will i feel sick
            </div>
            <div className="message-arrive max-w-[92%]" style={{ animationDelay: "1200ms" }}>
              <StakAvatar size={18} />
              <div
                className="mt-1.5 rounded-[16px] rounded-bl-[6px] border-l-[3px] border-magenta p-3 text-[15px] leading-[1.35]"
                style={{ background: "var(--grad-white)", boxShadow: "var(--shadow-white)" }}
              >
                Some people do around day two or three, usually mild. I&apos;ll check in Friday morning. If it&apos;s more than that, I&apos;ll tell you when to call your provider.
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
          <StakAvatar size={56} onPaper />
          <p className="label-over mt-4 text-[14px] text-magenta">AN AI AGENT FOR PEOPLE ON A GLP-1.</p>
          <h1 className="display-hero mt-4 max-w-[720px]">
            The medicine quiets the hunger. Jurni GLP handles everything else.
          </h1>
          <p className="mt-7 max-w-[40ch] text-[20px] leading-[1.45] md:text-[22px]">
            Jurni GLP is an AI agent for people on a GLP-1. Text it or call it, any time. It builds your plan, answers your questions, tracks your progress, and checks in before the hard days.
          </p>
          <StakCTA section="hero" className="mt-7" />
        </div>
        <PhoneMock />
      </div>
    </section>
  );
}
