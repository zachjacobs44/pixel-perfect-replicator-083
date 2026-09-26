# Master build: complete Jurni GLP site

All copy reproduced character for character from the master spec. No em dashes. "doctor" removed everywhere except the unchanged footer legal block.

## Homepage (in order)
1. **Hero**: new default eyebrow "YOUR PROVIDER SENT YOU HERE.", new headline, sub, three new phone messages, new caption. Layout, StakCTA and attribution unchanged.
2. **Meet Stak**: new label/headline/intro; four cards (2x2 desktop, equal heights, 30px headlines) plus the full-width white "WHAT STAK ISN'T" card with new text.
3. **The Thread**: new headline and sub; all eight chapters' labels, lines and messages replaced (chapter 8 becomes "IT TEXTS FIRST"). Pinned, scroll-synced phone kept. Inline "Anything on your mind. Text Stak." kept.
4. **What Stak Does** (new): six cards in the colour order given, 1/2/3 columns, 26px headlines; then "Works with every GLP-1. Injection or pill." and a slow scrolling medication row (pauses on hover; static and wrapping with reduced motion).
5. **Your Page** (new): browser-frame mock drawn in code (dots, jurniglp.com/you, wordmark + practice name from attribution, default "Riverside Health"), four tiles with cyan sparkline, seven protein dots, "On track" chip, up-next list; Stak bubble; yellow INSIGHT card; caption and closing line.
6. **Pricing** (new): label, headline, body, $29.99 white card and $300 cyan card, then the existing two buttons and line.
7. **Questions** (new): nine-item accordion, one open at a time, chevron drawn in code rotating with the spring ease, hairline dividers, "Privacy Policy" linked to /privacy.
8. **Closing card**: headline changed to "Your provider gave you the number. This is the number."; section property "closing".

Shared bubble, photo and call-card styles kept consistent across hero, thread and Page mock.

## /practices (behind existing gate)
Full page per spec at max width 820px: intro, three numbered introduction cards, four benefit cards, two provider-type cards, yellow "WHAT IT ISN'T" card, cost line, numbered getting-started list, "Download the referral card" (opens /card in new tab) and "Talk to us" (mailto:practices@jurniglp.com).

## /card (new, noindex, no header/footer)
Printable 3.5 x 2 inch card, front and back on separate pages, print stylesheet, "Print or save as PDF" button hidden when printing. Practice name from ?from=, default "Your practice". Ink on paper; magenta only on the avatar. QR encodes sms:+15625544571.

## 404
Headline becomes "That page isn't here. Stak is."

## Spec conflicts, resolved as follows
- /card practice name is specified at 12px; the site rule is nothing below 14px. I will use 14px on screen and note it. (The printed card itself is physical; tell me if you want 12px there only in print.)
- "Talk to us" uses practices@jurniglp.com as written in the spec, although the site contact email is contact@jurniglp.com elsewhere.
- Photo message keeps the "dinner photo" placeholder until salmon-dinner.jpg is uploaded.

## Technical details
- New components in src/components/jurni/: WhatStakDoes, YourPage, Pricing, Questions, Bubbles (shared). Update HomeHero, MeetStak, TheThread, HomePage, StakCTA (ClosingCTA headline + section), analytics CtaSection adds "closing".
- Hide Header/Footer/StickyTextBar on /card in __root.tsx; new src/routes/card.tsx with @media print and @page size 3.5in 2in.
- Page mock reads attribution via referring-practices helpers in useEffect (hydration-safe).
- Marquee via @utility/keyframes in styles.css with reduced-motion override.

## Acceptance
Run all eight checks with Playwright (copy/doctor search, 390px no overflow, thread pin/sync, ?from=riverside on hero/Page/card, analytics events per section logged, /card print PDF page count and size, 14px floor, wordmark/avatar present) and report results plus any deviations.
