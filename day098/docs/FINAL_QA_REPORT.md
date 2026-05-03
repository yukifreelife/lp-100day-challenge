# day098 Final QA Report

## Scope

仮LPのため公開URL差し替えと実GA4 ID投入は対象外とし、Browser Use QA、Lighthouse、Core Web Vitals、favicon、robots、追加アクセシビリティ修正を実施した。

## Browser Use QA

- URL: `http://127.0.0.1:5173/#top`
- Title: `しろとはちのひなた時間`
- Hero text: Pass
- Main visual alt presence: Pass
- Fictional LP note: Pass
- Console errors / warnings: 0
- Top screenshot: `qa-screenshots/browser-use-final-top.png`
- Menu screenshot: `qa-screenshots/browser-use-menu-open.png`

## Lighthouse

Production preview target: `http://127.0.0.1:4173/`

| Category | Score |
|---|---:|
| Performance | 99 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## Core Web Vitals / Metrics

| Metric | Result |
|---|---:|
| LCP | 2.0s |
| CLS | 0 |
| TBT | 0ms |
| TTI | 2.0s |
| Speed Index | 1.2s |
| FCP | 1.2s |

## Fixes From Lighthouse

- Added `public/robots.txt`.
- Fixed low-contrast active filter color.
- Darkened small CTA red for AA contrast.
- Switched low-contrast text accents to a darker paw text token.
- Adjusted visible label / accessible name mismatches.
- Added favicon and touch icons.

## Remaining Notes

- `canonical`, `og:url`, JSON-LD URL remain local by design because this is a mock LP.
- GA4 remains `G-PLACEHOLDER` by design because this is a mock LP.
