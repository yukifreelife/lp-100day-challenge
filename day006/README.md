# Day006 - BtoB SaaS（デモ予約LP） ReportFlow（デモ）

## 今日の成果
- day005（物販LP）をコピーして、BtoB SaaS「レポート自動化ツール（デモ）」のLPに差し替え完了
- CTA文言を全箇所で統一（PC/SP・ヘッダー/ヒーロー/Offer/CTA）
- FAQ・Offer・フォーム（button化）をSaaS向けに修正し、デモ表記を整理
- Hero画像はAdobe Expressで作成→CSSの背景画像として反映（表示できる形に調整）
- Featuresのアイコン（SVG）はCSSのmask-image方式でSaaSっぽいアイコンに差し替え（chart/sync/users）
- 配色は信頼感重視でteal系に統一（:root変数・hover影も統一）

## AIの使い分け（今日の運用）
- ChatGPT：コピー（Hero/Features/Flow/Proof/FAQ/CTA）をJSON形式で一括生成 → 差し替え指示のベースに使用
- Copilot（VS Code）：JSONを元に、HTMLを構造維持したまま文言差し替え（差分ベース）。置換漏れ（SP CTA）は手動で補完
- Adobe Express：Hero用の画像を作成（素材準備の時短）。最終的にCSS背景画像で差し替え
- 手動（自分）：最終調整（SP CTAの置換漏れ、FAQ/Offerの不整合修正、フォームbutton化、SVG差し替えの適用確認）

## 実際にやったこと（ログ）
1. 前日フォルダ（day005）をコピーして day006 を作成
2. meta（title/description/og）・ロゴ・footerのday表記を先に修正
3. ChatGPTでSaaS用コピーJSONを生成 → Copilotに反映依頼
4. 置換漏れが出た箇所（SP側CTA）は手動でCTA文言を統一
5. Hero画像が入らなかったため、Adobe Express画像を採用し、CSS背景画像で確実に表示できる形に調整
6. FAQ/Offer/フォームを物販→SaaS仕様に修正（デモ予約・媒体対応・導入時間・セキュリティ）
7. FeaturesのSVGアイコンをSaaS向け（chart/sync/users）に差し替え（CSS変数＋mask-image）
8. :rootの配色をteal基調に変更し、hover影も統一
9. PC/SP表示を確認して崩れがない状態で確定

## 作業時間（合計目標: 60分）
| 作業 | 分 |
|---|---:|
| day005微修正/AI使用方法の検討 | 30 |
| day005コピー／初期差し替え（meta・ロゴ・footer）/コピーJSON作成→Copilot差し替え→置換漏れ修正/Hero画像差し替え・CSS調整（teal統一）/FAQ/Offer/フォーム修正＋SVG差し替え＋最終確認 | 109 |
| README更新／スクショ／コミット | 15 |

## 詰まり（1つ）
- Copilotの差し替えでSPメニュー内CTAだけ置換漏れが発生。次回は置換前に「CTA文言の全検索」で統一確認する。

## 学び（1行）
- CSSのmask-image＋変数化で、HTMLを触らずにアイコンだけ業種に合わせて高速に切り替えられる。
- コピー作成はchatGPT,差分修正はCopilot、長文コードはClaudeが良さそうだと知った。

##　良かったこと（1つ）
- AIで“文言差し替え”を一括化でき、手作業は漏れの補完と最終品質チェックに集中できた。
- AIを使用することで昨日までより200分近く作業時間を圧縮できた
- AIごとの得意分野を知ることができた。

## 次回やること
- 「置換漏れ防止チェック（CTA文言/リンク/デモ表記）」を作業開始ルーティンに組み込む
- 余力があれば、SaaS用テンプレ（template/saas など）として昇格できる形に整理
- さらにAIごとに作業を分けてLP作成を行う