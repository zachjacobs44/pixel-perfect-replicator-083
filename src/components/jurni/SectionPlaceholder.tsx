import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="label-over">{children}</div>;
}

export function SectionPlaceholder({
  label,
  id,
  children,
}: {
  label: string;
  id?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="section-y">
      <div className="content-column">
        <SectionLabel>{label}</SectionLabel>
        <p className="mt-3 text-[17px] md:text-[18px]" style={{ color: "var(--muted-soft)" }}>
          Copy arrives in the next pass.
        </p>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
