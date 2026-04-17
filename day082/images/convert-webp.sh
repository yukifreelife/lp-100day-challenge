#!/bin/bash
# WebP画像変換スクリプト
# 使用方法: ./convert-webp.sh

# 色設定
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}WebP変換を開始します...${NC}"

# ImageMagickがインストールされているか確認
if ! command -v convert &> /dev/null; then
    echo "ImageMagickがインストールされていません"
    echo "インストール: brew install imagemagick"
    exit 1
fi

# 変換対象画像リスト
images=(
    "app-preview.jpg"
    "avatar-1.jpg"
    "avatar-2.jpg"
    "avatar-3.jpg"
)

# 変換実行
for img in "${images[@]}"; do
    if [ -f "$img" ]; then
        echo -e "${GREEN}変換中: $img${NC}"
        convert "$img" -quality 80 -define webp:method=6 "${img%.*}.webp"
    else
        echo "スキップ: $img (ファイルが存在しません)"
    fi
done

# OGP画像用（プレースホルダー）
if [ ! -f "ogp.webp" ]; then
    echo -e "${GREEN}OGPプレースホルダーを作成...${NC}"
    convert -size 1200x630 gradient:'#2563EB-#10B981' \
        -font '/System/Library/Fonts/Hiragino Sans GB.ttc' \
        -pointsize 48 -fill white -gravity center \
        -annotate +0-100 'FocusFlow' \
        -pointsize 32 -annotate +0+0 '集中力を高めるタスク管理アプリ' \
        -quality 80 ogp.webp
fi

echo -e "${GREEN}完了！${NC}"
echo "生成されたWebPファイル:"
ls -lh *.webp 2>/dev/null
