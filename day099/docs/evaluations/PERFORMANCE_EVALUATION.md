# day099 Performance Evaluation

評価日時: 2026-05-04
対象: `/Users/yuuki/Works/lp-100/day099`
指定URL: `http://127.0.0.1:5173/#home`
評価担当: パフォーマンス評価worker

## 使用スキル

- `/Users/yuuki/.agents/skills/lp-performance/SKILL.md`
- 評価軸: Lazy Loading、Core Web Vitals、画像最適化、レスポンシブ画像、Critical CSS、非同期JavaScript、asset size

## 評価範囲と制約

- 根拠は day099 のファイル、既存生成モック、既存ビルド成果物、`npm run build` の結果に限定した。
- 他 day の前例は参照していない。
- アプリ修正は実施していない。
- Browser Use 追加操作は中断指示により実施していない。したがって、実ブラウザでの追加ネットワーク計測、DOM確認、Lighthouse計測は未確認。

## 実行した確認

```bash
npm run build
```

結果:

```text
vite v6.4.2 building for production...
✓ 42 modules transformed.
dist/index.html                   0.71 kB │ gzip:  0.48 kB
dist/assets/index-iCUccHlS.css   32.07 kB │ gzip:  7.22 kB
dist/assets/index-C75beU4L.js   261.19 kB │ gzip: 77.87 kB
✓ built in 614ms
```

## Asset Size

### ビルド出力

| 種別 | ファイル | サイズ |
|---|---:|---:|
| HTML | `dist/index.html` | 0.71 kB |
| CSS | `dist/assets/index-iCUccHlS.css` | 32.07 kB / gzip 7.22 kB |
| JS | `dist/assets/index-C75beU4L.js` | 261.19 kB / gzip 77.87 kB |
| 画像合計を含むdist assets | `dist/assets/**` | 23,470,263 bytes |

### 主要画像

| ファイル | サイズ |
|---|---:|
| `dist/assets/products/brush.png` | 2,870,483 bytes |
| `dist/assets/products/hero-starter-kit.png` | 2,616,917 bytes |
| `dist/assets/products/liquid-chalk.png` | 2,610,702 bytes |
| `dist/assets/products/brush-hold.png` | 2,549,758 bytes |
| `dist/assets/products/grip-balm.png` | 2,503,938 bytes |
| `dist/assets/products/chalk-bag.png` | 2,473,134 bytes |
| `dist/assets/products/finger-tape.png` | 2,448,281 bytes |
| `dist/assets/products/hands-chalk.png` | 2,443,200 bytes |
| `dist/assets/products/mini-holds.png` | 2,162,312 bytes |
| `dist/assets/icons/icon-sprite.png` | 498,275 bytes |

画像だけで約22MBあり、LP初回表示・ルート遷移時の転送量リスクが大きい。

## Evidence

- `dist/index.html` は `script type="module"` と CSS を通常読み込みしている。`modulepreload`、画像 preload、preconnect は見当たらない。
- `src/pages/Home.jsx:58` のファーストビュー画像には `loading="eager"`、`fetchpriority="high"`、`width`、`height`、`decoding` がない。
- `src/components/Product.jsx:9-14` の商品カード画像のみ `loading="lazy"` がある。
- `src` 配下の `<img>` は 28 箇所確認できたが、`loading=` は商品カードの1箇所のみ。
- `src/index.css:92-95` で `img { display: block; max-width: 100%; }` はあるが、共通の `height: auto` や `aspect-ratio` 予約は未実装。各画像には Tailwind の `aspect-*` 指定が多く、一定のCLS抑制はある。
- `src/index.css:7` はローカル/システムフォント中心だが、`Rajdhani` など未提供のフォント名も含む。外部Webフォント読み込みは確認できず、`display=swap` 対象はない。
- iframe は確認できなかったため、iframe lazy loading は対象外。

## Core Web Vitals 観点

### LCP

重大リスクあり。ホームのLCP候補になりやすいヒーロー画像 `hero-starter-kit.png` が約2.62MBのPNGで、`loading="eager"`、`fetchpriority="high"`、preload、WebP/AVIF、レスポンシブ画像が未設定。初回描画で画像転送が詰まる可能性が高い。

### CLS

中程度のリスク。多くの画像に `aspect-[...]` クラスがあり、表示枠はある程度予約される。一方、HTMLの `width` / `height` 属性はなく、画像の固有比率とCSS指定比率がずれる場合はレイアウト安定性に影響しうる。

