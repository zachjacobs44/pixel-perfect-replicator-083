# Homepage hero and Meet Stak

## Changes
- Add a single practice lookup seeded with Riverside Health, supporting `?from=riverside`, `/riverside`, and 30-day browser remembrance while rejecting unknown slugs.
- Replace the hero placeholder with the supplied eyebrow, headline, subhead, unchanged full hero CTA, and an animated code-built Stak phone conversation.
- Replace the Meet Stak placeholder with the supplied introduction, four named color cards, and the full-width “WHAT STAK ISN'T” card.
- Add the homepage social preview to the contact page and verify wordmarks throughout.
- Leave every approved CTA variant after the hero unchanged.

## Technical details
- Use one browser-safe practice data module and a client-side attribution helper shared by `/` and the matching `/$slug` route.
- Keep all styling within the existing Jurni tokens and shared card components.
- Add one-time staggered message animation with a reduced-motion fallback.
- Verify exact copy, attribution persistence/default behavior, one full hero CTA, desktop hero height, 390px button visibility, minimum text size, wordmarks, and horizontal overflow.
