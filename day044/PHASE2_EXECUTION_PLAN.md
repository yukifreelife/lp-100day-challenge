# Day044 - Phase2 着手計画

## 現在の前提
- 公開URLの主要導線は、2026-03-06 時点で一通り動作確認済みだった。
  - 予約CTA -> TimeRex
  - PDFフォーム送信 -> 確認画面（ロボットチェック） -> PDF表示
  - 案内メール到達
  - 法務リンク到達
- クライアントからは 2026-03-06 に公開品質OKを受領済み。
- `Simple Custom CSS and JS` によるJS注入経路は 2026-03-08 に確認済み。
- 2026-03-09 に4本のJSを WordPress へ配信済みで、再配信後の公開表示は問題なし。
- PDF導線は 2026-03-09 の再テストで `reCAPTCHA` / 案内メール / PDF表示まで復旧確認済み。
- DevTools の `Console` では `window.LP_CONFIG` / `window.gtag` / `window.fbq` を確認済み。
- `Network` ではページ読み込み時の `gtag/js` / GA4 `collect` / `fbevents.js` を確認済み。
- 予約CTAの TimeRex 側URLへの UTM 引き継ぎは、`utm_campaign=day042` のテストURLで確認済み。
- 2026-03-09 の CTAクリック確認で、LP元タブの `Network` へ追加 `collect` / `tr` / `trigger` が出ることも確認済み。
- 現行のPDFフォームは native `FormSubmit` + `reCAPTCHA` 構成のため、PDF送信時に JS 側 `generate_lead` や Meta `Lead` が出なくても現時点では異常と断定しない。
- 2026-03-09 のクライアント返信で、次フェーズは予約導線の計測整理を優先し、見た目微調整は後置きで問題ない認識を受領した。
- クライアントは、計測整理後に数値傾向とユーザーのつまずきポイントを簡潔に共有してほしい意向を示している。
- 2026-03-10 のクライアント返信で、無料カウンセリング予約までの動きの中で、どこで離脱しやすいかを見たい意向を明示した。
- 2026-03-10 のクライアント返信で、PDF導線がどう機能しているかも見たい意向を明示した。
- 公開中の予約CTAは HTML 上に5か所あり、`.js-reservation-link` で一括バインドされている。
- 公開中実装のイベントは GA4 `select_counseling_cta` / Meta `SelectCounselingCTA` に集約され、`event_label` も `reservation_link` の1種類のみ。
- そのため、公開中実装だけでは CTA総クリック数は見えるが、どの位置のCTAが押されたかまでは切り分けられない。
- 2026-03-10 の `day044` では、CTA位置別イベント、PDF入口イベント、PDFフォーム開始/送信イベント、hidden UTM 引き継ぎまでを反映し、公開URLで確認した。

## Phase2 の目的
- 初回公開の安定性を崩さずに、予約導線の計測整理を優先して進める。
- 無料カウンセリング予約までの流れの中で、どこで離脱しやすいかを把握できる状態を作る。
- PDF導線が補助導線として機能しているかを判断できる状態を作る。
- クライアントへ返す簡易共有内容を、数値傾向 / 想定ボトルネック / 次アクションの3点で整理できる状態を作る。
- CTA位置別計測が本当に必要かを見極め、Phase2 と Phase3 の境界を明確にする。

## Day044 開始時点で確定している定義
- 予約CTAを主導線、PDF導線を補助導線として扱う。
- PDF導線は、無料相談へすぐ進まないユーザーに先に価値提供し、後日の予約行動へつなぐ補助導線とする。

## Day044で反映・確認した最小追加計測
- 集約イベントは維持したまま、`select_counseling_cta_<location>` を追加した。
- `view_hero_section` / `view_support_cta` / `view_pricing_section` / `view_final_cta` / `view_pdf_section` を追加した。
- `select_pdf_cta_<entry_point>` / `start_pdf_form` / `submit_pdf_form` を追加した。
- PDFフォームへ `utm_*` / `pdf_entry_point` / `source_page=lp_review_pdf` を追加した。
- 共有テンプレートは `day044/MEASUREMENT_SHARE_TEMPLATE.md` に切り出した。

## UTM / GA4 / Meta の最小復旧範囲
1. ページ読み込み時の `gtag/js` / GA4 `collect` / `fbevents.js`
2. 予約CTA押下時の TimeRex 側 UTM 引き継ぎ
3. 予約CTA押下時の LP元タブ上 GA4 `collect` / Meta `tr` / `trigger`
4. PDF導線の `reCAPTCHA` / 案内メール / PDF表示の成立

## Day044 の残作業
1. `MEASUREMENT_SHARE_TEMPLATE.md` を元に、クライアント共有フォーマットを確定する。
2. 位置別CTAと `view_*` イベントで、離脱ポイント把握に十分かを運用しながら判断する。
3. `submit_pdf_form` と FormSubmit メール件数の見比べ方を運用メモへ落とし込む。
4. PDF詳細イベントや完了イベント最適化を Phase3 に送るか最終判断する。
5. UI微調整は、新しい表示問題が出ない限り保留のままとする。

## 着手前の判断ポイント
- JS注入経路、PDF導線復旧、予約CTAクリック計測確認、役割定義までは完了した。
- クライアントは UI微調整より計測整理を優先しており、ここで見た目調整へ寄るのは優先度がずれる。
- 現在の予約CTAイベントでは CTA総量は追えるが、位置別のボトルネック分析には足りない可能性がある。
- PDF導線についても、現状は実動作確認までで止まっており、補助導線としての機能度合いを見せる指標は未定義。
- ただし追加イベントを急いで増やす前に、クライアントへ何を返すかを決めてから必要最小限で足す方が安全。
- そのため、Day044は `共有項目定義` -> `現行実装で足りるか判断` -> `必要最小限の追加計測判断` の順で進める。

## Day044 時点の推奨順
1. クライアントへ返す計測共有項目の定義
2. 現行CTA計測で予約までの離脱ポイント把握に足りるかの判断
3. PDF導線機能確認に必要な指標の定義
4. CTA位置別計測の要否判断
5. Phase3送り項目の明文化
