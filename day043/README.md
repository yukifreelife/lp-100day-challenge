# Day043 - Day042作業の引き継ぎ（2026-03-09着手）

## 現在地（2026-03-09開始時点）
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
- Day043 では、PDF導線を「無料相談へすぐ進まないユーザーに先に価値提供し、後日の予約行動へつなぐ補助導線」と定義する。
- その前提で、最小復旧範囲は「ページ読込計測」「予約CTAの UTM 引き継ぎ」「予約CTAクリック計測」「PDF導線の実動作維持」までとする。

## Day042で完了したこと
- 4本のJSをインデントありの通常ファイル名へ整理し、WordPress へ配信した。
- 前回の不具合だった `LP_BEHAVIOR_CORE` による PDFフォーム submit 横取りは再発しないことを確認した。
- PDF導線の `reCAPTCHA` / 案内メール / PDF表示まで復旧確認した。
- DevTools 上で、設定オブジェクトと GA4 / Meta ローダーの初期化を確認した。
- 予約CTAの遷移先 TimeRex URL へ UTM が引き継がれることを確認した。

## Day043で決めたこと
1. 予約CTAを主導線、PDF導線を補助導線として扱う。
2. PDF導線は、無料相談へすぐ進まないユーザー向けの先行価値提供とする。
3. 最小復旧範囲は、予約CTA中心の計測と PDF導線の実動作維持までに留める。

## UTM / GA4 / Meta の最小復旧範囲
1. ページ読み込み時に `gtag/js` / GA4 `collect` / `fbevents.js` が出ること。
2. 予約CTA押下時に TimeRex 側へ UTM が引き継がれること。
3. 予約CTA押下時に LP元タブで追加の GA4 `collect` / Meta `tr` / `trigger` が出ること。
4. PDF導線は `reCAPTCHA` / 案内メール / PDF表示が成立していれば最低限OKとする。
5. 現時点では、PDF送信時の JS 側 `generate_lead` / Meta `Lead` までは必須にしない。
6. スクロール計測、FAQ計測、PDF詳細イベント、完了イベント最適化は Phase3 へ送る。

## Day043で残っていること
1. FV本文圧縮 / 中間CTA余白 / PDF注記の微調整優先度を見直す。
2. 詳細イベント計測へ進むかどうかを Phase3 判断として切り分ける。

## 今日最初の最短手順（2026-03-09）
1. `/Users/yuuki/Works/lp-100/day043/README.md` を開く。
2. `/Users/yuuki/Works/lp-100/day043/PHASE2_EXECUTION_PLAN.md` を開く。
3. `/Users/yuuki/Works/lp-100/day043/PHASE2_PHASE3_RESTART_BACKLOG.md` を開く。
4. `/Users/yuuki/Works/lp-100/day043/CLIENT_FEEDBACK_TRACKER.md` を開く。
5. PDF導線を補助導線として扱う前提で、最小復旧範囲を確認する。
6. そのうえで、FV本文圧縮 / 中間CTA余白 / PDF注記の優先度を見直す。

## Day043の主な参照ファイル
- クライアント返信トラッカー:
  `/Users/yuuki/Works/lp-100/day043/CLIENT_FEEDBACK_TRACKER.md`
- Phase2 / Phase3 再開バックログ:
  `/Users/yuuki/Works/lp-100/day043/PHASE2_PHASE3_RESTART_BACKLOG.md`
- Phase2 着手計画:
  `/Users/yuuki/Works/lp-100/day043/PHASE2_EXECUTION_PLAN.md`
- WordPress全文貼り替え用の現行正本:
  `/Users/yuuki/Works/lp-100/day043/TOP_PAGE_CUSTOM_HTML_TEMPLATE_HIGH_PRIORITY_FIX.html`
  `/Users/yuuki/Works/lp-100/day043/WP_LAYOUT_SHIFT_FIX_HIGH_PRIORITY.css`
- PDFフォーム差し替え補助:
  `/Users/yuuki/Works/lp-100/day043/PDF_FORM_RECAPTCHA_NOTE_OWNER_EMAIL.html`
  `/Users/yuuki/Works/lp-100/day043/WORDPRESS_PDF_FORM_HOTFIX_STEPS.md`
- Phase2投入候補JS:
  `/Users/yuuki/Works/lp-100/day043/LP_CONFIG_INLINE.js`
  `/Users/yuuki/Works/lp-100/day043/LP_BEHAVIOR_CORE.js`
  `/Users/yuuki/Works/lp-100/day043/GA4_LOADER.js`
  `/Users/yuuki/Works/lp-100/day043/META_PIXEL_LOADER.js`

## 修正依頼が来た場合の優先順
1. 公開阻害（リンク切れ、フォーム不達、表示崩れ）
2. PDF導線の不達・送信停滞
3. スマホ視認性（余白、文字詰まり、CTA見落とし）
4. 計測・機能拡張（Phase2 / Phase3）
