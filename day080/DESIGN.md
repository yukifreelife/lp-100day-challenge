# Day 080 - DESIGN SPEC

## カラーパレット

```css
:root {
  --color-primary: #4F46E5;      /* インディゴ - 知性・信頼 */
  --color-primary-dark: #4338CA;
  --color-secondary: #F59E0B;    /* アンバー - 温かみ・成長 */
  --color-accent: #10B981;       /* エメラルド - 成功・達成 */
  --color-background: #FDFBF7;   /* オフホワイト */
  --color-surface: #FFFFFF;
  --color-text: #1F2937;         /* ダークグレー */
  --color-text-light: #6B7280;
  --color-border: #E5E7EB;
}
```

## タイポグラフィ

```css
:root {
  --font-sans: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
}
```

| 用途 | サイズ | ウェイト |
|------|--------|----------|
| H1 | 2.5rem → 1.75rem | 700 |
| H2 | 2rem → 1.5rem | 700 |
| H3 | 1.5rem → 1.25rem | 600 |
| Body | 1rem | 400 |
| Small | 0.875rem | 400 |

## スペーシング

```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 5rem;
  --container-max-width: 1200px;
}
```

## セクション詳細

### 1. Hero
- フルスクリーン
- 中央配置のキャッチコピー
- 右側にイラスト・画像
- CTAボタン（プライマリーカラー）
- 信頼性バッジ（実績数字）

### 2. Problem
- 3つの悩みをカード形式で提示
- アイコン付き
- ホバーで強調

### 3. Solution
- 3つの特徴（担任制・指導報告書・面談）
- アイコン + タイトル + 説明
- 横スクロール（モバイル）

### 4. Teacher
- 左側：プロフィール写真
- 右側：経歴・資格・想い
- 信頼性を強調

### 5. Method
- 4ステップの指導メソッド
- ステップ形式で視覚化
- アイコンでわかりやすく

### 6. Flow
- 4ステップの導入フロー
- 矢印でつなぐ
- シンプルで安心感

### 7. Price
- 3つのプラン
- おすすめプランを強調
- 表形式で見やすく

### 8. Voice
- 保護者・生徒の声
- タブ切り替え
- 星評価付き

### 9. FAQ
- アコーディオン形式
- 6項目

### 10. Contact
- フォーム
- 入力項目：名前・メール・電話・お子様の学年・ご相談内容
- 送信ボタン

## レスポンシブ

| ブレイクポイント | 対象 |
|------------------|------|
| 640px | スマートフォン |
| 768px | タブレット |
| 1024px | PC |

## アニメーション

- フェードイン（スクロール）
- ホバーエフェクト（ボタン・カード）
- スムーズスクロール
- モバイルメニュー開閉
