import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const base = "flex flex-col justify-between p-[22px] rounded-[var(--radius-card)] min-h-[170px]";

export function MagentaCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(base, "text-white", className)}
      style={{ background: "var(--grad-magenta)", boxShadow: "var(--shadow-magenta)" }}
    >
      {children}
    </div>
  );
}

export function CyanCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(base, "text-white", className)}
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
      className={cn(base, "text-white", className)}
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
