# Day045 - 次回案件の標準プロセス実行プレイブック

## 位置づけ
- このファイルは
  [NEXT_PROJECT_STANDARD_PROCESS.md](/Users/yuuki/Works/lp-100/day045/NEXT_PROJECT_STANDARD_PROCESS.md)
  を、次回案件でそのまま実行できる粒度に落とした運用版じゃ。
- 目的は `判断の早さ` ではなく `判断のブレを減らすこと` じゃ。

## 前提
- 対象案件:
  小規模LP制作案件
- 想定範囲:
  `ヒアリング -> 制作 -> 公開 -> 軽微修正 -> 計測整備 -> 初回レビュー -> 請求 -> クローズ`
- 原則:
  - 正本は1つ
  - スコープは分離
  - 公開前に仮設定ゼロ
  - レビューは証跡付き
  - 継続提案は成果指標付き

## 実行フロー

| Phase | 目的 | 入力 | 出力 | ゲート | 止める条件 |
| --- | --- | --- | --- | --- | --- |
| 0. Intake | 何をどこまで請けるか確定する | 相談内容、予算、期限、主要CV | `PROJECT_INTAKE_CHECKLIST.md` `FUNNEL_BOTTLENECK_MAP.md` | LPが解く課題とLP外課題が分かれる | 最終成果の定義が曖昧 |
| 1. Architecture | 納品方式と公開方式を確定する | CMS情報、予約導線、フォーム要件 | `DELIVERY_ARCHITECTURE_DECISION.md` | HTML/CSS/JS/タグ注入経路が確定 | CMS制約が未検証 |
| 2. Quote | 価格と境界を固定する | 要件、公開方式、希望運用 | `ESTIMATE_SCOPE_MATRIX.md` `CLIENT_PROPOSAL_SEND.md` | 見積 line item が分かれている | WordPress移行やレビューが本体に混ざる |
| 3. Strategy | 訴求と証拠を固める | 競合、実績、顧客像、断り理由 | `VALUE_PROPOSITION_REVIEW.md` | 誰に何をどう証明するか明確 | 差別化が弱いままデザインに入る |
| 4. Build | LPを制作する | 構成、原稿、素材、法務文言 | `current/` 正本一式 | 主要導線が仮でも通る | 正本が複数できる |
| 5. Pre-launch | 仮設定を消し切る | 本番URL、予約URL、計測ID | `PRE_LAUNCH_CHECKLIST.md` | 本番依存値が全確定 | 作業者メールや仮URLが残る |
| 6. Release | 公開して確認可能にする | 反映権限、本番環境 | `PUBLIC_RELEASE_EXECUTION_STEPS.md` | 内容閲覧、予約、PDF、法務リンクが動く | 公開不能ブロッカー未解消 |
| 7. Stabilize | 公開直後の事故を潰す | 公開URL、クライアント確認 | `CLIENT_FEEDBACK_TRACKER.md` | Blocker/Highが収束 | 計測や改善を先に広げる |
| 8. Measurement | 最小計測を入れる | GA4/Meta権限、フォーム仕様 | `MEASUREMENT_EXECUTION_PLAN.md` `MEASUREMENT_VALIDATION_LOG.md` | イベントが意図どおり動く | 完了未確認のまま計測完了扱い |
| 9. Review | 証跡付きで中間/最終レビューする | GA4、TimeRex、FormSubmit、流入要因 | `REVIEW_EVIDENCE_ARCHIVE.md` `CLIENT_MEASUREMENT_REVIEW_FINAL.md` | 事実/仮説/次アクションが証跡付き | サンプル値だけで納品扱い |
| 10. Close | 請求とクローズを終える | 受領、請求条件 | `CLIENT_INVOICE_SEND.md` `PROJECT_CLOSE_LOG.md` | 受領、請求、入金確認が完了 | 請求前に追加対応が流れ込む |
| 11. Retainer | 継続化する | レビュー結果、改善優先度 | `RETAINER_SCOPE_MATRIX.md` | 範囲・頻度・指標が固定 | 継続内容が曖昧 |

## Phaseごとの実行ルール

### Phase 0. Intake
- 必ず聞くこと:
  - 主CVは何か
  - 副CVは何か
  - いま詰まっているのは `流入 / LP / 予約 / 面談 / 申込` のどこか
  - 断られる理由は何か
  - 予算上限はいくらか
  - 公開はどこに置くか
  - クライアント自身は何を編集したいか
- 作るもの:
  - `PROJECT_INTAKE_CHECKLIST.md`
  - `FUNNEL_BOTTLENECK_MAP.md`
- ここで判断すること:
  - LPで解ける問題か
  - LP以外も改善対象に入るか

### Phase 1. Architecture
- 必ず検証すること:
  - HTMLをどこへ入れるか
  - CSSをどこへ入れるか
  - JSをどこへ入れるか
  - 計測タグをどこへ入れるか
  - フォームは native か async か
  - 予約完了との接続は取れるか
- ここで未確定なら言ってはいけないこと:
  - `管理画面で簡単に直せます`
  - `公開後すぐ分析できます`

### Phase 2. Quote
- 見積の標準 line item:
  1. LP制作
  2. CMS移行 / 公開支援
  3. 公開直後の軽微修正
  4. 計測整備
  5. 初回レビュー
  6. 継続改善
- 見積の原則:
  - `含む / 含まない` をセットで書く
  - `軽微修正` は期間か回数を固定する
  - WordPress移行はLP制作に含めない

