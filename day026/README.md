# Day026 - LP改善・CV導線設計（社会的証明 × リスク逆転 × 計測設計）

## ラベル（検索用）
**Labels:** `lp` `proof` `risk-reversal` `measurement` `ab-test` `ga4` `clarity` `portfolio` `day026`

lp:audience=LP改善を検討する事業者/マーケ担当
lp:goal=無料相談予約（フォーム送信）
lp:industry=LP制作/改善支援
lp:objective=社会的証明・リスク逆転・計測設計を同時実装する
lp:offer=LP設計/デザイン/実装 + 保証条件設計 + GA4/Clarity計測実装
lp:template=original-day026
lp:status=prototype-ready
lp:env=static-html-css-js

---

## 今日のテーマ
Day026は以下3要素を主軸に制作。

1. 社会的証明（Evidence）
- 業種別の事例カード（SaaS/EC/サービス）
- 数値変化を明示（例: CVR 1.9%→3.0%）
- 口コミブロックを追加し、定性的証拠も提示

2. リスク逆転（Risk Reversal）
- 納品保証、方向性修正保証、公開後フォロー保証を明文化
- `details` UIで保証条件を開封・確認できる構成
- CTA前で心理的リスクを先回り処理

3. 計測設計（Measurement Design）
- KPIツリーをLP本体に可視化
- イベント設計マップをテーブルで明示
- `window.day026Analytics` でローカル計測サマリ確認
- GA4/Clarityへイベント自動送信
- 画面内ダッシュボード表示 + JSONエクスポート + ログリセット

---

## 実装ファイル
- LP本体
  - `/Users/yuuki/Works/lp-100/day026/index.html`
  - `/Users/yuuki/Works/lp-100/day026/styles.css`
  - `/Users/yuuki/Works/lp-100/day026/script.js`
- ドキュメント
  - `/Users/yuuki/Works/lp-100/day026/README.md`

---

## A/B挙動（実装済み）
- クエリ指定
  - `?ab=A`
  - `?ab=B`
- 指定なしの場合
  - localStorage (`day026-ab-variant`) を優先
  - 未保存なら A/B をランダム割り当て
- 差分
  - Heroマイクロコピーを切替
  - Bでは事例カードの並び順を変更

---

## GA4 / Clarity 設定方法
`/Users/yuuki/Works/lp-100/day026/index.html` の `body` にIDを設定します。

- `data-ga4-id=\"G-XXXXXXXXXX\"`
- `data-clarity-id=\"xxxxxxxx\"`

例:
`<body id=\"top\" data-ga4-id=\"G-ABCD1234EF\" data-clarity-id=\"abcd1234\">`

ID未設定時は、ローカル計測のみ動作します。

---

## 主な計測イベント
- `page_init`
- `ab_variant_assigned`
- `scroll_milestone`
- `section_view`
- `proof_filter_change`
- `risk_detail_open`
- `cta_click`
- `form_start`
- `form_submit_start`
- `form_submit_success`
- `form_submit_error`
- `faq_open`
- `analytics_dispatch`
- `telemetry_export`
- `telemetry_reset`

---

## 注意
- 本LPは検証用デモ（架空案件）です。
- 実在の企業/実績値ではありません。
- 効果を保証するものではありません。
