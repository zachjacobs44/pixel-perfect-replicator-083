import { Link } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";

import { cn } from "@/lib/utils";
import { trackCta, type CtaSection } from "@/lib/analytics";

export const STAK_PHONE = "+13412227826";
export const STAK_PHONE_DISPLAY = "(341) 222-7826";
export const STAK_SMS_HREF =
  "sms:+13412227826?&body=I%20just%20started%20a%20GLP-1.%20What%20now%3F";
export const STAK_TEL_HREF = "tel:+13412227826";

const buttonBase =
  "inline-flex h-[60px] items-center justify-center rounded-[var(--radius-chip)] px-8 font-body text-[18px] font-semibold press-spring";

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
        "text-primary-foreground",
        compact && "h-11 px-5 text-[16px]",
        className,
      )}
      style={{ background: "var(--grad-button)", boxShadow: "var(--shadow-button)" }}
    >
      {label}
    </a>
  );
}

export function StakCTA({ section, className }: { section: CtaSection; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-7 min-[900px]:flex-row min-[900px]:items-start", className)}>
      <div className="max-w-[560px]">
        <TextStakButton section={section} />
        <p className="fine-print mt-4">
          Two weeks free. No card, no account, no app. By texting, you agree to receive messages from
          Jurni GLP. Message frequency varies. Message and data rates may apply. Reply STOP to end,
          HELP for help.{" "}
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
          style={{ background: "var(--stak-ink)" }}
        >
          <QRCodeSVG
            value={STAK_SMS_HREF}
            size={132}
            bgColor="var(--stak-ink)"
            fgColor="#141b1e"
            level="M"
          />
        </div>
        <p className="fine-print mt-2 max-w-[160px]">Scan to text Stak from your phone.</p>
      </div>
    </div>
  );
}

export function JourneyCTA() {
  return (
    <p className="font-display text-[30px] font-extrabold leading-[1.08]">
      Whatever stage you're in.{" "}
      <a
        href={STAK_SMS_HREF}
        onClick={() => trackCta("cta_text", "journey")}
        className="press-spring inline-flex rounded-[var(--radius-chip)] px-4 py-2 text-primary-foreground" style={{ background: "var(--grad-button)", boxShadow: "var(--shadow-button)" }}
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
      <TextStakButton section="pricing" />
      <p className="mt-4 text-[16px] font-semibold">Two weeks free. No card to start. Stop anytime.</p>
    </div>
  );
}

export function ClosingCTA() {
  return (
    <section
      className="night-screen relative isolate overflow-hidden"
      style={{ background: "var(--stak-ground)" }}
      aria-labelledby="closing-cta-title"
    >
      <div className="content-column flex flex-col items-center py-24 text-center md:py-[160px]">
        <h2 id="closing-cta-title" className="display-hero max-w-[820px]">
          The medicine quiets the hunger. Stak handles everything else.
        </h2>
        <div className="mt-10">
          <TextStakButton section="closing" />
        </div>
        <p className="mt-6 max-w-[620px] text-[14px] leading-[1.5] text-muted">
          Two weeks free. No card, no account, no app. By texting, you agree to receive messages from
          Jurni GLP. Message frequency varies. Message and data rates may apply. Reply STOP to end,
          HELP for help.{" "}
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
