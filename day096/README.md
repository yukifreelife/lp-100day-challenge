# Day096 - YADO Review Lab

地方の古民家民泊オーナー向けに、予約ページ・写真構成・案内文・チェックイン導線・レビュー返信を診断改善する架空LPです。

## Tech

- React
- Tailwind CSS
- Vite

## Local Development

```bash
npm install
npm run dev -- --port 8096
```

Open `http://127.0.0.1:8096/`.

## Structure

- `src/data/siteData.js`: LP copy and content data
- `src/pages/LandingPage.jsx`: one-page LP structure
- `src/components/Icons.jsx`: legacy icon component file; currently unused by the runtime landing page
- `src/index.css`: visual system, responsive layout, animations
- `mockups/`: generated reference mockup
- `assets/generated/`: extracted/generated source assets
- `public-optimized/assets/`: runtime assets
- `design/mockup-icon-manifest.md`: 41 mockup-derived transparent PNG icons extracted from the reference mockup
- `docs/`: implementation plan, TODO, evaluation and summary

## Notes

The current asset set uses Codex built-in `image_gen` output. The older CLI-side imagegen skill was removed after user confirmation and is not part of this run.

Transparent key and stamp assets were generated on chroma-key backgrounds, then converted to RGBA transparency with local processing equivalent to system imagegen `remove_chroma_key.py`.

Small UI icons were replaced from former SVG component usage to 41 mockup-derived transparent PNG assets under `assets/generated/mockup-icons/` and `public-optimized/assets/mockup-icons/`. `Icons.jsx` remains in the source tree but is not imported by the runtime landing page. The radar chart remains a CSS-built figure because it is not SVG.

Browser Use was run by the orchestrator at `http://127.0.0.1:8096/`; first-view rendering, main copy checks, and no console errors were confirmed. Supplemental desktop/tablet/mobile screenshots were saved under `qa-screenshots/`.

Final Browser Use QA after the mockup-derived PNG icon replacement is pending Worker E.
