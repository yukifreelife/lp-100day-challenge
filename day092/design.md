# Design System: ClothShare (Day092)

> **Stitch Project ID**: 360444380512551924
> **Design System**: Atelier Rose
> **Date**: 2026-04-27

---

## Overview

**Creative North Star**: 「The Digital Atelier」

高エンドなアトリエルのように、すべてのステッチは意図的で、各生地に呼吸スペースがある。標準的なECグリッドではなく、キュレーションされた編集ページのようなデジタル フラッグシップ ストアをデザインする。

**テーマ**: ファッションレンタルサブスク「ClothShare」

---

## Colors

### プライマリーカラー
| 名前 | 値 | 使用箇所 |
|------|-----|----------|
| primary | #E91E63 | メインカラー、CTAボタン |
| primary_container | #e2165f | コンテナ背景 |
| secondary | #a73451 | セカンダリー |
| secondary_container | #ff7794 | セカンダリーコンテナ |

### サーフェスカラー（階層構造）
| 名前 | 値 | 用途 |
|------|-----|------|
| surface | #fcf9f8 | ベースレイヤー |
| surface_container_low | #f6f3f2 | セカンダリーモジュール |
| surface_container | #f0eded | カード背景 |
| surface_container_lowest | #ffffff | 浮き上がる要素（カード等） |

### ニュートラルカラー
| 名前 | 値 |
|------|-----|
| on_surface | #1b1b1c |
| on_surface_variant | #5b3f43 |
| outline | #8f6f73 |
| outline_variant | #e4bdc2 |

### LP固有カラー
| 名前 | 値 | 用途 |
|------|-----|------|
| シックモーブ | #1A1A2E | ヒーロー背景 |
| ムースグレー | #4A4E69 | セクション背景 |
| ラグジュアリーゴールド | #E2B842 | アクセント |

---

## Typography

### フォントファミリー
| 用途 | フォント | 特徴 |
|------|---------|------|
| display / headline | **Epilogue** | 太字、モダン、自信 |
| title / body / label | **Manrope** | クリーン、幾何的サンセリフ |

### タイポグラフィースケール
| クラス | サイズ | 用途 |
|--------|--------|------|
| display-lg | 3.5rem | ヒーローステートメント |
| title-lg | 1.375rem | 商品名、セクション見出し |
| body-md | 0.875rem | 説明文 |
| label | - | ラベル、ボタン |

**エディトリアル インテント**: 行間は最低1.5倍で、テキストを軽やかに見せる。

---

## Elevation & Depth

### レイヤリング原則
深度は「スタッキング」で達成：
- `surface_container_lowest` のカードを `surface_container_low` の背景に配置
- ドロップシャドウなしで自然でソフトなリフトを作成

### アンビエントシャドウ
- **色**: `on_surface`を6%不透明度にし、`primary`で色付け
- **ブラー**: 最小24px〜40px

### グラスモーフィズム
- 半透明の`surface`色（80%不透明度）でバックドロップブラー
- 写真が下から滲み出し、UIをコンテンツに統合

---

## Components

### ボタン
| タイプ | スタイル |
|--------|---------|
| Primary | グラデーション（#E91E63→#e2165f）、白テキスト、丸み8px |
| Secondary | surface背景、#E91E63テキスト、ボーダーなし |

### カード
- 丸み: 8px（ROUND_EIGHT）
- シャドウ: `0 10px 30px rgba(0, 0, 0, 0.15)`
- ホバー時: スケール1.02〜1.05

---

## Stitch デザイン設定

```json
{
  "displayName": "Atelier Rose",
  "bodyFont": "MANROPE",
  "headlineFont": "EPILOGUE",
  "labelFont": "MANROPE",
  "colorMode": "LIGHT",
  "colorVariant": "FIDELITY",
  "customColor": "#E91E63",
  "roundness": "ROUND_EIGHT",
  "spacingScale": 3
}
```

---

## CSS Variables（LP実装）

```css
:root {
    /* Primary Colors */
    --color-primary: #E91E63;
    --color-primary-container: #e2165f;
    --color-secondary: #a73451;
    --color-secondary-container: #ff7794;

    /* Surface Colors */
    --color-surface: #fcf9f8;
    --color-surface-container-low: #f6f3f2;
    --color-surface-container: #f0eded;
    --color-surface-container-lowest: #ffffff;

    /* On Colors */
    --color-on-surface: #1b1b1c;
    --color-on-surface-variant: #5b3f43;
    --color-on-primary: #ffffff;

    /* LP Custom Colors */
    --color-slate-mauve: #1A1A2E;
    --color-moose-gray: #4A4E69;
    --color-luxury-gold: #E2B842;

    /* Typography */
    --font-display: 'Epilogue', sans-serif;
    --font-body: 'Manrope', sans-serif;

    /* Spacing */
    --radius-sm: 0.25rem;  /* 4px */
    --radius-md: 0.5rem;   /* 8px */
    --radius-lg: 1rem;     /* 16px */
}
```

---

## 使用した画像アセット

- hero-main.jpg
- hero-secondary.jpg
- stitch_asset_001.png 〜 stitch_asset_033.png

---

*生成日: 2026-04-27*
*Stitch Project ID: 360444380512551924*
*LP: ClothShare (Day092)*
