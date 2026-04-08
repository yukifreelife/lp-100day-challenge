# Day073 画像配置ガイド

## 現在の状況

プレースホルダー画像（SVG）が配置されています。実際の写真画像に差し替える場合は、以下の手順で行ってください。

## 推奨画像ソース

### 1. Unsplash（無料・高品質）
URL: https://unsplash.com

### 2. Pexels（無料・商用利用可）
URL: https://pexels.com

### 3. Pixabay（無料・商用利用可）
URL: https://pixabay.com

## 各画像の推奨キーワードと検索リンク

| ファイル名 | Unsplash検索リンク | キーワード |
|---------|---------------------|--------|
| `gallery/appetizer.jpg` | https://unsplash.com/s/photos/appetizer | appetizer, japanese food, platter |
| `gallery/roastbeef.jpg` | https://unsplash.com/s/photos/roast-beef | roast beef, meat, steak |
| `gallery/cake.jpg` | https://unsplash.com/s/photos/birthday-cake | birthday cake, anniversary cake |
| `gallery/onigiri.jpg` | https://unsplash.com/s/photos/onigiri | rice ball, japanese food, bento |
| `gallery/salad.jpg` | https://unsplash.com/s/photos/greek-salad | salad, fresh vegetables |
| `gallery/paella.jpg` | https://unsplash.com/s/photos/paella | paella, spanish food |
| `images/chef.jpg` | https://unsplash.com/s/photos/female-chef | chef, woman, cook, kitchen |
| `images/hero-bg.jpg` | https://unsplash.com/s/photos/catering | catering, buffet, party food |

## 画像の配置手順

1. 上記リンクから適切な画像を選んでダウンロード
2. 画像をリサイズ（推奨: ギャラリー用 800x600px、シェフ用 400x400px、ヒーロー用 1920x1080px）
3. 以下のパスに上書き保存：
   - ギャラリー: `/Users/yuuki/Works/lp-100/day073/gallery/[ファイル名]`
   - シェフ: `/Users/yuuki/Works/lp-100/day073/images/chef.jpg`
   - ヒーロー: `/Users/yuuki/Works/lp-100/day073/images/hero-bg.jpg`

## コマンドでの一括配置（例）

```bash
# ギャラリー画像
mv ~/Downloads/appetizer.jpg /Users/yuuki/Works/lp-100/day073/gallery/
mv ~/Downloads/roastbeef.jpg /Users/yuuki/Works/lp-100/day073/gallery/
mv ~/Downloads/cake.jpg /Users/yuuki/Works/lp-100/day073/gallery/
mv ~/Downloads/onigiri.jpg /Users/yuuki/Works/lp-100/day073/gallery/
mv ~/Downloads/salad.jpg /Users/yuuki/Works/lp-100/day073/gallery/
mv ~/Downloads/paella.jpg /Users/yuuki/Works/lp-100/day073/gallery/

# シェフ・ヒーロー画像
mv ~/Downloads/chef.jpg /Users/yuuki/Works/lp-100/day073/images/
mv ~/Downloads/hero-bg.jpg /Users/yuuki/Works/lp-100/day073/images/
```

## 注意事項

- 画像は商用利用可能なものを選択してください
- 著作権のある画像は使用しないでください
- 画像の最適化（WebP変換など）を行うと表示速度が向上します