### INP

低から中程度のリスク。JS gzip 77.87kB はReact LPとして過大ではないが、全ルートが単一bundleにまとまっている可能性がある。カートや詳細など初回表示に不要なルートまで同時に読み込む構成なら、低速端末で初期実行コストが増える。

### FCP / TTFB

TTFBはローカルビルドのみでは未評価。FCPはCSS 32.07kB、JS 261.19kBより、コード量だけなら致命的ではない。ただし画像群の重量が大きいため、実ネットワークではFCP後の視覚完成が遅れる可能性がある。

## パフォーマンスチェックリスト

- [ ] ヒーロー画像に `loading="eager"`
- [ ] その他の画像に `loading="lazy"`
- [ ] すべての画像に `width` / `height` 属性を指定
- [ ] フォントに `display=swap` を指定
- [ ] `preconnect` でDNS事前解決
- [ ] レスポンシブ画像（`srcset` / `sizes`）を実装
- [x] 非同期JavaScript（`type="module"`）を使用
- [ ] Critical CSSをインライン化
- [x] iframeにlazy loadingを適用、またはiframeなし
- [x] アスペクト比予約（Tailwind `aspect-*` による部分対応）

## Findings

### [P1] 主要画像がPNGのまま大きく、総画像転送量が約22MB

`dist/assets/products/*.png` は各2.1MBから2.9MBで、商品画像9枚とスプライトだけで約22MBある。WebP/AVIF変換、複数サイズ生成、初回ルートで必要な画像のみの配信がないため、LCPと回遊時の体感速度を強く押し下げる。

### [P1] ホームのLCP候補画像に優先読み込み指定がない

`src/pages/Home.jsx:58` のヒーロー画像は `hero-starter-kit.png` を表示するが、`loading="eager"`、`fetchpriority="high"`、`decoding="async"`、`width` / `height`、preload がない。LCP候補をブラウザへ明示できていない。

### [P2] Lazy Loading が商品カード以外にほぼ適用されていない

`src/components/Product.jsx:13` の `ProductCard` には `loading="lazy"` があるが、各ページ直書きの画像には lazy 指定がない。ホーム下部、FAQ、Guide、Legalなど初回表示外の画像が不要に早く読み込まれる可能性がある。

### [P2] レスポンシブ画像が未実装

全画像が単一PNG参照で、`srcset` / `sizes` が確認できない。モバイルでも2MB超の画像をそのまま取得する設計になり、帯域とデコード負荷が重い。

### [P3] Critical CSS / preload / preconnect が未整備

`dist/index.html` はCSSとJSの通常読み込みのみで、ファーストビュー画像のpreloadや外部接続のpreconnectはない。外部フォントを読んでいないためpreconnectの必須度は低いが、LCP画像preloadは検討価値が高い。

## 改善提案

1. 商品画像をWebP/AVIFへ変換し、幅別の派生画像を用意する。目安はヒーローでも200KBから400KB台、カード画像は100KBから250KB台。
2. ホームのヒーロー画像に `loading="eager" fetchpriority="high" decoding="async"` と `width` / `height` を付与し、必要なら `dist/index.html` 生成元で preload を追加する。
3. ファーストビュー外の画像に `loading="lazy" decoding="async"` を付与する。特に `Home.jsx` の問題カード以降、`Guide.jsx`、`Faq.jsx`、`Legal.jsx` の画像を優先する。
4. `srcset` / `sizes` を導入し、モバイル・タブレット・デスクトップに必要な画像幅だけを配信する。
5. ルート単位のコード分割を検討する。現状JS gzip 77.87kBは許容範囲だが、EC風LPとしてページ数が多いため、初回表示に不要なルートを遅延読み込みできる。
6. 画像の `width` / `height` 属性を追加し、CSSの `aspect-*` と実画像比率を揃える。

## Score

**58 / 100**

JS/CSSのビルドサイズは大きすぎない一方、画像最適化とLCP対策が弱い。特にPNG画像の総量が大きく、Core Web VitalsではLCP悪化の可能性が高い。

## 未確認項目

- Browser Use による追加の実ブラウザ表示確認、DOM確認、ネットワーク確認。
- Lighthouse / PageSpeed Insights の実測スコア。
- 実機またはCPU/ネットワークスロットリング下でのLCP、CLS、INP。
- 各ルート遷移時に実際にどの画像がいつ要求されるか。
- 画像ピクセル寸法と表示寸法の一致確認。
