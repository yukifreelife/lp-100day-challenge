# Day072 Piano School LP - Design Document

**Date**: 2026-04-07
**Category**: Education（Piano School for Children）
**Status**: Design Approved

---

## Overview

幼児から小学生を対象とした小規模ピアノ教室のLP。保護者向けに安心感と成長を実感させる情報を提供し、体験予約への誘導を最適化する。

### Brand Name
**Piano Garden**（ピアノガーデン）

### Target Audience
- メインターゲット: 幼児（3歳〜）〜小学生の保護者
- サブターゲット: ピアノを再開したい大人
- 決定者: 母親（70%）、父親（30%）

### Goal
- 体験レッスンの予約獲得
- 入会への納得感醸成
- 先生の人柄・指導方針の理解

---

## Section Structure

### 1. FV（Hero Section）
- **Visual**: 子供が楽しそうにピアノを弾く写真（横位置）
- **Catch Copy**: 「心を育てる、ピアノ」
- **Sub Copy**: 「幼児から小学生まで、無理なく続くピアノ教室」
- **Trust Badges**:
  - 生徒数50名以上
  - 指導実績10年
  - Googleレビュー4.8
- **CTA**: 「体験レッスンを予約する（無料）」

### 2. About（教室の想い）
- **教室のこだわり**:
  - 一人一人のペースに合わせた指導
  - 楽しみながら基礎を身につける
  - 定期的な発表会で達成感を体験
- **先生プロフィール**:
  - 写真
  - 経歴（音楽大学卒業、指導歴）
  - 指導方針
  - 資格

### 3. Course（コース紹介）
- **幼児コース（3歳〜年長）**:
  - リズム感を養う
  - 音楽遊びからピアノ導入
  - 30分レッスン
- **小学生コース（小学1年生〜6年生）**:
  - 基礎技術の定着
  - ソルフェージュ併用
  - 45分レッスン
- **グレードコース**:
  - ピティナ・ステップ検定対策
  - プレインベント、コンペティション支援
  - 60分レッスン

### 4. Voice（お客様の声）
- **保護者の声**:
  - 「子供が楽しみに通っています」
  - 「先生が優しく、安心して預けられます」
- **生徒の演奏動画**:
  - モーダルで再生
  - 入学前と現在の比較

### 5. Facility（教室設備）
- **ピアノ紹介**:
  - ヤマハグランドピアノ（レッスン用）
  - 電子ピアノ（練習用）
- **教室環境**:
  - 防音室
  - 保護者待機スペース
  - 駐車場あり

### 6. Schedule & Pricing（スケジュールと料金）
- **スケジュール表**:
  - 月曜〜金曜: 14:00〜19:00
  - 土曜: 10:00〜18:00
  - 日曜・祝日: 休み
- **料金プラン（タブ切り替え）**:
  - 幼児コース: ¥8,000/月（週1回・30分）
  - 小学生コース: ¥10,000/月（週1回・45分）
  - グレードコース: ¥15,000/月（週1回・60分）
  - 入会金: ¥20,000（教材費込）

### 7. FAQ（よくある質問）
- ピアノは持っていないとダメですか？
- 体験レッスンには何を持っていけばいいですか？
- 欠席した場合はどうなりますか？
- 兄弟一緒に通えますか？
- 大人の再開も受け付けていますか？

### 8. Contact（体験予約）
- **予約フォーム**:
  - お子様のお名前
  - 学年（幼稚園年少〜小学6年、大人）
  - 保護者の方のお名前
  - 電話番号
  - メールアドレス
  - 希望日時（第1〜3希望）
  - 備考
- **アクセス**:
  - 住所
  - 最寄り駅から徒歩◯分
  - 電話番号
  - メール

---

## Design Specifications

### Color Palette
```css
--color-primary: #a7c7e7;     /* Soft Blue */
--color-secondary: #d4e5f7;   /* Light Blue */
--color-accent: #f8c5d5;      /* Soft Pink（強調用） */
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
- **Section Padding**: 80px（PC）、48px（Mobile）

---

## Technical Specifications

### File Structure
```
day072/
├── DESIGN.md         # このドキュメント
├── README.md         # プロジェクト概要
├── index.html        # メインHTML
├── style.css         # スタイルシート
├── script.js         # JavaScript
└── images/
    ├── hero/         # ヒーロー写真
    ├── about/        # 先生写真
    ├── facility/     # 教室・ピアノ写真
    └── course/       # コース別写真
```

### JavaScript Features
- **Smooth Scroll**: アンカーリンクのスムーズスクロール
- **Fade-in Animation**: Intersection Observerによるフェードイン
- **Pricing Tabs**: コース別料金プランのタブ切り替え
- **Form Grade Selection**: 学年選択で推奨コースを自動選択
- **FAQ Accordion**: アコーディオン開閉
- **Mobile Menu**: ハンバーガーメニュー

### HTML Structure
- Semantic HTML5
- Accessibility配慮（ARIA labels）
- SEO meta tags（title, description, OGP）

---

## Implementation Notes

### 画像要件
- **Hero**: 横長（16:9）、推奨1920×1080px
- **Teacher**: 正方形（1:1）、推奨600×600px以上
- **Facility**: 横長（16:9）または4:3
- **Course**: 正方形（1:1）、推奨600×600px以上

### フォーム仕様
- **学年選択**:
  - 幼稚園年少〜年長 → 幼児コースを選択状態
  - 小学1年生〜6年生 → 小学生コースを選択状態
  - 大人 → グレードコースを非表示（大人向けコースへ）

### 既存Education LPsとの差別化
- **Day0XX**: その他教育
- **Day072**: ピアノ教室（幼児〜小学生、施設紹介、演奏動画）

### コンテンツ優先順位
1. 先生プロフィール（信頼性）
2. 指導方針（教育への姿勢）
3. 料金プラン（納得感）
4. お客様の声（社会的証明）
5. 施設紹介（安心感）

---

## Success Metrics

- 体験予約フォーム完送率
- 料金プラン閲覧率
- 先生プロフィール閲覧率
- FVからフォームへの到達率

---

## Future Enhancements

- 先生の演奏動画追加
- オンラインレッスン対応
- 夏休み・春休み特別レッスン
- 兄弟割引キャンペーン
