# Day028 - 不動産売却・無料査定LP（机上査定/訪問査定）

## 想定顧客
- 首都圏でマンション・戸建て・土地の売却を検討中の個人
- すぐ売るか迷っており、まずは相場感と手残りを確認したい層
- 電話連絡の頻度や営業圧に不安があり、連絡方法を選んで相談したい層

## CV設計意図
- 最終CV: 無料査定フォーム送信（`#cta`）
- サブCV: 査定方法比較からのフォーム到達（`#compare` -> `#cta`）
- 複数セクションにCTAを配置し、全導線を最終フォームへ収束
- Heroと比較セクションで「机上査定/訪問査定」の選択を先に明確化し、入力前の迷いを減らす
- デモ環境のため電話CTAは強導線にせず、非機能導線による離脱リスクを回避

## セクション構造
1. ヘッダー（ロゴ/ページ内ナビ/フォームCTA）
2. FV（価値訴求/信頼要素/主CTA）
3. 売却前の悩み
4. 選ばれる理由
5. 査定方法比較（机上査定 vs 訪問査定）
6. 売却までの流れ
7. 対応エリア/対応物件
8. 実績・信頼情報（注記付き）
9. FAQ
10. 最終CTA（査定フォーム）
11. フッター（会社情報/免許情報/プライバシー）

## フォーム項目設計理由
- 必須項目は最小化（物件種別/所在地/売却希望時期/氏名/連絡方法/同意）し、初回離脱を抑える
- 面積/築年数は任意入力にして、情報不足でも一次相談を送信できる設計に変更
- 売却希望時期: 提案の優先順位と連絡速度を調整するため
- 氏名/メール/電話: 連絡手段の複線化
- 連絡希望方法に応じて必須条件を可変化
  - メール希望: メール必須
  - 電話希望: 電話必須
  - どちらでも可: メールまたは電話のどちらか必須
- 同意チェック: 個人情報取り扱いの明示
- 査定額非保証の注記: 誤認防止と法務配慮

## 実装チェック項目
- a11y
  - `skip-link` 実装
  - 見出し階層の維持（`h1`は1つ）
  - フォームは全項目に`label`を付与
  - 送信状態は`role="status"` + `aria-live="polite"`で通知
- 送信処理
  - Formspree埋め込み方式（`action="https://formspree.io/f/your_form_id"`）
  - `fetch + FormData` で送信し、成功時のみ成功メッセージを表示（擬似成功をしない）
  - `_gotcha`のハニーポットで簡易スパム対策

## フォームサービス設定（Formspree）
1. Formspreeでフォームを作成し、フォームIDを取得
2. `/Users/yuuki/Works/lp-100/day028/index.html` のフォーム`action`を差し替え
   - 例: `https://formspree.io/f/abcdwxyz`
3. テスト送信で受信を確認
- SEO
  - `title` / `description` / OGP基本タグを設定
  - `RealEstateAgent` のJSON-LDを追加
- レスポンシブ
  - PC/SPで2カラムを1カラムへ切替
  - SP固定CTA（フォーム）を常時表示
  - アンカー遷移時のヘッダー被りをJSで補正

## イベント計測（改善運用向け）
- CTA: `cta_click`
- フォーム開始: `form_start`, `form_field_start`, `form_field_blur`
- フォーム選択系: `property_type_selected`, `prefecture_selected`, `city_selected`, `sale_timing_selected`, `contact_method_selected`
- バリデーション: `form_validation_error`（`error_count` / `error_fields` / `error_codes`）, `form_field_error`
- 送信: `form_submit_attempt`, `form_submit_success`, `form_submit_failed`（`duration_ms`含む）

## ファイル
- `/Users/yuuki/Works/lp-100/day028/index.html`
- `/Users/yuuki/Works/lp-100/day028/styles.css`
- `/Users/yuuki/Works/lp-100/day028/script.js`
- `/Users/yuuki/Works/lp-100/day028/favicon.icn`（16/32/48サイズ内包）
- `/Users/yuuki/Works/lp-100/day028/favicon.ico`（ブラウザ互換用）
- `/Users/yuuki/Works/lp-100/day028/favicon-source.png`（元デザイン）

## 無料素材（アクセント画像）
- Heroカード（高層マンション外観）
  - [Unsplash - 高層マンション群](https://unsplash.com/photos/8rPud8Y2Dbo)
- 査定方法比較（机上査定側）
  - [Pexels - 空室の室内写真](https://www.pexels.com/photo/spacious-unfurnished-minimalist-apartment-interior-33197279/)
- 査定方法比較（訪問査定側）
  - [Pexels - 鍵を持つ担当者](https://www.pexels.com/photo/real-estate-agent-holding-new-home-keys-31015267/)
- 対応エリア（住宅街俯瞰）
  - [Unsplash - 住宅街の空撮](https://unsplash.com/photos/7-6XvB4vg3Q)
- 対応物件/信頼情報（集合住宅外観・都市景観）
  - [Unsplash - 集合住宅外観](https://unsplash.com/photos/qkoP3LPuUJE)
  - [Unsplash - 都市のマンション群](https://unsplash.com/photos/VewwJJse7V4)
- 実績・信頼情報セクション
  - [Pexels - 都市景観（高層ビル）](https://www.pexels.com/photo/architecture-buildings-business-city-323780/)

## 素材ライセンス
- [Unsplash License](https://unsplash.com/license)
- [Pexels License](https://www.pexels.com/license/)

## 運用メモ
- 画像はすべて`/Users/yuuki/Works/lp-100/day028/images/`にローカル保存済み。
- 形式は`WebP`で統一し、表示比率に合わせてトリミング/リサイズ済み（容量最適化）。
