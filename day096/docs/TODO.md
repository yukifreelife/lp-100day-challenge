# Day096 TODO

## 1. Plan and References

- [x] Reframe the implementation plan for the current multi-worker re-execution.
- [x] Remove deleted CLI-imagegen assumptions from planning docs.
- [x] Replace the older OpenAI API CLI error note so it is not listed as an unresolved blocker.
- [x] State built-in `image_gen` as the preferred asset-generation route.
- [x] Record that current assets use Codex built-in `image_gen` output, not the deleted CLI-side imagegen skill.
- [x] Keep documentation scoped to non-protected day096 files.
- [x] Orchestrator appended final detailed QA metrics after the last review pass.

## 2. Assets

- [x] Required visual assets were generated from Codex built-in `image_gen` outputs.
- [x] The removed CLI-side imagegen skill was not used for the current asset set.
- [x] Transparent key and stamp assets were generated on chroma-key backgrounds and converted to RGBA transparency with local processing equivalent to system imagegen `remove_chroma_key.py`.
- [x] Extracted mockup-derived PNG icon assets from `day096/mockups/yado-review-lab-fullpage-reference.png` and preserved source/runtime copies under `mockup-icons/`.
- [x] Added transparent safety padding to mockup-derived PNG icons so glyphs no longer touch the PNG canvas edge in fixed-size UI slots.
- [x] Replaced the execution page's former SVG component icon usage with mockup-derived transparent PNG `<img>` assets.
- [x] Source/generated assets are present under `day096/assets/generated/`.
- [x] Runtime assets are present under `day096/public-optimized/assets/`.

## 3. Scaffold and Content

- [x] Vite + React + Tailwind scaffold is in place.
- [x] `day096/src/data/siteData.js` matches the YADO Review Lab IA and Japanese copy direction.
- [x] Runtime assets resolve through the Vite/public asset path.
- [x] Relevant implementation checks were completed outside this documentation pass.

## 4. React UI

- [x] Header and hero are implemented.
- [x] Target-owner and diagnosis sections are implemented.
- [x] Metrics and before/after sections are implemented.
- [x] Owner-effort, scope, trust, pricing, and final CTA sections are implemented.
- [x] Semantic section structure and CTA/link behavior are preserved.
- [x] The LP is implemented as coded UI rather than a single pasted mockup image.
- [x] `day096/src/components/Icons.jsx` has been removed, and the runtime landing page uses mockup-derived PNG `<img>` assets instead of imported icon components.
- [x] Radar chart remains as a CSS-built figure because it is not SVG.

## 5. Styling and Motion

- [x] Palette, spacing, borders, radius, shadows, and dense section rhythm are aligned to the mockup direction.
- [x] Reveal, chart, key, stamp, and hover animations are implemented.
- [x] Desktop/tablet/mobile responsive layouts are implemented.
- [x] Reduced-motion fallback is implemented.
- [x] Final visual drift review completed with Browser Use and supplemental desktop/tablet/mobile screenshots.
- [x] Image cropping pass completed: hero/listing photos now render in natural aspect without `object-fit: cover` cropping, and desktop dashboard card was repositioned to avoid overlapping the listing card.

## 6. QA and PDCA

- [x] Local dev server was opened at `http://127.0.0.1:8096/` by the orchestrator.
- [x] Browser Use confirmed the first view renders.
- [x] Browser Use confirmed no console errors in the orchestrator session.
- [x] Screenshots or visible-section evidence are recorded in `day096/qa-screenshots/`.
- [x] Current findings are recorded in `day096/docs/EVALUATION_REPORT.md`.
- [x] Orchestrator added final detailed numeric QA results.
- [x] Final QA pass closed after the post-fix hero review.
- [x] Static validation worker confirmed `npm run build`, no runtime SVG references, and mockup-derived PNG icon assets available for runtime use.
- [x] After-cycle Browser Use confirmed `http://127.0.0.1:8096/` display, major copy, CTA, Before/After, pricing, and 0 console errors.
- [x] After-cycle Playwright supplemental checks confirmed desktop 1440x1100 and mobile 390x1200 `overflowX=false`, `incompleteImages=0`, `totalImages=82`, and `mockupIconCount=78`.
- [x] After-cycle screenshots were saved: `desktop-after-cycle-first-view.png`, `desktop-after-cycle-full.png`, `mobile-after-cycle-first-view.png`, and `mobile-after-cycle-full.png`.
- [x] Image-fix screenshots were saved: `image-fix-desktop-first-view.png`, `image-fix-desktop-full.png`, `image-fix-mobile-first-view.png`, and `image-fix-mobile-full.png`.
- [x] Image-fix verification confirmed desktop/mobile `overflowX=false`, `incompleteImages=0`, `totalImages=82`, and mockup icon `edge_touch_count=0`.
- [x] Build and static checks passed: `npm run build`, `node --check day096/src/data/siteData.js`, and `node --check script.js`.
- [x] Final Browser Use QA after the mockup-derived PNG replacement is complete.

## 7. Completion

- [x] `day096/README.md` updated for the current asset and QA status.
- [x] `day096/docs/TODO.md` updated for the current re-execution status.
- [x] `day096/docs/EVALUATION_REPORT.md` updated for the current re-execution status.
- [x] `day096/docs/IMPLEMENTATION_SUMMARY.md` updated for the current re-execution status.
- [x] Protected `lp100-progress/daily/day096.md` was read before editing and updated with the mockup-derived RGBA PNG replacement status.
- [x] Root `script.js` contains the Day096 portfolio entry.
- [x] Final checks pass; Browser Use QA for the PNG replacement is complete.
