# Day044 - Day043作業の翌日引き継ぎ（2026-03-10開始）

## 現在地（2026-03-10確認後）
- 公開URL `https://yuki-freelife.com/lp-review/` は継続公開中。
- `LP_CONFIG_INLINE.js` / `LP_BEHAVIOR_CORE.js` / `GA4_LOADER.js` / `META_PIXEL_LOADER.js` の4本を 2026-03-09 に WordPress へ配信済み。
- 公開表示に崩れや導線異常は出ていない。
- PDF導線は 2026-03-09 に正常動作を再確認済み。
  - PDFボタン押下後に `reCAPTCHA` 表示
  - 案内メール到達
  - PDF表示
- DevTools の `Console` では `window.LP_CONFIG` / `window.gtag` / `window.fbq` の初期化を確認済み。
- `Network` ではページ読み込み時の `gtag/js?id=G-CQB0QSMF7F` / GA4 `collect` / `fbevents.js` を確認済み。
- 予約CTA押下後の TimeRex 側URLは、2026-03-09 に
  `https://timerex.net/s/bodymake_tokyo_yuta?utm_source=test&utm_medium=manual&utm_campaign=day042`
  となり、UTM引き継ぎは確認済み。
- 2026-03-09 の CTAクリック確認で、LP元タブの `Network` 上に追加の GA4 `collect` / Meta `tr` / `trigger` 通信を確認済み。
- 2026-03-10 のクライアント返信で、次フェーズは予約導線の計測整理優先で進めてよい旨を再確認した。
- クライアントは、無料カウンセリング予約までの動きの中で「どこで離脱しやすいか」と「PDF導線がどう機能しているか」を見たい意向を示している。
- クライアントは、計測整理後に数値傾向とユーザーのつまずきポイントを簡潔に共有してほしい意向を示している。
- 2026-03-10 に `day044` の HTML / `LP_BEHAVIOR_CORE.js` を WordPress へ反映し、公開URLで確認した。
- 予約CTAは `.js-reservation-link` が5か所あり、`select_counseling_cta` と位置別イベント `select_counseling_cta_<location>` の両方を確認済み。
- PDF導線では、`select_pdf_cta_<entry_point>`、`start_pdf_form`、`submit_pdf_form` を公開URLで確認済み。
- `Request payload` では `cta_location`、`pdf_entry_point`、`utm_*` の引き継ぎを確認済み。
- `source_page` は日別の `day040_lp_pdf` から、公開ページ基準の `lp_review_pdf` へ補正済み。
- その前提で、最小復旧範囲は「ページ読込計測」「予約CTAの UTM 引き継ぎ」「予約CTAクリック計測」「PDF導線の実動作維持」までとする。
- `day044/CLIENT_PHASE2_DIRECTION_ACK_SEND.md` は、方針受領への返信が未送付ならそのまま使える状態。

## Day043で完了したこと
- 4本のJSをインデントありの通常ファイル名へ整理し、WordPress へ配信した。
- 前回の不具合だった `LP_BEHAVIOR_CORE` による PDFフォーム submit 横取りは再発しないことを確認した。
- PDF導線の `reCAPTCHA` / 案内メール / PDF表示まで復旧確認した。
- DevTools 上で、設定オブジェクトと GA4 / Meta ローダーの初期化を確認した。
- 予約CTAの遷移先 TimeRex URL へ UTM が引き継がれることを確認した。
- 予約CTAクリック時の GA4 / Meta 追加通信確認を完了した。
- PDF導線を補助導線として定義した。
- クライアントから、次フェーズは予約導線の計測整理優先で進めてよい旨を受領した。

## Day044で決めてから着手すること
1. 予約CTAを主導線、PDF導線を補助導線として扱う。
2. 無料カウンセリング予約までの離脱ポイントを把握するため、予約CTA計測は「総クリック数」だけで足りるか、CTA位置別の切り分けが必要かを決める。
3. PDF導線がどう機能しているかを見るため、どの指標を最低限押さえるかを決める。
4. クライアントへ返す簡易共有フォーマットを、数値傾向 / 想定ボトルネック / 次アクションの3点で定義する。
5. PDF詳細イベントは Phase3 に送るか、この時点で明文化する。

## Day044で開始したこと（2026-03-10）
1. 5か所の予約CTAに `data-cta-location` を付け、GA4 の集約イベント `select_counseling_cta` に加えて、位置別イベント `select_counseling_cta_<location>` をローカル正本へ追加した。
2. `view_hero_section` / `view_support_cta` / `view_pricing_section` / `view_final_cta` / `view_pdf_section` を追加し、どこまで読まれたかの最低限把握をできる形にした。
3. `select_pdf_cta` / `select_pdf_cta_<entry_point>` / `start_pdf_form` / `submit_pdf_form` を追加し、PDF導線の入口と送信着手を見られるようにした。
4. PDFフォームに `utm_*` / `pdf_entry_point` / `source_page=lp_review_pdf` を保持する hidden を追加し、FormSubmit 側メールでも流入文脈を拾える形にした。
5. クライアントへ返す数値共有の叩き台として `day044/MEASUREMENT_SHARE_TEMPLATE.md` を追加した。

