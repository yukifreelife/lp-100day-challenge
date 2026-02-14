# Day019 - 税務・節税相談LP（仮案件 / クラウドワークス想定）

## ラベル（検索用）
**Labels:** `B2B` `B2C` `tax` `consulting` `lp` `wordpress` `design` `image-optimization` `webp` `performance` `ai-generated` `codex` `staging` `password-protected`

lp:audience=会社員/個人事業主
lp:goal=問い合わせ（資料請求・初回相談）
lp:industry=税務/節税/コンサルティング
lp:objective=404解消＋本番運用整備
lp:offer=節税・減価償却の整理サポート（仮）
lp:template=ai-first
lp:status=mock-project
lp:env=staging-on-wordpress

---

## 今日の成果
- Day019の目的：SVGアイコン由来の404解消
- 実施内容：SVGアイコン（WPが拒否）を、WPメディア上のWebP参照へ置換して404を解消
- 使用したWPメディアURL（4つ）
  - https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/icon-compass.webp
  - https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/icon-checklist.webp
  - https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/icon-chat.webp
  - https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/icon-shield.webp
- 検証結果：WordPress検証環境でDevTools Network確認 → 404ゼロ／画像は全て200／表示崩れなし（アイコン表示も良好）

---
## 作業時間（合計目標: 120分）
| 作業 | 分 |
|---|---:|
| 置換対象の洗い出し/day019/index.htmlのSVGをPhotoshopでWebPへ変換/htmlのSVG参照をWebPへ変換/WP WebPを反映した内容へコード差し替え /DevTools検証（Network確認・表示崩れチェック） | 25 |
| README更新 | 15 |

---

## 作業時間（合計目標: 120分）
| 作業 | 分 |
|---|---:|
| 前日からの引き継ぎ | 5 |
| 404調査（SVGアイコン4点の特定）/PhotoshopでWebPアイコン作成（64×64 / 透過）/WPメディアへアップロード＋URL確定/day019/index.html の参照差し替え（SVG→WP WebP）/DevTools検証（404/200確認・表示崩れチェック） | 25 |
| README更新 | 10 |

---

## 詰まり（1つ）
- Photoshopでsvgの画像を歪ませずにWebPの64×64へ変換する方法がわからなかった。svgファイルをPhotoshopで開くときに画像のサイズを64×64にすれば歪まないことが分かった。

---

## 学び/注意（1行）
- WordPressはSVGを拒否しやすいので、検証環境ではWebP/PNG運用に寄せると安定して404を潰せる

---

## 良かったこと（1つ）
- 404の原因を「SVGアイコン」に絞り込めたことで、作業が最短ルートで完了した。

---

## 今日特に印象に残ったこと（思考メモ）
- 32px表示でも元画像を64pxで作ると、環境差（Retina等）でのシャープさが安定しやすい
- WP制約（SVG拒否）を前提に運用方針を決めると、実装・検証・修正がブレない
- 参照先URLをWPメディアに統一すると、404検知と差し替えの負荷が一気に下がる

---

## 今日整理できた「AI×LP制作×画像最適化」フロー（Day019版）
1. **ChatGPT**
   - 解決方針（SVG→WebP運用）と手順整理
2. **Photoshop**
   - SVGアイコンをWebP化（64×64 / 透過）
3. **WordPress**
   - メディアへアップロード、参照URL確定
4. **Codex**
   - HTML内の参照差し替え（SVG→WP WebP）
5. **DevTools**
   - 404検知 → 0確認、200 OK確認
6. **人間**
   - 表示崩れ最終チェック、README更新

---

## パフォーマンス改善ポイント（Day019まとめ）
- SVG参照による404を全て解消
- 参照先をWPメディアのWebPへ統一し、環境依存リスクを低減
- Network検証で「404ゼロ・画像200」を確認してクローズ

---

## 次回やること（Day020）
- faviconの扱いを整理（サイトアイコン設定で404ゼロを維持できるか確認）
- LP全体の最終表示チェック（SP/PC、主要ブラウザ）
- 公開用チェックリストの叩き台作成（404/OGP/フォーム/速度/アクセシビリティ）

---

## 公開・法務メモ（最低限）
- 本LPは **架空案件（デモ）**
- 実在の企業・商品・人物とは無関係
- フォームはダミー
- WordPress検証環境はパスワード保護

---

## 素材出典 / 生成AI利用
- AI利用：
  - ChatGPT：方針整理・手順化
  - Codex：HTML差分修正
- 画像：
  - WPメディアにアップロード済みのWebP（アイコン4点）を参照
- 最終判断・構成・運用整理は人間が実施

---

## AIチャット運用ルール
- day019構造は維持（構成変更禁止）
- ローカル正本主義
- 画像はWebP統一
- 参照は必ずDevTools確認
- 毎日chat_resume.mdで前提共有
``` :contentReference[oaicite:0]{index=0}
