# day099 アナリティクス/計測評価

## 使用スキル

- `/Users/yuuki/.agents/skills/lp-analytics/SKILL.md`
- 責任範囲: GA4基本設定、CVトラッキング、電話クリック、CTAクリック、資料ダウンロード、スクロール深度計測、プライバシー/読み込み方式

## 評価対象

- 対象ディレクトリ: `/Users/yuuki/Works/lp-100/day099`
- 対象URL: `http://127.0.0.1:5173/#home`
- 対象ルート: `#home`, `#products`, `#product-liquid-chalk`, `#starter-kit`, `#cart`
- 制約: day099 のファイル、生成モック、実ブラウザ表示のみを根拠に評価。アプリ修正なし。

## 使用した証拠

- `day099/index.html`
  - `<head>` には基本メタと title のみで、GA4/gtag.js の読み込みなし。
  - `body` は React root と `/src/main.jsx` のみ。
- `day099/src/App.jsx`
  - hash ルーティングは `hashchange` で同期されるが、ルート変更時の page_view 送信処理なし。
  - ヘッダー、ナビ、カート、モバイル固定CTAはいずれも通常リンクで、計測属性/イベント送信なし。
- `day099/src/components/UI.jsx`
  - 共通 `Button` と `StickyPurchaseBar` は CTA の主要生成元だが、`data-tracking` や click 計測処理なし。
- `day099/src/pages/ProductDetail.jsx`, `day099/src/pages/StarterKit.jsx`, `day099/src/pages/Cart.jsx`
  - 商品詳細/スターターセット/カート導線は存在するが、購入・カート追加・購入手続き CTA の計測なし。
- `day099/docs/evaluations/ORCHESTRATOR_BROWSER_BASELINE.md`
  - 実ブラウザ DOM で主要 CTA、商品リンク、カートリンクが表示されていることを確認。
  - Console warn/error count は 1 件。React key 重複エラーで、アナリティクス実装の証跡ではない。
- `day099/docs/evaluations/ORCHESTRATOR_ROUTE_SNAPSHOTS.json`
  - `home`, `products`, `product-liquid-chalk`, `starter-kit`, `cart` の実ブラウザ DOM とスクリーンショットが取得済み。
- `day099/qa-screenshots/evaluation-browseruse-*.png`
  - 各対象ルートの表示証拠として参照。
- 検索結果
  - `day099/src` と `day099/index.html` に `gtag`, `dataLayer`, `analytics`, `GA4`, `data-tracking`, `scroll_depth`, `contact_submit`, `phone_click`, `cta_click`, `file_download`, `tel:`, `.pdf`, `.zip` は検出されなかった。

## チェックリスト結果

| 項目 | 結果 | 根拠 |
|---|---:|---|
| GA4測定IDを設定済み | NG | ユーザーから実ID未提供。`G-PLACEHOLDER` も未設定。 |
| gtag.jsをhead内に実装 | NG | `day099/index.html` の head に GA4 script なし。 |
| IPアドレス anonymize を有効化 | NG | `gtag('config', ..., { anonymize_ip: true })` 相当なし。 |
| カスタムディメンションを設定 | NG | `lp_theme`, `lp_category`, `lp_version` 相当なし。 |
| 問い合わせフォームにトラッキング属性を追加 | 該当要素なし/NG | FAQ/Legal に問い合わせ文言はあるが、実フォームなし。将来フォーム追加時の計測属性も未定義。 |
| 電話番号クリックを計測 | 該当要素なし/NG | `tel:` リンクなし。将来追加時の計測処理も未定義。 |
| CTAクリックを計測 | NG | 商品/セット/カート/購入手続き CTA はあるが、`data-tracking="cta"` と `cta_click` なし。 |
| スクロール深度（25/50/75/90/100%）を計測 | NG | scroll listener と `scroll_depth` 送信なし。 |
| 資料ダウンロードを計測（該当の場合） | 該当要素なし | `.pdf` / `.zip` リンクなし。 |

## Findings

### [High] GA4 基本設定が未導入

- 重大度: High
- 根拠: `day099/index.html` の head に GA4/gtag.js がなく、`day099/src` 内にも `gtag`/`dataLayer` が存在しない。
- 影響: ページビュー、CV、スクロール、CTA など全ての行動計測が本番/検証ともに取得できない。
- 補足: GA4 実IDは未提供なので、実ID未設定自体も改善項目として扱う。

