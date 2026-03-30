# Imagen 3 画像生成ガイド

## Google Imagen 3へのアクセス

### 方法1: Google Gemini（推奨）
1. https://gemini.google.com にアクセス
2. 画像生成機能を使用（Imagen 3が統合されています）

### 方法2: Vertex AI
1. Google Cloud Consoleにアクセス
2. Vertex AI > Imagen を選択

## 画像生成手順

### 1. ヒーロー画像（メイン）
**プロンプト**:
```
A close-up portrait of a gentle ginger cat with bright amber eyes looking directly at the camera, soft morning sunlight filtering through whiskers, warm golden hour lighting, shallow depth of field, professional photography, high resolution, photorealistic
```
**設定**: 16:9, 最高品質
**保存先**: `assets/images/hero-cat.jpg`

### 2. 保護猫カード画像

#### ウィロウ（キャリコ）
```
A stunning long-haired calico cat sitting regally on a wooden chair with a soft bokeh background, warm natural lighting, professional pet photography, 1:1 aspect ratio
```
**保存**: `assets/images/cats/willow.jpg`

#### ピップ（キジトラの子猫）
```
A playful tabby kitten chasing a toy, bright sunny room, joyful expression, 1:1 aspect ratio
```
**保存**: `assets/images/cats/pip.jpg`

#### ルナ（白猫）
```
An elegant white cat with one blue and one yellow eye lounging on a plush cushion, 1:1 aspect ratio
```
**保存**: `assets/images/cats/luna.jpg`

#### バーナビー（スコティッシュ）
```
A cute grey Scottish Fold cat with large round eyes in a box, 1:1 aspect ratio
```
**保存**: `assets/images/cats/barnaby.jpg`

### 3. 活動・ボランティア画像
```
A volunteer holding a tiny kitten, warm indoor lighting, emotional moment, 16:9 aspect ratio
```
**保存**: `assets/images/activity/volunteer-kitten.jpg`

### 4. シェルター画像
```
Modern cat sanctuary with climbing structures, multiple cats, bright sunlight, 16:9 aspect ratio
```
**保存**: `assets/images/activity/shelter.jpg`

### 5. 寄付・支援画像
```
Flat lay of cat toys and supplies on white background, bright studio lighting, 16:9 aspect ratio
```
**保存**: `assets/images/support/supplies.jpg`

## 生成後の作業

### 画像の最適化
```bash
# 画像をリサイズ（必要な場合）
sips -z 800 600 hero-cat.jpg --out hero-cat-800.jpg

# WebP形式に変換（推奨）
sips -s format webp hero-cat.jpg --out hero-cat.webp
```

### HTMLへの組み込み
生成した画像は、`imagen-prompts.md`の対応する画像の場所に配置してください。

```html
<!-- プレースホルダーを差し替え -->
<div class="img-placeholder img-cat-1">
    <span>🐱 保護猫の写真</span>
</div>

<!-- ↓差し替え後↓ -->
<img src="assets/images/cats/willow.jpg" alt="ウィロウ - 保護猫" class="cat-card-image">
```

## 注意点

- **著作権**: 生成した画像は商用利用可能です
- **一貫性**: 同じ猫の種類でも複数の画像を生成する場合、プロンプトを調整して雰囲気を統一してください
- **品質**: 最高品質で生成し、必要に応じて編集ソフトで調整してください

## 生成チェックリスト

- [ ] ヒーロー画像（ジンジャー猫）
- [ ] ウィロウ（キャリコ）
- [ ] ピップ（キジトラ子猫）
- [ ] ルナ（白猫）
- [ ] バーナビー（スコティッシュ）
- [ ] ミミ（混合）
- [ ] タマ（茶トラ）
- [ ] ボランティアと子猫
- [ ] シェルター内部
- [ ] おもちゃ・用品
