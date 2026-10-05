import wordmarkInk from "@/assets/jurni-wordmark-ink.svg";
import wordmarkCream from "@/assets/jurni-wordmark-cream.svg";
import markInk from "@/assets/jurni-mark-ink.svg";
import markCream from "@/assets/jurni-mark-cream.svg";
import stakMark from "@/assets/stak-mark.svg.asset.json";
import stakLockup from "@/assets/stak-lockup-wide.svg.asset.json";

import { cn } from "@/lib/utils";
import { StakMotion } from "./StakMotion";

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

export function StakLockup({ className, animated = false }: { className?: string; animated?: boolean }) {
  if (animated) return (
    <div className={cn("flex h-12 w-fit items-center gap-2.5", className)} role="img" aria-label="Stak">
      <StakMotion scene="welcome" className="h-full aspect-[170/195]" />
      <span className="font-display text-[36px] font-extrabold leading-none">STAK</span>
    </div>
  );
  return <img src={stakLockup.url} alt="Stak" className={cn("block h-12 w-auto", className)} />;
}

/** Official striped Stak mark, always used as supplied. */
export function StakAvatar({ size = 44, animated = false }: { size?: number; animated?: boolean }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      {animated ? <span role="img" aria-label="Stak" className="h-full w-full"><StakMotion scene="rest" className="h-full w-full" /></span> : <img
        src={stakMark.url}
        alt="Stak"
        className="h-full w-full object-contain"
        loading="lazy"
        decoding="async"
      />}
    </span>
  );
}

export { markInk, markCream, wordmarkInk, wordmarkCream };
