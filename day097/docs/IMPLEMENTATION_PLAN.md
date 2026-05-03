# Day097 Implementation Plan

## Project

- Brand: たのめる秘書室
- Theme: 日本向けオンライン秘書サービスLP
- Stack: React + Tailwind CSS + Vite
- Target: 事前生成した4枚のUIモックを参照し、コードとして再構築する。
- Reference mockups:
  - `day097/mockups/pages/home-fullpage-ui.png`
  - `day097/mockups/pages/service-detail-ui.png`
  - `day097/mockups/pages/pricing-ui.png`
  - `day097/mockups/pages/contact-form-ui.png`
- Execution mode: Orchestrator + low-reasoning workers. Workers are not alone in the codebase and must not revert or overwrite another worker's changes.

## Reference Fidelity Policy

Pixel-level fidelity is the target, but the implementation must remain coded UI, not a single pasted mockup image.

Critical visual targets:

- Warm white and soft cream page base with orange CTA emphasis.
- Header with orange smile mark, Japanese nav, and prominent orange consultation CTA.
- Hero first view with large Japanese headline, task chips, orange CTAs, assistant/workflow visual on the right.
- Repeated cream cards with thin orange-tinted borders, 8px radius, and soft shadows.
- Generated transparent PNG icons and illustration assets are used instead of inline SVG icon components.
- Japanese copy must be natural, readable, and not overlap at desktop or mobile widths.
- Multi-page structure should match the generated secondary mockups: service detail, pricing, and contact form.

## Asset Policy

Assets were generated via the `/image-gen` skill using the day097 UI mockups as references.

Runtime assets:

- `day097/public-optimized/assets/remote-assistant-hero.png`
- `day097/public-optimized/assets/desk-workflow-hero.png`
- `day097/public-optimized/assets/assistant-illustration-transparent.png`
- `day097/public-optimized/assets/icons/*.png`

Source assets:

- `day097/assets/generated/`
- `day097/assets/generated/icons/`

Transparent assets:

- `assistant-illustration-transparent.png` was produced from chroma-key output with the system imagegen helper.
- The icon sheet was produced by image-to-image generation, chroma-key removal, and local crop/export to 12 RGBA PNG icons.

## Information Architecture

1. Home / LP
   - Hero: 「その事務作業、今日からひとりで抱えなくて大丈夫。」
   - Pain points: mail, schedule, documents, booking, research.
   - Service cards: mail/chat, schedule, documents, booking, research, invoice.
   - 3-step flow: consult, request, confirm.
   - Trust/testimonials: friendly but careful work.
   - Pricing teaser and FAQ.
   - Final CTA.

2. Service detail
   - Hero: 「頼めること、ぜんぶ見える化しました」
   - Task category chips.
   - 8 service cards.
   - Example requests.
   - Can / cannot request table.
   - CTA band.

3. Pricing
   - Hero: 「まずは1件から、気軽に頼めます」
   - 3 pricing cards: spot, light, standard.
   - Included features.
   - Pricing FAQ.
   - CTA band.

4. Contact
   - Hero: 「まずは15分だけ、気軽に相談しませんか？」
   - Large low-pressure consultation form.
   - Side panel: consultation flow and privacy note.
   - FAQ and trust chips.

## Animation Plan

- Hero copy and visual fade/slide reveal on first load.
- Floating task bubbles in hero visuals.
- Service cards and pricing cards hover lift.
- CTA hover lift and icon slide.
- Step cards reveal with slight stagger.
- Form focus animation and selected option states.
- Sticky header blur and subtle shadow.
- Respect `prefers-reduced-motion`.

## Worker Ownership

Worker A: scaffold and data

- Owns:
  - `day097/package.json`
  - `day097/package-lock.json`
  - `day097/index.html`
  - `day097/vite.config.js`
  - `day097/postcss.config.js`
  - `day097/tailwind.config.js`
  - `day097/src/main.jsx`
  - `day097/src/App.jsx`
  - `day097/src/data/siteData.js`
- Must not edit CSS, page components, docs, assets, or QA screenshots.

Worker B: React pages and components

- Owns:
  - `day097/src/components/`
  - `day097/src/pages/`
- Must consume `siteData.js` and runtime assets from `public-optimized/assets/`.
- Must not edit `src/index.css` except by requesting Worker C changes.

Worker C: styling, motion, responsive fidelity

- Owns:
  - `day097/src/index.css`
- Must reproduce the four mockups' palette, spacing, header, card rhythm, CTA states, mobile layout, and animation behavior.

Worker D: QA and reports

- Owns:
  - `day097/docs/EVALUATION_REPORT.md`
  - `day097/docs/IMPLEMENTATION_SUMMARY.md`
  - `day097/qa-screenshots/`
- Must use Browser Use for visual checks when available. If Browser Use is not exposed, record that blocker and use Playwright browser tools as the closest browser fallback.

Orchestrator:

- Owns this plan, TODO, asset manifest, worker review, correction requests, final checks, and dev server management.
- Reviews each worker's output before moving to the next phase.

## PDCA Loop

- Plan: lock implementation plan, TODO, asset manifest, and ownership.
- Do: workers implement only assigned files.
- Check: orchestrator reviews files and runs build/static checks; QA worker checks browser visuals.
- Act: orchestrator sends focused correction requests to the same worker until the output reaches the reference criteria or a documented blocker remains.

## Verification

- `npm install`
- `npm run build`
- Browser visual verification:
  - Desktop first view and full page for `/`
  - `/service`, `/pricing`, `/contact`
  - Mobile width check
  - Console error and broken-image check
  - Screenshots saved under `day097/qa-screenshots/`

## Completion Outputs

- Coded React + Tailwind site under `day097/`
- Asset manifest under `day097/design/asset-manifest.md`
- Implementation summary under `day097/docs/IMPLEMENTATION_SUMMARY.md`
- Evaluation report under `day097/docs/EVALUATION_REPORT.md`
- QA screenshots under `day097/qa-screenshots/`
