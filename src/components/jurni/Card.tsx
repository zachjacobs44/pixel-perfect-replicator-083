import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string | undefined;
};

const base = "flex flex-col justify-between border border-hairline p-6 rounded-[var(--radius-card)] min-h-[170px] text-ink";

export function MagentaCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(base, "bg-surface", className)}
      style={{ boxShadow: "inset 3px 0 0 var(--magenta)" }}
    >
      {children}
    </div>
  );
}

export function CyanCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(base, className)}
      style={{ background: "var(--grad-cyan)", boxShadow: "var(--shadow-cyan)" }}
    >
      {children}
    </div>
  );
}

export function YellowCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(base, "text-ink", className)}
      style={{ background: "var(--grad-yellow)", boxShadow: "var(--shadow-yellow)" }}
    >
      {children}
    </div>
  );
}

export function DarkCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(base, className)}
      style={{ background: "var(--grad-dark)", boxShadow: "var(--shadow-dark)" }}
    >
      {children}
    </div>
  );
}

export function WhiteCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(base, "text-ink", className)}
      style={{ background: "var(--grad-white)", boxShadow: "var(--shadow-white)" }}
    >
      {children}
    </div>
  );
}
