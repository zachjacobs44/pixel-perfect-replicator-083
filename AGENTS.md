<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Jurni GLP conventions

- Design tokens live only in `src/styles.css` (`:root` variables + `@theme inline` + `@utility` helpers) — so brand colors, type scale and motion stay in one place.
- Shared brand UI lives in `src/components/jurni/` (Card, Wordmark, Header, Footer, StakCTA, StickyTextBar, SectionPlaceholder) — later passes compose pages from these by name.
- Header, Footer and the mobile sticky text bar are mounted once in `src/routes/__root.tsx`; page routes render only their own sections.
- Client-callable server logic lives in `src/lib/*.functions.ts` (`contact.functions.ts`, `practices.functions.ts`) — keeps secrets like `PRACTICES_PASSWORD` and the email key server-side.
- CTA analytics go through `src/lib/analytics.ts`; every Text/Call Stak tap fires `cta_text`/`cta_call` with a `section` property.
- Referring-practice attribution is defined only in `src/lib/referring-practices.ts` and persists valid entries for 30 days — this keeps displayed practice names allowlisted and easy to maintain.
- Uploaded Stak artwork is served through asset pointers; legacy palette aliases resolve to the active semantic theme in `src/styles.css` to preserve existing page composition during rebranding.
- Printed referral cards use scoped light theme tokens while screen pages use the active site theme, keeping QR codes scan-friendly and printed cards legible.
- Official motion is sanitized into shared SVG artwork, rendered by StakMotion with unique SVG IDs, viewport-paused one-pass playback and static reduced-motion fallbacks; its styling remains in src/styles.css to avoid collisions and inaccessible hidden artwork.
