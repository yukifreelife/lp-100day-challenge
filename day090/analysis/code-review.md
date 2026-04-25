# Day090 FLEURISTE MADO - コードレビューレポート

**レビュー日**: 2026-04-25
**対象ファイル**: index.html, style.css, script.js

---

## 総合評価

| 指標 | スコア | 評価 |
|------|--------|------|
| 正当性 | 72/100 | Good |
| 可読性 | 78/100 | Good |
| 保守性 | 65/100 | Fair |
| パフォーマンス | 68/100 | Fair |
| セキュリティ | 85/100 | Very Good |
| アクセシビリティ | 62/100 | Fair |
| SEO | 82/100 | Very Good |
| **総合スコア** | **73/100** | **Good** |

---

## 1. 正当性 (72/100)

### Critical Issues
なし

### Important Issues
1. **【CSS未使用】style.css が参照されていない** (index.html:105)
   - index.html は Tailwind CSS のみを使用しており、style.css が読み込まれていない
   - style.css 内のスタイル（フェードイン、ナビゲーション等）は適用されない
   - script.js の `.fade-in` クラスも機能しない状態

2. **【ID不一致】script.js と HTML の要素IDが不一致**
   - script.js: `document.getElementById('nav')` → HTMLに `id="nav"` なし
   - script.js: `document.getElementById('hamburger')` → HTMLに `id="hamburger"` なし（`aria-label="menu"`はある）
   - script.js: `document.getElementById('navMenu')` → HTMLに `id="navMenu"` なし
   - これによりモバイルメニュー機能が動作しない

3. **【クラス不一致】`.fade-in` クラス未使用**
   - style.css と script.js で `.fade-in` を定義しているが、HTML要素に付与されていない
   - スクロールアニメーションが発火しない

### Nice to have
1. **【エッジケース】空のhref属性**
   - `href="#"` が複数箇所で使用されている
   - アンカーリンクとして期待通り動作しない可能性

---

## 2. 可読性 (78/100)

### Good Points
- セクションごとに明確な `aria-label` が付与されている
- 適切なインデントとコメント（CSS、JS）
- Tailwind設定がインラインで整理されている

### Important Issues
1. **【混在】スタイリング手法の混在**
   - Tailwind CSS、インラインスタイル、外部CSS（未使用）が混在
   - 保守性が低下

2. **【命名】一貫性のない命名規則**
   - HTML: kebab-case (`aria-label`, `data-tracking`)
   - CSS: BEM風 (`nav__inner`, `hero__content`)
   - JS: camelCase (`initFadeIn`, `initNav`)
   - 統一感がない

### Nice to have
1. **【コメント】HTMLのコメント不足**
   - `<!-- TopAppBar from SCREEN_16 -->` はあるが、他セクションに説明がない
   - セクションの意図を説明するコメントを追加すると良い

---

## 3. 保守性 (65/100)

### Critical Issues
なし

### Important Issues
1. **【CSS分断】Tailwind + カスタムCSSの二重管理**
   - Tailwind設定とstyle.cssで色が定義されている
   - 色変更時に両方を修正する必要がある

2. **【JS重複】インラインスクリプトと外部ファイル**
   - index.html内（行370-463）と script.js で両方JavaScriptが記述されている
   - 機能が分散しており、一箇所の修正では済まない

3. **【ハードコーディング】魔法の数値**
   - `min-h-[921px]`、`py-32`、`gap-24` 等、数値がハードコーディングされている
   - デザイン変更時に複数箇所の修正が必要

### Nice to have
1. **【再利用】コンポーネント化の検討**
   - ボタン、カード等をコンポーネント化すると再利用性が向上

---

## 4. パフォーマンス (68/100)

### Good Points
- `fetchpriority="high"` でヒーロー画像の優先読み込み
- `loading="lazy"` で以下の画像を遅延読み込み
- `decoding="async"` で非同期デコード
- フォントの `preconnect` 指定

