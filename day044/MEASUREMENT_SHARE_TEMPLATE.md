# Day044 - 計測簡易共有テンプレート

## 目的
- クライアントへ返す内容を `数値傾向 / 想定ボトルネック / 次アクション` の3点で短く揃える。
- 予約主導線と PDF補助導線を、公開安定性を崩さない最小イベントで見る。

## まず見る数値
- 予約主導線:
  `select_counseling_cta`（総数） / `select_counseling_cta_hero` / `select_counseling_cta_support` / `select_counseling_cta_pricing` / `select_counseling_cta_final` / `select_counseling_cta_pdf_primary`
- 到達確認:
  `view_hero_section` / `view_support_cta` / `view_pricing_section` / `view_final_cta` / `view_pdf_section`
- PDF補助導線:
  `select_pdf_cta`（総数） / `select_pdf_cta_hero_secondary` / `select_pdf_cta_footer_nav` / `start_pdf_form` / `submit_pdf_form`
- 補助確認:
  TimeRex 予約件数、FormSubmit メール件数、メール内の `utm_*` / `pdf_entry_point` / `source_page`

## 共有フォーマット
### 1. 数値傾向
- 例: `view_pricing_section` までは見られているが、`select_counseling_cta_pricing` が弱い
- 例: `view_pdf_section` に対して `start_pdf_form` が少なく、PDFカード内で止まっている

### 2. 想定ボトルネック
- 例: 料金確認後の CTA 押下が弱く、価格理解は進んでも予約の後押しが足りない
- 例: PDFに興味はあるが、フォーム入力前に離脱している

### 3. 次アクション
- 例: 反応が弱い CTA ブロックのコピー調整
- 例: PDFカード上部の安心材料や所要時間の補足追加
- 例: 必要なら Phase3 で FAQ や詳細イベントを追加

## 読み方メモ
- `select_counseling_cta` は総量確認用。位置別は `_hero` などの suffix 付きイベントで見る。
- `submit_pdf_form` は reCAPTCHA 前の送信着手。最終完了は FormSubmit メール件数や PDF表示確認と合わせて判断する。
- Meta 側は引き続き予約CTAの集約確認を主目的にし、詳細な離脱分析は GA4 側中心で見る。
