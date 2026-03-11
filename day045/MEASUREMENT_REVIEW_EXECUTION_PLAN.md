# Day045 - 初回計測レビュー実行計画

## 前提
- クライアントは `初回計測レビュー・改善提案` で進行することに同意済み。
- 計測レビュー開始日:
  `2026-03-11`
- 初回共有の目安:
  `2026-03-18` から `2026-03-25` ごろ
- クライアント返信は不要とし、こちらで観測を開始する。

## 今回のレビュー目的
- 予約CTAの中で、どの位置が反応しやすいかを把握する。
- PDF導線が補助導線として機能しているかを把握する。
- 無料相談予約までの流れの中で、どこに引っかかりがありそうかを整理する。
- 初回共有を `数値の事実 / そこから考えられる仮説 / 次にやるとよさそうなこと` の3点で返せる状態を作る。

## 使う確認元
- GA4:
  `select_counseling_cta`
  `select_counseling_cta_hero`
  `select_counseling_cta_support`
  `select_counseling_cta_pricing`
  `select_counseling_cta_final`
  `select_counseling_cta_pdf_primary`
  `view_hero_section`
  `view_support_cta`
  `view_pricing_section`
  `view_final_cta`
  `view_pdf_section`
  `select_pdf_cta`
  `select_pdf_cta_hero_secondary`
  `select_pdf_cta_footer_nav`
  `start_pdf_form`
  `submit_pdf_form`
- 補助確認:
  - FormSubmit メール件数
  - メール内 `utm_*`
  - メール内 `pdf_entry_point`
  - メール内 `source_page`
  - TimeRex 側件数メモ
- 外部要因メモ:
  - Instagram投稿
  - 告知実施
  - その他流入に影響しそうな動き

## 運用ルール
- LPイベントだけで、TimeRex 側の最終予約完了数を断定しない。
- `submit_pdf_form` は送信着手として扱い、最終PDF到達は FormSubmit 側もあわせて解釈する。
- 外部流入要因があった日は、数値の増減をそのまま LP改善要因と断定しない。
- 初回共有では、改善案を広げすぎず `次に見るべきこと` を優先する。

## 観測の進め方
1. `2026-03-11` を集計開始日として固定する。
2. 途中でクライアントから Instagram 投稿や告知共有が来たら、観測ログへ記録する。
3. 初回共有前に GA4 / FormSubmit / TimeRex 補助確認を並べる。
4. `CLIENT_WEEK1_MEASUREMENT_REVIEW_DRAFT.md` に実数を差し込み、3点構成で整える。
5. 初回共有後、継続観測が必要かを判断する。

## 初回共有前チェック
- 期間が `2026-03-11` 以降で揃っている。
- 予約CTA総数と位置別数値が確認できている。
- PDF導線の総数と入口別傾向が確認できている。
- FormSubmit メール件数との差分解釈メモがある。
- `数値の事実 / 仮説 / 次にやるとよさそうなこと` の3点が埋まっている。

## 参照
- `/Users/yuuki/Works/lp-100/day045/README.md`
- `/Users/yuuki/Works/lp-100/day045/CLIENT_WEEK1_MEASUREMENT_REVIEW_DRAFT.md`
- `/Users/yuuki/Works/lp-100/day045/CLIENT_FEEDBACK_TRACKER.md`
