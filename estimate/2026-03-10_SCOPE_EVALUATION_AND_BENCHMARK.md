# 2026-03-10 Scope Evaluation And Benchmark

## 目的

`Bodymake Yuta` 案件について、

- 受注当初にどこまでが初回案件だったか
- 初回クローズ後に、どこからが継続案件か
- 前回出した価格帯が第三者ベンチマークでも妥当か

を、公開相場と内部証跡の両方から整理する。

## 前提

これは公的鑑定ではなく、以下を使った第三者ベンチマーク評価じゃ。

- 業界メディアの相場記事
- マーケットプレイスの公開価格
- サービス提供会社の公開価格
- 本リポジトリ内の合意ログ

## 1. 初回案件の範囲

初回案件は、実務上は `LP制作 + 公開できる状態まで` を含むと判断する。

### 根拠

- 当初要件で `3週間以内公開`、`無料カウンセリング予約`、`無料PDF導線`、`GA4 / Meta / UTM 最低限実装` が明記されている。
  - [REQUIREMENTS_CONFIRMED.md](/Users/yuuki/Works/lp-100/day031/REQUIREMENTS_CONFIRMED.md#L3)
- こちらの約束事項でも、`LP構成/原稿`、`TimeRex導線`、`PDF導線`、`GA4/Meta/UTM設計`、`公開後に文言修正しやすい構成` を含めている。
  - [CLIENT_REQUESTS_AND_COMMITMENTS.md](/Users/yuuki/Works/lp-100/day031/CLIENT_REQUESTS_AND_COMMITMENTS.md#L40)
- 2026-02-27 に納品形態が `WordPress納品` に確定し、移行範囲は `LP1ページ、法務2ページ、PDF配布導線、計測設定維持` と整理されている。
  - [day033/README.md](/Users/yuuki/Works/lp-100/day033/README.md#L31)
- 2026-03-06 に `公開品質として問題なし` を受領している。
  - [day040/README.md](/Users/yuuki/Works/lp-100/day040/README.md#L3)

### 初回案件に含まれるもの

- LP構成、原稿、デザイン、実装
- TimeRex 予約導線
- PDF導線と配布導線
- 法務2ページ
- WordPress反映と公開前後の動作確認
- 公開直後の軽微修正

### 初回案件に含めない方が妥当なもの

- 詳細な UTM 引き継ぎ最適化
- GA4 / Meta の詳細イベント設計
- CTA位置別の計測最適化
- PDF導線の役割分析
- 公開後の数値レビューと改善伴走

## 2. 継続案件の切れ目

継続案件の切れ目は、2026-03-03 と 2026-03-06 の2段階で明確じゃ。

### 2026-03-03 の合意

初回公開では `UTM引き継ぎ` と `GA4 / Meta 詳細イベント` を外し、後続フェーズで戻すと合意している。

- [day037/README.md](/Users/yuuki/Works/lp-100/day037/README.md#L111)
- [handoff_log.md](/Users/yuuki/Works/lp-100/docs/handoff_log.md#L71)

### 2026-03-06 の状態

クライアントから `公開品質として問題なし` の判断を受領し、その後の課題は `計測タグ / PDF導線役割整理 / 微調整候補` として別フェーズ扱いになっている。

- [day040/README.md](/Users/yuuki/Works/lp-100/day040/README.md#L29)

したがって、現在の `day044` で進めている作業は、第三者視点でも `公開後の計測整備案件` として分離するのが妥当じゃ。

- [day044/README.md](/Users/yuuki/Works/lp-100/day044/README.md#L17)
- [day044/README.md](/Users/yuuki/Works/lp-100/day044/README.md#L45)

## 3. 第三者ベンチマークによる再評価

以下の金額は、公開相場から今回の実作業量へ引き寄せた推定じゃ。

| 案件単位 | 前回評価 | 第三者ベンチマーク再評価 | 判定 |
| --- | ---: | ---: | --- |
| LP制作・公開一式 | 40万〜70万円 | 45万〜80万円 | 前回はやや安めだが妥当 |
| 公開後の計測整備 | 8万〜18万円 | 10万〜20万円 | 前回は下限がやや安め |
| 初回データレビュー | 5万〜10万円 | 5万〜15万円 | 簡易版なら妥当 |
| 継続改善伴走 | 月10万〜20万円 | 月10万〜30万円 | 妥当〜やや安め |
| WordPress反映・公開代行 | 3万〜10万円 | 2万〜5万円（単純反映） / 5万〜10万円（検証込み） | 条件付きで妥当 |

## 4. 参考にした公開相場

### LP制作

- Web幹事の調査では、LP制作費は平均 `55.4万円`、中央値 `40.0万円` とされている。
  - https://web-kanji.com/posts/press-release-lp-market-price
- Web担当者Forum でも同じ調査内容が紹介されている。
  - https://webtan.impress.co.jp/n/2024/07/05/47298
- ランサーズの公開出品を見ると、LP制作の下限はかなり低いが、低価格帯はテンプレ寄り・簡易構成が中心になりやすい。
  - https://www.lancers.jp/menu/browse/graphics_design/landing_page_design

### WordPress反映・公開

- WordPress移行の下限サービスとして、`1サイト 14,080円` の公開価格がある。
  - https://www.colorfulbox.jp/option/wordpress/
- 別サービスでは `24,800円` の公開価格がある。
  - https://wordpress-express.com/

### GA4 / 計測整備

- GA4 Rescue の公開価格では、計測コード設置 `3万円`、CV設定 `5万円`、カスタム定義 `10万円`、データレイヤー整理 `15万円` となっている。
  - https://ga4.waca.or.jp/price/
- インフォネットでは、GA4導入支援が `15万円から` とされている。
  - https://webcom.e-infonet.jp/lp/ga

### LPO / 改善伴走

- お名前.com Business の LPO 相場記事では、単発 `5万〜20万円`、月額 `10万〜30万円` が目安として整理されている。
  - https://www.onamae.com/business/article/43200/

## 5. 結論

- 初回案件は `LP制作・公開一式` として一つの案件で成立している。
- 2026-03-06 以降の `計測整理・離脱分析準備` は、別案件または追加フェーズとして切るのが妥当じゃ。
- 前回の価格帯は大きくは外しておらぬが、第三者ベンチマークだと全体的に `少し安め` じゃ。
- 特に `初回制作一式` の市場価格は、実務上は `45万〜80万円` と見る方が自然じゃ。
