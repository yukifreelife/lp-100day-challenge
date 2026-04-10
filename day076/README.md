# Day076 - Simple Space | 整理収納アドバイザーLP

## ラベル（検索用）
**Labels:** `B2C` `home-service` `organizing` `clutter-free` `individual-business` `local-service` `consulting` `day076`

## プロジェクト概要

lp:audience=片付けに困っている人、引っ越しをした人、仕事が忙しい人
lp:goal=整理収納相談予約獲得・問い合わせ
lp:industry=家事代行サービス（整理収納アドバイザー）
lp:objective=「散らかった部屋が1日で変わる」を伝え、無料相談予約を獲得する
lp:offer=整理収納コンサルティング（1部屋から、半日・1日コース）
lp:template=organizing-service-standard
lp:status=draft
lp:env=static-html-css

## セクション構成

1. **Hero** - メインビジュアル、キャッチ、悩みバッジ、CTA
2. **Problem** - よくある悩み3つ（時間がない・どこから手をつけて・リバウンド）
3. **Solution** - 解決策（1部屋から・プロの技術・維持方法）
4. **Service** - 3つのコース（診断・半日・1日フル）
5. **BeforeAfter** - ビフォーアフター事例
6. **Voice** - お客様の声
7. **Flow** - 予約から完了までの流れ
8. **Profile** - アドバイザー紹介
9. **FAQ** - よくある質問
10. **Contact** - 無料相談予約フォーム

## 実装機能

- 料金タブ切り替え（診断・半日・1日）
- FAQアコーディオン
- スムーズスクロール
- フェードインアニメーション
- モバイルメニュー
- フォームバリデーション

## 差し替え推奨項目

- `080-0000-0000` → 実際の電話番号
- `info@simplespace.jp` → 実际のメールアドレス
- `〒000-0000` → 実際の住所
- アドバイザー名・経歴 → 実際の情報
- ビフォーアフター画像 → 実際の事例写真

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

ブラウザで `http://localhost:8080/day076/` を開く
