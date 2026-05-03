---
name: lp-analytics
description: LPアナリティクス実装スキル。GA4、CVトラッキング、スクロール計測を実装します。
version: 1.0.0
triggers:
  - ユーザーが「アナリティクス」「GA4」「トラッキング」「計測」と言ったとき
  - ユーザーが「/analytics」と入力したとき
parameters:
  tracking_id:
    type: string
    description: GA4測定ID（例: G-XXXXXXXXXX）
    required: false
  theme:
    type: string
    description: LPテーマ名（カスタムディメンション用）
    required: false
  category:
    type: string
    description: LPカテゴリー（カスタムディメンション用）
    required: false
---

# LPアナリティクス実装スキル

LPにアナリティクスとデータ計測を実装します。

## 実装機能

### 1. GA4基本設定

#### HTML実装（head内）

```html
<!-- Google Analytics 4 (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id={TRACKING_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{TRACKING_ID}', {
    'send_page_view': false,
    'anonymize_ip': true,
    'custom_map': {
      'custom_dimension_1': 'lp_theme',
      'custom_dimension_2': 'lp_category'
    }
  });

  // カスタムディメンションの設定
  gtag('event', 'page_view', {
    lp_theme: '{theme}',
    lp_category: '{category}',
    lp_version: 'v1.0'
  });
</script>
```

### 2. CVトラッキング

#### 問い合わせ送信

```javascript
// メインCV（問い合わせ送信）
const contactForms = document.querySelectorAll('form[data-tracking="contact"]');
contactForms.forEach(form => {
  form.addEventListener('submit', function() {
    gtag('event', 'contact_submit', {
      event_category: 'conversion',
      event_label: '問い合わせ送信',
      value: 1
    });
  });
});
```

#### 電話番号クリック

```javascript
// 電話CV
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
  link.addEventListener('click', function() {
    gtag('event', 'phone_click', {
      event_category: 'engagement',
      event_label: this.textContent.trim(),
      value: 1
    });
  });
});
```

#### CTAクリック

```javascript
// CTAクリック
const ctaButtons = document.querySelectorAll('[data-tracking="cta"]');
ctaButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: this.textContent.trim(),
      cta_position: this.dataset.position || 'unknown',
      cta_type: this.dataset.type || 'button'
    });
  });
});
```

#### 資料ダウンロード

```javascript
// 資料ダウンロード
const downloadLinks = document.querySelectorAll('a[href$=".pdf"], a[href$=".zip"]');
downloadLinks.forEach(link => {
  link.addEventListener('click', function() {
    gtag('event', 'file_download', {
      event_category: 'engagement',
      event_label: this.href.split('/').pop(),
      value: 1
    });
  });
});
```

### 3. スクロール深度計測

```javascript
// スクロール深度計測
(function() {
  const scrollDepths = [25, 50, 75, 90, 100];
  const trackedDepths = new Set();

  const trackScrollDepth = function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const scrollPercentage = Math.round((scrollTop + windowHeight) / docHeight * 100);

    scrollDepths.forEach(function(depth) {
      if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
        trackedDepths.add(depth);

        gtag('event', 'scroll_depth', {
          event_category: 'engagement',
          event_label: depth + '%',
          value: depth,
          non_interaction: true
        });
      }
    });
  };

  // スクロールイベント（throttle付き）
  let scrollTimer;
  window.addEventListener('scroll', function() {
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(trackScrollDepth, 100);
  });
})();
```

## 実装手順

### ステップ1: 現在のLPファイルを確認

```bash
# 対象ファイルを特定
ls -la *.html
```

### ステップ2: GA4設定を追加

1. `<head>`セクションにGA4スクリプトを追加
2. 測定IDを置換（`{TRACKING_ID}` → 実際のID または `G-PLACEHOLDER`）
3. カスタムディメンションを設定

### ステップ3: トラッキング属性を追加

1. フォームに `data-tracking="contact"` を追加
2. CTAボタンに `data-tracking="cta"` を追加
3. 必要に応じて `data-position`, `data-type` を追加

### ステップ4: 計測スクリプトを作成

```javascript
// analytics.js として保存
document.addEventListener('DOMContentLoaded', function() {
  // 上記CVトラッキングコードをここに配置
});
```

### ステップ5: HTMLにスクリプトを読み込み

```html
<script src="js/analytics.js" defer></script>
```

## チェックリスト

```markdown
## アナリティクス実装チェックリスト

- [ ] GA4測定IDを設定済み
- [ ] gtag.jsをhead内に実装
- [ ] IPアドレス anonymize を有効化
- [ ] カスタムディメンションを設定
- [ ] 問い合わせフォームにトラッキング属性を追加
- [ ] 電話番号クリックを計測
- [ ] CTAクリックを計測
- [ ] スクロール深度（25/50/75/90/100%）を計測
- [ ] 資料ダウンロードを計測（該当の場合）
```

## ファイル構成

```
project/
├── index.html              # head内にGA4スクリプト追加
└── js/
    └── analytics.js        # CVトラッキング・スクロール計測
```

## 注意点

1. **測定IDがない場合**: `G-PLACEHOLDER` を使用し、後で置換
2. **プライバシー**: IPアドレスの匿名化を必ず有効化
3. **パフォーマンス**: defer属性でスクリプトを遅延読み込み
4. **テスト**: 実装後はGA4 DebugViewで計測を確認

## 更新履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v1.0.0 | 2026-04-23 | 初版作成 |
