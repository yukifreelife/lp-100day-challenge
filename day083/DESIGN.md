# Design System: Sole Mediterraneo

> イタリアの太陽を感じるアルフレッソの食卓をテーマにした、Trattoria Sole のデザインシステム

## Overview & Creative North Star

### The Sun-Drenched Al Fresco Table

このデザインシステムは、イタリアの真昼の太陽の下で楽しむアルフレッソランチの温かさを表現しています。テラコッタのテラス、バジルの緑、黄金色のオリーブオイル、そしてクリーミーなリコッタチーズを色彩として取り入れています。

**キーワード**: 温かみ、有機的、エディトリアル、手作り感

---

## 1. Colors: The Palette of the Earth

### Color Roles

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary** | Terracotta | `#9f402d` | メインブランド色、CTAボタン、強調 |
| **Secondary** | Basil Green | `#48663a` | サード要素、成功状態、自然的アクセント |
| **Tertiary** | Sun Gold | `#835400` | 警告、注目、 harvest の温かみ |
| **Surface** | Creamy White | `#fff9f0` | メイン背景、紙の質感 |
| **Outline** | Warm Gray | `#857462` | テキスト Secondary、ボーダー代替 |

### Surface Hierarchy (Tonal Layering)

| Token | Hex | Purpose |
|-------|-----|---------|
| `surface-container-lowest` | `#ffffff` | 最前面カード、フローティング要素 |
| `surface-container-low` | `#f9f3ea` | 軽い浮き出し |
| `surface-container` | `#f3ede4` | 標準的なカード背景 |
| `surface-container-high` | `#ede7df` | 強い浮き出し |
| `surface-container-highest` | `#e7e2d9` | 最も強い浮き出し、セクション区切り |

### On-Colors (Text)

| Token | Hex | Usage |
|-------|-----|-------|
| `on-surface` | `#1d1b16` | メインテキスト |
| `on-surface-variant` | `#524434` | セカンダリテキスト |
| `on-primary` | `#ffffff` | Primary上のテキスト |
| `on-secondary` | `#ffffff` | Secondary上のテキスト |

### Container Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-container` | `#ffa08c` | Primaryの軽いバージョン |
| `secondary-container` | `#caedb4` | Secondaryの軽いバージョン |
| `tertiary-container` | `#f9a825` | Tertiaryの軽いバージョン |

### The "No-Line" Rule

```
BAD ❌: border: 1px solid #d7c3ae
GOOD ✅: background-color: #f3ede4 (surface-container)
```

**原則**: 1pxの実線ボーダーは使用しない。代わりに背景色のシフト（tonal layering）で境界を表現する。

---

## 2. Typography: Editorial Authority

### Font Families

| Usage | Font | Weight | Notes |
|-------|------|--------|-------|
| **Headlines** | Noto Serif JP | 400, 700 | 見出し、エディトリアル要素 |
| **Body** | Plus Jakarta Sans | 400, 500 | 本文 |
| **Labels** | Plus Jakarta Sans | 500, 600 | ボタン、ラベル、ナビゲーション |

### Type Scale

| Size | Usage | Line Height |
|------|-------|-------------|
| 6xl / 60px | ヒーローヘッドライン | 1.1 |
| 4xl / 36px | セクション見出し | 1.2 |
| 2xl / 24px | サブセクション見出し | 1.3 |
| lg / 18px | リード文 | 1.6 |
| base / 16px | 本文 | 1.6 |
| sm / 14px | キャプション、注釈 | 1.5 |

### Best Practices

- 見出しは **Noto Serif JP** で、温かみのあるクラシックな印象に
- 本文は **Plus Jakarta Sans** で、可読性を重視
- 極端なスケール差でエディトリアルな構成を作る

---

## 3. Elevation & Depth: Tonal Layering

### Layering Strategy

 elevation は box-shadow ではなく、背景色の明度で表現します。

