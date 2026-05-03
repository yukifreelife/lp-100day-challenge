# Day096 Asset Manifest

## Scope

- Worker: A2
- Brand: YADO Review Lab
- Reference mockup: `day096/mockups/yado-review-lab-fullpage-reference.png`
- Owned output directories:
  - `day096/assets/generated/`
  - `day096/public-optimized/assets/`

## Method

- Used Codex built-in `image_gen` outputs provided by the orchestrator.
- Did not use the deleted CLI imagegen path at `/Users/yuuki/.codex/skills/imagegen/`.
- Copied the opaque hero and listing-collage outputs into the generated asset directory, then stored optimized runtime copies under `day096/public-optimized/assets/`.
- Converted the brass key and vermilion stamp chroma-key sources to transparent PNGs with the system helper:
  - `/Users/yuuki/.codex/skills/.system/imagegen/scripts/remove_chroma_key.py`
  - Options: `--auto-key border --soft-matte --transparent-threshold 12 --opaque-threshold 220 --despill --force`
- Mockup-derived transparent PNG icons are documented separately in `day096/design/mockup-icon-manifest.md`.

## Source Files

| Asset | Built-in imagegen source |
| --- | --- |
| Kominka room hero | `/Users/yuuki/.codex/generated_images/019de149-4ba3-7c20-97d3-34d31d251a9e/ig_0673a06759d48d530169f42a4805908191906c1b023911acfb.png` |
| Listing collage | `/Users/yuuki/.codex/generated_images/019de149-4ba3-7c20-97d3-34d31d251a9e/ig_0673a06759d48d530169f42a7e8db48191ba64d8ee3dc96bac.png` |
| Brass key chroma source | `/Users/yuuki/.codex/generated_images/019de149-4ba3-7c20-97d3-34d31d251a9e/ig_0673a06759d48d530169f42aadd0a881918e1cdc943a6d7c07.png` |
| Vermilion stamp chroma source | `/Users/yuuki/.codex/generated_images/019de149-4ba3-7c20-97d3-34d31d251a9e/ig_0673a06759d48d530169f42ad7a6808191b0f4e343999d94a6.png` |

## Final Assets

| Asset | Generated file | Runtime file | Source size | Runtime optimized size | Alpha | Handling |
| --- | --- | --- | --- | --- | --- | --- |
| Kominka room hero | `day096/assets/generated/kominka-room-hero.png` | `day096/public-optimized/assets/kominka-room-hero.png` | 1717x916 | 1400x747 | RGB, no alpha | Built-in imagegen output preserved as source; runtime copy optimized for public delivery. |
| Listing collage | `day096/assets/generated/listing-collage.png` | `day096/public-optimized/assets/listing-collage.png` | 1536x1024 | 1200x800 | RGB, no alpha | Built-in imagegen output preserved as source; runtime copy optimized for public delivery. |
| Brass key | `day096/assets/generated/brass-key-transparent.png` | `day096/public-optimized/assets/brass-key-transparent.png` | 1328x786 | 1328x786 | RGBA alpha `(0, 255)`, bbox `(92, 54, 1236, 732)` | Chroma-key source processed with `remove_chroma_key.py`, then cropped from 1536x1024 to alpha bbox plus about 8% transparent padding. |
| Vermilion stamp | `day096/assets/generated/vermilion-stamp-transparent.png` | `day096/public-optimized/assets/vermilion-stamp-transparent.png` | 1132x1191 | 760x800 | RGBA alpha `(0, 255)`, source bbox `(78, 82, 1054, 1109)` | Chroma-key source processed with `remove_chroma_key.py`, then cropped from 1254x1254 to alpha bbox plus about 8% transparent padding; runtime copy optimized for public delivery. |

Note: `Source size` refers to `day096/assets/generated/`. `Runtime optimized size` refers to `day096/public-optimized/assets/`.

## Mockup-Derived Icon Assets

See `day096/design/mockup-icon-manifest.md` for the 41 RGBA PNG icons extracted from `day096/mockups/yado-review-lab-fullpage-reference.png`.

- Source directory: `day096/assets/generated/mockup-icons/`
- Runtime directory: `day096/public-optimized/assets/mockup-icons/`
- Runtime use: applied by the landing page as transparent PNG `<img>` assets in place of former SVG component icons.
- Image fix pass: transparent safety padding was added to every mockup-derived icon so cropped glyph edges do not touch the PNG canvas boundary in fixed-size UI slots.
- Legacy component status: `day096/src/components/Icons.jsx` has been removed; the runtime landing page uses mockup-derived PNG `<img>` assets.
- CSS figure exception: the radar chart remains a CSS-built figure because it is not SVG.

## Verification

Pillow verification command:

```sh
python3 - <<'PY'
from PIL import Image
from pathlib import Path
for p in [*sorted(Path("day096/assets/generated").glob("*.png")), *sorted(Path("day096/public-optimized/assets").glob("*.png"))]:
    im = Image.open(p)
    alpha = "A" in im.getbands()
    extrema = im.getchannel("A").getextrema() if alpha else None
    bbox = im.getchannel("A").getbbox() if alpha else None
    print(f"{p}: {im.size[0]}x{im.size[1]} mode={im.mode} alpha={alpha} extrema={extrema} bbox={bbox}")
PY
```

Verified output:

```text
day096/assets/generated/brass-key-transparent.png: 1328x786 mode=RGBA alpha=True extrema=(0, 255) bbox=(92, 54, 1236, 732)
day096/assets/generated/kominka-room-hero.png: 1717x916 mode=RGB alpha=False extrema=None bbox=None
day096/assets/generated/listing-collage.png: 1536x1024 mode=RGB alpha=False extrema=None bbox=None
day096/assets/generated/vermilion-stamp-transparent.png: 1132x1191 mode=RGBA alpha=True extrema=(0, 255) bbox=(78, 82, 1054, 1109)
day096/public-optimized/assets/brass-key-transparent.png: 1328x786 mode=RGBA alpha=True extrema=(0, 255) bbox=(92, 54, 1236, 732)
day096/public-optimized/assets/kominka-room-hero.png: 1400x747 mode=RGB alpha=False extrema=None bbox=None
day096/public-optimized/assets/listing-collage.png: 1200x800 mode=RGB alpha=False extrema=None bbox=None
day096/public-optimized/assets/vermilion-stamp-transparent.png: 760x800 mode=RGBA alpha=True extrema=(0, 255) bbox=(52, 55, 708, 745)
```

## Constraints

- Built-in `image_gen` generated the source images outside the workspace; project copies were saved into the owned day096 asset directories.
- The opaque hero and listing-collage files are RGB PNGs, as transparency is not needed for those assets.
- The transparent files use chroma-key removal rather than native transparent-background generation.
- The transparent key and stamp were cropped after alpha extraction to avoid oversized transparent canvases while keeping a small transparent pad.
- No files outside Worker A2 ownership were modified, except `day096/docs/TODO.md` Assets items as requested.
