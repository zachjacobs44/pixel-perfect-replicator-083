import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { StakAvatar } from "./Wordmark";
import { photoSrc, type PhotoName } from "./Photo";

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

/** A user bubble that carries the photo they sent, with the caption beneath it. */
export function PhotoBubble({ photo, alt, text, className }: { photo: PhotoName; alt: string; text?: string; className?: string }) {
  const src = photoSrc(photo);
  return (
    <div className={cn("ml-auto w-fit max-w-[88%] overflow-hidden rounded-[18px] rounded-br-[6px] bg-frame text-[17px] leading-[1.4] text-ink", className)}>
      <div className="flex items-center gap-3 p-2 pr-3.5">
        <span
          className="block h-14 w-14 shrink-0 overflow-hidden rounded-[10px]"
          style={{ background: "var(--stak-sheet)" }}
          aria-hidden={src ? undefined : "true"}
        >
          {src ? <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover" /> : null}
        </span>
        <span className="text-[14px] text-muted">Photo</span>
      </div>
      {text ? <div className="px-3.5 pb-3.5 pt-0.5">{withUrls(text)}</div> : null}
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
