# Day073 - Table Harmony | ケータリングサービスLP

## ラベル（検索用）
**Labels:** `B2C` `catering` `food` `individual-business` `home-party` `corporate` `anniversary` `leadgen` `day073`

## プロジェクト概要

lp:audience=記念日を迎える個人、法人イベント担当者、ホームパーティー主催者
lp:goal=見積もり・相談依頼
lp:industry=ケータリングサービス
lp:objective=3名〜50名までのケータリングサービスを認知させ、見積もり依頼を獲得する
lp:offer=ケータリングサービス（記念日/法人/ホームパーティー）
lp:template=original-day073
lp:status=completed
lp:env=static-html-css

## セクション構成

1. **Hero** - メインビジュアル、キャッチ、信頼バッジ、CTA
2. **Concept** - こだわり（オーナーシェフ直送、ご要望対応、器具付き）
3. **Menu** - シーン別メニュー（記念日/法人/ホームパーティー）
4. **Gallery** - お料理ギャラリー
5. **Flow** - ご利用の流れ（4ステップ）
6. **Voice** - お客様の声
7. **FAQ** - よくある質問（アコーディオン）
8. **Contact** - お問い合わせフォーム

## 実装機能

- メニュータブ切り替え（記念日/法人/ホームパーティー）
- FAQアコーディオン
- スムーズスクロール
- フェードインアニメーション（Intersection Observer）
- モバイルメニュー
- フォームバリデーション
- メール起動お問い合わせ
- 現在年自動表示（フッター）

## 差し替え推奨項目

- `hello@example.com` → 実運用メールアドレス
- `03-XXXX-XXXX` → 実際の電話番号
- 料金プラン・料金 → 実際の販売価格
- シェフプロフィール → 実際の経歴・実績
- お客様の声 → 実際のレビュー

## 法務・公開メモ

- 本LPは架空案件（デモ）です
- 実在の企業・サービスとは無関係
- 画像はプレースホルダー
- 公開時は実画像・実情報への差し替えが必要

## ローカル確認方法

```bash
cd /Users/yuuki/Works/lp-100
python3 -m http.server 8080
```

ブラウザで `http://localhost:8080/day073/` を開く