## Day044で確認完了したこと（2026-03-10）
1. テストURL `?utm_source=test&utm_medium=manual&utm_campaign=day044` で公開ページを再確認した。
2. 予約CTAごとに `select_counseling_cta` と位置別イベント `select_counseling_cta_<location>` を確認した。
3. Hero / Footer の PDF入口で `select_pdf_cta` と入口別イベントを確認した。
4. PDFフォームで `start_pdf_form` / `submit_pdf_form`、`reCAPTCHA`、案内メール、PDF表示まで確認した。
5. クライアント共有準備として、計測確認完了の返信文面を追加した。

## UTM / GA4 / Meta の最小復旧範囲
1. ページ読み込み時に `gtag/js` / GA4 `collect` / `fbevents.js` が出ること。
2. 予約CTA押下時に TimeRex 側へ UTM が引き継がれること。
3. 予約CTA押下時に LP元タブで追加の GA4 `collect` / Meta `tr` / `trigger` が出ること。
4. PDF導線は `reCAPTCHA` / 案内メール / PDF表示が成立していれば最低限OKとする。
5. 現時点では、PDF送信時の JS 側 `generate_lead` / Meta `Lead` までは必須にしない。
6. スクロール計測、FAQ計測、PDF詳細イベント、完了イベント最適化は Phase3 へ送る。

## Day044でやること（最優先）
1. `MEASUREMENT_SHARE_TEMPLATE.md` を基準に、クライアントへ返す数値共有フォーマットを確定する。
2. 運用開始後に位置別CTAの内訳と `view_*` 系イベントが十分な粒度かを見直す。
3. PDF詳細イベント、FAQ計測、UI微調整のうち、Phase3送りにするものを明文化する。
4. FV本文圧縮 / 中間CTA余白 / PDF注記は、新しい表示不具合が出ない限り保留のままにする。

## このあと最初の最短手順（2026-03-10）
1. `/Users/yuuki/Works/lp-100/day044/README.md` を開く。
2. `/Users/yuuki/Works/lp-100/day044/PHASE2_EXECUTION_PLAN.md` を開く。
3. `/Users/yuuki/Works/lp-100/day044/PHASE2_PHASE3_RESTART_BACKLOG.md` を開く。
4. `/Users/yuuki/Works/lp-100/day044/MEASUREMENT_SHARE_TEMPLATE.md` を開く。
5. `/Users/yuuki/Works/lp-100/day044/CLIENT_FEEDBACK_TRACKER.md` を開く。
6. `LP_BEHAVIOR_CORE.js` と `TOP_PAGE_CUSTOM_HTML_TEMPLATE_HIGH_PRIORITY_FIX.html` を開き、追加イベントの確認手順を固める。

## Day044の主な参照ファイル
- クライアント返信トラッカー:
  `/Users/yuuki/Works/lp-100/day044/CLIENT_FEEDBACK_TRACKER.md`
- 次フェーズ方針受領への返信案:
  `/Users/yuuki/Works/lp-100/day044/CLIENT_PHASE2_DIRECTION_ACK_SEND.md`
- 計測確認完了の返信案:
  `/Users/yuuki/Works/lp-100/day044/CLIENT_MEASUREMENT_CHECK_DONE_SEND.md`
- Phase2 / Phase3 再開バックログ:
  `/Users/yuuki/Works/lp-100/day044/PHASE2_PHASE3_RESTART_BACKLOG.md`
- Phase2 着手計画:
  `/Users/yuuki/Works/lp-100/day044/PHASE2_EXECUTION_PLAN.md`
- 計測共有テンプレート:
  `/Users/yuuki/Works/lp-100/day044/MEASUREMENT_SHARE_TEMPLATE.md`
- WordPress全文貼り替え用の現行正本:
  `/Users/yuuki/Works/lp-100/day044/TOP_PAGE_CUSTOM_HTML_TEMPLATE_HIGH_PRIORITY_FIX.html`
  `/Users/yuuki/Works/lp-100/day044/WP_LAYOUT_SHIFT_FIX_HIGH_PRIORITY.css`
- PDFフォーム差し替え補助:
  `/Users/yuuki/Works/lp-100/day044/PDF_FORM_RECAPTCHA_NOTE_OWNER_EMAIL.html`
  `/Users/yuuki/Works/lp-100/day044/WORDPRESS_PDF_FORM_HOTFIX_STEPS.md`
- Phase2投入候補JS:
  `/Users/yuuki/Works/lp-100/day044/LP_CONFIG_INLINE.js`
  `/Users/yuuki/Works/lp-100/day044/LP_BEHAVIOR_CORE.js`
  `/Users/yuuki/Works/lp-100/day044/GA4_LOADER.js`
  `/Users/yuuki/Works/lp-100/day044/META_PIXEL_LOADER.js`

## 修正依頼が来た場合の優先順
1. 公開阻害（リンク切れ、フォーム不達、表示崩れ）
2. PDF導線の不達・送信停滞
3. スマホ視認性（余白、文字詰まり、CTA見落とし）
4. 計測・機能拡張（Phase2 / Phase3）
