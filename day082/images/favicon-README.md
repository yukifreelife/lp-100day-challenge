# PNG Favicon Generation Instructions

## 生成方法
以下のコマンドでSVGからPNGを生成してください：

### ImageMagickを使用する場合
```bash
convert -background none favicon.svg -resize 16x16 favicon-16x16.png
convert -background none favicon.svg -resize 32x32 favicon-32x32.png
convert -background none favicon.svg -resize 180x180 apple-touch-icon.png
```

### オンラインツール
- https://realfavicongenerator.net/
- https://www.favicon-generator.org/
