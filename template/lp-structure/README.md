# LP構造テンプレート

ファイル分割方式によるLP開発テンプレートです。

## ディレクトリ構成

```
dayXXX/
├── index.html
├── css/
│   ├── base.css       # 変数、リセット、基本スタイル
│   ├── layout.css     # ナビ、セクション、フッター
│   ├── components.css # ボタン、カード、フォーム等
│   └── sections.css   # 各セクション固有のスタイル
├── js/
│   ├── main.js        # エントリーポイント
│   ├── accordion.js   # アコーディオン
│   ├── form.js        # フォーム処理
│   └── slider.js      # Before/Afterスライダー
└── images/
```

## 使用方法

### HTML
```html
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/sections.css">

<script src="js/main.js"></script>
<script src="js/accordion.js"></script>
<script src="js/form.js"></script>
<script src="js/slider.js"></script>
```

## 開発チェックポイント

### CP1: HTML構造
- [ ] セクション構造のみ実装
- [ ] 各セクションにid付与
- [ ] コミット: "html: structure complete"

### CP2: ベーススタイル
- [ ] base.css の変数設定
- [ ] カラーパレット決定
- [ ] コミット: "css: base styles complete"

### CP3: レイアウト
- [ ] layout.css のナビ、フッター
- [ ] セクション背景色
- [ ] コミット: "css: layout complete"

### CP4: コンポーネント
- [ ] components.css のボタン、カード
- [ ] コミット: "css: components complete"

### CP5: セクション詳細
- [ ] sections.css の各セクション
- [ ] コミット: "css: sections complete"

### CP6: JavaScript
- [ ] 各モジュール実装
- [ ] 動作確認
- [ ] コミット: "js: features complete"

## コンテキスト管理

各ファイルの目安行数:
- base.css: ~100行
- layout.css: ~150行
- components.css: ~200行
- sections.css: ~250行
- main.js: ~50行
- 各JSモジュール: ~100行

ファイルが大きくなりすぎたら、さらに分割を検討してください。
