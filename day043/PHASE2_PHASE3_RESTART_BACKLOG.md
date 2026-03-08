# Day043 - Phase2 / Phase3 再開バックログ

## 再開条件
- クライアントの公開品質OK受領後に、新しい Blocker が出ていないこと。
- WordPress へ配信した4本のJSで、公開表示に崩れが出ていないこと。
- PDF導線が `reCAPTCHA` / メール / PDF まで再度成立すること。
- 予約CTAの TimeRex 遷移先へ UTM が引き継がれること。
- 計測再開を進めても、公開中LPの見た目と主要導線を崩さないと判断できること。

## Phase2 優先候補
1. 予約CTAクリック直後の GA4 `collect` / Meta `tr` 追加通信を確認
2. UTM / GA4 / Meta の最小復旧範囲を確定
3. PDF導線の役割定義（無料相談の前段階か、ライトユーザー入口か）を確定
4. FAQ 開閉を戻すか、常時表示を維持するか最終判断
5. ファーストビュー本文とCTA間隔の追加微調整方針を決める
6. PDFフォーム送信前注記を常設するか判断する

## Phase3 優先候補
1. CTA クリックや PDF 導線の詳細イベント計測
2. フォーム導線の摩擦改善
3. 表示微調整や追加改善の反映
4. 中間CTA余白の最終微調整

## 判断メモ
- `Simple Custom CSS and JS` によるコード注入経路は確保済みで、PDF導線の復旧確認も完了した。
- 2026-03-09 の確認では、DevTools `Console` で `window.LP_CONFIG` / `window.gtag` / `window.fbq` を確認済み。
- 2026-03-09 の `Network` では、ページ読み込み時の `gtag/js` / GA4 `collect` / `fbevents.js` を確認済み。
- 2026-03-09 の TimeRex 側URLでは、`utm_campaign=day042` 付きで UTM 引き継ぎを確認済み。
- 未確認なのは、予約CTAクリック直後に LP元タブで追加 `collect` / `tr` が出るかどうかだけ。
- PDF導線が再度止まる場合は、`LP_BEHAVIOR_CORE` の submit 処理か `LP_CONFIG` の送信先前提が残っていないかを先に疑う。
- 現行の native `FormSubmit` 構成では、PDF送信時の JS 側 `generate_lead` / Meta `Lead` が出なくても即NGとはしない。
- 計測系は、初回公開の安定性を崩さない範囲で段階的に戻す。
- FAQ 開閉は、クライアント要望が明確に出た場合のみ優先度を上げる。
- 2026-03-06のクライアント返信では、公開品質はOK。FV本文圧縮 / 中間CTA余白 / PDFフォーム注記は「改善候補」として扱う。
- 2026-03-10 は、詳細イベントや追加改善より先に予約CTAクリック計測の確認を済ませる。
