# Day044 - Day043終了時点の引き継ぎログ（ポートフォリオ作業ログ）

## ラベル（検索用）
**Labels:** `lp` `wordpress` `post-launch` `phase2-prep` `js-injection` `pdf-flow` `measurement-check` `measurement-plan` `handoff` `day044` `portfolio-worklog`

lp:audience=非エンジニアのクライアント
lp:goal=クライアント合意済みの次フェーズ方針に沿って、予約導線の計測整理と共有フォーマット定義へ着手できる状態を作る
lp:industry=パーソナルトレーニング
lp:objective=公開中LPの安定性を維持しながら、予約導線の計測整理、CTA位置別分析要否判断、簡易共有フォーマット定義を進める
lp:status=measurement-verification-complete-reporting-pending
lp:env=wordpress-live-phase2-measurement-verified

---

## 記録について
- このファイルは、Day043終了時点の確定状態を Day044 開始者向けに要約した引き継ぎログ。
- Day044 で使う実ファイルは、day跨ぎを避けるため `/Users/yuuki/Works/lp-100/day044/` 配下へ複製済み。

---

## Day043終了時点で確定していること
- 公開URLは継続公開中
- クライアントから公開品質OKを受領済み
- `Simple Custom CSS and JS` によるJS注入経路は確保済み
- 2026-03-09 に4本のJSを WordPress へ配信済み
- 公開表示に崩れや主要導線異常は出ていない
- PDF導線は `reCAPTCHA` / 案内メール / PDF表示まで復旧確認済み
- DevTools `Console` で `window.LP_CONFIG` / `window.gtag` / `window.fbq` を確認済み
- `Network` でページ読み込み時の `gtag/js` / GA4 `collect` / `fbevents.js` を確認済み
- TimeRex 側URLへの UTM 引き継ぎは `utm_campaign=day042` で確認済み
- 予約CTAクリック時の最小計測確認は完了済み
- クライアントから、次フェーズは予約導線の計測整理優先で進めてよい旨を受領済み
- クライアントは、計測整理後に数値傾向とつまずきポイントの簡易共有を希望している
- クライアントは、無料カウンセリング予約までの動きの中で、どこで離脱しやすいかを知りたい意向を示している
- クライアントは、PDF導線がどう機能しているかも見たい意向を示している
- 現行の予約CTAイベントでは、総クリック数は見えても CTA位置別の切り分けはできない

---

## Day041確認メモ（2026-03-08）
- `カスタム CSS & JS` のメニューから、JSスニペット投入までは成功した
- 表示確認では、ページ描画と予約CTA遷移に問題はなかった
- PDFボタン押下時のみ `送信中...` で止まり、メール未着
- 現在のHTML正本は `action="https://formsubmit.co/yuki.freelife@gmail.com"` の native `FormSubmit` 版
- 一方、旧JSは `leadEndpoint="https://formsubmit.co/ajax/contact@bodymake-yuta.com"` を使い、submit を `preventDefault()` していた
- この不整合が原因と判断し、Day042用の `LP_BEHAVIOR_CORE.js` を修正した

## Day042確認メモ（2026-03-09）
- `LP_CONFIG_INLINE.js` / `LP_BEHAVIOR_CORE.js` / `GA4_LOADER.js` / `META_PIXEL_LOADER.js` の4本を WordPress へ配信した
- 公開ページ表示に崩れや導線異常は出ていない
- PDFボタン押下後に `reCAPTCHA` が開くことを確認
- 案内メール到達を確認
- PDF表示まで正常に到達することを確認
- 前回の不具合だった submit 横取りは再発していない
- DevTools `Console` で `window.LP_CONFIG` / `window.gtag` / `window.fbq` を確認した
- `Network` でページ読み込み時の GA4 `collect` / `gtag/js` / `fbevents.js` を確認した
- TimeRex 側URLで `utm_source=test&utm_medium=manual&utm_campaign=day042` の引き継ぎを確認した
- 予約CTAクリック直後の LP元タブ上 `collect` / `tr` の追加通信確認は、作業終了のため Day043へ持ち越し

