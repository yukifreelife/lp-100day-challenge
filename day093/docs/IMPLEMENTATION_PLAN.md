# NemuNote Day093 Implementation Plan

## Objective
Rebuild the NemuNote v2 Japanese sleep app LP in `day093/` with React + Tailwind CSS, using the newly generated NemuNote v2 assets as the visual source. The target is a pixel-level close recreation of the provided LP reference while keeping the page as real, responsive DOM sections.

## Source Of Truth
- Full LP reference: `public/assets/nemunote-v2/sources/lp-reference.png`
- Section reference mockups: `public/assets/nemunote-v2/references/`
- Asset inventory and usage notes: `public/assets/nemunote-v2/README.md`

The references above define spacing, color, section order, typography tone, card density, decorative placement, and responsive behavior.

## Implementation Assets
Use `public/assets/nemunote-v2/curated/` first for production assets. The curated set includes app screen images, photos, store badges, QR assets, decorative PNGs, and selected icon-like graphics.

Only fall back to `extracted/` or `sources/` when a required reusable asset is missing from `curated/`, and document that choice in the implementation comments or handoff notes.

## Reconstruction Policy
Do not place full section screenshots from `references/` or `sources/lp-reference.png` into the rendered LP. Each section must be rebuilt with React components and Tailwind CSS utilities: layout grids, text, cards, buttons, pricing tables, FAQ rows, report panels, guide cards, and navigation.

Image usage is limited to pieces that cannot be faithfully or efficiently recreated with code:
- smartphone app screens and phone composites
- photographs
- App Store / Google Play badges
- QR codes
- decorative PNGs such as moons, stars, clouds, shields, or soft illustration accents

All section-level structure, copy, spacing, backgrounds, borders, and interactive states should be DOM/Tailwind, not flattened screenshots.

## Section Map
1. Hero: app value proposition, CTA badges, phone visual, soft sleep motifs
2. Features: sleep support feature cards and icon accents
3. Report: sleep score/report cards, charts, weekly report phone visual
4. Pricing: plan comparison and CTA area
5. Sleep Guide: article/photo cards and routine guidance
6. Download: app badges, QR, photo band, direct CTA
7. Privacy: privacy/security trust section
8. Support: support/contact reassurance section
9. FAQ: accordion-style common questions

Follow the section order and visual proportions visible in `references/` and `sources/lp-reference.png`.

## React + Tailwind Architecture
- Keep the app as a Vite React implementation in `day093/`.
- Use Tailwind CSS for all layout, color, spacing, responsive rules, and component states.
- Build reusable React components for header navigation, CTA buttons, section shells, cards, phone mock areas, pricing cards, FAQ items, and asset-backed decorations.
- Centralize asset path constants for `public/assets/nemunote-v2/curated/` to avoid scattered string literals.
- Use semantic section IDs so the sticky navigation can scroll to each rebuilt DOM section.

## Visual Matching Priorities
- Match the v2 reference palette: soft off-white base, mint/teal primary, peach/lilac accents, subtle borders, and calm dark text.
- Reproduce the reference section widths, vertical rhythm, card radii, shadows, and decorative density as closely as practical.
- Preserve Japanese LP readability on desktop and mobile.
- Keep mobile layout intentional rather than simply squeezed from desktop.

## Current Improvement Focus
The latest visual review found several mismatches against the NemuNote v2 mockups. Treat the following as the next implementation scope:

- Pricing: preserve the reference 3-column plan-card composition at medium widths where the current layout collapses to 1 column too early. Tune grid breakpoints, card widths, and inner text wrapping so the section keeps the mockup density without overflow.
- Report: realign the sleep report smartphone visual and metric cards to match the reference. The phone image, sleep score card, graph/card cluster, and surrounding spacing should read as one composed report area on desktop and as a deliberate stacked composition on mobile.
- Copy matching: audit the feature cards, pricing, download, and privacy sections against the mockup text. Update headings, short descriptions, CTA labels, and trust/privacy phrasing where the current DOM copy diverges.
- Store badges and QR: adjust rendered sizes, source selection, image-rendering treatment, and responsive constraints so App Store / Google Play badges and QR code do not appear enlarged, blurry, or uneven.
- Hero device visual: soften the phone treatment so the hero image does not look like a hard rectangle pasted onto the background. Prefer layered DOM/Tailwind treatment such as masks, rounded clipping, shadows, glows, nearby decorations, and background blending around the curated device asset.
- Asset policy: keep the full-section image ban in force. Do not use `references/` images or `sources/lp-reference.png` as rendered section backgrounds or screenshots. Rebuild changes with DOM/Tailwind and curated reusable assets only.

## Motion And Interaction
- Smooth section scrolling from the header navigation.
- FAQ rows should be interactive if the current app structure supports it.
- Add restrained motion only when it supports the sleep-app mood: gentle floating decorations, soft CTA affordance, and subtle card reveal.
- Respect `prefers-reduced-motion`.

## QA Gates
- Build/check the React app with the existing project scripts.
- Confirm rendered source does not use `references/` or `sources/lp-reference.png` as visible section images.
- Compare the desktop page against `sources/lp-reference.png` and the section files in `references/`.
- Use Browser Use for a desktop visual check.
- Use Browser Use for a mobile/narrow viewport visual check.
- Verify header navigation and FAQ interaction in the browser.
- Confirm curated assets render correctly and are not distorted.

## QA Criteria For Current Fixes
- Pricing keeps a 3-card horizontal comparison at the mockup's medium/desktop range, with no card overlap, clipped CTA text, or awkward single-column collapse.
- Report section visually matches the reference hierarchy: phone image, score/metric cards, and chart-like panels align as a composed cluster on desktop and remain readable on mobile.
- Feature, pricing, download, and privacy copy are checked against the mockup and no obvious placeholder or rewritten wording remains.
- App Store / Google Play badges and QR render crisp at their displayed size, keep their aspect ratios, and do not dominate the CTA area.
- Hero phone image feels integrated with the surrounding sleep-themed art direction rather than appearing as a standalone rectangular image block.
- No visible section is implemented by placing full-section reference imagery into the page.
- Browser Use checks cover at least desktop and mobile/narrow viewports after the fixes.

## Worker Acceptance Flow
1. Read the current implementation and references before editing; do not assume the previous layout decisions are final.
2. Update only files assigned to the current worker unless explicitly authorized otherwise.
3. After edits, run the available build/check command for `day093/`.
4. Start or reuse the local preview server as appropriate, then inspect with Browser Use.
5. Capture visual acceptance notes for desktop and mobile/narrow checks, especially pricing columns, report composition, badges/QR sharpness, hero device blending, and copy matching.
6. If another worker changes nearby files during the task, keep their edits and adapt only the owned changes.

## Collaboration Rule
Multiple workers may edit this codebase. Keep implementation changes scoped to assigned files, do not revert other workers' edits, and preserve protected files under the workspace rules.