### [High] hash ルーティングの page_view が計測されない

- 重大度: High
- 根拠: `day099/src/App.jsx` は `hashchange` で `currentRoute` を切り替えるが、ルート変更時の `page_view` 送信処理がない。
- 影響: `#home`, `#products`, `#product-liquid-chalk`, `#starter-kit`, `#cart` の閲覧差分を GA4 側で把握できない。

### [High] 購入/カート系 CTA の CV 計測がない

- 重大度: High
- 根拠: 実ブラウザ DOM とソース上で「スターターセットを購入する」「液体チョークをカートに入れる」「セットをカートに入れる」「購入手続きへ進む」などの CTA は存在するが、`data-tracking="cta"` や `gtag('event', 'cta_click')` がない。
- 影響: EC型LPで最重要の購入意欲導線を比較・改善できない。

### [Medium] カート内操作が計測されない

- 重大度: Medium
- 根拠: `day099/src/pages/Cart.jsx` に削除、数量増減、クーポン入力/適用、購入手続き CTA があるが、イベント計測なし。
- 影響: 離脱前行動、数量変更、クーポン利用意図などの改善材料が残らない。

### [Medium] スクロール深度計測が未導入

- 重大度: Medium
- 根拠: `scroll_depth` 送信処理、および 25/50/75/90/100% の深度管理がない。
- 影響: LPのどの位置まで読まれているか、CTA到達前に離脱しているかを判断できない。

### [Low] 問い合わせ/電話/資料DLの計測対象が未整理

- 重大度: Low
- 根拠: `tel:`、フォーム、`.pdf`、`.zip` は day099 内に存在しない。一方で FAQ/Legal には問い合わせ文言があり、将来の導線追加余地がある。
- 影響: 現時点の欠落ではないが、将来要素追加時に計測設計が漏れやすい。

## 改善提案

1. GA4 実ID受領後、`index.html` の head に `gtag.js` を追加する。実IDが未定の間は `G-PLACEHOLDER` を使い、差し替え箇所を明示する。
2. `anonymize_ip: true`、`send_page_view: false`、`lp_theme`、`lp_category`、`lp_version` を含む初期設定を入れる。
3. hash route 変更時に `page_view` を送信し、`page_location`, `page_path`, `page_title`, `route_name` を route ごとに渡す。
4. 共通 `Button` または CTA 定義側で `data-tracking="cta"`、`data-position`、`data-type` を付与できるようにする。
5. 主要CVを少なくとも次のイベントに分ける。
   - `cta_click`: 通常CTA、ナビCTA、固定モバイルCTA
   - `add_to_cart`: 商品詳細/スターターセットから `#cart` に進む操作
   - `begin_checkout`: カートの「購入手続きへ進む」
   - `cart_quantity_change`: 数量増減
   - `coupon_apply`: クーポン適用
6. スクロール深度 25/50/75/90/100% を一度だけ送信する throttle 付き処理を追加する。
7. 将来のフォーム、電話、PDF/ZIP が追加された場合に備え、`contact_submit`, `phone_click`, `file_download` のハンドラも同じ analytics モジュールに集約する。

## スコア

- 18 / 100

内訳:

- GA4基本設定: 0 / 25
- page_view/ルート計測: 0 / 15
- CTA/CV計測: 7 / 30
  - CTA自体は実ブラウザ上に存在するが、計測実装はない。
- スクロール/エンゲージメント計測: 0 / 15
- 計測対象整理と拡張性: 6 / 10
  - 購買導線は明確だが、計測設計は未実装。
- 証拠確認性: 5 / 5
  - オーケストレーター証拠とソース確認により、未導入状態は明確。

## 未確認項目

- GA4 DebugView でのイベント到達確認: GA4 実ID未提供かつ実装なしのため未確認。
- ネットワークリクエストでの `collect` 送信確認: 実装なしのため未確認。
- 追加 Browser Use 操作によるクリックイベント検証: 既存証拠で未導入判定が可能なため実施せず。
- 本番ビルド後の計測確認: `dist` も参照したが、実装自体がないため未確認扱い。
