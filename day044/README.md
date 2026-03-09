# Day044 - Day043作業の翌日引き継ぎ（2026-03-10開始予定）

## 現在地（2026-03-09終了時点）
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
- 現行の予約CTAは `.js-reservation-link` が5か所あり、クリック時イベントは GA4 `select_counseling_cta` / Meta `SelectCounselingCTA` に集約される。
- ただし現在は `event_label: "reservation_link"` の1種類のみで、FV / 中間 / 下部CTAのどこで押されたかは切り分けられない。
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

## UTM / GA4 / Meta の最小復旧範囲
1. ページ読み込み時に `gtag/js` / GA4 `collect` / `fbevents.js` が出ること。
2. 予約CTA押下時に TimeRex 側へ UTM が引き継がれること。
3. 予約CTA押下時に LP元タブで追加の GA4 `collect` / Meta `tr` / `trigger` が出ること。
4. PDF導線は `reCAPTCHA` / 案内メール / PDF表示が成立していれば最低限OKとする。
5. 現時点では、PDF送信時の JS 側 `generate_lead` / Meta `Lead` までは必須にしない。
6. スクロール計測、FAQ計測、PDF詳細イベント、完了イベント最適化は Phase3 へ送る。

## Day044でやること（最優先）
1. `LP_BEHAVIOR_CORE.js` と HTML正本を見て、予約CTA計測の現状仕様を整理する。
2. 無料カウンセリング予約までの離脱ポイント把握に、CTA位置別の切り分けが必要かを判断する。
3. PDF導線がどう機能しているかを見るための最低限指標を定義する。
4. クライアントへ後日返す「数値傾向 / つまずきポイント / 次アクション」の簡易共有フォーマットを決める。
5. PDF詳細イベント、FAQ計測、UI微調整のうち、Phase3送りにするものを明文化する。
6. FV本文圧縮 / 中間CTA余白 / PDF注記は、新しい表示不具合が出ない限り保留のままにする。

## 明日最初の最短手順（2026-03-10）
1. `/Users/yuuki/Works/lp-100/day044/README.md` を開く。
2. `/Users/yuuki/Works/lp-100/day044/PHASE2_EXECUTION_PLAN.md` を開く。
3. `/Users/yuuki/Works/lp-100/day044/PHASE2_PHASE3_RESTART_BACKLOG.md` を開く。
4. `/Users/yuuki/Works/lp-100/day044/CLIENT_FEEDBACK_TRACKER.md` を開く。
5. `LP_BEHAVIOR_CORE.js` と `TOP_PAGE_CUSTOM_HTML_TEMPLATE_HIGH_PRIORITY_FIX.html` を開く。
6. 予約までの離脱ポイント把握と PDF導線機能確認に必要な指標の洗い出しから着手する。

## Day044の主な参照ファイル
- クライアント返信トラッカー:
  `/Users/yuuki/Works/lp-100/day044/CLIENT_FEEDBACK_TRACKER.md`
- 次フェーズ方針受領への返信案:
  `/Users/yuuki/Works/lp-100/day044/CLIENT_PHASE2_DIRECTION_ACK_SEND.md`
- Phase2 / Phase3 再開バックログ:
  `/Users/yuuki/Works/lp-100/day044/PHASE2_PHASE3_RESTART_BACKLOG.md`
- Phase2 着手計画:
  `/Users/yuuki/Works/lp-100/day044/PHASE2_EXECUTION_PLAN.md`
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
