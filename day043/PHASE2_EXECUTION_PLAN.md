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
- 未確認なのは、予約CTAクリック直後に LP元タブの `Network` へ追加 `collect` / `tr` が出るかどうか。
- 現行のPDFフォームは native `FormSubmit` + `reCAPTCHA` 構成のため、PDF送信時に JS 側 `generate_lead` や Meta `Lead` が出なくても現時点では異常と断定しない。

## Phase2 の目的
- 初回公開の安定性を崩さずに、予約CTAクリック時の最小計測確認を完了する。
- UTM / GA4 / Meta の最小復旧範囲を確定し、Phase3へ不要な持ち越しを減らす。
- PDF導線の役割を明文化し、今後のコピー修正やイベント設計の基準を作る。

## Day043 の着手順
1. `?utm_source=test&utm_medium=manual&utm_campaign=day043` 付きURLで公開ページを開く。
2. `Network` の `Preserve log` を ON にし、一覧をクリアしてからページを再読み込みする。
3. `gtag/js` / GA4 `collect` / `fbevents.js` が出ることを確認する。
4. 予約CTAを1回押し、TimeRex 側URLへ `utm_source=test&utm_medium=manual&utm_campaign=day043` が引き継がれることを確認する。
5. LP元タブへ戻り、クリック直後の追加 `collect` / `tr` 通信が出るか確認する。
6. クリック計測の確認結果をもとに、PDF導線の役割を1文で定義し、最小復旧範囲を確定する。
7. その後に FV本文圧縮 / 中間CTA余白 / PDF注記の微調整優先度を再評価する。

## 着手前の判断ポイント
- JS注入経路と PDF導線復旧は確認できたため、Day043の最大リスクは「クリック計測が本当に乗っているか」の一点に寄っている。
- 予約CTAとPDF導線の正常性を維持したまま GA4 / Meta を確認する必要がある。
- `Network` の下側ペインは詳細表示であり、新規通信そのものは上側の一覧に増える。
- PDF導線の役割を決める前に詳細イベントまで広げると、設計をやり直す可能性がある。
- そのため、Day043は `予約CTAクリック計測確認` -> `役割定義` -> `詳細イベント判断` の順で進める。

## Day043 時点の推奨順
1. 予約CTAクリック時の GA4 / Meta 追加通信確認
2. PDF導線の役割定義
3. 表示微調整の優先順見直し
4. 詳細イベント計測の着手判断
