import { Link } from "@tanstack/react-router";

import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--frame)",
        borderColor: "var(--hairline)",
        paddingBottom: "max(32px, env(safe-area-inset-bottom))",
      }}
    >
      <div className="content-column py-12">
        <Wordmark tone="ink" className="h-6" />

        <nav className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[17px]">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/practices">For practices</Link>
          <a href="https://www.instagram.com/jurniglp/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.tiktok.com/@jurniglp" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </nav>

        <div className="mt-8 max-w-[720px] space-y-3">
          <p className="fine-print">
            Jurni GLP provides behavioral support and does not provide medical advice. Always consult
            a qualified healthcare provider before making medical decisions. Jurni GLP is not
            associated with, endorsed by, or sponsored by Novo Nordisk or Eli Lilly. All trademarks
            and product names belong to their respective owners.
          </p>
          <p className="fine-print">
            Message frequency varies. Message and data rates may apply. Reply STOP to end, HELP for
            help.
          </p>
          <p className="fine-print">© 2026 Jurni Health, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
