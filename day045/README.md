# Day045 - 初回案件クローズ後の次フェーズ整理準備（2026-03-11開始）

## 現在地
- 公開URL `https://yuki-freelife.com/lp-review/` は継続公開中。
- 2026-03-09 に `LP_CONFIG_INLINE.js` / `LP_BEHAVIOR_CORE.js` / `GA4_LOADER.js` / `META_PIXEL_LOADER.js` の4本を WordPress へ配信済み。
- 2026-03-10 に `day044` 正本を WordPress へ反映し、予約CTA位置別計測と PDF導線の最小計測を公開URLで確認済み。
- 予約CTA5か所で、`select_counseling_cta` と位置別イベント `select_counseling_cta_<location>` を確認済み。
- PDF導線2か所で、`select_pdf_cta` と入口別イベント `select_pdf_cta_<entry_point>` を確認済み。
- PDFフォームで、`start_pdf_form` / `submit_pdf_form` / `reCAPTCHA` / 案内メール / PDF表示まで確認済み。
- 公開表示に崩れや主要導線異常は出ていない。
- クライアントとのやり取り上、初回案件は `LP制作 / 公開反映 / 主要導線確認 / 初期調整` までで一区切りとする認識が確定した。
- 初回案件分の請求額 `100,000円（税込）` はクライアント了承済みで、通常請求書での対応も了承済み。
- クライアントは `2026-03-31` までの支払予定を明示している。
- 次フェーズは、初回案件とは別枠の継続案件として整理案提示待ちの状態。

## Day044で確定したこと
- 予約CTAを主導線、PDF導線を補助導線として扱う。
- 今後は、一定期間データを蓄積したうえで
  - どのCTAに反応が集まるか
  - どこで離脱しやすいか
  - PDF導線が補助導線としてどの程度機能しているか
  を簡潔にクライアントへ返す流れで進める。
- 現時点では、見た目の微調整は優先を上げず、必要性が見えた段階で改めて相談する方針。

## 直近のクライアント返信（2026-03-11）
- 初回案件分 `100,000円（税込）` の請求内容に問題ない旨を受領。
- 通常請求書での対応についても問題ない旨を受領。
- 初回案件は一区切りの認識で問題ない旨を受領。
- 次フェーズは、整理案を見たうえで継続範囲を相談したい旨を受領。
- 現時点では、クライアントは `次フェーズ整理案の共有待ち` の状態。

## Day045で最初にやること
1. 初回案件は `day044` で一区切りになったことを前提に、Day045 では次フェーズ整理案の準備へ切り替える。
2. `/Users/yuuki/Works/lp-100/estimate/2026-03-10_ESTIMATE_DRAFT.md` を開き、継続案件の切り方と金額案を確認する。
3. 予約導線計測 / PDF補助導線 / 初回レビュー共有までを、どこまで次フェーズに含めるか整理する。
4. クライアントへ送る整理案文面を作る。
5. 継続合意が取れた後に、`CLIENT_WEEK1_MEASUREMENT_REVIEW_DRAFT.md` を実数差し替え用テンプレとして使う。

## 次フェーズ継続後にまず見る数値
- 予約主導線:
  `select_counseling_cta` / `select_counseling_cta_hero` / `select_counseling_cta_support` / `select_counseling_cta_pricing` / `select_counseling_cta_final` / `select_counseling_cta_pdf_primary`
- 到達確認:
  `view_hero_section` / `view_support_cta` / `view_pricing_section` / `view_final_cta` / `view_pdf_section`
- PDF補助導線:
  `select_pdf_cta` / `select_pdf_cta_hero_secondary` / `select_pdf_cta_footer_nav` / `start_pdf_form` / `submit_pdf_form`
- 補助確認:
  TimeRex 側件数 / FormSubmit メール件数 / メール内の `utm_*` / `pdf_entry_point` / `source_page`

## 現時点の注意点
- LP側計測で分かるのは、主に `LP上の反応` と `離脱仮説` までじゃ。
- TimeRex 側の最終予約完了数は、LPイベントだけでは完全には追えない。
- `submit_pdf_form` は reCAPTCHA 前の送信着手なので、最終的な PDF 到達は FormSubmit メール件数や実動作確認と合わせて解釈する。
- `CLIENT_WEEK1_MEASUREMENT_REVIEW_DRAFT.md` は、次フェーズ継続合意後に使うテンプレとして保持する。
- 初回案件分の請求と継続案件の提案は、混ぜずに扱う前提で進める。

## Day045の完了条件
- 初回案件クローズと請求確定の事実が `day045` に反映されている。
- 次フェーズ整理案を作るための参照先と論点が明確になっている。
- 継続合意後に使うレビュー共有テンプレが保持されている。
- 次回着手者が、`次フェーズ整理案の作成` から迷わず再開できる状態になっている。

## 主な参照ファイル
- `/Users/yuuki/Works/lp-100/day044/README.md`
- `/Users/yuuki/Works/lp-100/day044/CLIENT_FEEDBACK_TRACKER.md`
- `/Users/yuuki/Works/lp-100/day044/MEASUREMENT_SHARE_TEMPLATE.md`
- `/Users/yuuki/Works/lp-100/day045/CLIENT_NEXT_PHASE_PROPOSAL_ACK_SEND.md`
- `/Users/yuuki/Works/lp-100/day045/CLIENT_WEEK1_MEASUREMENT_REVIEW_DRAFT.md`
- `/Users/yuuki/Works/lp-100/day045/CLIENT_FEEDBACK_TRACKER.md`
- `/Users/yuuki/Works/lp-100/day045/PORTFOLIO_WORKLOG.md`
- `/Users/yuuki/Works/lp-100/estimate/2026-03-10_ESTIMATE_DRAFT.md`