### Phase 3. Strategy
- 必ず作る判断材料:
  - 主要ターゲット
  - 主要な不安
  - 信じてもらうための証拠
  - 競合と比べて残すべき違い
  - 高単価でも納得する理由
- ここで弱いと判断したら止めること:
  - 見た目を整える作業に先に入ること

### Phase 4. Build
- 正本ルール:
  - `current/` のみが正本
  - `logs/` は作業記録のみ
- 実装最低条件:
  - 主要CTAが押せる
  - PDF導線がつながる
  - 法務リンクがある
  - スマホで大崩れしない

### Phase 5. Pre-launch
- 公開前に必ず確認するもの:
  - 予約URL
  - PDF URL
  - フォーム受信先
  - 自動返信文
  - GA4 ID
  - Meta Pixel ID
  - 画像URL
  - クライアント所有アカウントか
- この状態なら公開禁止:
  - 作業者メールが受信先
  - 仮URLのまま
  - 本番で押せないCTAがある
  - クライアント所有権が未確定

### Phase 6. Release
- 公開優先 fallback を使ってよい条件:
  - JSが入らない
  - 一部計測がまだ入らない
  - ただし `予約` と `PDF` と `法務リンク` は通る
- 必ず残すもの:
  - 何を妥協したか
  - 何を後続で直すか
  - クライアントへどう説明したか

### Phase 7. Stabilize
- 直す優先度:
  1. Blocker
  2. High
  3. Medium
  4. Low
- このフェーズでやらないこと:
  - 新しい分析論点を増やす
  - 継続改善の議論を先に始める

### Phase 8. Measurement
- 最小計測:
  - CTA総数
  - CTA位置別
  - 主要セクション到達
  - PDF入口別
  - PDFフォーム開始
  - PDFフォーム送信着手
  - UTM保持
- 実装時の注意:
  - `送信着手` と `送信完了` を混同しない
  - native form を壊してまで計測を優先しない
  - LPイベントだけで予約完了を断定しない

### Phase 9. Review
- レビューの必須構成:
  - 数値の事実
  - そこから考えられる仮説
  - 次にやるとよさそうなこと
- 必須証跡:
  - GA4スクリーンショットまたはCSV
  - FormSubmit件数
  - TimeRex件数メモ
  - 外部流入要因メモ
- 可能なら持つもの:
  - 面談実施率
  - 申込率
  - 断り理由
- 改善案の返し方:
  1. 軽微修正
  2. 訴求修正
  3. 事業課題に踏み込む提案

### Phase 10. Close
- クローズ条件:
  - 納品物共有済み
  - クライアント受領済み
  - 請求送付済み
  - 入金確認済み
  - 最終返信済み
- クローズ後に残すもの:
  - `PROJECT_CLOSE_LOG.md`
  - `POSTMORTEM_AUDIT_REPORT.md`
  - 次回改善メモ

### Phase 11. Retainer
- 継続提案で必ず書くこと:
  - 何を見るか
  - どの頻度か
  - どの指標か
  - どこまで対応するか
- 標準3プラン:
  1. レビューのみ
  2. レビュー + 提案
  3. レビュー + 提案 + 実装

## 標準ファイルセット

### 必須
- `PROJECT_INTAKE_CHECKLIST.md`
- `FUNNEL_BOTTLENECK_MAP.md`
- `DELIVERY_ARCHITECTURE_DECISION.md`
- `ESTIMATE_SCOPE_MATRIX.md`
- `PRE_LAUNCH_CHECKLIST.md`
- `CLIENT_FEEDBACK_TRACKER.md`
- `MEASUREMENT_EXECUTION_PLAN.md`
- `MEASUREMENT_VALIDATION_LOG.md`
- `REVIEW_EVIDENCE_ARCHIVE.md`
- `PROJECT_CLOSE_LOG.md`

### 条件付き
- `VALUE_PROPOSITION_REVIEW.md`
- `IMPROVEMENT_OPTIONS_MATRIX.md`
- `RETAINER_SCOPE_MATRIX.md`

## 見積の標準基準

### LP制作
- 含む:
  構成、原稿支援、デザイン、実装、主要導線、法務整理
- 含まない:
  CMS移行、公開後レビュー、継続改善、広告運用

### CMS移行 / 公開支援
- 含む:
  本番反映、表示確認、主要導線確認
- 含まない:
  詳細イベント設計、継続分析、実装追加

### 計測整備
- 含む:
  最小イベント設計、実装、動作確認
- 含まない:
  長期分析、改善実装

### 初回レビュー
- 含む:
  一定期間の観測、仮説整理、次アクション提案、証跡保存
- 含まない:
  実装、継続伴走、広告最適化

## 標準の禁止事項
- 仮設定のまま公開する
- クライアント所有権が未確定のまま本番運用する
- 日別ディレクトリに正本を複製し続ける
- サンプル数値だけでレビュー納品する
- `LPだけで最終成果を改善できる` と断定する

## 次回案件開始時の最初の30分でやること
1. `PROJECT_INTAKE_CHECKLIST.md` を作る
2. `FUNNEL_BOTTLENECK_MAP.md` を作る
3. `DELIVERY_ARCHITECTURE_DECISION.md` を作る
4. `ESTIMATE_SCOPE_MATRIX.md` の line item を決める
5. `current/` を正本として切る

## 最終結論
- 次回案件では、`頑張って回す` のではなく `最初に崩れにくく設計する` ことが最重要じゃ。
- 特に
  - `LPが解く問題の範囲`
  - `本番運用責任の所在`
  - `レビュー価値を証明する証跡`
  の3つを先に固定すれば、今回の弱点はかなり潰せるのじゃ。
