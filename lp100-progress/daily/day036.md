# Day036 - PDF導線の最終確定と初回公開判断（ポートフォリオ作業ログ）

## ラベル（検索用）
**Labels:** `lp` `wordpress` `no-js` `formsubmit` `recaptcha` `launch-check` `handoff` `day036` `portfolio-worklog`

lp:audience=非エンジニアのクライアント
lp:goal=PDF導線を成立させたうえで初回公開可否を判断する
lp:industry=パーソナルトレーニング
lp:objective=no-JS公開方針での最終導線を確定する
lp:status=launch-judgement-ready
lp:env=wordpress-no-js-fallback

---

## 記録について
- 当日の分単位の実測ログは見つからなかったため、このファイルは `README.md`、差し替え用HTML、Codex チャットのタイムスタンプをもとに再構成している。

---

## 今日の成果
- Day036の目的:
  - `JSなし公開優先` 方針のまま、PDF導線の実運用パターンを確定する
- 実施内容:
  - WordPress側の no-JS PDFフォーム差し替えを完了
    - `PDF_FORM_NOJS_REPLACEMENT_OWNER_EMAIL.html` の内容を使う前提を固定
  - `FormSubmit` のアクティベーション確認
    - 作業者メール宛フォームでアクティベーションメール受信と `Activate Form` 実行が完了
    - 「未アクティベート時の `Check Your Email` 画面」が仕様であることを切り分け
  - PDF導線の実挙動確認
    - アクティベーション後も、即時PDF表示ではなく `reCAPTCHA` 画面が1枚挟まることを確認
    - `reCAPTCHA` 通過後は PDF に到達可能で、導線自体は成立
  - 運用判断の整理
    - 「1クリック即DL」より「メール取得を優先し、確認画面1枚は許容」の場合は現行フォームで成立
    - 摩擦を極小化したい場合は PDF直リンクCTA への切り替えが必要と整理
  - クライアント運用への戻し条件を明記
    - 仮運用で作業者メールを使った後、最終公開時にクライアント運用へ差し戻す判断軸を整理

---

## 作業時間（再構成メモ）
- 当日の実測時間は未記録。ただし、Codex チャットの開始/完了時刻と成果物更新順をもとに、以下を参考時間として再構成した。
- WordPress側フォーム差し替えと送信先メールの切り替え: 約55分
- `FormSubmit` 初回アクティベーション: 約35分
- `reCAPTCHA` を含む導線確認と挙動説明の整理: 約55分
- 初回公開可否の判断整理とクライアント想定QA整理: 約50分
- Day037への引き継ぎ準備とコミット整理: 約30分
- 参考合計: 約225分（3時間45分）

---

## 主要成果物
- 差し替え用フォーム
  - `/Users/yuuki/Works/lp-100/day036/PDF_FORM_NOJS_REPLACEMENT_OWNER_EMAIL.html`
- 当日引き継ぎメモ
  - `/Users/yuuki/Works/lp-100/day036/README.md`
- 参照した前日資料
  - `/Users/yuuki/Works/lp-100/day035/README.md`
  - `/Users/yuuki/Works/lp-100/day035/NO_JS_PUBLISH_FIRST_PLAN.md`
  - `/Users/yuuki/Works/lp-100/day034/PDF_FORM_NOJS_REPLACEMENT.html`

---

## 現在の設定値
`PDF_FORM_NOJS_REPLACEMENT_OWNER_EMAIL.html` の現行方針:
- 送信先: `https://formsubmit.co/yuki.freelife@gmail.com`
- `_subject`: `【LP】無料PDFダウンロード申込`
- `_template`: `table`
- `_autoresponse`: PDF案内メール文面を送信
- `_next`: `https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/food-checklist.pdf`

現時点の判断:
- `FormSubmit` は `reCAPTCHA` を挟むが、導線そのものは成立
- 即時性を最優先するなら、PDF直リンクCTAへ切り替える余地がある

---

## 次回やること
1. クライアント運用に戻すなら、`action` をクライアント受信先へ差し戻して最終確認する
2. 「メール取得優先」か「即時PDF表示優先」かを公開判断として確定する
3. 初回公開後の第2フェーズで、UTM / GA4 / Meta / FAQアコーディオンの復帰要否を整理する
