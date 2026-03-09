# Day043 - Phase2 着手計画

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

## Phase2 の目的
- 初回公開の安定性を崩さずに、予約CTAクリック時の最小計測確認を完了する。
- UTM / GA4 / Meta の最小復旧範囲を確定し、Phase3へ不要な持ち越しを減らす。
- PDF導線の役割を明文化し、今後のコピー修正やイベント設計の基準を作る。

## Day043 で確定した定義
- 予約CTAを主導線、PDF導線を補助導線として扱う。
- PDF導線は、無料相談へすぐ進まないユーザーに先に価値提供し、後日の予約行動へつなぐ補助導線とする。

## UTM / GA4 / Meta の最小復旧範囲
1. ページ読み込み時の `gtag/js` / GA4 `collect` / `fbevents.js`
2. 予約CTA押下時の TimeRex 側 UTM 引き継ぎ
3. 予約CTA押下時の LP元タブ上 GA4 `collect` / Meta `tr` / `trigger`
4. PDF導線の `reCAPTCHA` / 案内メール / PDF表示の成立

## Day043 の残作業
1. FV本文圧縮 / 中間CTA余白 / PDF注記の微調整優先度を再評価する。
2. PDF詳細イベントや完了イベント最適化を Phase3 に送るか最終判断する。

## 着手前の判断ポイント
- JS注入経路、PDF導線復旧、予約CTAクリック計測確認、役割定義までは完了した。
- 現時点では、予約CTAとPDF導線の正常性を崩さずに、最小復旧範囲だけで止める方が安全。
- PDF導線の役割を決める前に詳細イベントまで広げると、設計をやり直す可能性がある。
- そのため、Day043は `最小復旧範囲維持` -> `表示微調整判断` -> `詳細イベント判断` の順で進める。

## Day043 時点の推奨順
1. 表示微調整の優先順見直し
2. 詳細イベント計測の着手判断
3. Phase3送り項目の明文化
