# FocusFlow LP

集中力を高めるタスク管理アプリ「FocusFlow」のランディングページ

## 概要

- **テーマ**: SaaS/ツール紹介
- **カテゴリ**: 個人向け（BtoC）
- **ブランド**: FocusFlow（フォーカスフロー）
- **作成日**: 2026-04-17

## ディレクトリ構成

```
day082/
├── index.html              # メインHTML
├── legal-act.html          # 特商法表記
├── privacy.html            # プライバシーポリシー
├── README.md               # このファイル
├── analytics-config.json   # GA4設定
├── css/
│   ├── style.css          # メインスタイルシート
│   ├── legal.css          # 法務ページスタイル
│   └── critical.css       # クリティカルCSS
├── js/
│   ├── analytics.js       # CVトラッキング
│   ├── scroll-tracking.js # スクロール計測
│   └── lazy-load-polyfill.js # Lazy Loading
└── images/                # 画像ディレクトリ
```

## v2 機能

### アナリティクス & データ計測
- GA4 トラッキング実装
- CVイベント計測（問い合わせ、電話、CTA、ダウンロード）
- スクロール深度計測（25/50/75/90/100%）

### 法務コンプライアンス
- 特定商取引法に基づく表記ページ
- プライバシーポリシーページ
- フッター法務リンク

### パフォーマンス最適化
- Lazy Loading（Intersection Observer API）
- Core Web Vitals 対応（LCP, FID/INP, CLS）
- Critical CSS インライン化

## 開発環境

### ローカルサーバー起動

```bash
# Pythonの場合
python3 -m http.server 8080

# Node.jsの場合
npx http-server -p 8080

# ブラウザでアクセス
open http://localhost:8080/day082/
```

## 設定

### GA4 測定ID

`analytics-config.json` または `index.html` の `G-PLACEHOLDER` を実際の測定IDに置換してください。

```javascript
// index.html
gtag('config', 'G-XXXXXXXXXX', {  // 実際の測定IDに変更
  'send_page_view': false,
  'anonymize_ip': true
});
```

### 法務ページ情報

以下のプレースホルダーを実情に合わせて変更してください：

- `legal-act.html`: 事業者名、所在地、連絡先など
- `privacy.html`: メールアドレス、電話番号など

## ブラウザ対応

- Chrome / Edge（最新版）
- Safari（最新版）
- Firefox（最新版）

## ライセンス

社内制作用
