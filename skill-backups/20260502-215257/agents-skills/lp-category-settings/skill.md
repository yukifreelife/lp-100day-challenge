---
name: lp-category-settings
description: LP業種別設定スキル。業種・カテゴリーによって異なるデザイン、フォント、色、構成を自動設定します。
version: 1.0.0
triggers:
  - ユーザーがLPの業種カテゴリーを指定したとき
  - ユーザーが「飲食店LP」「医療LP」「B2B LP」「不動産LP」など業種付きでLP作成を依頼したとき
  - ユーザーが「/category-settings」と入力したとき
parameters:
  category:
    type: string
    description: LPのカテゴリー（飲食店/医療/B2B/不動産/教育/採用）
    required: true
  subcategory:
    type: string
    description: サブカテゴリー（例：寿司店、カフェ、歯科医院、SaaS等）
    required: false
  brand:
    type: string
    description: ブランド名またはサービス名
    required: false
  target:
    type: string
    description: ターゲットユーザー
    required: false
---

# LP業種別設定スキル

業種・カテゴリーに応じた最適なデザイン、フォント、色、セクション構成を自動提供します。

## 対応カテゴリー

| カテゴリー | サブカテゴリー例 |
|-----------|-----------------|
| 飲食店 | 寿司店、カフェ、居酒屋、ベーカリー、カクテルバー、レストラン |
| 医療 | 歯科医院、美容皮膚科、整体院、整骨院、心理咨询、美容クリニック |
| B2B/SaaS | SaaS、採用ページ、コンサルティング、人材派遣、業務システム |
| 不動産 | 賃貸、売買、投資用、リノベーション、シェアハウス |
| 教育 | プログラミングスクール、英会話、予備校、ヨガスタジオ、音楽教室 |
| 採用 | 正社員採用、アルバイト、新卒採用、中途採用、エンジニア採用 |

## 各カテゴリーの設定詳細

### 1. 飲食店（Restaurant）

#### カラーパレット
```yaml
primary: "#D4A574"      # 温かみのあるブラウン
secondary: "#8B5E3C"    # 濃いブラウン
accent: "#E8B4B8"      # パステルピンク
background: "#FDFBF7"  # クリーム色
text: "#333333"        # ダークグレー
```

#### フォント
```yaml
japanese:
  primary: "Shippori Mincho"  # 明朝体（高級感）
  fallback: "Noto Serif JP"
english:
  primary: "Cormorant Garamond"  # クラシックなセリフ
  fallback: "Playfair Display"
line_height: 1.8
letter_spacing: 0.05em
```

#### セクション構成
```yaml
sections:
  - hero           # ヒーロー（メインビジュアル）
  - problem        # 不安・悩み（高級寿司店の懸念等）
  - concept        # コンセプト・お店の想い
  - features       # こだわり（素材、職人、空間等）
  - course         # コース・料金
  - chef           # 職人プロフィール
  - one-day        # 職人の一日（O2N）
  - gallery        # ギャラリー
  - voice          # お客様の声
  - access         # アクセス・営業時間
  - reservation    # 予約フォーム
```

#### 特有要素
- O2N（One Day Narrative）：職人の一日を紹介するタイムライン
- 予約システム：電話予約/フォーム予約
- ギャラリー：料理の写真メイン
- ソーシャルプルーフ：お客様の声、評価
- アクセス情報：地図、営業時間

---

### 2. 医療（Medical）

#### カラーパレット
```yaml
primary: "#4A90A4"      # 信頼感のあるティールブルー
secondary: "#5B7C99"    # ネイビーブルー
accent: "#7CB9E8"       # ライトブルー
background: "#F0F7FA"   # 非常に薄いブルー
text: "#2C3E50"         # ダークスレートグレー
```

#### フォント
```yaml
japanese:
  primary: "Noto Sans JP"  # 読みやすいゴシック体
  fallback: "Hiragino Sans"
english:
  primary: "Inter"  # モダンなサンセリフ
  fallback: "Helvetica Neue"
line_height: 1.7
letter_spacing: 0.02em
```

#### セクション構成
```yaml
sections:
  - hero           # ヒーロー
  - problem        # 悩み（症状・不安）
  - solution       # 解決策（治療法・施術内容）
  - features       # 特徴・こだわり
  - doctors        # 医師・スタッフ紹介
  - flow           # 診療の流れ
  - voice          # 患者様の声
  - faq            # よくある質問
  - access         # アクセス
  - reservation    # 予約・問い合わせ
```

