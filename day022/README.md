# Day022 - 税務・節税相談LP（仮案件 / クラウドワークス想定）

## ラベル（検索用）
**Labels:** `B2B` `B2C` `tax` `consulting` `lp` `wordpress` `lightning` `theme-interference` `custom-html` `inline-style` `gutenberg` `handoff`

lp:audience=会社員/個人事業主  
lp:goal=問い合わせ（資料請求・初回相談）  
lp:industry=税務/節税/コンサルティング  
lp:objective=既存WP（Lightning）での最終表示安定化  
lp:offer=節税・減価償却の整理サポート（仮）  
lp:template=ai-first  
lp:status=mock-project  
lp:env=existing-wordpress-lightning  

---

## 今日の成果
- Day022の目的：既存WordPress（Lightning）で、`<style>` 同梱方式のまま表示崩れを解消する
- 実施内容：
  - `day021` をコピーして `day022` を作成し、当日作業を分離
  - `scripts/build-wp-custom-html.sh` を改修
    - `WP_BASE_URL` を引数/環境変数で受け取れるように変更
    - 出力ファイルを複数化（用途別）
      - `wp-custom-html-block.html`（説明コメント付き）
      - `wp-custom-html-inline-style.html`（貼り付け本体）
      - `wp-custom-html-gutenberg-code-editor.html`（`<!-- wp:html -->` ラッパー付き）
  - Lightningテーマ干渉（横幅・2カラム・見出し装飾・フッター線）を段階的に解消
  - クライアント前提の「追加CSSなし」運用を維持したまま、表示安定化を達成
- 検証結果：
  - PC/SPで主要セクションの表示崩れは解消
  - 右側余白問題を解消
  - テーマ由来の青線（見出し/フッター）を抑制

---

## 詰まり（重要）
- 同じHTMLでも「貼り付け経路（ビジュアル/カスタムHTML/コードエディター）」で解釈が変わり、`<style>` の効き方が不安定だった
- Lightningの外側レイアウト（`siteContent > row > main/sub`）が強く、単純な`.lp`スコープだけでは横幅問題が残った

解決策：
- 貼り付け用データを `wp:html` ラップ形式に統一
- テーマ外側レイアウトを狙った最小上書きを同梱CSSの先頭に実装

---

## 学び/注意（1行）
- 「追加CSSなし」を成立させるには、**HTML本体だけでなく貼り付け形式（Gutenbergコメント含む）まで納品仕様に含める**のが重要。

---

## 今日整理できた運用フロー（Day022版）
1. 既存WPのメディアURL基準を確定
2. `./scripts/build-wp-custom-html.sh <WP_BASE_URL>` で貼り付けファイルを再生成
3. `wp-custom-html-gutenberg-code-editor.html` を固定ページ本文へ丸ごと貼り付け
4. PC/SPで表示確認し、テーマ干渉だけを同梱CSSで追加修正

---

## 最終運用ルール（現時点）
- 追加CSSは使わず、`<style>` 同梱方式で運用
- WordPress貼り付け時は以下ファイルを優先
  - `day022/wp-custom-html-gutenberg-code-editor.html`
- 画像URLの再生成は以下
  - `cd /Users/yuuki/Works/lp-100/day022`
  - `./scripts/build-wp-custom-html.sh https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02`

---

## 次回やること（Day023）
- 最終確認
  - DevTools: Consoleエラー/Network 404 の最終チェック
  - PC/SPで最終スクリーンショット保存（納品控え）
- ドキュメント整理
  - `day022` 内の不要ファイル（`body-only`系）の扱い決定（残す/削除）
  - 作業報告テンプレートへ「貼り付け方式の注意点」を追記
- 可能なら
  - 生成スクリプトに `--mode`（block/inline/gutenberg）オプションを追加し運用ミスをさらに削減

---

## 公開・法務メモ（最低限）
- 本LPは **架空案件（デモ）**
- 実在の企業・商品・人物とは無関係
- 検証環境の情報は外部共有しない

---

## AIチャット運用ルール
- 構造（セクション順・見出し・導線）は維持（構成変更禁止）
- ローカル正本主義（差分はローカル基準で管理）
- WordPress反映は「貼り付け方式」まで含めて仕様化する
- 毎日 `chat_resume.md` で前提共有
