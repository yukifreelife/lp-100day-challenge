# Design System Template

> **来源**: Stitch MCP で生成されたデザインシステム
> **用途**: 新規LP作成時のデザイン仕様基準

---

## 1. Overview & Creative North Star

**Creative North Star**: 「The Digital Atelier」

高エンドなアトリエルのように、すべてのステッチは意図的で、各生地に呼吸スペースがある。標準的なECグリッドではなく、キュレーションされた編集ページのようなデジタル フラッグシップ ストアをデザインする。

**デザイン原則**:
- **意図的な非対称性**: 高品質な写真が厳格なコンテナから飛び出す
- **トーンの深さ**: 厳しい線ではなく、光と影で要素を分離
-「クイック ラグジュアリー」: 洗練されていて、トレンディだが基本的にタイムレス

---

## 2. Colors

### プライマリーカラー
| 名前 | 値 | 用途 |
|------|-----|------|
| primary | #E91E63 | メインカラー |
| primary_container | #e2165f | コンテナ背景 |
| secondary | #a73451 | セカンダリー |
| secondary_container | #ff7794 | セカンダリーコンテナ |

### サーフェスカラー（階層構造）
| 名前 | 値 | 用途 |
|------|-----|------|
| surface | #fcf9f8 | ベースレイヤー |
| surface_container_low | #f6f3f2 | セカンダリーモジュール |
| surface_container | #f0eded | カード背景 |
| surface_container_lowest | #ffffff | 浮き上がる要素 |

### ニュートラルカラー
| 名前 | 値 |
|------|-----|
| on_surface | #1b1b1c |
| on_surface_variant | #5b3f43 |
| outline | #8f6f73 |
| outline_variant | #e4bdc2 |

### 「ノーライン」ルール
**1pxのソリッドボーダーはセクション区切りに禁止**

境界は背景色のシフトまたは微妙なトーン遷移でのみ定義する。アクセシビリティ用ボーダーが必要な場合は、`outline_variant`を**20%不透明度**で使用。

---

## 3. Typography

### フォントファミリー
| 用途 | フォント | 特徴 |
|------|---------|------|
| display / headline | Epilogue | 太字、モダン、自信 |
| title / body / label | Manrope | クリーン、幾何的サンセリフ |

### タイポグラフィースケール
| クラス | サイズ | 用途 |
|--------|--------|------|
| display-lg | 3.5rem | ヒーローステートメント |
| title-lg | 1.375rem | 商品名 |
| body-md | 0.875rem | 説明文 |
| label | - | ラベル |

**エディトリアル インテント**: 行間は最低1.5倍で、テキストを軽やかに見せる。

---

## 4. Elevation & Depth

### レイヤリング原則
深度は「スタッキング」で達成される：
- `surface_container_lowest` のカードを `surface_container_low` の背景に配置
- ドロップシャドウなしで自然でソフトなリフトを作成

### アンビエントシャドウ
要素が「浮く」必要がある場合（ボタン、モーダル）：
- **色**: `on_surface`を6%不透明度にし、`primary`で色付け
- **ブラー**: 最小24px〜40px

### グラスモーフィズム
- 半透明の`surface`色（80%不透明度）でバックドロップブラーを使用
- 写真が下から滲み出し、UIをコンテンツに統合

---

## 5. Components

### ボタン
| タイプ | スタイル |
|--------|---------|
| Primary | グラデーション（`primary`→`primary_container`）、`on_primary`テキスト、丸み0.5rem |
| Secondary | `surface_container_high`背景、`primary`テキスト、ボーダーなし |
| Tertiary | テキストのみ、ホバー時にアンダーライン |

### カード & リスト
- **ディバイダー禁止**: リスト項目やカードを分けるために線を使用しない
- 垂直方向の余白または背景のシフトを使用
- 画像カード: 丸み0.5rem、画像がカードの80%を占める

### 入力フィールド
- スタイリング: `surface_container_low`背景、丸み0.25rem
- フォーカス時: 背景を`surface_container_highest`に遷移、「ゴーストボーダー」を`primary`色30%不透明度で追加

---

## 6. Do's and Don'ts

### Do
- ✅ 意図的な非対称性を使用（モデル写真がテキストブロックに重なる等）
- ✅ 高品質な画像を優先（UIはフレーム、写真はアート）
- ✅ 大きなタイポグラフィでインパクトを作る（`display-lg`を恐れない）
- ✅ `DEFAULT`（0.5rem/8px）の丸みでソフトなモダンな雰囲気を維持

### Don't
- ❌ 1pxのソリッド黒/灰色線（プレミアム感を殺す）
- ❌ 「デフォルト」シャドウ（シャドウに見えたら暗すぎる）
- ❌ 画面を雑然とさせる
- ❌ 入力やボタンに高コントラストボーダー（背景色シフトに依存）

---

## 7. Stitch デザイン設定

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
  "spacingScale": 3,
  "namedColors": {
    "primary": "#E91E63",
    "primary_container": "#e2165f",
    "secondary": "#a73451",
    "secondary_container": "#ff7794",
    "surface": "#fcf9f8",
    "surface_container_low": "#f6f3f2",
    "surface_container": "#f0eded",
    "surface_container_lowest": "#ffffff",
    "on_surface": "#1b1b1c",
    "on_surface_variant": "#5b3f43",
    "outline": "#8f6f73",
    "outline_variant": "#e4bdc2"
  }
}
```

---

## 8. CSS Variables 実装例

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

    /* Typography */
    --font-display: 'Epilogue', sans-serif;
    --font-body: 'Manrope', sans-serif;

    /* Spacing */
    --radius-sm: 0.25rem;  /* 4px */
    --radius-md: 0.5rem;   /* 8px */
    --radius-lg: 0.75rem;  /* 12px */
}
```

---

*生成日: 2026-04-27*
*ソース: Stitch MCP (Project ID: 360444380512551924)*
*デザインシステム名: Atelier Rose*
