# Day090 アナリティクス実装レポート

**対象LP:** FLEURISTE MADO
**実施日:** 2026-04-25
**担当:** Claude Agent

---

## 1. 実装概要

GA4（Google Analytics 4）によるLP計測環境を構築しました。

### 測定ID
- **設定値:** `G-PLACEHOLDER`
- **注意:** 本番公開前に実際のGA4測定IDに置換してください

---

## 2. 実装内容

### 2.1 GA4基本設定（head内）

**ファイル:** `index.html`（20-41行目）

```html
<!-- Google Analytics 4 (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PLACEHOLDER', {
    'send_page_view': false,
    'anonymize_ip': true,
    'custom_map': {
      'custom_dimension_1': 'lp_theme',
      'custom_dimension_2': 'lp_category'
    }
  });

  // カスタムディメンションの設定
  gtag('event', 'page_view', {
    lp_theme: 'fleurist',
    lp_category: 'flower_shop',
    lp_version: 'v1.0'
  });
</script>
```

**設定項目:**
- IPアドレス匿名化: 有効
- カスタムディメンション: `lp_theme`, `lp_category`
- ページビュー: 手動送信（初期ロード時）

---

### 2.2 イベントトラッキング実装

**ファイル:** `js/analytics.js`（新規作成）

#### (1) CTAクリック計測

```javascript
gtag('event', 'cta_click', {
  event_category: 'engagement',
  event_label: 'ボタンテキスト',
  cta_position: 'hero',  // data-position属性から取得
  cta_type: 'line'       // data-type属性から取得
});
```

**対象要素:**
- Heroセクション: `data-tracking="cta" data-position="hero" data-type="line"`
- Footerセクション: `data-tracking="cta" data-position="footer" data-type="line"`

#### (2) 電話番号クリック計測

```javascript
gtag('event', 'phone_click', {
  event_category: 'engagement',
  event_label: '電話番号',
  value: 1
});
```

**対象要素:**
- `a[href^="tel:"]` 全ての電話番号リンク

#### (3) 資料ダウンロード計測

```javascript
gtag('event', 'file_download', {
  event_category: 'engagement',
  event_label: 'ファイル名.pdf',
  value: 1
});
```

**対象要素:**
- `.pdf`, `.zip` 拡張子のリンク

#### (4) 問い合わせフォーム送信計測

```javascript
gtag('event', 'contact_submit', {
  event_category: 'conversion',
  event_label: '問い合わせ送信',
  value: 1
});
```

**対象要素:**
- `form[data-tracking="contact"]`

#### (5) スクロール深度計測

```javascript
gtag('event', 'scroll_depth', {
  event_category: 'engagement',
  event_label: '25%',  // 25/50/75/90/100
  value: 25,
  non_interaction: true
});
```

**計測ポイント:**
- 25%, 50%, 75%, 90%, 100%
- throttle 100msで負荷軽減

---

## 3. data-tracking属性付与状況

| 要素 | 属性 | ステータス |
|------|------|----------|
| Hero CTA | `data-tracking="cta" data-position="hero" data-type="line"` | ✅ 実装済み |
| Footer CTA | `data-tracking="cta" data-position="footer" data-type="line"` | ✅ 実装済み |
| 電話番号 | 自動検出（`href^="tel:"`） | ✅ 対応済み |
| 問い合わせフォーム | `data-tracking="contact"` | ⚠️ フォーム未実装 |
| 資料ダウンロード | 自動検出（`.pdf`, `.zip`） | ✅ 対応済み |

---

## 4. チェックリスト

| 項目 | ステータス |
|------|----------|
| ✅ GA4測定IDを設定済み（プレースホルダー） | |
| ✅ gtag.jsをhead内に実装 | |
| ✅ IPアドレス anonymize を有効化 | |
| ✅ カスタムディメンションを設定 | |
| ✅ CTAクリックを計測 | |
| ✅ 電話番号クリックを計測 | |
| ✅ スクロール深度（25/50/75/90/100%）を計測 | |
| ✅ 資料ダウンロードを計測 | |
| ✅ analytics.jsとして分離・読み込み | |
| ⚠️ 問い合わせフォーム（未実装のため属性付与不要） | |

---

## 5. 本番公開前に必要な作業

1. **GA4測定IDの置換**
   - `index.html` 内の `G-PLACEHOLDER` を実際の測定IDに置換
   - `js/analytics.js` 内の `G-PLACEHOLDER` を実際の測定IDに置換

2. **GA4カスタムディメンションの登録**
   - GA4管理画面でカスタムディメンションを作成:
     - `lp_theme` (文字列)
     - `lp_category` (文字列)

3. **動作確認**
   - GA4 DebugViewでイベントが送信されていることを確認
   - 各CVポイント（CTA、電話）でイベント発火を確認

---

## 6. ファイル構成

```
day090/
├── index.html           # GA4 gtag.js追加
├── js/
│   └── analytics.js     # イベントトラッキング・スクロール計測
└── analysis/
    └── analytics.md     # 本レポート
```

---

## 7. 参考資料

- [GA4 イベント計測ガイド](https://support.google.com/analytics/answer/9216061)
- [gtag.js リファレンス](https://developers.google.com/analytics/devguides/collection/gtagjs)
