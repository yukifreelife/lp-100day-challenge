# Day090 SEO評価レポート

## 1. 基本メタデータ

| 項目 | 状態 | スコア |
|------|------|--------|
| title | ✅ 29文字 | 100 |
| description | ✅ 52文字 | 100 |
| viewport | ✅ 設定済み | 100 |
| canonical | ✅ 設定済み | 100 |
| lang属性 | ✅ "ja" | 100 |
| charset | ✅ UTF-8 | 100 |

```html
<!-- 良好なメタデータ実装 -->
<title>FLEURISTE MADO | 毎日に、花のある時間を。</title>
<meta name="description" content="東京・神宮前のフラワーショップ FLEURISTE MADO。旬の花材を使ったブーケ・アレンジメント・ギフトをLINEでご相談いただけます。">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="https://fleuriste-mado.jp/">
```

## 2. OGP設定

| 項目 | 状態 | 詳細 |
|------|------|------|
| og:type | ✅ | website |
| og:url | ⚠️ | 未設定 |
| og:title | ✅ | 29文字 |
| og:description | ✅ | 49文字 |
| og:image | ✅ | ./images/img-06.jpg |
| og:site_name | ⚠️ | 未設定 |
| og:locale | ⚠️ | 未設定 |
| Twitter Card | ⚠️ | 未設定 |

```html
<!-- 現状のOGP実装 -->
<meta property="og:title" content="FLEURISTE MADO | 毎日に、花のある時間を。">
<meta property="og:description" content="東京・神宮前のフラワーショップ。旬の花材を使ったブーケ・アレンジメント・ギフトをLINEでご相談いただけます。">
<meta property="og:image" content="./images/img-06.jpg">
<meta property="og:type" content="website">
```

**改善推奨**:
- `og:url` を追加
- `og:site_name` を追加
- `og:locale` を追加（`ja_JP`）
- Twitter Card metaタグを追加

## 3. 構造化データ（JSON-LD）

| 項目 | 状態 | 詳細 |
|------|------|------|
| JSON-LD | ✅ 実装済み | 430-448行目 |
| @type | ✅ | Florist |
| 必須プロパティ | ✅ | name, address, url |
| オプションプロパティ | ✅ | openingHours, sameAs |

```json
{
  "@context": "https://schema.org",
  "@type": "Florist",
  "name": "FLEURISTE MADO",
  "description": "東京・神宮前のフラワーショップ。旬の花材を使ったブーケ・アレンジメント・ギフト。",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "神宮前 1-2-3 MADO Building 1F",
    "addressLocality": "渋谷区",
    "addressRegion": "東京都",
    "postalCode": "150-0001",
    "addressCountry": "JP"
  },
  "url": "https://fleuriste-mado.jp",
  "openingHours": "Tu-Su 11:00-19:00",
  "sameAs": ["https://www.instagram.com/fleuriste_mado"]
}
```

**評価**: 構造化データは適切に実装されています。リッチリザルトの可能性があります。

## 4. 見出し構造

| 項目 | 状態 |
|------|------|
| h1の数 | ✅ 1つ |
| 階層構造 | ✅ 正しい（h1→h2→h3→h4） |
| キーワード配置 | ✅ h1に主要キーワード |

```
h1: 窓辺に、花のある暮らしを
  └─ h2: MADOの提案
      └─ h4: Bouquet / Arrangement / Gift
  └─ h2: 作品集
  └─ h2: ご注文の流れ
      └─ (見出しなし、数字表示)
  └─ (CTAセクション - 見出しなし)
```

**改善推奨**:
- CTAセクションにh2見出しを追加（SEOとアクセシビリティの両面）

## 5. リンク評価

| 項目 | 状態 | 詳細 |
|------|------|------|
| 外部リンク | ✅ | rel="noopener noreferrer" あり |
| 法務ページ | ✅ | リンクあり |
| 電話番号 | ⚠️ | tel:リンクなし |
| 内部リンク | ⚠️ | 一部#リンクのみ |

```html
<!-- 外部リンク適切実装 -->
<a href="https://line.me/ti/p/@fleuriste_mado" rel="noopener noreferrer" target="_blank">

<!-- 法務ページリンクあり -->
<a href="./legal-act.html">特定商取引法</a>
<a href="./privacy.html">プライバシーポリシー</a>
```

## 6. 画像SEO

| 項目 | 状態 | 詳細 |
|------|------|------|
| alt属性 | ✅ | 全画像に記述あり |
| width/height | ✅ | 全画像に指定あり |
| ファイル名 | ✅ | 英数字（img-XX.jpg） |

**評価**: 画像SEOは良好です。

## 7. 総合スコア

| 項目 | スコア |
|------|--------|
| 基本メタデータ | 100/100 |
| OGP | 70/100 |
| 構造化データ | 95/100 |
| 見出し | 90/100 |
| リンク | 85/100 |
| 画像SEO | 100/100 |
| **総合** | **90/100** |

## 8. 改優先度別改善推奨

### 高優先度
1. **OGP完全実装** - `og:url`, `og:site_name`, `og:locale` 追加
2. **Twitter Card追加** - SNSでのシェア表示改善

### 中優先度
3. **CTAセクションにh2見出し追加** - コンテンツ構造の強化
4. **電話番号にtel:リンク追加** - モバイルユーザビリティ向上

### 低優先度
5. **内部リンク強化** - アンカーリンクの改善
