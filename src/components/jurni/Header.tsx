import { Link } from "@tanstack/react-router";

import { Wordmark } from "./Wordmark";
import { TextStakButton } from "./StakCTA";

export function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        background: "var(--paper)",
        borderColor: "var(--hairline)",
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <div className="content-column flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="Jurni GLP home" className="shrink-0">
          <Wordmark className="h-5 md:h-6" />
        </Link>
        <div className="flex items-center gap-5">
          <Link
            to="/practices"
            className="hidden text-[17px] font-semibold md:inline-block"
            style={{ color: "var(--ink)" }}
          >
            For practices
          </Link>
          <TextStakButton section="hero" compact />
        </div>
      </div>
    </header>
  );
}
