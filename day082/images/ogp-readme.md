# OGP 画像作成ガイド

## 推奨仕様

- **サイズ**: 1200 x 630 px（Facebook/Twitter推奨）
- **形式**: JPEG（_quality: 85%）または WebP（_quality: 80%）
- **ファイルサイズ**: 500KB以下
- **アスペクト比**: 1.91:1

## デザイン要素

### 必須項目
- [ ] ロゴ（左上または中央）
- [ ] サービス名「FocusFlow」
- [ ] キャッチコピー「集中力を高めるタスク管理アプリ」
- [ ] 背景画像またはグラデーション

### 推奨色
- Primary: #2563EB
- Secondary: #10B981
- Text: #1E293B（濃いグレー）
- Background: #F8FAFC（薄いグレー）

## 作成コマンド例

### ImageMagickを使用する場合

```bash
# 基本テンプレート
convert -size 1200x630 xc:'#F8FAFC' \
  -font '/System/Library/Fonts/Hiragino+SansGB-W3.ttc' \
  -pointsize 48 -fill '#1E293B' -gravity center \
  -annotate +0-100 'FocusFlow' \
  -pointsize 32 -annotate +0+0 '集中力を高めるタスク管理アプリ' \
  ogp.jpg

# グラデーション背景
convert -size 1200x630 gradient:'#2563EB-#10B981' \
  -font '/System/Library/Fonts/Hiragino+SansGB-W3.ttc' \
  -pointsize 48 -fill white -gravity center \
  -annotate +0-100 'FocusFlow' \
  -pointsize 32 -annotate +0+0 '集中力を高めるタスク管理アプリ' \
  ogp.jpg
```

### Canva（オンライン）
1. テンプレート検索: 「ソーシャルメディア OGP」
2. サイズ: 1200 x 630 px
3. ロゴ、テキストを配置
4. PNG/JPEGでダウンロード

## 確認ツール

- [Facebook デバッガー](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [OGP Checker](https://ogp.me/)

## 配置先

```
day082/images/ogp.jpg
day082/images/ogp.webp  (WebP版)
```

## HTMLの更新

作成後、以下のURLを実際のURLに更新：

```html
<meta property="og:image" content="https://your-domain.com/images/ogp.jpg">
<meta name="twitter:image" content="https://your-domain.com/images/ogp.jpg">
```

## サンプルテキスト配置

```
┌────────────────────────────────────────────┐
│ FocusFlow                         [LOGO]   │
│ 集中力を高めるタスク管理アプリ              │
│                                                │
│         [スクリーンショット画像]              │
│                                                │
│ 無料で始める →                                 │
└────────────────────────────────────────────┘
```
