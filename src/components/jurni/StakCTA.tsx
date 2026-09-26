import { Link } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";

import { cn } from "@/lib/utils";
import { trackCta, type CtaSection } from "@/lib/analytics";

export const STAK_PHONE = "+15625544571";
export const STAK_PHONE_DISPLAY = "(562) 554-4571";
export const STAK_SMS_HREF =
  "sms:+15625544571?&body=I%20just%20started%20a%20GLP-1.%20What%20now%3F";
export const STAK_TEL_HREF = "tel:+15625544571";

const buttonBase =
  "inline-flex h-[60px] items-center justify-center rounded-full px-8 font-display text-[20px] font-bold tracking-[-0.02em] press-spring";

export function TextStakButton({
  section,
  className,
  label = "Text Stak",
  compact = false,
}: {
  section: CtaSection;
  className?: string;
  label?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={STAK_SMS_HREF}
      onClick={() => trackCta("cta_text", section)}
      className={cn(
        buttonBase,
        "text-white",
        compact && "h-11 px-5 text-[16px]",
        className,
      )}
      style={{ background: "var(--grad-magenta)", boxShadow: "var(--shadow-magenta)" }}
    >
      {label}
    </a>
  );
}

export function CallStakButton({
  section,
  className,
  tone = "ink",
}: {
  section: CtaSection;
  className?: string;
  tone?: "ink" | "cream";
}) {
  return (
    <a
      href={STAK_TEL_HREF}
      onClick={() => trackCta("cta_call", section)}
      className={cn(
        buttonBase,
        "border-2",
        tone === "cream" ? "border-paper text-paper" : "border-ink text-ink",
        className,
      )}
    >
      Call Stak
    </a>
  );
}

export function StakCTA({ section, className }: { section: CtaSection; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-7 min-[900px]:flex-row min-[900px]:items-start", className)}>
      <div className="max-w-[560px]">
        <div className="flex flex-col gap-3 min-[420px]:flex-row">
          <TextStakButton section={section} />
          <CallStakButton section={section} />
        </div>
        <p className="fine-print mt-4">
          Two weeks free. No card, no account, no app. By texting or calling, you agree to receive
          messages from Jurni GLP. Message frequency varies. Message and data rates may apply. Reply
          STOP to end, HELP for help.{" "}
          <Link to="/privacy" className="underline">
            Privacy
          </Link>{" "}
          ·{" "}
          <Link to="/terms" className="underline">
            Terms
          </Link>
        </p>
      </div>

      <div className="hidden min-[900px]:block">
        <div
          className="flex h-[140px] w-[140px] items-center justify-center rounded-[var(--radius-chip)]"
          style={{ background: "var(--paper)" }}
        >
          <QRCodeSVG
            value={STAK_SMS_HREF}
            size={132}
            bgColor="#FAF7F1"
            fgColor="#141414"
            level="M"
          />
        </div>
        <p className="fine-print mt-2 max-w-[160px]">Scan to text Stak from your phone.</p>
      </div>
    </div>
  );
}

export function ThreadCTA() {
  return (
    <p className="font-display text-[30px] font-extrabold leading-[1.08]">
      Anything on your mind.{" "}
      <a
        href={STAK_SMS_HREF}
        onClick={() => trackCta("cta_text", "thread")}
        className="press-spring inline-flex rounded-full bg-magenta px-4 py-2 text-paper"
      >
        Text Stak
      </a>
      .
    </p>
  );
}

export function PricingCTA() {
  return (
    <div>
      <div className="flex flex-col gap-3 min-[420px]:flex-row">
        <TextStakButton section="pricing" />
        <CallStakButton section="pricing" />
      </div>
      <p className="mt-4 text-[16px] font-semibold">Two weeks free. No card to start. Stop anytime.</p>
    </div>
  );
}

export function ClosingCTA() {
  return (
    <section
      className="text-paper"
      style={{ background: "var(--grad-dark)", boxShadow: "var(--shadow-dark)" }}
      aria-labelledby="closing-cta-title"
    >
      <div className="content-column py-20 md:py-[140px]">
        <h2 id="closing-cta-title" className="display-section max-w-[780px]">
          Your doctor gave you the number. This is the number.
        </h2>
        <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">
          <TextStakButton section="faq" />
          <CallStakButton section="faq" tone="cream" />
        </div>
        <p className="mt-5 max-w-[720px] text-[14px] leading-[1.5] text-paper/60">
          Two weeks free. No card, no account, no app. By texting or calling, you agree to receive
          messages from Jurni GLP. Message frequency varies. Message and data rates may apply. Reply
          STOP to end, HELP for help.{" "}
          <Link to="/privacy" className="underline">
            Privacy
          </Link>{" "}
          ·{" "}
          <Link to="/terms" className="underline">
            Terms
          </Link>
        </p>
      </div>
    </section>
  );
}
