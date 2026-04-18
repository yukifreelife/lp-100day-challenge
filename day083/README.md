# Trattoria Sole（トラットリア・ソーレ）

## プロジェクト概要

家族連れをターゲットにした本格イタリアンレストラン「Trattoria Sole」のランディングページです。

## ディレクトリ構成

```
day083/
├── index.html          # トップページ
├── menu.html           # メニューページ
├── access.html         # アクセスページ
├── contact.html        # お問い合わせ・ご予約ページ
├── privacy.html        # プライバシーポリシー
├── css/
│   └── styles.css      # メインスタイルシート
├── js/
│   └── main.js         # メインJavaScript
├── images/             # 画像ディレクトリ（画像配置用）
├── docs/
│   └── IMPLEMENTATION_PLAN.md  # 実装計画書
├── DESIGN.md           # デザインシステム
└── README.md           # このファイル
```

## ローカル開発

### Pythonサーバーで起動

```bash
# day083ディレクトリで以下を実行
python3 -m http.server 8080
```

ブラウザで `http://localhost:8080` にアクセスしてください。

### その他のサーバー

```bash
# PHP
php -S localhost:8080

# Node.js (http-server使用)
npx http-server -p 8080
```

## 技術スタック

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript
- Google Fonts (Noto Serif JP, Plus Jakarta Sans, Material Symbols)

## カラーパレット

| 色 | Hex | 用途 |
|---|-----|------|
| Primary | `#9f402d` | メインカラー（テラコッタ） |
| Secondary | `#48663a` | バジルグリーン |
| Tertiary | `#835400` | サンゴールド |
| Surface | `#fff9f0` | メイン背景（クリーム） |

## ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## ライセンス

© 2024 Trattoria Sole. All rights reserved.
