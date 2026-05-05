# day100 v2 Implementation Plan

## Goal

Rebuild the existing React + Tailwind site from the v2 mockups under `day100/mockups/v2/`.

The new site must target a specific persona: a reservation-based solo service owner whose LINE replies, menus, booking flow, day-of guidance, and continuation offers are scattered. The UI must follow the `受付導線のカルテ棚` concept rather than the earlier generic business-map direction.

## Source of Truth

- `day100/DESIGN.md`
- `day100/design/persona-v2.md`
- `day100/design/tone-and-manner.md`
- `day100/design/mockup-prompts-v2.md`
- `day100/mockups/v2/README.md`
- `day100/mockups/v2/home-fullpage-reception-flow.png`
- `day100/mockups/v2/pages/service-menu-reception-flow.png`
- `day100/mockups/v2/pages/flow-reception-route.png`
- `day100/mockups/v2/pages/cases-before-after-reception-flow.png`
- `day100/mockups/v2/pages/pricing-diagnostic-depth.png`
- `day100/mockups/v2/pages/contact-diagnostic-form.png`
- `day100/mockups/v2/pages/faq-reception-files.png`

## Hard Constraints

- Stack: React + Tailwind CSS + Vite.
- All visible user-facing text must be Japanese.
- Do not paste any mockup as a full-page background.
- Rebuild the UI with DOM/CSS and separate generated assets.
- Use `/image-gen` image-to-image outputs as reusable partial assets where visual fidelity benefits from a bitmap.
- Icons used as bitmap assets must be transparent PNG/WebP. Simple UI marks may be DOM/CSS or inline SVG.
- Preserve legal/privacy placeholders; do not fabricate operator information, testimonials, reviews, awards, guarantees, or real results.
- Browser checks must use Browser Use with the Codex in-app browser. Supplemental Playwright is allowed only to fill gaps.

## Fidelity Strategy

| Mockup Element | Implementation Method |
|---|---|
| Page background, section spacing, dividers | CSS/Tailwind |
| Header, nav, CTA buttons | React + Tailwind |
| Large Japanese headlines | CSS typography using `Shippori Mincho` / Japanese serif stack |
| Reception flow board | Generated transparent/standalone asset, with fallback DOM board where needed |
| File shelves, cards, sticky notes | DOM/CSS; use generated assets for hero/contact visuals |
| LINE memo, menu card, booking calendar, day-of guide | DOM/CSS in pages; optional generated visual asset in hero/contact |
| Service cards | DOM/CSS with file tabs and route line |
| Flow route circles and arrows | DOM/CSS or inline SVG |
| Contact form | Existing accessible React form adapted to v2 copy and layout |
| FAQ accordion | Existing accessible accordion adapted to v2 categories/copy |
| Legal/privacy | Existing routes retained with v2 visual shell |

## Pages

Hash routes:

- `#home`: full LP with hero, problem cards, route map, outputs, fit/not-fit, CTA
- `#service`: reception categories and deliverable cards
- `#flow`: process from messy notes to usable reception flow
- `#cases`: illustrative before/after samples only, no fake testimonials
- `#pricing`: diagnostic-depth pricing cards and comparison
- `#contact`: diagnostic consultation form
- `#faq`: anxiety-specific FAQ
- `#legal`: legal placeholder page
- `#privacy`: privacy placeholder page

## Generated Assets

Expected runtime directory:

```text
day100/public/assets/v2/
```

Minimum assets:

- `reception-flow-board.png` / `reception-flow-board.webp`
- `reception-file-box.png` / `reception-file-box.webp`
- `contact-desk-files.png` / `contact-desk-files.webp`

The assets must be generated from the v2 mockup direction, saved separately, and referenced through structured asset data in `src/data/siteData.js`.

## Worker Ownership

Workers must use reasoning effort `low`. They are not alone in the codebase and must not revert edits made by others.

### Worker A: shell, tokens, shared components

Owns:

- `src/index.css`
- `src/App.jsx`
- `src/data/siteData.js`
- `src/components/UI.jsx`
- `src/components/MapVisuals.jsx`
- `src/components/Layout.jsx`

Tasks:

- Replace v1 palette and motifs with v2 tokens.
- Add v2 structured data for nav, hero, service categories, flow steps, cases, pricing, FAQ, assets.
- Add reusable components for reception board, file card, route step, output card, and safety/check panels.
- Preserve analytics wrapper and accessible form/accordion behavior.

### Worker B: top/service/flow/cases pages

Owns:

- `src/pages/Home.jsx`
- `src/pages/Service.jsx`
- `src/pages/Flow.jsx`
- `src/pages/Cases.jsx`

Tasks:

- Rebuild these pages using v2 mockups.
- Use concrete booking-flow copy.
- Do not add fake reviews, customer voices, or unsupported results.
- Use generated assets only as partial visuals.

### Worker C: pricing/contact/faq/legal/privacy

Owns:

- `src/pages/Pricing.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Faq.jsx`
- `src/pages/Legal.jsx`
- `src/pages/Privacy.jsx`
- `index.html`
- `public/ogp.svg`

Tasks:

- Rebuild pricing, contact, and FAQ to match v2 mockups.
- Keep legal/privacy placeholders but adapt shell and copy to v2.
- Update SEO/OGP/JSON-LD to v2 positioning without fabricating business details.
- Preserve form validation and completion UX.

## Orchestrator Responsibilities

- Generate and transparent-process image assets before coding.
- Review each worker output.
- Run `npm run build` after each integration phase.
- Use Browser Use to inspect routes and mobile states.
- Send recursive repair requests to the same worker when output is below standard.
- Update `day100/docs/TODO_V2.md`, `day100/docs/REDESIGN_REPORT_V2.md`, and `lp100-progress/daily/day100.md`.

## Acceptance Criteria

- Build passes with `npm run build`.
- All nine hash routes render.
- The first viewport visibly matches the v2 home mockup: reception-flow board, concrete booking-flow headline, coral CTA, file-tab motif.
- No full mockup image is used as a background or direct page screenshot.
- Runtime assets are under `public/assets/v2/` and referenced as partial assets only.
- Mobile layout has no horizontal overflow at 390px width.
- Contact form shows validation errors and completion state.
- FAQ accordion has ARIA linkage.
- SEO metadata is updated to the v2 positioning.
- Remaining publication risks are documented.
