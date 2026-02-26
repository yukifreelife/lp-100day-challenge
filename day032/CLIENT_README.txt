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
