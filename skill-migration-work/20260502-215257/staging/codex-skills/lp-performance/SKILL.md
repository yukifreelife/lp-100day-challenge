---
name: "lp-performance"
description: "LPパフォーマンス最適化スキル。Lazy Loading、Core Web Vitals対応、画像最適化を実装します。"
---

## Source Metadata

The source skill included additional metadata. It is preserved here for migration traceability.

```yaml
version: 1.0.0
triggers:
  - ユーザーが「パフォーマンス」「最適化」「Lazy Loading」「Core Web Vitals」と言ったとき
  - ユーザーが「/performance」と入力したとき
parameters:
  enable_lazy:
    type: boolean
    description: Lazy Loadingを有効化（デフォルト: true）
    required: false
  enable_webp:
    type: boolean
    description: WebP変換を有効化（デフォルト: true）
    required: false
```

# LPパフォーマンス最適化スキル

LPのパフォーマンスを最適化し、Core Web Vitalsを改善します。

## 実装機能

### 1. Lazy Loading実装

#### ネイティブLazy Loading

```html
<!-- ヒーロー画像は優先的に読み込み -->
<img src="images/hero.jpg"
     alt="メインビジュアル"
     loading="eager"
     width="1920"
     height="1080"
     fetchpriority="high">

<!-- 以下の画像はlazy loading -->
<img src="images/concept-1.jpg"
     alt="特徴1"
     loading="lazy"
     width="800"
     height="600">

<img src="images/concept-2.jpg"
     alt="特徴2"
     loading="lazy"
     width="800"
     height="600">

<!-- iframeのlazy loading -->
<iframe src="https://www.youtube.com/embed/XXX"
        title="動画"
        loading="lazy"
        width="560"
        height="315">
</iframe>
```

#### JavaScriptポリフィル（必要な場合）

```javascript
// lazy-load-polyfill.js
document.addEventListener('DOMContentLoaded', function() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }
});
```

### 2. Core Web Vitals対応

#### LCP（Largest Contentful Paint）最適化

```html
<!-- ヒーロー画像は優先的に読み込み -->
<link rel="preload" href="images/hero.jpg" as="image">

<!-- preconnectでDNS事前解決 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Webフォントのdisplay swap -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
```

#### FID（First Input Delay）/ INP改善

```javascript
// 長時間実行タスクの分割
function processItems(items) {
  const batchSize = 50;
  let index = 0;

  function processChunk() {
    const endIndex = Math.min(index + batchSize, items.length);

    for (let i = index; i < endIndex; i++) {
      processItem(items[i]);
    }

    index = endIndex;

    if (index < items.length) {
      requestIdleCallback(processChunk) ||
        setTimeout(processChunk, 0);
    }
  }

  processChunk();
}
```

#### CLS（Cumulative Layout Shift）防止

```css
/* 画像スペース確保 */
img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
}

/* 動的コンテンツ用スペース確保 */
.banner-placeholder {
  min-height: 250px;
  background-color: #f0f0f0;
}

/* フォントの予約スペース */
body {
  font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### 3. レスポンシブ画像

```html
<img srcset="images/hero-800.jpg 800w,
             images/hero-1200.jpg 1200w,
             images/hero-1920.jpg 1920w"
     sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 90vw,
            80vw"
     src="images/hero-1920.jpg"
     alt="メインビジュアル"
     loading="eager"
     width="1920"
     height="1080"
     decoding="async">
```

### 4. Critical CSS

```html
<!-- Critical CSS（インライン） -->
<style>
  /* ファーストビューのみ */
  .hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    color: white;
  }
</style>

<!-- 非クリティカルCSSは遅延読み込み -->
<link rel="preload" href="css/style.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="css/style.css"></noscript>
```

### 5. 非同期JavaScript

```html
<!-- deferで解析をブロックせず実行 -->
<script src="js/analytics.js" defer></script>
<script src="js/lazy-load-polyfill.js" defer></script>

<!-- moduleとして読み込む場合 -->
<script type="module" src="js/main.js"></script>
```

## 実装手順

### ステップ1: 現在のLPを分析

```bash
# 画像サイズ確認
ls -lh images/

# HTML分析
grep -n "<img" index.html
```

### ステップ2: Lazy Loading適用

1. ヒーロー画像: `loading="eager"`
2. その他の画像: `loading="lazy"`
3. iframe: `loading="lazy"`

### ステップ3: 画像属性追加

すべての画像に以下を追加:
- `width`, `height` 属性
- `decoding="async"` 属性

### ステップ4: Preconnect追加

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
```

### ステップ5: Critical CSS実装

1. ファーストビューのCSSを抽出
2. `<style>`タグでインライン化
3. 残りのCSSを遅延読み込み

## チェックリスト

```markdown
## パフォーマンスチェックリスト

- [ ] ヒーロー画像にloading="eager"
- [ ] その他の画像にloading="lazy"
- [ ] すべての画像にwidth/height属性を指定
- [ ] フォントにdisplay=swapを指定
- [ ] preconnectでDNS事前解決
- [ ] レスポンシブ画像（srcset/sizes）を実装
- [ ] 非同期JavaScript（defer/async）を使用
- [ ] Critical CSSをインライン化
- [ ] iframeにlazy loadingを適用
- [ ] アスペクト比予約（CLS防止）
```

## 画像最適化指針

| 種類 | 推奨フォーマット | 用途 |
|------|-----------------|------|
| 写真 | WebP（第二選択: JPEG） | ヒーロー、ギャラリー |
| イラスト | WebP（第二選択: PNG） | アイコン、イラスト |
| ロゴ | SVG | ブランドロゴ |

## ファイル構成

```
project/
├── index.html              # Lazy Loading属性追加
├── css/
│   ├── style.css          # メインスタイルシート
│   └── critical.css       # クリティカルCSS
└── js/
    └── lazy-load-polyfill.js # Lazy Loadingポリフィル
```

## 計測ツール

実装後は以下で計測:
- PageSpeed Insights
- Lighthouse
- Web Vitals Chrome Extension

## 更新履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v1.0.0 | 2026-04-23 | 初版作成 |
