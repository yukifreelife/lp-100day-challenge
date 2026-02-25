# Day031 Chat Resume

- ユーザー提供のFigma生成LPスクショを基準に再構築依頼
- `day031` で静的LPを実装（全主要セクション）
- 画像レイアウトをスクショ比率へ再調整
- 4枚写真の利用を反映（01/02/03/04）
- 画像最適化を実施
  - `images/optimized/*.webp` を追加
  - `srcset/sizes` + `image-set` に変更

## 要件再確認と初稿共有向け改善
- クライアント確定要件を `REQUIREMENTS_CONFIRMED.md` に整理
- CV導線改善
  - 予約CTAを `.js-reservation-link` で一元管理
  - UTM保持・予約URLへの付与
- PDF導線改善
  - hidden UTMフィールド追加
  - 送信後サンクスUI + PDFダウンロードリンク追加
  - 送信先が未設定の場合のモック送信挙動を実装
- 計測基盤
  - `window.LP_CONFIG` から GA4 / Meta Pixel を任意読込
  - CTAクリック・PDF送信イベント発火
- 法務導線
  - `privacy.html`
  - `tokushoho.html`
  - フッターからリンク
- FAQアクセシビリティ
  - `aria-controls` / `aria-labelledby` / `role=region` 付与

## 公開前に必要な本番値
- `window.LP_CONFIG.reservationUrl`
- `window.LP_CONFIG.leadEndpoint`
- `window.LP_CONFIG.gaMeasurementId`
- `window.LP_CONFIG.metaPixelId`
