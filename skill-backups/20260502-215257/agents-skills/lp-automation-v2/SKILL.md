---
name: lp-automation
description: LP自動作成オーケストレーター。ブレインストーミングからデプロイまで11ステップを自動化します。「LPを作成」「新規LP」「/lp-create」で起動。
version: 3.0.0
triggers:
  - ユーザーが「LPを作成」「新規LP」「LP生成」「ランディングページ作成」などと言ったとき
  - ユーザーが「次のLPを開始」「今回のLP」「今日のLP」と言ったとき
  - ユーザーが「/lp-create」と入力したとき
parameters:
  theme:
    type: string
    description: LPのテーマ（例: 「カフェ」「歯科医院」「採用ページ」「SaaS」）
    required: false
  category:
    type: string
    description: LPのカテゴリ（例: 「飲食店」「医療」「B2B」「コマース」）
    required: false
  brand:
    type: string
    description: ブランド名またはサービス名
    required: false
  target:
    type: string
    description: ターゲットユーザー（例: 「20代女性」「中小企業経営者」「求職者」）
    required: false
  output_dir:
    type: string
    description: 出力先ディレクトリ（デフォルト: /Users/yuuki/Works/lp-100/dayXXX/current）
    required: false
  enable_analytics:
    type: boolean
    description: アナリティクス実装を有効化（デフォルト: false）
    required: false
  enable_legal:
    type: boolean
    description: 法務ページ生成を有効化（デフォルト: false）
    required: false
  enable_performance:
    type: boolean
    description: パフォーマンス最適化を有効化（デフォルト: true）
    required: false
  enable_ux:
    type: boolean
    description: UX強化を有効化（デフォルト: true）
    required: false
  tracking_id:
    type: string
    description: GA4測定ID（例: G-XXXXXXXXXX）
    required: false
---

# LP自動作成オーケストレーター

LP制作プロセスを11ステップで完全自動化します。

**v3.0.0 更新**: スキルをオーケストレーター型 + 機能別専門スキルにリファクタリング

## 自動化フロー

```
1. ブレインストーミング  → テーマ決定、カテゴリ選択、ブランド決定
2. デザイン仕様策定    → カラー、フォント、レイアウト（lp-category-settings）
3. コーディング        → HTML/CSS/JS実装、レスポンシブ対応
4. 画像取得          → Unsplash/Pexelsからフリー素材をダウンロード
5. 評価             → LP_REVIEW_TEMPLATE.mdによる10領域評価
6. プロフェッショナル化レビュー → 5人の専門家チームによる多角的評価
7. 改善             → auto-improveスキルでSEO・アクセシビリティ・セキュリティ改善
8. アナリティクス実装   → lp-analyticsスキルでGA4・CVトラッキング実装
9. 法務ページ生成     → lp-legalスキルで特商法・プライバシーポリシー生成
10. パフォーマンス最適化  → lp-performanceスキルでLazy Loading・Core Web Vitals対応
11. UX強化          → lp-uxスキルでToast通知・ローディング状態実装
12. コード品質レビュー   → code-reviewスキルでバリデーション
13. セキュリティ監査    → security-auditスキルで脆弱性チェック
14. コミット & デプロイ  → Gitコミット、ローカルサーバー起動
```

## 使用する専門スキル

| スキル | 役割 | ステップ |
|--------|------|----------|
| lp-category-settings | 業種別デザイン設定 | 2 |
| auto-improve | LP改善（SEO・A11y・セキュリティ） | 7 |
| lp-analytics | アナリティクス実装 | 8 |
| lp-legal | 法務ページ生成 | 9 |
| lp-performance | パフォーマンス最適化 | 10 |
| lp-ux | UX強化 | 11 |
| code-review | コード品質レビュー | 12 |
| security-audit | セキュリティ監査 | 13 |

## 実行手順

### ステップ1: 要件収集

ユーザーから以下を確認:

```markdown
## LP作成要件確認

1. **テーマ**: LPのテーマは何ですか？
   - 例: カフェ、歯科医院、採用ページ、SaaS

2. **カテゴリー**: どのカテゴリーに属しますか？
   - 飲食店、医療、B2B、不動産、教育、採用、コマース

3. **ブランド名**: ブランド/サービス名は？

4. **ターゲット**: 誰に向けたLPですか？

5. **オプション機能**（デフォルト: 無効）
   - [ ] アナリティクス（GA4）
   - [ ] 法務ページ（特商法・プライバシー）
   - [ ] パフォーマンス最適化
   - [ ] UX強化
```