| Layer | Background | Example Usage |
|-------|------------|---------------|
| Base | `surface` (#fff9f0) | ページ背景 |
| Level 1 | `surface-container-low` (#f9f3ea) | 軽いカード |
| Level 2 | `surface-container` (#f3ede4) | 標準カード |
| Level 3 | `surface-container-high` (#ede7df) | 強いカード |
| Level 4 | `surface-container-highest` (#e7e2d9) | 最も強いカード |

### Glassmorphism (フローティングUI)

```css
/* ヘッダー、ボトムナビ、フローティングボタンに使用 */
background: rgba(255, 249, 240, 0.7);
backdrop-filter: blur(12px);
```

---

## 4. Spacing System

### Base Unit: 4px (Scale 3)

| Token | Value | Usage |
|-------|-------|-------|
| `1` | 4px | 最小スペーシング |
| `2` | 8px | 小さな要素間 |
| `3` | 12px | コンパクトなパディング |
| `4` | 16px | 標準スペーシング |
| `6` | 24px | セクション内余白 |
| `8` | 32px | セクション間余白 |
| `12` | 48px | 大きなセクション間 |
| `16` | 64px | ヒーローセクション余白 |

---

## 5. Components

### Buttons

| Type | Background | Text | Usage |
|------|-----------|------|-------|
| **Primary** | `primary` (#9f402d) | `on-primary` (#fff) | メインCTA |
| **Secondary** | `secondary-container` (#caedb4) | `on-secondary-container` (#4e6c3f) | セカンダリアクション |
| **Tonal** | `surface-container-highest` (#e7e2d9) | `on-surface` (#1d1b16) | 軽いアクション |

**Roundness**: `0.5rem` (8px)

### Cards

- 背景: `surface-container` または `surface-container-highest`
- パディング: 24-32px
- 角丸: `0.75rem` (12px)
- ボーダーなし（背景色の差で表現）

### Input Fields

```css
background: surface-variant (#e7e2d9);
border-bottom: 1px solid rgba(215, 195, 174, 0.5);
border-top: none;
border-left: none;
border-right: none;
```

**Ghost Border**: 薄いボトムボーダーのみ使用（有機的な印象）

### Chips

- 背景: `secondary-container` または `tertiary-container`
- 角丸: `full` (pill shape)
- パディング: 4px 12px

---

## 6. Layout Rules

### Grid System

| Breakpoint | Container Width | Columns |
|------------|-----------------|---------|
| Mobile | 100% | 1 |
| Tablet | 768px | 2-4 |
| Desktop | 1024px+ | 12 |

### Content Width

- メインコンテンツ: `max-w-7xl` (1280px)
- セクション内部: `max-w-2xl` (テキスト重視時)

---

## 7. Do's and Don'ts

### Do ✅

- 背景色のシフトで階層を表現する
- 編集レイアウト風の極端なスケール差を使う
- Material Symbols の FILL バリエーションで強調を表す
- オレンジ系の温かいグラデーションを使う
- イメージをカードからはみ出させて配置する

### Don't ❌

- 1px の実線ボーダーを使わない
- 冷たい青・紫系の色を使わない
- 完全な白 (#ffffff) を多用しすぎない
- 角張った（丸みのない）UIにしない
- シャドウを重ねすぎない

---

## 8. Image Style

### Treatment

- 角丸: `0.5rem` - `0.75rem`
- シャドウ: `shadow-[0_8px_40px_-12px_rgba(82,68,52,0.06)]`
- ホバー時: 軽いスケールアップ (scale-105)

### Bleeding Images

カードからはみ出す画像配置（Access ページの Contact Info カードなど）で、動きと有機的な印象を作ります。

---

## 9. Dark Mode

### Color Adaptation

| Light | Dark |
|-------|------|
| `surface` (#fff9f0) | `#1d1b16` |
| `surface-container` (#f3ede4) | `#2c2922` |
| `primary` (#9f402d) | `#ffa08c` |
| `on-surface` (#1d1b16) | `#e7e2d9` |

---

## Implementation Notes

- **Tailwind CSS CDN**: `https://cdn.tailwindcss.com?plugins=forms,container-queries`
- **Fonts**: Google Fonts (Noto Serif JP, Plus Jakarta Sans, Material Symbols Outlined)
- **Icons**: Material Symbols Outlined（FILL バリエーションを活用）

---

_Generated from Stitch Design System "Sole Mediterraneo" for Trattoria Sole_
