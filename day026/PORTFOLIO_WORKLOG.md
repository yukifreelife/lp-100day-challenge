# Day026 - LP改善・CV導線設計（社会的証明 × リスク逆転 × 計測設計）

## ラベル（検索用）
**Labels:** `lp` `portfolio` `cv` `proof` `risk-reversal` `measurement` `ab-test` `ga4` `clarity` `screenshot` `day026`

lp:audience=LP改善を検討する事業者/マーケ担当  
lp:goal=無料相談予約（フォーム送信）  
lp:industry=LP制作/改善支援  
lp:objective=社会的証明・リスク逆転・計測設計を同時実装し、改善運用まで接続する  
lp:offer=LP設計/デザイン/実装 + 保証条件設計 + GA4/Clarity計測実装  
lp:template=original-day026  
lp:status=prototype-ready  
lp:env=static-html-css-js

---

## 今日の成果
- Day026の目的：
  - 社会的証明・リスク逆転・計測設計を同時に成立させるLPを制作し、公開後の改善まで見据える
- 実施内容：
  - Evidence / Guarantee / Measurement の3軸でセクション設計・文言・導線を実装
  - A/Bバリアント（`?ab=A` / `?ab=B` + localStorage保存）を実装
  - ページ内Telemetryダッシュボードと `window.day026Analytics` を実装
  - `JSONエクスポート` ボタンとダウンロード処理を削除し、閲覧者向け不要ダウンロードを防止
  - FV右カラムにワークフロー画像（`images/fv-hero-visual.svg`）と条件バッジを追加
  - FV左右バランスを調整（グリッド比率・右カラム密度・指標カードレイアウト）
  - `?capture=1` でPC/SPスクリーンショット4枚を再生成
- 検証結果：
  - `node --check /Users/yuuki/Works/lp-100/day026/script.js` を通過
  - `telemetry_export` / `export-telemetry` の参照がコード上に残っていないことを確認
  - `day026PC/SP/FV` の4枚スクリーンショットを保存完了

---

## 主要成果物
- LP本体
  - `/Users/yuuki/Works/lp-100/day026/index.html`
  - `/Users/yuuki/Works/lp-100/day026/styles.css`
  - `/Users/yuuki/Works/lp-100/day026/script.js`
- FVビジュアル
  - `/Users/yuuki/Works/lp-100/day026/images/fv-hero-visual.svg`
- スクリーンショット（captureモードで再生成）
  - `/Users/yuuki/Works/lp-100/day026/day026PC.png`
  - `/Users/yuuki/Works/lp-100/day026/day026PCFV.png`
  - `/Users/yuuki/Works/lp-100/day026/day026SP.png`
  - `/Users/yuuki/Works/lp-100/day026/day026SPFV.png`
  - `/Users/yuuki/Works/lp-100/day026/day026FV.png`（横長FV）

---

## A/B挙動（実装済み）
- クエリ指定
  - `?ab=A`
  - `?ab=B`
- 指定なしの場合
  - localStorage（`day026-ab-variant`）を優先
  - 未保存時は A/B をランダム割り当て
- 差分
  - Heroマイクロコピーを切替
  - Bでは事例カードの並び順を変更

---

## GA4 / Clarity 設定方法
`/Users/yuuki/Works/lp-100/day026/index.html` の `body` にIDを設定します。

- `data-ga4-id="G-XXXXXXXXXX"`
- `data-clarity-id="xxxxxxxx"`

例:  
`<body id="top" data-ga4-id="G-ABCD1234EF" data-clarity-id="abcd1234">`

ID未設定時はローカル計測のみ動作します。

---

## 主な計測イベント
- `page_init`
- `ab_variant_assigned`
- `scroll_milestone`
- `section_view`
- `proof_filter_change`
- `risk_detail_open`
- `cta_click`
- `chip_select`
- `form_start`
- `form_submit_start`
- `form_submit_success`
- `form_submit_error`
- `faq_open`
- `analytics_dispatch`
- `telemetry_reset`

---

## 注意点
- 本LPはポートフォリオ用途のデモです（架空案件）。
- 実在の企業・商品・人物とは無関係です。
- 効果を保証するものではありません。
- スクショ撮影時は `index.html?capture=1` を使用してください。
- Telemetryはクライアント内メモリ記録で、永続保存やサーバー送信は未実装です。
- 閲覧者向けのJSONエクスポート機能は無効化済みです。

---

## 次回やること（Day027）
1. Telemetry指標を使った改善仮説（CTA文言・順序）を2〜3案作成
2. FVビジュアルを必要に応じて実画像（WebP）へ差し替え
3. MeasurementセクションのKPI閾値と改善ルールを文書化
4. A/Bバリアント別の追加スクリーンショットを取得

---

## 公開・法務メモ（最低限）
- 本LPは **架空案件（デモ）**
- 実在の企業・商品・人物とは無関係
- 効果には個人差があり、特定結果を保証しない
