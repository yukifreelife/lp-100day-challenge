3か月ボディメイク伴走LP（day032）運用ガイド

【1】この納品の前提
- HTML/CSS/JSの静的サイトです（CMSなし）。
- 文言・画像・リンク・計測IDは、主に index.html と script.js で更新できます。

【2】更新箇所一覧
1) 文章（見出し・本文）
- ファイル: index.html
- 例: FV見出し、料金説明、FAQ文言、PDF案内文

2) 画像
- ファイル配置: images/optimized/
- 参照元: index.html / styles.css
- 置き換え時は、同じファイル名を上書きするとレイアウトを保ちやすいです。

3) リンク
- ファイル: index.html
- 主なリンク:
  - 無料カウンセリング: class=\"js-reservation-link\"
  - PDFダウンロード: ./downloads/food-checklist.pdf
  - 法務ページ: privacy.html / tokushoho.html

4) 計測ID・送信先
- ファイル: index.html（window.LP_CONFIG）
- 変更項目:
  - reservationUrl（TimeRex URL）
  - leadEndpoint（フォーム送信先）
  - gaMeasurementId（GA4）
  - metaPixelId（Meta Pixel）
  - pdfDownloadUrl（PDFのパス）

【3】TimeRex計測について
- 現状LPで取得しているもの:
  - 予約ボタンクリック（GA4: select_counseling_cta）
  - 予約ボタンクリック（Meta: SelectCounselingCTA）
- 現状LP単体で未取得のもの:
  - TimeRex側の「予約完了」確定イベント

予約完了計測を行うには、TimeRex側の設定が必要です（例: 完了後リダイレクト先の指定、または外部連携）。

【4】ローカル確認方法
1. day032ディレクトリでサーバー起動:
   python3 -m http.server 8032
2. ブラウザで確認:
   http://localhost:8032/index.html

【5】公開後運用チェックリスト

■ TimeRex側設定
- [ ] 予約URL（reservationUrl）が最新か確認
- [ ] 予約枠（火・木 10:00-18:00 / 土 9:00-12:00）が運用どおりか確認
- [ ] キャンセル文言を統一
      前日18:00まで変更可。当日キャンセルは原則不可（やむを得ない事情はご相談ください）。
- [ ] 自動リマインドメール（予約確定時 / 前日24時間前）が有効か確認
- [ ] 予約完了計測を実施する場合、TimeRex側で完了ページ連携（リダイレクト or 外部連携）を設定

■ GA4 / Meta ID確認
- [ ] index.html の window.LP_CONFIG を確認
      gaMeasurementId / metaPixelId / reservationUrl / leadEndpoint
- [ ] GA4リアルタイムで以下イベント受信を確認
      page_view, select_counseling_cta, generate_lead
- [ ] Meta Pixel Helperで PageView / SelectCounselingCTA / Lead 発火を確認
- [ ] テスト流入（UTM付きURL）で、予約ボタン押下とPDFフォーム送信を1回ずつ検証

■ UTM運用
- [ ] 広告・SNS出稿URLに以下パラメータを付与
      utm_source / utm_medium / utm_campaign / utm_content / utm_term
- [ ] LP流入後、予約リンクにUTMが引き継がれることを確認
- [ ] PDFフォーム hidden項目（utm_*）にUTMが入ることを確認
- [ ] 命名ルールを固定（例: source=meta, medium=cpc, campaign=2026spring_lp）
