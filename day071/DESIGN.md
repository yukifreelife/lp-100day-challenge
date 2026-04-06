# Day071 Cafe & Roastery LP - Design Document

**Date**: 2026-04-06
**Category**: Food & Beverage（Specialty Cafe）
**Status**: Design Approved

---

## Overview

街角の小さなスペシャルティカフェのLP。焙煎過程にこだわり、オリジナルブレンドやシングルオリジンを提供するこだわりのカフェ。

### Brand Name
**ROAST LAB**（ローストラボ）

### Target Audience
- 25〜45代、男女問わず
- コーヒーにこだわりを持つ層
- カフェ探索好き、サードウェーブコーヒーファン
- お土産・ギフト需要

### Goal
- 来店促進（新規・リピートとも）
- コーヒー豆販売（店内・オンライン）
- SNSフォロワー増加
- ブランド認知拡大

---

## Section Structure

### 1. FV（Hero Section）
- **Visual**: 焙煎機の動画または画像、コーヒーの香りが伝わる演出
- **Catch Copy**: 「一杯のコーヒーが、あなたの日常を特別に」
- **Sub Copy**: 「産地から焙煎まで、こだわり抜いた一杯」
- **Info Badge**: 本日営業中 / 定休日表示
- **CTA**: 「メニューを見る」「アクセス」

### 2. About（こだわりの焙煎）
- **焙煎へのこだわり**:
  - 直火焙煎または熱風焙煎の説明
  - 焙煎機の紹介
  - 焙煎度合いの選択（ライト〜ダーク）
- **豆の産地紹介**:
  - 主要産地（エチオピア、コロンビア、グアテマラ等）
  - ファームストーリー
  - 豆の特徴別おすすめ

### 3. Menu（メニュー）
- **ドリンク**:
  - エスプレッソ系
  - ハンドドリップ
  - その他（カフェラテ、フラペチーノ等）
- **フード**:
  - デイリーフード（サンドイッチ、キッシュ等）
  - スイーツ（ケーキ、クッキー等）
- **豆販売**:
  - シングルオリジン
  - オリジナルブレンド
  - 価格: ¥800〜¥1,500 / 100g

### 4. Gallery（ギャラリー）
- **店内写真**: インテリア、席配置
- **コーヒー写真**: ラテアート、抽出中の様子
- **フード写真**: スイーツ、フードメニュー
- **リール型ギャラリー**: 横スクロールで閲覧

### 5. Access（アクセス）
- **店舗情報**:
  - 住所
  - 最寄り駅から徒歩◯分
  - 電話番号
- **営業時間**:
  - 平日/週末別
  - 定休日
- **SNS**: Instagram, Twitterリンク

---

## Design Specifications

### Color Palette
```css
--color-primary: #6f4e37;     /* Coffee Brown */
--color-secondary: #a67b5b;   /* Light Brown */
--color-accent: #c4a484;      /* Beige */
--color-text: #2c2c2c;        /* Dark Gray */
--color-bg: #faf8f5;          /* Cream White */
--color-white: #ffffff;
--color-border: #e0d5cc;
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
  - PC: 3列
  - Tablet: 2列
  - Mobile: 1列（リール型）
- **Section Padding**: 80px（PC）、48px（Mobile）

---

## Technical Specifications

### File Structure
```
day071/
├── DESIGN.md         # このドキュメント
├── README.md         # プロジェクト概要
├── index.html        # メインHTML
├── style.css         # スタイルシート
├── script.js         # JavaScript
└── images/
    ├── hero-bg.jpg
    ├── gallery/      # ギャラリー写真
    ├── menu/         # メニュー写真
    └── roaster.jpg   # 焙煎機写真
```

### JavaScript Features
- **Smooth Scroll**: アンカーリンクのスムーズスクロール
- **Fade-in Animation**: Intersection Observerによるフェードイン
- **Parallax Effect**: スクロールに連動した視差効果
- **Mobile Menu**: ハンバーガーメニュー
- **Gallery Carousel**: 横スクロールギャラリー

### HTML Structure
- Semantic HTML5
- Accessibility配慮（ARIA labels）
- SEO meta tags（title, description, OGP）

---

## Implementation Notes

### 画像要件
- **Hero**: 横長（16:9）、推奨1920×1080px
- **Gallery**: 正方形（1:1）または4:3
- **Menu**: 正方形（1:1）、推奨600×600px以上

### 既存Food & Beverage LPsとの差別化
- **Day0XX**: その他飲食
- **Day071**: スペシャルティカフェ（焙煎こだわり、ギャラリー型）

### コンテンツ優先順位
1. 焙煎へのこだわり（独自性）
2. メニュー（実用性）
3. ギャラリー（視覚的魅力）
4. アクセス（来店促進）

---

## Success Metrics

- ページ滞在時間
- 「アクセス」セクション閲覧率
- SNSリンククリック率
- 来店数（店舗でのヒアリング）

---

## Future Enhancements

- オンラインショップ機能
- 予約システム（席予約）
- スタンプカード機能
- 会員限定コンテンツ
