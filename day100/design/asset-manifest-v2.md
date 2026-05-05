# Asset Manifest v2

## Runtime Assets

| Asset | Source | Final PNG | WebP | AVIF | Notes |
|---|---|---|---|---|---|
| Reception flow board | `/image-gen` from v2 home/service direction with chroma-key background | `public/assets/v2/reception-flow-board.png` | `public/assets/v2/reception-flow-board.webp` | `public/assets/v2/reception-flow-board.avif` | Hero and route board visual. Transparent PNG. |
| Reception file box | `/image-gen` from v2 service/contact direction with chroma-key background | `public/assets/v2/reception-file-box.png` | `public/assets/v2/reception-file-box.webp` | `public/assets/v2/reception-file-box.avif` | Footer/CTA or service shelf visual. Transparent PNG. |
| Contact desk files | `/image-gen` from v2 contact direction with chroma-key background | `public/assets/v2/contact-desk-files.png` | `public/assets/v2/contact-desk-files.webp` | `public/assets/v2/contact-desk-files.avif` | Contact page hero visual. Transparent PNG. |

## Raw Keyed Sources

Raw chroma-key outputs are kept for traceability:

- `assets/v2/generated/raw/reception-flow-board-key.png`
- `assets/v2/generated/raw/reception-file-box-key.png`
- `assets/v2/generated/raw/contact-desk-files-key.png`

## Transparency

The final PNG files were processed with:

```text
/Users/yuuki/.codex/skills/.system/imagegen/scripts/remove_chroma_key.py
```

All final PNG files are RGBA images. WebP derivatives were generated with `cwebp`; AVIF derivatives were generated with `avifenc`.

Runtime delivery order is:

```text
AVIF -> WebP -> PNG
```

## Usage Rules

- Use these as partial assets only.
- Do not use any v2 mockup as a full-page background.
- Do not crop these assets into claims that imply real client work, testimonials, or verified results.
- Keep source prompts and raw keyed files for future regeneration.
