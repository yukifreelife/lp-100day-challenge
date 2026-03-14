# Day011 - KAZE PILATES STUDIO（デモ）

## ラベル（検索用）
**Labels:** `B2C` `local` `wellness` `pilates` `trial` `reservation` `leadgen` `demo` `day010-derivative`

lp:audience=B2C  
lp:goal=leadgen  
lp:industry=wellness/pilates  
lp:objective=初回体験予約（デモ）  
lp:offer=初回体験50分（デモ）  
lp:template=day010-derivative  
lp:status=demo  

---

## 今日の成果
- Day010（B2Bの無料診断LP）をベースに、**ピラティスの初回体験予約LP（デモ）へ差分変換**（構造は維持し、文言・フォーム・メタ情報中心で差し替え）
- **CTA文言をページ内で完全統一**（「初回体験を予約する（デモ）」に統一）し、導線のブレを削減
- **SP追従CTA（固定ボタン）を追加**して、スクロール中でも予約導線へ戻れる状態にした
- OGP/description/twitter など **head情報をピラティス内容へ整合**させた
- **faviconが表示されない問題を解決**（48×48にして `favicon.ico` 化＋HTML参照ファイル名も更新）

## 作業時間（合計目標: 120分）
※今日はプロジェクトコンテキスト整理に時間を使ったため合計は多め
| 作業 | 分 |
|---|---:|
| プロジェクトコンテキスト作成・整理 | 145 |
| day011 差分適用（CopilotでHTML/CSSを分割して指示）/favicon調整（表示されない原因切り分け → ico化で解決） | 257 |
| README作成 | 10 |

## 詰まり（1つ）
- 画像は出るのに **faviconだけ表示されない**。検証ツールでエラーが出ないため原因が見えにくかった。
  - 対応：faviconを **48×48にして `favicon.ico` に変更**し、HTMLの参照ファイル名も合わせたところ表示できた（キャッシュの影響も疑い、更新手順を意識）。

## 学び（1行）
- 差分適用は「HTML用プロンプト」「CSS用プロンプト」に分けると崩れにくい。faviconはPNG巨大より **小サイズ＋ico** が安定。

## 良かったこと（1つ）
- 共有資産の `../assets/css/base.css` を触らず、**day011/style.css側の追記で完結**できた（他dayへ影響しない運用）。

## 次回やること
- GitHub Pagesを設定して表示確認（特に `favicon.ico` / `ogp` / `hero` のパス）
- SPで追従CTAが被る場合は `.site-footer` の `padding-bottom` を微調整
- 余裕があれば：料金表（都度/回数/月額）比較、インストラクター紹介カード、アクセス要素を追加
- LP_CATALOG（一覧）に day011 を追記

---

## 公開・法務メモ（最低限）
- このLPは **架空案件（デモ）** です
- フォームは **ダミー送信**（送信先なし／個人情報を保存・送信しない）
- 画像・フォントは **公開可能（商用利用可）のもののみ** 使用（不明な素材は差し替える）

## 素材出典 / 生成AI利用
- 画像：`hero-media.png` / favicon素材（※出典が不明な場合は公開前に要確認・差し替え）
- AI利用：
  - ChatGPT：構成/コピー案/レビュー観点の作成
  - GitHub Copilot：HTML/CSS差分適用