#### 特有要素
- 悩み解消：症状ごとの悩みと解決策
- 診療フロー：初診から治療までの流れ
- 医師紹介：経歴、専門分野
- よくある質問：不安解消
- 予約システム：WEB予約、電話予約

---

### 3. B2B/SaaS

#### カラーパレット
```yaml
primary: "#2C5282"      # プロフェッショナルなロイヤルブルー
secondary: "#4A5568"    # グレー
accent: "#48BB78"       # 行動喚起のグリーン（CTAボタン用）
background: "#FFFFFF"   # ホワイト
text: "#1A202C"         # ダークグレー
```

#### フォント
```yaml
japanese:
  primary: "Noto Sans JP"
  fallback: "Hiragino Sans"
english:
  primary: "Inter"  # B2Bで標準的なモダンサンセリフ
  fallback: "Roboto"
line_height: 1.6
letter_spacing: 0em
```

#### セクション構成
```yaml
sections:
  - hero           # ヒーロー（価値提案）
  - problem        # 課題提示（ターゲット企業の悩み）
  - solution       # 解決策（サービス概要）
  - features       # 機能・特徴
  - benefits       # メリット（ROI、効率化等）
  - use-cases      # 導入事例
  - pricing        # 料金プラン
  - faq            # よくある質問
  - cta            # 無料トライアル/お問い合わせ
```

#### 特有要素
- 課題解決：ターゲット企業の課題を明確化
- ROI提示：数値での効果提示
- 導入事例：業種別の成功事例
- 料金プラン：ティヤベース、従量課金等
- CTA：無料トライアル、デモ申請

---

### 4. 不動産（Real Estate）

#### カラーパレット
```yaml
primary: "#2D6A4F"      # 信頼感のあるダークグリーン
secondary: "#40916C"    # ミディアムグリーン
accent: "#D8F3DC"       # ライトグリーン
background: "#F8FAF9"   # オフホワイト
text: "#1B4332"         # ダークグリーン
```

#### フォント
```yaml
japanese:
  primary: "Noto Sans JP"
  fallback: "Hiragino Sans"
english:
  primary: "Inter"
  fallback: "Helvetica Neue"
line_height: 1.7
letter_spacing: 0.02em
```

#### セクション構成
```yaml
sections:
  - hero           # ヒーロー
  - search         # 物件検索
  - features       # 特徴（立地、設備等）
  - gallery        # ギャラリー（部屋の写真）
  - floor-plan     # 間取り
  - area           # 周辺環境
  - access         # アクセス
  - voice          # 入居者の声
  - faq            # よくある質問
  - inquiry        # 問い合わせ/内訳予約
```

#### 特有要素
- 物件検索：条件検索機能
- ギャラリー：部屋の写真、間取り
- 周辺環境：地図、施設情報
- 内訳予約：カレンダー予約

---

### 5. 教育（Education）

#### カラーパレット
```yaml
primary: "#5B4B9E"      # 知的なパープル
secondary: "#7C73DD"    # ライトパープル
accent: "#FFD166"       # 親しみやすいイエロー
background: "#FFF9E6"   # クリームイエロー
text: "#333333"         # ダークグレー
```

#### フォント
```yaml
japanese:
  primary: "Noto Sans JP"
  fallback: "Hiragino Sans"
english:
  primary: "Inter"
  fallback: "Roboto"
line_height: 1.8
letter_spacing: 0.03em
```

#### セクション構成
```yaml
sections:
  - hero           # ヒーロー
  - problem        # 悩み（学習の悩み、キャリアの悩み）
  - solution       # 解決策（カリキュラム、メソッド）
  - features       # 特徴
  - curriculum     # カリキュラム
  - instructors    # 講師紹介
  - voice          # 受講生の声
  - results        # 学習成果・実績
  - pricing        # 料金
  - faq            # よくある質問
  - cta            # 無料体験/お問い合わせ
```

#### 特有要素
- 学習悩み：ターゲットの悩みを提示
- カリキュラム：学習内容の明示
- 実績：成果発表、就職実績
- 無料体験：お試しプログラム

---

