# Day035 - JSなし公開優先への方針転換（ポートフォリオ作業ログ）

## ラベル（検索用）
**Labels:** `lp` `wordpress` `no-js` `fallback` `launch` `formsubmit` `waf` `day035` `portfolio-worklog`

lp:audience=非エンジニアのクライアント
lp:goal=WordPress管理画面だけで初回公開を成立させる
lp:industry=パーソナルトレーニング
lp:objective=JS依存機能を外し、公開優先の代替導線を固める
lp:status=no-js-first-plan-ready
lp:env=wordpress-no-js-fallback

---

## 記録について
- 当日の分単位の実測ログは見つからなかったため、このファイルは `README.md` と `NO_JS_PUBLISH_FIRST_PLAN.md` をもとに再構成している。

---

## 今日の成果
- Day035の目的:
  - `Forbidden access` が続く状況でも、クライアントに追加サーバー操作を依頼せず初回公開を成立させる
- 実施内容:
  - 方針転換
    - `WPCode Lite` 起点のJS投入を初回公開では見送り
    - `JSなし公開優先` を正式な当日方針に切り替え
  - FAQの no-JS 化
    - アコーディオンをやめ、常時表示に切り替える方針を確定
    - `FAQ_NOJS_FALLBACK_CSS.css` を利用した追加CSS運用へ整理
  - PDF導線の no-JS 化
    - JS依存フォームを `formsubmit.co` の通常POSTフォームへ差し替える方針を確定
    - ページ内サンクス表示は初回公開では使わず、送信後にPDF到達させる導線へ寄せる
  - 導線と計測の優先順位整理
    - 予約CTAは TimeRex 直リンクを維持
    - UTM引き継ぎ、GA4/Meta のカスタムイベントは第2フェーズへ後ろ倒し
  - 実行手順の文書化
    - WordPress管理画面での具体的な置換手順を `NO_JS_PUBLISH_FIRST_PLAN.md` に固定

---

## 作業時間（再構成メモ）
- 当日の実測時間は未記録
- 確認できる作業ブロック:
  - WAFブロックを前提にした公開方針の再設計
  - FAQの no-JS 代替案整理
  - PDFフォーム差し替え手順の明文化
  - 初回公開で残す機能 / 削る機能の整理

---

## 主要成果物
- no-JS公開手順書
  - `/Users/yuuki/Works/lp-100/day035/NO_JS_PUBLISH_FIRST_PLAN.md`
- 当日引き継ぎメモ
  - `/Users/yuuki/Works/lp-100/day035/README.md`
- 確認スクリーンショット
  - `/Users/yuuki/Works/lp-100/day035/day035PC.png`
  - `/Users/yuuki/Works/lp-100/day035/day035PCFV.png`
  - `/Users/yuuki/Works/lp-100/day035/day035SP.png`
  - `/Users/yuuki/Works/lp-100/day035/day035SPFV.png`
- 参照している移行素材
  - `/Users/yuuki/Works/lp-100/day034/FAQ_NOJS_FALLBACK_CSS.css`
  - `/Users/yuuki/Works/lp-100/day034/PDF_FORM_NOJS_REPLACEMENT.html`
  - `/Users/yuuki/Works/lp-100/day034/source/index.html`
  - `/Users/yuuki/Works/lp-100/day034/source/styles.css`

---

## 現在の判断
- 初回公開は「予約CTAを通す」「LP本文を読める」「PDF導線を成立させる」を最優先とする
- 初回公開で保留にしたもの:
  - FAQ開閉アニメーション
  - PDF送信後のページ内完了表示
  - UTMの localStorage 保存
  - 予約URLへのUTM自動引き継ぎ
  - GA4 / Meta のカスタムイベント
- 仮運用方針:
  - `FormSubmit` の受信確認は一時的に作業者側メールで検証し、その後クライアント運用へ戻す前提で扱う

---

## 次回やること（Day036）
1. WordPress 側のPDFフォームを no-JS 版へ実際に差し替える
2. `FormSubmit` のアクティベーション有無を確認し、PDF導線の実動作を判断する
3. `FormSubmit` が重い / 不確実なら、PDF直リンクCTAへの切り替えも比較する
