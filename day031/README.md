# Day031 - パーソナルトレーニングLP（スクショ再構築）

## 概要
添付スクリーンショットを基準に、1ページLPを静的HTML/CSS/JSで再構築。

- 主要CV: 無料カウンセリング予約（TimeRex遷移）
- 副次CV: 無料PDF受取（名前+メールフォーム）
- 訴求: 3か月で見た目+習慣化、無理な勧誘なし

## ファイル構成
- `index.html` LP本体
- `styles.css` デザイン/レスポンシブ
- `script.js` FAQアコーディオン / UTM保持 / CTA計測 / PDF送信UI
- `images/` 提供素材（`lp_photos.zip` 展開）
- `images/optimized/` LP表示サイズに最適化したWebP画像
- `downloads/food-checklist.pdf` 無料PDFダウンロード実体
- `privacy.html` プライバシーポリシー
- `tokushoho.html` 特定商取引法に基づく表記
- `REQUIREMENTS_CONFIRMED.md` クライアント確定要件の再確認メモ

## 動作確認
```bash
cd /Users/yuuki/Works/lp-100/day031
python3 -m http.server 8031
```
`http://localhost:8031` を開いて確認。

## 事前設定（公開前）
`index.html` 内 `window.LP_CONFIG` の以下を本番値へ設定:
- `reservationUrl`（TimeRexの実予約ページURL）
- `leadEndpoint`（PDF取得フォームの送信先）
- `gaMeasurementId`（GA4）
- `metaPixelId`（Meta Pixel）

## 備考
- 現在の `leadEndpoint` 未設定時は、送信成功UI表示のみ（モック）です。
- 実運用の自動返信メール1通はフォームサービス側で設定します。
