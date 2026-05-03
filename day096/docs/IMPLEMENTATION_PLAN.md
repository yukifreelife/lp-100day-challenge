# Day096 Implementation Plan

## Project

- Brand: YADO Review Lab
- Theme: 地方の古民家民泊オーナー向けの予約ページ改善・ゲスト体験改善LP
- Stack: React + Tailwind CSS + Vite
- Target: 日本向けLP。PCファーストの生成モックを基準にしつつ、モバイルでも破綻しないレスポンシブ実装にする。
- Reference mockup: `day096/mockups/yado-review-lab-fullpage-reference.png`
- Execution mode: 複数Workerによる分担再実行。各Workerは所有範囲外のファイルを編集せず、他Workerの差分を戻さない。

## Re-Execution Policy

This plan supersedes the earlier deleted-CLI image generation assumptions.

- Asset creation should prioritize Codex built-in `image_gen`.
- The removed CLI-style imagegen flow must not be treated as an implementation dependency.
- OpenAI API CLI status is not part of the current asset-generation path.
- Built-in `image_gen` may still have constraints around direct local-file editing, transparent-background output, and exact file placement.
- Actual save/copy/transparency handling must be decided from verified results, not from assumptions. If direct local editing is unavailable, preserve the generated result and use the most reliable verified export/copy path.
- Any fallback crop, mockup-derived PNG, or CSS-built asset must be documented in the asset manifest by the asset owner.

## Reference Fidelity Policy

The implementation should recreate the generated full-page mockup as a coded LP, not as one pasted image.

Pixel-level fidelity is the target. Workers should preserve the reference hierarchy, spacing, color relationships, border weight, typography scale, CTA prominence, and asset placement as closely as practical while keeping readable Japanese copy and responsive behavior.

Critical visual targets:

- Paper white background with thin porcelain-gray dividers.
- Indigo typography, guest-blue chart/UI elements, vermilion CTA and stamp accents, brass key accents.
- Header with logo, Japanese navigation, vermilion CTA.
- Hero layout: left copy/CTA/proof icons, right reservation-card collage, rating card, check-in guide, radar chart, key visual.
- Dense but readable section rhythm matching the mockup: target owners, 7-point diagnosis, metrics, before/after, low-effort owner workflow, scope/out-of-scope, trust, pricing, final CTA.
- Cards have restrained radius, thin borders, and subtle shadows.
- Japanese copy must remain natural and readable.

## Asset Policy

Use built-in `image_gen` first for the main photographic/illustrative assets:

- 古民家室内 hero visual
- 予約ページ/写真サムネイル collage visual
- 真鍮鍵 transparent cutout
- 朱印 stamp transparent asset

For small UI icons, prioritize mockup-derived transparent PNG assets cropped from `day096/mockups/yado-review-lab-fullpage-reference.png`. The current icon replacement set contains 41 RGBA PNGs documented in `day096/design/mockup-icon-manifest.md`, with source copies under `day096/assets/generated/mockup-icons/` and runtime copies under `day096/public-optimized/assets/mockup-icons/`.

Avoid introducing new SVG icon components unless a future owner records a specific exception. `day096/src/components/Icons.jsx` may remain in the repository for now, but the runtime landing page should not import it. CSS-built figures may remain when they are not SVG; the radar chart is one such retained CSS figure.

Runtime assets should be placed under `day096/public-optimized/assets/`.
Source/generated assets should be preserved under `day096/assets/generated/`.
The asset owner validates whether generated files can be saved, copied, optimized, or converted to transparent PNGs in the current Codex environment.

## Information Architecture

1. Header
   - Logo: YADO Review Lab
   - Nav: 対象オーナー / 診断項目 / 改善事例 / 対応範囲 / 料金
   - CTA: 無料診断

2. Hero
   - H1: 地方の古民家民泊を、もっと選ばれる宿に。
   - Sub copy: 写真・案内文・チェックイン導線・レビュー返信を見直し、ゲストが予約前後に感じる小さな不安を減らします。
   - CTA: 無料でレビュー課題を診断する
   - Secondary CTA: 改善事例を見る
   - Proof chips: 古民家民泊特化アドバイザー / 最短7日で改善レポート提出 / 実装までしっかり伴走

3. Target Owners
   - 古民家を改装して民泊・一棟貸しを運営している
   - 写真や説明文で宿の魅力が伝わりきっていない
   - チェックイン案内やレビュー対応に不安がある
   - 予約数やレビュー評価を改善したい個人オーナー