## Day043確認メモ（2026-03-09）
- CTAクリック後の LP元タブ `Network` で、追加の GA4 `collect` を確認した
- Meta `tr` と `trigger` も確認した
- 予約CTAクリック時の最小計測確認は完了した
- PDF導線は「無料相談へすぐ進まないユーザーに先に価値提供し、後日の予約行動へつなぐ補助導線」と整理した
- 最小復旧範囲は、ページ読込計測、予約CTAの UTM 引き継ぎ、予約CTAクリック計測、PDF導線の実動作維持までとした
- クライアントから、次フェーズは予約導線の計測整理を優先したい意向を受領した
- クライアントは、数値傾向とつまずきポイントの簡易共有を期待している
- クライアントは、無料カウンセリング予約までの離脱しやすい箇所を見たい意向を明示した
- クライアントは、PDF導線がどう機能しているかも見たい意向を明示した
- 現行の予約CTAは5か所あるが、イベントは `reservation_link` / `SelectCounselingCTA` に集約されるため、CTA位置別分析には不足がある

## Day044の次アクション
- クライアントへ返す計測共有項目を、数値傾向 / つまずきポイント / 次アクションの3点で定義する
- 無料カウンセリング予約までの離脱ポイント把握に、現行の予約CTA計測で足りるかを見て、CTA位置別計測を追加するか判断する
- PDF導線がどう機能しているかを見る最低限指標を定義する
- PDF詳細イベントと UI微調整を Phase3 送りにする範囲を明文化する

## Day044開始実装メモ（2026-03-10）
- `LP_BEHAVIOR_CORE.js` に、CTA位置別イベント、PDF入口イベント、PDFフォーム開始/送信イベント、セクション到達イベントを追加
- `TOP_PAGE_CUSTOM_HTML_TEMPLATE_HIGH_PRIORITY_FIX.html` に、`data-cta-location` / `data-pdf-entry-point` / `data-lp-observe` と hidden `utm_*` / `pdf_entry_point` を追加
- PDFフォームの `source_page` は `day040_lp_pdf` から `lp_review_pdf` へ補正
- クライアント共有用の叩き台として `MEASUREMENT_SHARE_TEMPLATE.md` を追加

## Day044公開確認メモ（2026-03-10）
- `day044` の HTML / `LP_BEHAVIOR_CORE.js` を WordPress へ反映した
- テストURL `?utm_source=test&utm_medium=manual&utm_campaign=day044` で公開確認した
- 予約CTA5か所で `select_counseling_cta` と位置別イベントを確認した
- Hero / Footer の PDF入口で `select_pdf_cta` と入口別イベントを確認した
- PDFフォームで `start_pdf_form` / `submit_pdf_form` を確認した
- PDF送信後の `reCAPTCHA`、案内メール、PDF表示まで確認した
- 現在の残作業は、数値蓄積後の共有文面調整と Phase3送り項目の整理

---

## 次回最初に見るファイル
- `/Users/yuuki/Works/lp-100/day044/README.md`
- `/Users/yuuki/Works/lp-100/day044/LP_BEHAVIOR_CORE.js`
- `/Users/yuuki/Works/lp-100/day044/PHASE2_EXECUTION_PLAN.md`
- `/Users/yuuki/Works/lp-100/day044/PHASE2_PHASE3_RESTART_BACKLOG.md`
- `/Users/yuuki/Works/lp-100/day044/CLIENT_FEEDBACK_TRACKER.md`

---

## 補足
- 現行の WordPress 正本は Day044 側に複製した HTML / CSS を参照する。
- 現行の native `FormSubmit` 構成では、PDF送信時の JS 側 `generate_lead` / Meta `Lead` が出なくても即NGとはしない。
- Day044 は、最小復旧範囲を維持したまま、予約までの離脱ポイント整理、PDF導線の機能指標整理、共有フォーマット定義を優先する。
