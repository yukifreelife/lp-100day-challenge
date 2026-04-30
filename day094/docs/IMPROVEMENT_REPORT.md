# SONAE BOX Improvement Report

Date: 2026-04-30

## Improvement Flow

The improvement flow was run from the findings in `docs/EVALUATION_REPORT.md`.

Focus areas:

- Accessibility
- SEO
- Security / privacy baseline
- Performance
- Visual regression prevention

## Changes Made

### Accessibility

- Removed nested `main` landmarks by keeping the global shell `main` and changing page-level wrappers to non-landmark containers.
- Added descriptive alt text for product, plan, article, case-study, app, support, and quality-management images.
- Added `loading` and `decoding` hints to routed page images.
- Added accessible names to checkout and contact form fields with `aria-label`.
- Added `aria-expanded="false"` to FAQ buttons so the current closed state is explicit.

### SEO

- Added canonical URL.
- Added OGP metadata.
- Added Twitter Card metadata.
- Added JSON-LD structured data for the SONAE BOX service.
- Added route-specific document title and description updates in `src/App.jsx`.

### Security / Privacy Baseline

- Added `referrer` policy.
- Added a conservative meta Content Security Policy compatible with the local Vite dev server.

### Performance

- Generated WebP versions of generated PNG assets.
- Added an optimized public asset directory: `public-optimized/`.
- Switched Vite `publicDir` to `public-optimized` so production builds do not copy the heavy PNG source set.
- Added `picture` / `source[type="image/webp"]` wrappers for page images while preserving image semantics.

## Verification

- `npm run build` passed.
- Build size changed from about `44 MB` / `46 MB` during the first evaluation pass to `2.5 MB`.
- Browser Use / Playwright confirmed the plan page renders after optimization.
- Browser Use route audit confirmed all 13 routes render:
  - H1
  - header
  - footer
  - route-specific title
- WebP sources were detected on visual pages.

## Updated Scores

| Area | Before | After | Notes |
| --- | ---: | ---: | --- |
| Overall | 86 | 92 | Major technical gaps were addressed without changing the visual direction. |
| Accessibility | 72 | 84 | Landmark nesting, image descriptions, FAQ state, and form field names improved. |
| SEO | 70 | 87 | OGP, Twitter Card, canonical, JSON-LD, and route-specific metadata added. |
| Performance | 68 | 90 | Production asset footprint reduced to `2.5 MB`; WebP is now the served format. |
| Security / Privacy | 78 | 84 | Referrer policy and CSP baseline added. |
| UI / Visual Design | 88 | 88 | Visual layout was intentionally preserved. |
| CRO | 82 | 83 | CTA and route metadata improved slightly; deeper form/FAQ interactivity remains future work. |

## Remaining Recommendations

- Replace legal sample text before any public deployment.
- Add real FAQ accordion behavior.
- Add real diagnosis calculation state.
- Wire checkout/contact forms or clearly mark them as demo-only.
- Add a mobile navigation menu if this becomes a real multipage service site.
