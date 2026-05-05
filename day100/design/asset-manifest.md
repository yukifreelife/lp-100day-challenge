# Asset Manifest

## Reference Mockups

| Purpose | Path |
|---|---|
| Top LP mockup | `day100/mockups/michishirube-fullpage-ui-mockup.png` |
| Service menu page | `day100/mockups/pages/service-menu.png` |
| Flow page | `day100/mockups/pages/flow.png` |
| Cases / before-after page | `day100/mockups/pages/cases-before-after.png` |
| Pricing page | `day100/mockups/pages/pricing.png` |
| Contact page | `day100/mockups/pages/contact.png` |
| FAQ page | `day100/mockups/pages/faq.png` |

## Runtime Assets

These assets are intended for the React app under `day100/public/assets/generated/`.

| Asset | Runtime Path | Source | Notes |
|---|---|---|---|
| Business map board | `/assets/generated/business-map-board.png` | `/image-gen` | Used for hero and map-board visual sections. Not transparent. |
| Compass | `/assets/generated/compass.png` | `/image-gen` + chroma-key removal | Transparent PNG. Use for compass decorations, CTA panels, and section accents. |
| Route pins | `/assets/generated/route-pins.png` | `/image-gen` + chroma-key removal | Transparent PNG sheet with three pins. Use sparingly; CSS pins may be used for small inline markers. |
| Sticky notes | `/assets/generated/sticky-notes.png` | `/image-gen` + chroma-key removal | Transparent PNG. Use for hero/problem/contact decorative notes. |
| Consultant | `/assets/generated/consultant.png` | `/image-gen` + chroma-key removal | Transparent PNG. Use for consultation, FAQ, or pricing panels. |

## Raw Generated Sources

Raw chroma-key files are preserved under:

```text
day100/assets/generated/raw/
```

Do not reference raw chroma-key files in the runtime app.

## Implementation Rules

- Do not use full-page mockups as backgrounds.
- Use runtime assets only as partial images.
- Prefer DOM/CSS for layout, cards, text, forms, route lines, FAQ, and pricing tables.
- Use generated assets to reproduce recurring visual objects from the mockups.