4. Diagnosis
   - 写真 / タイトル / 説明文 / チェックイン案内 / レビュー返信 / 多言語対応 / 周辺案内

5. Metrics
   - 予約ページの問い合わせ率 +38%
   - チェックイン前の質問数 -46%
   - レビュー平均評価 4.42 -> 4.78
   - 写真閲覧後の離脱率 -31%
   - 周辺案内ページの閲覧率 +52%

6. Before / After
   - Before: 写真が暗い、注意事項が長い、案内が文章だけ、返信が定型文
   - After: 写真構成改善、読みやすい説明文、地図/到着手順/鍵整理、人柄が伝わる返信

7. Owner Effort
   - URL/写真共有 -> 資料送付 -> 30分ヒアリング -> 最短7日レポート -> 実装用文案/写真構成案

8. Scope
   - 対応範囲: 予約ページ改善、写真構成、宿紹介文、チェックイン導線、レビュー返信、周辺案内
   - 対応外: 民泊許可・法令確認代行、清掃代行、予約管理代行、価格調整代行、建物改修・施工手配

9. Trust
   - 支援実績42件
   - 対応OTA
   - 監修者 佐倉 澪
   - 強み

10. Pricing and Final CTA
   - 初回診断プラン 29,800円
   - 改善レポートプラン 79,800円
   - 実装伴走プラン 148,000円
   - Final CTA

## Animation Plan

- Page-load reveal for hero copy and collage.
- Floating brass key and subtle stamp scale on the before/after section.
- Metric cards animate bars/lines through CSS keyframes.
- Hover states for CTA, diagnosis cards, pricing cards.
- Sticky header with slight blur and shadow.
- Respect `prefers-reduced-motion`.

## Worker Ownership

Workers are not alone in the codebase. They must not revert or overwrite edits outside their assigned paths.

1. Worker A: asset generation and asset manifest
   - Owns `day096/assets/generated/`, `day096/public-optimized/assets/`, `day096/design/asset-manifest.md`, `day096/mockups/`
   - Uses built-in `image_gen` first and documents verified save/copy/transparency results.

2. Worker B: project scaffold and data/content
   - Owns `day096/index.html`, `day096/package.json`, `day096/vite.config.js`, `day096/postcss.config.js`, `day096/tailwind.config.js`, `day096/src/data/siteData.js`, `day096/src/main.jsx`

3. Worker B2: planning and implementation documentation
   - Owns `day096/docs/IMPLEMENTATION_PLAN.md`, `day096/docs/TODO.md`, `day096/docs/IMPLEMENTATION_SUMMARY.md`
   - Does not edit protected logs, root `script.js`, source code, assets, or QA screenshots.

4. Worker C: React page implementation
   - Owns `day096/src/App.jsx`, `day096/src/components/`, `day096/src/pages/`

5. Worker D: Tailwind/CSS motion and responsive polish
   - Owns `day096/src/index.css`

6. Worker E: Browser Use QA and report
   - Owns `day096/docs/EVALUATION_REPORT.md`, `day096/qa-screenshots/`

The orchestrator reviews each worker output and requests corrections until the implementation meets the reference criteria.

## PDCA Loop

- Plan: Align this document, TODO, worker ownership, asset policy, and fidelity targets before implementation proceeds.
- Do: Workers implement only their assigned files using React + Tailwind and verified assets.
- Check: Worker E uses Browser Use for desktop/mobile inspection, console checks, screenshots, and visible fidelity review.
- Act: Findings are converted into focused TODO updates or worker-specific correction requests. No worker should silently overwrite another worker's work.

## Verification

- `npm install` if dependencies are missing.
- `npm run build`
- `node --check` for generated JS where applicable.
- Browser Use with `iab` backend:
  - Desktop 1440-ish viewport visual check
  - Mobile narrow viewport visual check
  - Full-page screenshot or visible-section screenshot checks
  - Broken image/console error check
  - Pixel-level fidelity review against `day096/mockups/yado-review-lab-fullpage-reference.png`
- If Browser Use is blocked, record the blocker and use the closest available fallback only after attempting Browser Use.

## Completion Outputs

- `day096/README.md`
- `day096/docs/IMPLEMENTATION_SUMMARY.md`
- `day096/docs/EVALUATION_REPORT.md`
- Asset manifest under `day096/design/asset-manifest.md`
- Updated `lp100-progress/daily/day096.md` by the assigned owner only
- Updated root `script.js` Day096 portfolio entry by the assigned owner only