### 6. 採用（Recruitment）

#### カラーパレット
```yaml
primary: "#2563EB"      # 明るいブルー（活力）
secondary: "#1E40AF"    # ダークブルー
accent: "#F59E0B"       # アクションを促すオレンジ
background: "#FFFFFF"   # ホワイト
text: "#1F2937"         # ダークグレー
```

#### フォント
```yaml
japanese:
  primary: "Noto Sans JP"
  fallback: "Hiragino Sans"
english:
  primary: "Inter"
  fallback: "Roboto"
line_height: 1.7
letter_spacing: 0.01em
```

#### セクション構成
```yaml
sections:
  - hero           # ヒーロー（メッセージ）
  - about          # 会社概要・事業内容
  - culture        # 文化・価値観
  - benefits       # 待遇・福利厚生
  - interviews     # 社員インタビュー
  - jobs           # 募集職種
  - flow           # 選考フロー
  - faq            # よくある質問
  - cta            # 応募
```

#### 特有要素
- 会社文化：価値観、働き方
- 社員インタビュー：リアルな声
- 募集職種：職種別の詳細
- 選考フロー：選考プロセスの可視化
- エントリーフォーム

---

## サブカテゴリー別の調整

### 飲食店サブカテゴリー
```yaml
寿�店:
  tone: "高級・伝統"
  primary_color: "#8B5E3C"
  font_jp: "Shippori Mincho"

カフェ:
  tone: "カジュアル・親しみやすい"
  primary_color: "#A67C52"
  font_jp: "Noto Sans JP"

居酒屋:
  tone: "賑やか・夜遊び"
  primary_color: "#C44D42"
  font_jp: "Noto Sans JP"

ベーカリー:
  tone: "温かみ・手作り"
  primary_color: "#E8B4B8"
  font_jp: "Shippori Mincho"
```

### 医療サブカテゴリー
```yaml
歯科医院:
  trust_color: "#4A90A4"
  key_sections: [problem, solution, doctors, flow, voice]

美容皮膚科:
  trust_color: "#E8B4B8"
  key_sections: [problem, solution, gallery, doctors, pricing]

整体院:
  trust_color: "#6B8E23"
  key_sections: [problem, solution, features, flow, voice]
```

---

## 使用方法

### 基本的な呼び出し

```markdown
ユーザー: 「歯科医院のLPを作成して」

### 自動設定適用
カテゴリー: 医療
サブカテゴリー: 歯科医院

### 設定内容
- カラー: ティールブルー系
- フォント: Noto Sans JP + Inter
- セクション: hero, problem, solution, doctors, flow, voice, faq, access, reservation
- 特有要素: 悩み解消、診療フロー、医師紹介、よくある質問
```

### スキル内で設定を取得する関数

```javascript
// 設定取得
function getCategorySettings(category, subcategory = null) {
  const settings = CATEGORY_SETTINGS[category];
  if (subcategory && settings.subcategories) {
    return { ...settings, ...settings.subcategories[subcategory] };
  }
  return settings;
}

// セクション生成
function generateSections(category) {
  return CATEGORY_SETTINGS[category].sections;
}

// カラーパレット取得
function getColorPalette(category) {
  return CATEGORY_SETTINGS[category].colors;
}
```

---

## ファイル構成

```
/Users/yuuki/.Codex/skills/lp-category-settings/
├── skill.md                    # このファイル
├── settings/
│   ├── restaurant.yaml        # 飲食店詳細設定
│   ├── medical.yaml           # 医療詳細設定
│   ├── b2b.yaml               # B2B/SaaS詳細設定
│   ├── real-estate.yaml       # 不動産詳細設定
│   ├── education.yaml         # 教育詳細設定
│   └── recruitment.yaml       # 採用詳細設定
└── templates/
    ├── sections.html          # セクションテンプレート
    └── copy-patterns.md       # 業種別コピーパターン
```

---

## 注意点

1. **カスタマイズ**: 業種設定はベースライン。ブランドによって調整が必要
2. **トレンド対応**: 定期的にカラー、フォントのトレンドを更新
3. **アクセシビリティ**: コントラスト比、フォントサイズを確認
4. **レスポンシブ**: すべての業種でモバイルファーストを徹底

---

## 更新履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v1.0.0 | 2026-04-16 | 初版作成 |
