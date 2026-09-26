# CTA rhythm update

## Changes
- Keep the complete Stak CTA only in the homepage hero.
- Replace The Thread CTA with the specified 30px inline sentence and tracked magenta SMS pill.
- Replace Pricing CTA with the two tracked buttons and the specified short offer line, without QR or consent copy.
- Replace Questions CTA with a full-width dark closing section containing the specified headline, two buttons, and cream consent copy, without QR.
- Preserve the mobile sticky text bar and all existing SMS and call destinations.

## Technical details
- Add small homepage CTA variants beside the shared CTA component so links retain existing analytics events and accessibility.
- Use only existing Jurni design tokens and type utilities, with responsive layouts that remain single-column on narrow phones.
- Verify the homepage at 390px and desktop widths, including links, overflow, and current error logs.
