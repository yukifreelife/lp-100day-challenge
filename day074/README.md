# Day074 - スマイル歯科 | 歯科医院LP

## ラベル（検索用）
**Labels:** `B2C` `dental` `medical` `individual-business` `family` `pediatric` `oral-surgery` `leadgen` `day074`

## プロジェクト概要

lp:audience=地域の家族、初診患者、歯科恐怖症患者
lp:goal=診療予約・問い合わせ
lp:industry=歯科医院
lp:objective=地域の患者様に安心して通える歯科医院を認知させ、診療予約を獲得する
lp:offer=歯科診療（一般/小児/口腔外科）
lp:template=medical-standard
lp:status=completed
lp:env=static-html-css

## セクション構成

1. **Hero** - メインビジュアル、キャッチ、診療時間、CTA
2. **About** - 院長あいさつ、医院の特徴
3. **Features** - 3つの約束（痛くない・怖くない・丁寧）
4. **Menu** - 診療メニュー（一般/小児/口腔外科）
5. **Technology** - 最新設備・治療法
6. **Flow** - 初診の流れ
7. **Voice** - 患者様の声
8. **FAQ** - よくある質問
9. **Access** - アクセス・診療時間
10. **Contact** - Web予約・お問い合わせ

## 実装機能

- タブ切り替え（診療メニュー）
- FAQアコーディオン
- スムーズスクロール
- フェードインアニメーション（Intersection Observer）
- モバイルメニュー
- フォームバリデーション
- メール起動お問い合わせ
- Google Maps埋め込み

## 差し替え推奨項目

- `hello@example.com` → 実運用メールアドレス
- `03-XXXX-XXXX` → 実際の電話番号
- `〒XXX-XXXX` → 実際の住所
- 地図の埋め込みコード → 実際の所在地
- 院長プロフィール → 実際の経歴・実績
- 患者様の声 → 実际のレビュー

## 法務・公開メモ

- 本LPは架空案件（デモ）です
- 実在の企業・サービスとは無関係
- 画像はプレースホルダー
- 医療広告ガイドラインに準拠した内容への修正が必要
- 公開時は実画像・実情報への差し替えが必要

## 医療広告ガイドラインについて

- 誇大な表現は禁止されています
- 「日本一」「一番」等の最上級表現は使用不可
- 治療実績は証明可能なもののみ記載可能
- 他院との比較は避ける必要があります

## ローカル確認方法

```bash
cd /Users/yuuki/Works/lp-100
python3 -m http.server 8080
```

ブラウザで `http://localhost:8080/day074/` を開く
