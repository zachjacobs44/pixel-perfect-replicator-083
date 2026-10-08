import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { StakAvatar } from "./Wordmark";

export function StakBubble({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={cn("max-w-[92%]", className)} style={style}>
      <StakAvatar size={20} />
      <div
        className="mt-1.5 rounded-[18px] rounded-bl-[6px] border-l-[3px] border-magenta p-3.5 text-[17px] leading-[1.4] text-ink"
        style={{ background: "var(--grad-white)", boxShadow: "var(--shadow-white)" }}
      >
        {children}
      </div>
    </div>
  );
}

/** URLs inside a user bubble render as --text-cyan text, never a live link. */
function withUrls(text: string) {
  return text.split(/(https?:\/\/\S+)/).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <span key={i} className="break-all text-text-cyan">{part}</span>
    ) : (
      part
    ),
  );
}

export function UserBubble({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={cn("ml-auto w-fit max-w-[88%] rounded-[18px] rounded-br-[6px] bg-frame p-3.5 text-[17px] leading-[1.4] text-ink", className)}
      style={style}
    >
      {withUrls(text)}
    </div>
  );
}

/** Fade up once when entering view; reduced motion shows the final state. */
export function useInViewOnce<T extends Element>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
}
