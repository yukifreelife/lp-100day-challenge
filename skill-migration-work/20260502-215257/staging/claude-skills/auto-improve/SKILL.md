---
name: auto-improve
description: LP評価スコアに基づき自動改善を実行します。スコアが閾値未満の場合、またはユーザーが「改善して」と言った場合に起動します。
version: 1.0.0
---

# Auto Improve - LP自動改善スキル

LP評価結果に基づき、閾値以下の場合に自動的に改善を実行します。

## 起動条件

このスキルは以下の場合に起動します:

1. LP評価スコアが閾値未満の場合
2. ユーザーが「改善して」「auto-improve」と言った場合
3. LP評価結果から改善が必要と判断された場合

## 閾値設定

| 領域 | 最低スコア | 改善アクション |
|------|-----------|---------------|
| 総合スコア | 80点未満 | 全改善実行 |
| アクセシビリティ | 70点未満 | ARIA属性追加 |
| セキュリティ | 60点未満 | プライバシーポリシー追加 |
| SEO | 70点未満 | メタタグ強化 |

## 自動改善フロー

### 1. 評価結果解析

まず、現在のLP評価スコアを取得・解析します:

```markdown
- 各領域のスコアを確認
- 閾値を下回る領域を特定
- 改善優先順位を決定
```

### 2. 改善アクション実行

閾値を下回る領域に応じて、以下の改善を実行します:

#### アクセシビリティ改善（70点未満）

```html
<!-- 主な改善内容 -->
- lang属性追加: <html lang="ja">
- ARIAランドマーク追加: role="banner", role="main", role="navigation"
- altテキスト追加・改善: すべての画像に説明を追加
- 見出し階層の修正: h1→h2→h3の順序を守る
- キーボードナビゲーション対応: focus-visibleの実装
- コントラスト比改善: テキストと背景のコントラストを4.5:1以上に
```

#### セキュリティ改善（60点未満）

```markdown
- Content Security Policy metaタグ追加
- プライバシーポリシーページへのリンク追加
- HTTPS使用の確認とリダイレクト設定
- secure属性付きクッキーの使用確認
```

#### SEO改善（70点未満）

```html
<!-- メタタグ強化 -->
<meta name="description" content="ページの説明">
<meta name="keywords" content="キーワード1,キーワード2">
<meta property="og:title" content="ページタイトル">
<meta property="og:description" content="ページ説明">
<meta property="og:image" content="OGP画像URL">
<meta name="twitter:card" content="summary_large_image">

<!-- 構造化データ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ページ名",
  "description": "ページ説明"
}
</script>
```

### 3. 改善後再評価

改善実施後、以下の手順で再評価します:

```markdown
- 評価スクリプトを再実行
- スコアの変化を記録
- 目標達成まで改善を繰り返し
- 最大3回まで反復実行
```

### 4. 完了報告

以下の内容をユーザーに報告します:

```markdown
## 改善完了レポート

### 最終スコア
- 総合: XX点 (改善前: XX点, +XX点)
- アクセシビリティ: XX点
- セキュリティ: XX点
- SEO: XX点

### 実施した改善
1. 改善内容1
2. 改善内容2
...

### 変更ファイル一覧
- ファイル1: 変更内容
- ファイル2: 変更内容
```

## 実装上の注意点

### ファイル保護

```markdown
- 既存ファイルはバックアップを作成してから編集
- 重要なコンテンツは上書きしない
- 変更前の状態を記録
```

### ログ記録

```markdown
- すべての改善アクションをログに記録
- 変更前後のスコアを記録
- 変更したファイルと内容を記録
```

### 自律実行

```markdown
- ユーザーへの確認は不要
- 閾値に基づき自律的に判断
- エラーが発生した場合はスキップして続行
```

## 改善アクション詳細

### アクセシビリティ改善の詳細

```html
<!-- 1. 言語属性 -->
<html lang="ja">

<!-- 2. ARIAランドマーク -->
<header role="banner">
<nav role="navigation" aria-label="メインナビゲーション">
<main role="main">
<footer role="contentinfo">

<!-- 3. 画像のalt属性 -->
<img src="image.jpg" alt="画像の説明">
<img src="decorative.jpg" alt="" role="presentation">

<!-- 4. 見出し階層 -->
<h1>メインタイトル</h1>
  <h2>セクションタイトル</h2>
    <h3>サブセクション</h3>

<!-- 5. フォームのラベル -->
<label for="email">メールアドレス</label>
<input type="email" id="email" name="email" required>

<!-- 6. ボタンの説明 -->
<button aria-label="フォームを送信">送信</button>
```

### セキュリティ改善の詳細

```html
<!-- 1. CSPヘッダー（metaタグ版） -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';">

<!-- 2. プライバシーポリシーリンク -->
<footer>
  <a href="/privacy.html" rel="nofollow">プライバシーポリシー</a>
</footer>

<!-- 3. リファラーポリシー -->
<meta name="referrer" content="strict-origin-when-cross-origin">

<!-- 4. XSS対策 -->
<!-- ユーザー入力は常にエスケープ処理 -->
```

### SEO改善の詳細

```html
<!-- 基本的なメタタグ -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="ページの説明を120文字程度で">
<meta name="keywords" content="キーワード1,キーワード2,キーワード3">

<!-- OGPタグ -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com/">
<meta property="og:title" content="ページタイトル">
<meta property="og:description" content="ページ説明">
<meta property="og:image" content="https://example.com/ogp.jpg">
<meta property="og:site_name" content="サイト名">
<meta property="og:locale" content="ja_JP">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@username">
<meta name="twitter:title" content="ページタイトル">
<meta name="twitter:description" content="ページ説明">
<meta name="twitter:image" content="https://example.com/ogp.jpg">

<!-- 構造化データ（JSON-LD） -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ページタイトル",
  "description": "ページ説明",
  "url": "https://example.com/",
  "publisher": {
    "@type": "Organization",
    "name": "組織名",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  }
}
</script>

<!-- canonical URL -->
<link rel="canonical" href="https://example.com/">

<!-- ファビコン -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

## 改善後のチェックリスト

すべての改善実施後、以下を確認:

```markdown
□ HTMLファイルが正しく更新されている
□ バックアップファイルが作成されている
□ スコアが改善している
□ 表示崩れが発生していない
□ 機能に影響がない
```

## 使用例

```bash
# スキルの呼び出し
/skill auto-improve

# または自然言語で
「このLPの評価結果を改善して」
「LPのスコアを上げて」
「アクセシビリティを改善して」
```

---

このスキルはLPの品質向上を自動化し、継続的な改善を支援します。
