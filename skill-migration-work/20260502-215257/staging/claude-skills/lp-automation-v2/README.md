# LP自動作成スキル v2

## 概要

LP自動作成スキルのv2バージョン。アナリティクス、法務コンプライアンス、パフォーマンス最適化を追加強化しました。

## v2で追加された機能

### 1. アナリティクス & データ計測（ステップ8）
- **GA4実装**: gtag.jsによるGoogle Analytics 4統合
- **CVトラッキング**: 問い合わせ送信、電話番号クリック、CTAクリック、資料ダウンロード
- **スクロール計測**: 25/50/75/90/100%の深度計測

### 2. 法務コンプライアンス（ステップ9）
- **特商法表記**: 日本の特定商取引法に準拠した表記ページ生成
- **プライバシーポリシー**: 個人情報保護法対応のポリシーページ生成
- **フッターリンク**: 法務ページへの統合

### 3. パフォーマンス最適化（ステップ10）
- **Lazy Loading**: ネイティブloading属性とポリフィル対応
- **Core Web Vitals配慮**: LCP、FID/INP、CLSの各指標対策
- **画像最適化**: レスポンシブ画像、WebP対応、圧縮設定

## ファイル構成

```
/Users/yuuki/.claude/skills/lp-automation-v2/
├── SKILL.md              # メインスキル定義
├── CHECKLIST.md          # 実装チェックリスト
├── CODE_EXAMPLES.md      # コード例集
└── README.md             # このファイル
```

## 使用方法

### スキルの起動トリガー
- 「LPを作成」「新規LP」「LP生成」「ランディングページ作成」
- 「次のLPを開始」「今回のLP」「今日のLP」
- 「/lp-create」

### パラメータ

| パラメータ | 型 | 必須 | 説明 |
|-----------|------|------|------|
| theme | string | × | LPのテーマ |
| category | string | × | LPのカテゴリ |
| brand | string | × | ブランド/サービス名 |
| target | string | × | ターゲットユーザー |
| output_dir | string | × | 出力先ディレクトリ |
| enable_ga4 | boolean | × | GA4を有効化（デフォルト: false） |
| enable_legal | boolean | × | 法務ページを生成（デフォルト: false） |
| tracking_id | string | × | GA4測定ID |

### 実行例

```
ユーザー: LPを作成。カフェのLPで、GA4有効、法務ページも作って。

AI: LP自動作成v2を開始します。
    テーマ: カフェ
    カテゴリ: 飲食店
    GA4: 有効
    法務ページ: 作成

    ステップ1: ブレインストーミング...
    ...
```

## 出力ディレクトリ構成

```
dayXXX/
├── index.html              # メインHTML
├── legal-act.html          # 特商法表記【v2追加】
├── privacy.html            # プライバシーポリシー【v2追加】
├── css/
│   ├── style.css          # メインスタイル
│   ├── legal.css          # 法務ページスタイル【v2追加】
│   └── critical.css       # クリティカルCSS【v2追加】
├── js/
│   ├── script.js          # メインJavaScript
│   ├── analytics.js       # CVトラッキング【v2追加】
│   ├── scroll-tracking.js # スクロール計測【v2追加】
│   └── lazy-load-polyfill.js # Lazy Loading【v2追加】
├── images/
├── analytics-config.json   # GA4設定【v2追加】
└── README.md
```

## バージョン履歴

| バージョン | 日付 | 内容 |
|-----------|------|------|
| v2.0.0 | 2026-04-16 | アナリティクス、法務、パフォーマンスを追加 |
| v1.2.0 | 2026-04-14 | ローカルサーバー自動起動 |
| v1.1.0 | 2026-04-12 | プロフェッショナル化レビュー |
| v1.0.0 | 2026-04-08 | 初版 |

## 既存v1との差分

| 項目 | v1 | v2 |
|------|----|----|
| ステップ数 | 9 | 11 |
| GA4実装 | × | ○ |
| CVトラッキング | × | ○ |
| スクロール計測 | × | ○ |
| 特商法表記 | × | ○ |
| プライバシーポリシー | × | ○ |
| Lazy Loading | × | ○ |
| Core Web Vitals | × | ○ |
| 画像最適化 | × | ○ |

## 注意点

1. **GA4測定ID**: 実運用では `G-PLACEHOLDER` を実際の測定IDに置換
2. **法務プレースホルダー**: 各法務ページのプレースホルダー（{{brand_name}}等）を置換
3. **オプトイン**: enable_ga4、enable_legalはデフォルトfalse

## 関連ファイル

- v1スキル: `/Users/yuuki/.claude/skills/lp-automation/SKILL.md`
- 評価テンプレート: `/Users/yuuki/Works/lp-100/templates/LP_REVIEW_TEMPLATE.md`
