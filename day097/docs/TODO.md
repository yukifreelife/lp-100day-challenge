# Day097 TODO

## 1. Plan and References

- [x] Read repo rules and protected path guidance.
- [x] Read day097 design direction and generated mockup manifest.
- [x] Inspect all four generated UI mockups.
- [x] Create implementation plan.
- [x] Create TODO list.

## 2. Image Assets

- [x] Generate hero assistant visual from day097 mockup references.
- [x] Generate desk workflow visual from day097 mockup references.
- [x] Generate assistant illustration on chroma-key background.
- [x] Generate icon sheet on chroma-key background.
- [x] Convert assistant illustration to transparent PNG.
- [x] Convert icon sheet to transparent PNG and crop 12 individual icon files.
- [x] Copy runtime assets to `day097/public-optimized/assets/`.
- [x] Document asset pipeline in `day097/design/asset-manifest.md`.

## 3. Scaffold and Data

- [x] Worker A creates React + Tailwind + Vite scaffold.
- [x] Worker A creates `siteData.js` with all page content and asset references.
- [x] Orchestrator reviews Worker A output.
- [x] Worker A fixes scaffold/data issues if requested.

## 4. React UI

- [x] Worker B builds reusable layout, header, buttons, cards, icon image component, CTA sections, and form controls.
- [x] Worker B builds home, service, pricing, and contact pages.
- [x] Orchestrator reviews Worker B output.
- [x] Worker B fixes component/page issues if requested.

## 5. Styling and Motion

- [x] Worker C builds Tailwind/CSS foundation and page-specific styling.
- [x] Worker C implements desktop and mobile responsive layouts.
- [x] Worker C implements rich but restrained animation.
- [x] Orchestrator reviews Worker C output.
- [x] Worker C fixes styling/motion issues if requested.

## 6. QA and PDCA

- [x] Install dependencies.
- [x] Run production build.
- [x] Start local dev server.
- [x] Browser checks performed with Browser Use where available, with Playwright snapshot fallback.
- [x] Worker D saves screenshots. Final desktop/mobile screenshots were saved with Playwright MCP after resuming QA.
- [x] Evaluation report and implementation summary written.
- [x] Orchestrator reviews QA report and screenshots.
- [x] Workers fix findings until remaining gaps are minor or explicitly blocked.

## 7. Completion

- [x] Final build passes.
- [x] Browser route checks pass for desktop and mobile snapshots.
- [x] Asset reference check passes with 15 runtime asset references and 0 missing files.
- [x] Console error count is zero.
- [x] Final reports are up to date.
- [x] Hero title wrapping issue found in screenshot QA was fixed and rechecked.
- [x] Re-evaluation improvements implemented: route metadata, OGP/Twitter Card, JSON-LD, image dimensions, mobile tap targets, contact form status, and mobile home hero image crop.