### ステップ2: ディレクトリ作成

```bash
# 出力先ディレクトリを作成
mkdir -p {output_dir}/current
mkdir -p {output_dir}/images
mkdir -p {output_dir}/css
mkdir -p {output_dir}/js
```

### ステップ3: 各専門スキルを呼び出し

```bash
# 2. デザイン仕様策定
Skill: lp-category-settings
  category: {category}
  subcategory: {subcategory}

# 7. 改善
Skill: auto-improve

# 8. アナリティクス（enable_analytics=true時）
Skill: lp-analytics
  tracking_id: {tracking_id}
  theme: {theme}
  category: {category}

# 9. 法務ページ（enable_legal=true時）
Skill: lp-legal
  brand_name: {brand}

# 10. パフォーマンス（enable_performance=true時）
Skill: lp-performance

# 11. UX強化（enable_ux=true時）
Skill: lp-ux

# 12. コードレビュー
Skill: code-review

# 13. セキュリティ監査
Skill: security-audit
```

### ステップ4: 最終確認とデプロイ

```bash
# Gitコミット
git add .
git commit -m "feat: LP作成 {theme}

- テーマ: {theme}
- カテゴリ: {category}
- ブランド: {brand}

実装機能:
- アナリティクス: {enable_analytics}
- 法務ページ: {enable_legal}
- パフォーマンス: {enable_performance}
- UX強化: {enable_ux}

Co-Authored-By: Codex Opus 4.6 (1M context) <noreply@anthropic.com>"

# ローカルサーバー起動
python3 -m http.server 8080 > /dev/null 2>&1 &
open http://localhost:8080/{output_dir}/
```

## オプション機能のデフォルト設定

| 機能 | デフォルト | 理由 |
|------|-----------|------|
| アナリティクス | false | 測定IDが必要 |
| 法務ページ | false | 会社情報が必要 |
| パフォーマンス | true | 常に有効化推奨 |
| UX強化 | true | 常に有効化推奨 |

## ディレクトリ構成

```
dayXXX/
├── index.html              # メインHTML
├── legal-act.html          # 特商法表記（enable_legal=true時）
├── privacy.html            # プライバシーポリシー（enable_legal=true時）
├── css/
│   ├── style.css          # メインスタイルシート
│   ├── legal.css          # 法務ページスタイル（enable_legal=true時）
│   └── toast.css          # Toast通知スタイル（enable_ux=true時）
├── js/
│   ├── script.js          # メインJavaScript
│   ├── analytics.js       # CVトラッキング（enable_analytics=true時）
│   ├── toast.js           # Toast通知（enable_ux=true時）
│   └── lazy-load.js       # Lazy Loading（enable_performance=true時）
├── images/                # 画像ディレクトリ
└── README.md              # LP概要
```

## 完了チェックリスト

```markdown
## LP作成完了チェックリスト

### 基本機能
- [ ] HTML構築完了
- [ ] CSS実装完了
- [ ] JavaScript実装完了
- [ ] 画像配置完了
- [ ] レスポンシブ確認

### 改善
- [ ] SEO対策実装
- [ ] アクセシビリティ対応
- [ ] セキュリティヘッダー実装

### オプション機能
- [ ] GA4実装（enable_analytics=true時）
- [ ] 特商法表記作成（enable_legal=true時）
- [ ] プライバシーポリシー作成（enable_legal=true時）
- [ ] Lazy Loading適用（enable_performance=true時）
- [ ] Toast通知実装（enable_ux=true時）
- [ ] ローディング状態実装（enable_ux=true時）

### 品質
- [ ] LP評価実施
- [ ] コードレビュー合格
- [ ] セキュリティ監査合格

### デプロイ
- [ ] Gitコミット
- [ ] ローカルサーバー確認
```

## 更新履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v3.0.0 | 2026-04-23 | **リファクタリング**<br>- オーケストレーター型に変更<br>- 機能別専門スキルに分割<br>- lp-analytics追加<br>- lp-legal追加<br>- lp-performance追加<br>- lp-ux追加 |
| v2.1.0 | 2026-04-17 | 品質 & UX強化 |
| v2.0.0 | 2026-04-16 | 大規模アップデート（11ステップ化） |
