# Day030 - atelier moco LP（React + TypeScript + Tailwind）

## ラベル（検索用）
**Labels:** `lp` `react` `typescript` `tailwindcss` `mobile-first` `design-token` `accessibility` `lighthouse` `day030`

lp:audience=ギフト・ハンドメイド雑貨を探している個人ユーザー
lp:goal=商品閲覧/注文導線への到達（`src/data/lpLinks.ts` 管理）
lp:industry=ハンドメイドEC
lp:objective=共有スクショ準拠のSP起点LPを再利用可能構成で実装
lp:offer=名入れ対応キーホルダー（ギフト包装無料）
lp:template=original-day030
lp:status=prototype-ready
lp:env=vite-react-ts-tailwind

---

## 今日の成果
- Day030の目的：
  - スクショを基に `atelier moco` LPを React + TypeScript + Tailwind で新規実装
- 実施内容：
  - LP基盤構築
    - `Vite + React + TypeScript + Tailwind` を `day030` に構築
    - `lp-tokens.css` と `tailwind.config.ts` でDesign Token連携
  - 再利用コンポーネント化
    - `Button / Card / Badge / SectionHeading / StatCard / ReviewCard / AccordionItem`
  - データ分離
    - 文言・数値・FAQ・レビューを `src/data/lpContent.ts` に集約
    - CTAリンクを `src/data/lpLinks.ts` に集約（初期値 `#`）
  - セクション実装
    - Header + Hero + 8セクション + Footer を実装
  - 画像運用最適化
    - 外部参照を廃止し `public/images/lp` のローカル画像に統一
    - 画像を `webp` 化 + LP表示サイズにリサイズ
  - Lighthouse改善
    - `meta description` 追加
    - `robots.txt` 追加
    - 画像の `width/height` 明示、`loading/decoding` 付与
    - コントラスト改善（ロゴバッジ文字色を調整）
- 検証結果（`npm run build && npm run preview` + Lighthouse）：
  - Performance: 99
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

---

## 作業時間（記録）
- 手元の厳密タイムトラッキングは未実施
- 実装・調整・計測を1セッションで完了

---

## 主要成果物
- LP本体
  - `/Users/yuuki/Works/lp-100/day030/src/pages/AtelierMocoLp.tsx`
  - `/Users/yuuki/Works/lp-100/day030/src/components/lp/`
  - `/Users/yuuki/Works/lp-100/day030/src/components/ui/lp/`
- データ
  - `/Users/yuuki/Works/lp-100/day030/src/data/lpContent.ts`
  - `/Users/yuuki/Works/lp-100/day030/src/data/lpLinks.ts`
- デザイントークン
  - `/Users/yuuki/Works/lp-100/day030/src/styles/lp-tokens.css`
  - `/Users/yuuki/Works/lp-100/day030/tailwind.config.ts`
- ローカル画像（最適化済み）
  - `/Users/yuuki/Works/lp-100/day030/public/images/lp/hero-product.webp`
  - `/Users/yuuki/Works/lp-100/day030/public/images/lp/craft-1.webp`
  - `/Users/yuuki/Works/lp-100/day030/public/images/lp/craft-2.webp`
  - `/Users/yuuki/Works/lp-100/day030/public/images/lp/review-avatar-1.webp`
  - `/Users/yuuki/Works/lp-100/day030/public/images/lp/review-avatar-2.webp`
  - `/Users/yuuki/Works/lp-100/day030/public/images/lp/review-avatar-3.webp`
- Lighthouseレポート
  - `/Users/yuuki/Works/lp-100/day030/lighthouse-preview-after.json`
  - `/Users/yuuki/Works/lp-100/day030/lighthouse-preview.report.html`
  - `/Users/yuuki/Works/lp-100/day030/lighthouse-preview.report.json`
- スクリーンショット
  - `/Users/yuuki/Works/lp-100/day030/day030PC.png`
  - `/Users/yuuki/Works/lp-100/day030/day030PCFV.png`
  - `/Users/yuuki/Works/lp-100/day030/day030SP.png`
  - `/Users/yuuki/Works/lp-100/day030/day030SPFV.png`

---

## 実装ハイライト
- セクション構成（上から順）
  - Header
  - Hero
  - 悩み共感
  - 解決策
  - 特徴・強み
  - 実績/レビュー
  - 利用の流れ
  - FAQ
  - 最終CTA
  - Footer
- アクセシビリティ
  - FAQは`aria-expanded`/`aria-controls`/`region`連携
  - 画像`alt`付与
  - `focus-visible`スタイル統一
- 保守性
  - 文言/数値/リンクをコンポーネントから分離
  - UI差分はvariantで吸収

---

## 動作コマンド
```bash
cd /Users/yuuki/Works/lp-100/day030
npm run dev
npm run build
npm run preview
```

---

## 次回やること（Day031）
1. OGP/canonical/structured-data を追加して公開準備を進める
2. 画像に `srcset/sizes` を導入して端末別配信を最適化する
3. 実運用リンクへ `src/data/lpLinks.ts` を差し替える
