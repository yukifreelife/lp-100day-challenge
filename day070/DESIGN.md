# Day070 Nail Salon LP - Design Document

**Date**: 2026-04-05
**Category**: Beauty（Nail Salon）
**Status**: Design Approved

---

## Overview

個人事業主が運営するネイルサロンのLP。ギャラリー重視型で、ネイルデザイン作品をメインコンテンツとして配置し、視覚的魅力で予約獲得を促進する。

### Brand Name
**Nail Studio Bloom**（ネイルスタジオブルーム）

### Target Audience
- 20〜40代女性
- ネイルに関心があり、定期的にネイルサロンを利用している
- デザイン性を重視し、トレンド感度が高い
- 自分だけの特別なデザインを求めている

### Goal
- 予約獲得（新規・リピートとも）
- サービス認知拡大
- SNSフォロワー増加

---

## Section Structure

### 1. FV（Hero Section）
- **Visual**: 複数のネイルデザイン写真を横並びに配置（スライドショーまたは横スクロール）
- **Catch Copy**: 「あなたの指先に、季節の魔法を」
- **Sub Copy**: 「2〜3週間、美しく持つジェルネイル」
- **CTA Buttons**:
  - 「予約空きを確認する」→ Contactへ
  - 「作品をもっと見る」→ Galleryへ

### 2. Gallery（メインコンテンツ）
- **Filter Tabs**: 全て / シーズン（春夏秋冬） / 長さ（短・中・長） / 色（系統別）
- **Grid Layout**:
  - PC: 4列
  - Tablet: 3列
  - Mobile: 2列
- **Item Count**: 12〜20点
- **Hover Effect**: カラー名、使用ポリッシュ、価格を表示
- **Click Action**: 気になったデザインから直接予約フローへ誘導

### 3. Menu（料金プラン）
- **Basic Menu**:
  - シングル（片手）: ¥6,000〜
  - 両手: ¥10,000〜
  - ペディケア: ¥8,000〜
- **Options**:
  - フレンチアート: +¥1,000
  - Swarovski: +¥500/個
  - オフ/付け替え: 別途料金
- **施術時間明記**: 各メニューに所要時間を表示

### 4. About（ナビスト紹介）
- **Profile**:
  - 名前・経歴
  - 資格（JNEA認定など）
- **こだわり**:
  - 健康爪への配慮
  - 衛生管理（ファイル使い捨て等）
  - カウンセリング重視
- **使用製品**: 主要なジェル・ポリッシュブランド

### 5. Flow（ご予約〜施術の流れ）
- **初回の方**:
  1. 予約フォーム/SNSから予約
  2. カウンセリング（デザイン・希望）
  3. 施術（60〜90分）
  4. お支払い・次回予約
- **キャンセルポリシー**: 前日まで無料、当日50%

### 6. Access / Contact
- **サロン情報**:
  - 住所
  - アクセス（最寄り駅から）
  - 営業時間
- **予約方法**:
  - 予約サイトURL
  - LINE予約
  - 電話番号
- **SNS**: Instagram, TikTokリンク

---

## Design Specifications

### Color Palette
```css
--color-primary: #f8c5d5;     /* Soft Pink */
--color-secondary: #d4a5bd;   /* Dark Pink */
--color-accent: #c9b1a9;      /* Beige */
--color-text: #4a4a4a;        /* Dark Gray */
--color-bg: #fff9fa;          /* Very Light Pink */
--color-white: #ffffff;
--color-border: #e8d5d9;
```

### Typography
- **Headings**: Noto Sans JP（Medium 500, Bold 700）
- **Body**: Noto Sans JP（Regular 400）
- **UI Elements**: Noto Sans JP（Medium 500）

### Responsive Breakpoints
- **PC**: 1200px以上
- **Tablet**: 768px〜1199px
- **Mobile**: 〜767px

### Layout Dimensions
- **Container**: 1200px（PC）、100%（Mobile）
- **Gallery Grid**:
  - PC: 4列 × 280px
  - Tablet: 3列
  - Mobile: 2列
- **Section Padding**: 80px（PC）、48px（Mobile）

---

## Technical Specifications

### File Structure
```
D070/
├── DESIGN.md         # このドキュメント
├── README.md         # プロジェクト概要
├── index.html        # メインHTML
├── style.css         # スタイルシート
├── script.js         # JavaScript
└── images/
    ├── hero-bg.jpg
    ├── gallery/      # ネイルデザイン写真12〜20枚
    ├── salon/        # サロン内観写真
    └── profile.jpg   # ナビスト写真
```

### JavaScript Features
- **Gallery Filter**: カテゴリタブによるフィルタリング
- **Modal**: 画像クリックで拡大表示
- **Smooth Scroll**: アンカーリンクのスムーズスクロール
- **Fade-in Animation**: Intersection Observerによるフェードイン
- **Mobile Menu**: ハンバーガーメニュー

### HTML Structure
- Semantic HTML5
- Accessibility配慮（ARIA labels）
- SEO meta tags（title, description, OGP）

---

## Implementation Notes

### 画像要件
- **Gallery**: 正方形（1:1）で統一、推奨600×600px以上
- **Hero**: 横長（16:9）、推奨1920×1080px
- **Salon/Profile**: 適宜

### 既存Beauty LPsとの差別化
- **Day05**: 美容体験予約LP（美容クリニック系）
- **Day16**: 美容クリニック予約LP（医療系）
- **Day070**: ネイルサロン（アート・デザイン重視、ビジュアルギャラリー型）

### コンテンツ優先順位
1. ギャラリー（ビジュアル）
2. 料金・メニュー（実用性）
3. ナビスト紹介（信頼性）
4. アクセス・予約（行動）

---

## Success Metrics

- ギャラリー閲覧率
- 「予約空きを確認する」クリック率
- 予約フォーム完了率
- ページ滞在時間

---

## Future Enhancements

- 予約システム連携
- Instagram連携（自動ギャラリー更新）
- オンラインショップ（ネイルキット販売）
