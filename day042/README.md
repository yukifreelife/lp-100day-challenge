# Day042 - Day041作業の翌日引き継ぎ（2026-03-09開始予定）

## 現在地（2026-03-08終了時点）
- 公開URL `https://yuki-freelife.com/lp-review/` は継続公開中。
- 公開品質OKの状態は維持しているが、Phase2 のJS再導入途中で PDF導線のみ再確認が未完了。
- `Simple Custom CSS and JS` によるJS注入経路は確認済み。
  - テストJS保存成功
  - 公開URL上で `JS OK` バナーDOM確認済み
- 予約CTAは JS投入後も正常に開く。
- PDF導線は、JS投入後に `送信中...` のまま完了しない事象を 2026-03-08 に確認した。
- 原因は、現在の WordPress 側HTMLが native `FormSubmit` + `reCAPTCHA` 前提である一方、旧 `LP_BEHAVIOR_CORE` が submit を横取りしていたこと。
- `/Users/yuuki/Works/lp-100/day042/LP_BEHAVIOR_CORE_NO_INDENT.js` は、この不整合を避けるよう 2026-03-08 時点で修正済み。
- 次回の最優先は、WordPress 側 `lp-behavior-core` を修正版へ差し替え、PDF導線を再テストすること。

## Day041で完了したこと
- `day041` を self-contained に整理し、Phase2候補ファイルを同ディレクトリへ集約した。
- `Simple Custom CSS and JS` が、`WPCode Lite` の代替JS注入経路として使えることを確認した。
- JS投入後の公開ページ表示と予約CTA遷移を確認した。
- PDF導線不整合の原因を切り分け、`LP_BEHAVIOR_CORE_NO_INDENT.js` の修正版を用意した。

## Day042でやること（最優先）
1. WordPress の `カスタム CSS & JS` で `lp-behavior-core` を開く。
2. `/Users/yuuki/Works/lp-100/day042/LP_BEHAVIOR_CORE_NO_INDENT.js` の最新内容へ丸ごと差し替える。
3. 強制再読み込みまたはシークレットウィンドウで `https://yuki-freelife.com/lp-review/` を開く。
4. PDFフォーム送信後に、`reCAPTCHA` -> メール到達 -> PDF到達まで成立するか確認する。
5. PDF導線が復旧したら、`?utm_source=test&utm_medium=manual&utm_campaign=day042` 付きURLで予約CTA / PDF導線 / 計測の最小確認を行う。
6. その結果をもとに、PDF導線の役割と UTM / GA4 / Meta の最小復旧範囲を確定する。

## 次回開始時の最短手順（2026-03-09）
1. `/Users/yuuki/Works/lp-100/day042/LP_BEHAVIOR_CORE_NO_INDENT.js` を開く。
2. `/Users/yuuki/Works/lp-100/day042/PHASE2_EXECUTION_PLAN.md` を開く。
3. `/Users/yuuki/Works/lp-100/day042/PHASE2_PHASE3_RESTART_BACKLOG.md` を開く。
4. `/Users/yuuki/Works/lp-100/day042/CLIENT_FEEDBACK_TRACKER.md` を開く。
5. WordPress 側 `lp-behavior-core` を差し替えた上で、PDF導線の再テストから着手する。

## Day042の主な参照ファイル
- クライアント返信トラッカー:
  `/Users/yuuki/Works/lp-100/day042/CLIENT_FEEDBACK_TRACKER.md`
- Phase2 / Phase3 再開バックログ:
  `/Users/yuuki/Works/lp-100/day042/PHASE2_PHASE3_RESTART_BACKLOG.md`
- Phase2 着手計画:
  `/Users/yuuki/Works/lp-100/day042/PHASE2_EXECUTION_PLAN.md`
- WordPress全文貼り替え用の現行正本:
  `/Users/yuuki/Works/lp-100/day042/TOP_PAGE_CUSTOM_HTML_TEMPLATE_HIGH_PRIORITY_FIX.html`
  `/Users/yuuki/Works/lp-100/day042/WP_LAYOUT_SHIFT_FIX_HIGH_PRIORITY.css`
- PDFフォーム差し替え補助:
  `/Users/yuuki/Works/lp-100/day042/PDF_FORM_RECAPTCHA_NOTE_OWNER_EMAIL.html`
  `/Users/yuuki/Works/lp-100/day042/WORDPRESS_PDF_FORM_HOTFIX_STEPS.md`
- Phase2投入候補JS:
  `/Users/yuuki/Works/lp-100/day042/LP_CONFIG_INLINE_NO_INDENT.js`
  `/Users/yuuki/Works/lp-100/day042/LP_BEHAVIOR_CORE_NO_INDENT.js`
  `/Users/yuuki/Works/lp-100/day042/GA4_LOADER_NO_INDENT.js`
  `/Users/yuuki/Works/lp-100/day042/META_PIXEL_LOADER_NO_INDENT.js`

## 修正依頼が来た場合の優先順
1. 公開阻害（リンク切れ、フォーム不達、表示崩れ）
2. PDF導線の不達・送信停滞
3. スマホ視認性（余白、文字詰まり、CTA見落とし）
4. 計測・機能拡張（Phase2 / Phase3）
