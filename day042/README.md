# Day042 - Day041作業の引き継ぎ（2026-03-08着手）

## 最新状況（2026-03-09）
- `LP_CONFIG_INLINE.js` / `LP_BEHAVIOR_CORE.js` / `GA4_LOADER.js` / `META_PIXEL_LOADER.js` の4本を WordPress へ配信済み。
- 公開URLの表示は問題なし。
- 2026-03-09 の再検証で、PDF導線は正常動作を確認済み。
  - PDFボタン押下後に `reCAPTCHA` 表示
  - 案内メール到達
  - PDF表示
- 前回の不具合だった `LP_BEHAVIOR_CORE` による submit 横取りは、今回の配信後は再発していない。
- Day042 の次の最優先は、`?utm_source=test&utm_medium=manual&utm_campaign=day042` 付きURLで予約CTA / PDF導線 / GA4 / Meta の最小確認を行うこと。

## 開始時点（2026-03-08）
- 公開URL `https://yuki-freelife.com/lp-review/` は継続公開中。
- 公開品質OKの状態は維持しているが、Phase2 のJS再導入途中で PDF導線のみ再確認が未完了。
- `Simple Custom CSS and JS` によるJS注入経路は確認済み。
  - テストJS保存成功
  - 公開URL上で `JS OK` バナーDOM確認済み
- 予約CTAは JS投入後も正常に開く。
- PDF導線は、JS投入後に `送信中...` のまま完了しない事象を 2026-03-08 に確認した。
- 原因は、現在の WordPress 側HTMLが native `FormSubmit` + `reCAPTCHA` 前提である一方、旧 `LP_BEHAVIOR_CORE` が submit を横取りしていたこと。
- `/Users/yuuki/Works/lp-100/day042/LP_BEHAVIOR_CORE.js` は、この不整合を避けるよう 2026-03-08 時点で修正済み。
- Day042 の開始時点で最優先なのは、WordPress 側 `lp-behavior-core` を修正版へ差し替え、PDF導線を再テストすること。

## Day041で完了したこと
- `day041` を self-contained に整理し、Phase2候補ファイルを同ディレクトリへ集約した。
- `Simple Custom CSS and JS` が、`WPCode Lite` の代替JS注入経路として使えることを確認した。
- JS投入後の公開ページ表示と予約CTA遷移を確認した。
- PDF導線不整合の原因を切り分け、`LP_BEHAVIOR_CORE.js` の修正版を用意した。

## Day042でやること（最優先）
1. `?utm_source=test&utm_medium=manual&utm_campaign=day042` 付きURLで予約CTA / PDF導線 / 計測の最小確認を行う。
2. `GA4_LOADER.js` と `META_PIXEL_LOADER.js` が公開ページ上で意図どおり動いているか確認する。
3. PDF導線の役割を1文で定義し、無料相談前段かライト入口かを明文化する。
4. その結果をもとに、UTM / GA4 / Meta の最小復旧範囲を確定する。
5. その後に FV本文圧縮 / 中間CTA余白 / PDF注記の微調整優先度を見直す。

## 次に確認するファイル（2026-03-09）
1. `/Users/yuuki/Works/lp-100/day042/README.md` を開く。
2. `/Users/yuuki/Works/lp-100/day042/LP_BEHAVIOR_CORE.js` を開く。
3. `/Users/yuuki/Works/lp-100/day042/PHASE2_EXECUTION_PLAN.md` を開く。
4. `/Users/yuuki/Works/lp-100/day042/PHASE2_PHASE3_RESTART_BACKLOG.md` を開く。
5. `/Users/yuuki/Works/lp-100/day042/CLIENT_FEEDBACK_TRACKER.md` を開く。
6. `?utm_source=test&utm_medium=manual&utm_campaign=day042` 付きURLで、予約CTA / PDF導線 / GA4 / Meta の最小確認から着手する。

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
  `/Users/yuuki/Works/lp-100/day042/LP_CONFIG_INLINE.js`
  `/Users/yuuki/Works/lp-100/day042/LP_BEHAVIOR_CORE.js`
  `/Users/yuuki/Works/lp-100/day042/GA4_LOADER.js`
  `/Users/yuuki/Works/lp-100/day042/META_PIXEL_LOADER.js`

## 修正依頼が来た場合の優先順
1. 公開阻害（リンク切れ、フォーム不達、表示崩れ）
2. PDF導線の不達・送信停滞
3. スマホ視認性（余白、文字詰まり、CTA見落とし）
4. 計測・機能拡張（Phase2 / Phase3）
