import { useEffect, useState } from "react";

import { TextStakButton } from "./StakCTA";

/** Mobile-only sticky bottom bar. Appears once the visitor scrolls past the hero. */
export function StickyTextBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t md:hidden"
      style={{
        background: "var(--paper)",
        borderColor: "var(--hairline)",
        paddingBottom: "env(safe-area-inset-bottom)",
        transition: "opacity 250ms var(--ease-spring)",
      }}
    >
      <div className="content-column flex h-16 items-center justify-between gap-3">
        <span className="fine-print">Two weeks free.</span>
        <TextStakButton section="footer" compact />
      </div>
    </div>
  );
}