### Important Issues
1. **【CDN依存】Tailwind CDN使用**
   - 本番環境ではCDNではなく、ビルド済みCSSを使用すべき
   - ページ読み込み時のパフォーマンス低下

2. **【フォント】未使用のフォント読み込み**
   - `Material Symbols Outlined` が読み込まれているが使用状況を確認
   - `Noto Serif JP`、`Manrope` もサブセット化可能

3. **【JS】パッシブリスナーの一部未適用**
   - scrollイベントに `{ passive: true }` が一部適用されていない（行430-436）

### Nice to have
1. **【画像】最適化の余地**
   - WebP形式の使用検討
   - `srcset` によるレスポンシブ画像対応

---

## 5. セキュリティ (85/100)

### Good Points
- 外部スクリプトの読み込みが最小限
- ユーザー入力を扱う箇所がないためXSSリスク低
- `Content-Security-Policy` 等のヘッダー検討推奨

### Nice to have
1. **【推奨】CSPヘッダーの追加**
   - インラインスクリプトへの対策として

---

## 6. アクセシビリティ (62/100)

### Good Points
- `aria-label` がボタンに適切に付与されている
- 構造的に正しいHTML（h1, h2, h3の階層）

### Important Issues
1. **【コントラスト】色のコントラスト比未確認**
   - `text-[#54634d]/60` 等の薄い文字色がWCAG基準を満たしているか要確認
   - 特に小さい文字（`text-sm`, `text-xs`）

2. **【キーボード】フォーカススタイルの不完全さ**
   - `:focus-visible` のスタイルは定義されている（行99-103）
   - しかしすべてのインタラクティブ要素に適用されているか不透明

3. **【ARIA】モバイルメニューのARIA不備**
   - モバイルメニュー開閉時に `aria-expanded` の更新があるが、`aria-controls` 属性がない

### Nice to have
1. **【推奨】スキップリンクの追加**
   - 「コンテンツへスキップ」リンクを追加するとキーボードユーザーに優しい

2. **【推奨】ランドマークの追加**
   - `role="banner"`, `role="main"`, `role="contentinfo"` 等

---

## 7. SEO (82/100)

### Good Points
- 適切な `meta description`（文字数適切）
- OGPタグ完備
- 構造化データ（JSON-LD）実装済み
- `rel="canonical"` 設定
- `robots` メタタグ設定

### Important Issues
なし

### Nice to have
1. **【推奨】パンくずリスト**
   - 構造化データに `BreadcrumbList` を追加

2. **【推奨】sitemap.xml**
   - ファイル自体はないが、導入検討推奨

---

## 改善提案（優先度順）

### P0 - すぐに対応すべき問題

1. **style.css を有効化するか、統合する**
   - 現状：style.css が読み込まれていない
   - 対策：`<link rel="stylesheet" href="./style.css">` を追加
   - または：Tailwindのみに統一する

2. **ID不一致の修正**
   - HTMLに `id="nav"`, `id="hamburger"`, `id="navMenu"` を追加
   - または script.js のセレクタをHTML構造に合わせる

3. **`.fade-in` クラスをHTMLに付与**
   - スクロールアニメーションを有効化

### P1 - 重要な改善

1. **Tailwind CSSのビルド済みCSS化**
   - 本番環境ではCDN使用を避ける

2. **JavaScriptの統合**
   - index.html内のインラインスクリプトをscript.jsに移動
   - 重複排除

3. **色の定義を一元化**
   - Tailwind設定とstyle.cssの色定義を統合

### P2 - 将来的な改善

1. コンポーネント化（React/Vue等の導入検討）
2. 画像のWebP化、srcset対応
3. アクセシビリティ向上（コントラスト確認、スキップリンク）

---

## 結論

全体的にSEOとセキュリティは良好です。しかし、**CSSとJavaScriptの不整合**が致命的です。style.cssが読み込まれていない、IDが不一致等の問題により、意図したスタイリングやインタラクションが機能していません。

まずP0の問題を解消することを強く推奨します。
