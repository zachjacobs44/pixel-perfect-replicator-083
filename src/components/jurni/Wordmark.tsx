import logoLight from "@/assets/brand/jurni-glp-logo-light.svg";
import logoDark from "@/assets/brand/jurni-glp-logo-dark.svg";
import wordmarkLight from "@/assets/brand/jurni-glp-wordmark-light.svg";
import wordmarkDark from "@/assets/brand/jurni-glp-wordmark-dark.svg";
import markLight from "@/assets/brand/jurni-glp-mark-light.svg";
import markDark from "@/assets/brand/jurni-glp-mark-dark.svg";
import markTile from "@/assets/brand/jurni-glp-mark-tile.svg";

import { cn } from "@/lib/utils";

/**
 * Jurni GLP brand assets, always used as supplied.
 * tone "ink"  = for paper / light backgrounds
 * tone "cream" = for night / dark backgrounds
 */

/** Full lockup: arch mark + JURNI GLP wordmark. Header, footer, print. */
export function Wordmark({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "cream";
  className?: string;
}) {
  return (
    <img
      src={tone === "ink" ? logoLight : logoDark}
      alt="Jurni GLP"
      className={cn("block h-6 w-auto", className)}
      decoding="async"
    />
  );
}

/** Wordmark only (no arch). Used inside the phone header on Your Page. */
export function WordmarkText({ tone = "cream", className }: { tone?: "ink" | "cream"; className?: string }) {
  return (
    <img
      src={tone === "ink" ? wordmarkLight : wordmarkDark}
      alt="Jurni GLP"
      className={cn("block h-5 w-auto", className)}
      decoding="async"
    />
  );
}

/** Kept for existing imports; renders the full lockup. */
export function StakLockup({ className }: { className?: string; animated?: boolean }) {
  return <Wordmark tone="cream" className={cn("h-12", className)} />;
}

/**
 * The arch mark on its own. Used as the agent's avatar in every chat bubble.
 * On night surfaces (default) the light-stripe version; onPaper renders the
 * night tile so the mark reads on cream.
 */
export function StakAvatar({ size = 44, onPaper = false }: { size?: number; animated?: boolean; onPaper?: boolean }) {
  if (onPaper) {
    return (
      <img
        src={markTile}
        alt="Jurni GLP"
        width={size}
        height={size}
        className="inline-block shrink-0 object-contain"
        style={{ width: size, height: size, borderRadius: Math.round(size * 0.28), boxShadow: "0 10px 24px -12px rgba(20,27,30,.45)" }}
        decoding="async"
      />
    );
  }
  return (
    <span className="inline-flex shrink-0 items-center justify-center" style={{ width: size, height: size }}>
      <img src={markDark} alt="Jurni GLP" className="h-full w-full object-contain" loading="lazy" decoding="async" />
    </span>
  );
}

export { logoLight, logoDark, wordmarkLight, wordmarkDark, markLight, markDark, markTile };
