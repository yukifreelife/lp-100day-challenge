# LP SEO評価スキル

LPのSEO対策状況を評価し、検索エンジンでの視認性を向上させます。

## 評価項目

### 1. 基本メタデータ

#### 必須タグ
```html
<!-- タイトル（30文字前後、全角60文字程度） -->
<title>FLEURISTE MADO | 毎日に、花のある時間を。</title>

<!-- 説明（120文字程度） -->
<meta name="description" content="東京・神宮前のフラワーショップ FLEURISTE MADO。旬の花材を使ったブーケ・アレンジメント・ギフトをLINEでご相談いただけます。">

<!-- 文字セット -->
<meta charset="UTF-8">

<!-- ビューポート -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Canonical URL -->
<link rel="canonical" href="https://example.com/">
```

#### チェックリスト
- [ ] titleタグが存在し、キーワードを含む
- [ ] descriptionが120文字前後
- [ ] viewport設定がある
- [ ] canonical URLが設定されている

### 2. OGP（SNS対応）

#### 必須OGPタグ
```html
<!-- 基本OGP -->
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
```

#### OGP画像推奨
- サイズ: 1200x630px（推奨）
- ファイルサイズ: 5MB以下
- フォーマット: JPGまたはPNG

### 3. 構造化データ（JSON-LD）

#### ローカルビジネス例
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Florist",
  "name": "FLEURISTE MADO",
  "description": "東京・神宮前のフラワーショップ",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "神宮前 1-2-3",
    "addressLocality": "渋谷区",
    "addressRegion": "東京都",
    "postalCode": "150-0001",
    "addressCountry": "JP"
  },
  "url": "https://fleuriste-mado.jp",
  "telephone": "+81-3-1234-5678",
  "openingHours": "Tu-Su 11:00-19:00",
  "priceRange": "¥¥¥"
}
</script>
```

### 4. 見出し構造

#### キーワード配置
```html
<h1>メインキーワードを含むタイトル</h1>
  <h2>関連キーワードを含むセクション</h2>
    <p>キーワードを自然に含む説明文</p>
    <h3>詳細キーワード</h3>
```

#### チェック
- h1が1つだけ存在する
- 見出し階層が正しい（h1→h2→h3）
- キーワードが冒頭近くに配置されている

### 5. 内部リンク・外部リンク

#### 内部リンク
```html
<!-- 法務ページへのリンク（必須） -->
<a href="./privacy.html">プライバシーポリシー</a>
<a href="./legal-act.html">特定商取引法に基づく表記</a>
```

#### 外部リンク
```html
<!-- target="_blank"には安全対策必須 -->
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
  外部サイト
</a>
```

#### 電話番号リンク
```html
<!-- モバイルでの発信対応 -->
<a href="tel:0312345678">03-1234-5678</a>
```

### 6. 画像SEO

#### 必須属性
```html
<!-- alt属性は必須 -->
<img src="image.jpg" alt="具体的な説明（キーワードを含める）" width="800" height="600">

<!-- 装飾画像は空alt -->
<img src="deco.jpg" alt="" role="presentation">
```

#### ファイル名
- 英数字・ハイフンのみ: `flower-bouquet.jpg`
- 日本語・スペース回避: `花束.jpg` → `flower-bouquet.jpg`

## チェックリスト

```markdown
## 基本メタデータ
- [ ] titleタグが存在（30文字前後）
- [ ] descriptionが存在（120文字前後）
- [ ] viewport設定がある
- [ ] canonical URLが設定されている
- [ ] lang属性が設定されている

## OGP
- [ ] og:typeが設定されている
- [ ] og:titleが設定されている
- [ ] og:descriptionが設定されている
- [ ] og:imageが設定されている（1200x630px）
- [ ] Twitter Cardが設定されている

## 構造化データ
- [ ] JSON-LDが実装されている
- [ ] @typeが適切に設定されている
- [ ] 必須プロパティが含まれている

## 見出し
- [ ] h1が1つだけ
- [ ] 見出し階層が正しい
- [ ] キーワードがh1に含まれている

## リンク
- [ ] 外部リンクにrel="noopener noreferrer"がある
- [ ] 法務ページへのリンクがある
- [ ] 電話番号にtel:リンクがある

## 画像
- [ ] 全ての画像にalt属性がある
- [ ] altがキーワードを適切に含んでいる
- [ ] 画像にwidth/height属性がある
```

## 評価レポート出力

`analysis/seo-eval.md` を作成:

```markdown
# DayXXX SEO評価レポート

## 1. 基本メタデータ
| 項目 | 状態 | スコア |
|------|------|--------|
| title | ✅ 28文字 | 100 |
| description | ✅ 98文字 | 100 |
| viewport | ✅ 設定済み | 100 |
| canonical | ✅ 設定済み | 100 |

## 2. OGP
| 項目 | 状態 |
|------|------|
| og:type | ✅ |
| og:image | ⚠️ サイズ要確認 |

## 3. 構造化データ
| 項目 | 状態 |
|------|------|
| JSON-LD | ✅ 実装済み |
| @type | ✅ Florist |

## 4. 改善推奨
1. OGP画像を1200x630pxにサイズ変更
2. descriptionにキーワード「ブーケ」「ギフト」を追加
```

## 実装手順

### ステップ1: メタデータ確認
現在のHTMLのheadセクションを確認

### ステップ2: OGP確認
OGPデバッガーで確認:
- Facebook Sharing Debugger
- Twitter Card Validator

### ステップ3: 構造化データ確認
リッチリザルトテストで確認

### ステップ4: 改善実施
不足項目を追加・修正

## 更新履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v1.0.0 | 2026-04-26 | 初版作成 |
