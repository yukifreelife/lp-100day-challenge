# Day034 WordPress差し替え一覧

作成日: 2026-02-28  
目的: WordPressへ移植する際に、相対パスのまま残してはいけない箇所を先に固定する

## 1. 先にアップロードするもの
### 画像
- `images/optimized/02_session-640.webp`
- `images/optimized/02_session-1280.webp`
- `images/optimized/04_online-640.webp`
- `images/optimized/04_online-1280.webp`
- `images/optimized/01_profile-640.webp`
- `images/optimized/01_profile-1280.webp`
- `images/optimized/03_stretch-640.webp`
- `images/optimized/03_stretch-1280.webp`
- `images/optimized/01_profile_bg-1280.webp`
- `images/optimized/01_profile_bg-1920.webp`

### PDF
- `downloads/food-checklist.pdf`

## 2. HTML内の差し替え
移行元: `/Users/yuuki/Works/lp-100/day034/source/index.html`

### OGP
- `./images/optimized/02_session-1280.webp`
  - 用途: `og:image`
  - 差し替え先: ヒーロー画像の WordPress メディアURL

### `window.LP_CONFIG`
- `pdfDownloadUrl: "./downloads/food-checklist.pdf"`
  - 差し替え先: アップロードした PDF の WordPress URL

### ヒーロー画像
- `./images/optimized/02_session-1280.webp`
- `./images/optimized/02_session-640.webp`

### 理由セクション画像
- `./images/optimized/04_online-1280.webp`
- `./images/optimized/04_online-640.webp`
- `./images/optimized/01_profile-1280.webp`
- `./images/optimized/01_profile-640.webp`
- `./images/optimized/03_stretch-1280.webp`
- `./images/optimized/03_stretch-640.webp`

### PDFダウンロード導線
- `href="./downloads/food-checklist.pdf"`
  - `.pdf-download-link`
  - 差し替え先: アップロードした PDF の WordPress URL

### 法務リンク
- `href="./privacy.html"`
  - 差し替え先: WordPress のプライバシーポリシー固定ページURL
- `href="./tokushoho.html"`
  - 差し替え先: WordPress の特定商取引法固定ページURL

## 3. CSS内の差し替え
移行元: `/Users/yuuki/Works/lp-100/day034/source/styles.css`

### 背景画像
- `url("./images/optimized/01_profile_bg-1280.webp")`
- `url("./images/optimized/01_profile_bg-1920.webp")`

この2つは `image-set(...)` 内にあるため、両方とも WordPress のメディアURLへ差し替える。

## 4. そのままでよいもの
- `reservationUrl`
  - `https://timerex.net/s/bodymake_tokyo_yuta`
- `leadEndpoint`
  - `https://formsubmit.co/ajax/contact@bodymake-yuta.com`
- `gaMeasurementId`
  - `G-CQB0QSMF7F`
- `metaPixelId`
  - `871190680965123`

## 5. 差し替え漏れが起きやすい箇所
- `src` だけでなく `srcset`
- `window.LP_CONFIG.pdfDownloadUrl`
- `.pdf-download-link` の `href`
- フッターの法務リンク
- CSSの背景画像

## 6. 移植前チェック
1. 画像URLをすべて取得したか
2. PDF URLを取得したか
3. 法務ページURLを取得したか
4. HTMLの相対パスが残っていないか
5. CSSの `./images/` が残っていないか
