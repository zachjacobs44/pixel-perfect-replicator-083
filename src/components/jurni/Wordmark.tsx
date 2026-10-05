import wordmarkInk from "@/assets/jurni-wordmark-ink.svg";
import wordmarkCream from "@/assets/jurni-wordmark-cream.svg";
import markInk from "@/assets/jurni-mark-ink.svg";
import markCream from "@/assets/jurni-mark-cream.svg";
import stakMark from "@/assets/stak-mark.svg.asset.json";
import stakLockup from "@/assets/stak-lockup-wide.svg.asset.json";

import { cn } from "@/lib/utils";

export function Wordmark({
  tone = "cream",
  className,
}: {
  tone?: "ink" | "cream";
  className?: string;
}) {
  return (
    <img
      src={tone === "ink" ? wordmarkInk : wordmarkCream}
      alt="Jurni GLP"
      className={cn("block h-6 w-auto", className)}
      decoding="async"
    />
  );
}

export function StakLockup({ className }: { className?: string }) {
  return <img src={stakLockup.url} alt="Stak" className={cn("block h-12 w-auto", className)} />;
}

/** Official striped Stak mark, always used as supplied. */
export function StakAvatar({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      <img
        src={stakMark.url}
        alt="Stak"
        className="h-full w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

export { markInk, markCream, wordmarkInk, wordmarkCream };
