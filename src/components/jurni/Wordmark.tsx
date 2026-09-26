import wordmarkInk from "@/assets/jurni-wordmark-ink.svg";
import wordmarkCream from "@/assets/jurni-wordmark-cream.svg";
import markInk from "@/assets/jurni-mark-ink.svg";
import markCream from "@/assets/jurni-mark-cream.svg";

import { cn } from "@/lib/utils";

export function Wordmark({
  tone = "ink",
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

/** The square mark inside a magenta circle — Stak's avatar. */
export function StakAvatar({ size = 44 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background: "var(--grad-magenta)",
        boxShadow: "var(--shadow-magenta)",
      }}
    >
      <img
        src={markCream}
        alt="Stak"
        style={{ width: size * 0.52, height: size * 0.52 }}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

export { markInk, markCream, wordmarkInk, wordmarkCream };
