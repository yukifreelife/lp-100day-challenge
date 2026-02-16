# day021 → day022 引き継ぎ（chat_resume.md）

## 0. 引き継ぎの前提（最重要）
- 構造（セクション順・見出し・導線）は維持（構成変更禁止）
- ローカル正本は `day021/index.html` と `day021/styles.css`
- WordPress反映用は `day021/wp-custom-html-block.html`（自動生成物）

---

## 1. Day021時点の到達点（既存）
- Lightningテーマ前提の固定ページ反映方針に切り替え済み
- 編集者権限でも使える「カスタムHTMLブロック + `<style>` 同梱」方式で合意済み
- `wp-custom-html-block.html` を納品用ベースとして運用

---

## 2. 2026-02-16 追記（今回実施）
- `index.html` の画像参照をローカル相対パスに統一
  - 例: `images/hero-office-minimal.webp` / `images/section-office-consulting.webp`
- `styles.css` の背景画像参照をローカル相対パスへ変更
  - `#reasons::before` → `images/bg-abstract-sage.webp`
- ヘッダーロゴマークを文字「○」からCSS描画（円形マーク）に変更
- `scripts/build-wp-custom-html.sh` を新規追加
  - `index.html` + `styles.css` から `wp-custom-html-block.html` を自動生成
  - ローカル画像URLをWPメディアURLに一括置換

---

## 3. 運用コマンド（次回これだけで再生成可）
```bash
cd /Users/yuuki/Works/lp-100/day021
./scripts/build-wp-custom-html.sh
```

---

## 4. 主要ファイル
- ローカル表示確認用
  - `day021/index.html`
  - `day021/styles.css`
- WordPress投入用（生成物）
  - `day021/wp-custom-html-block.html`
- 生成スクリプト
  - `day021/scripts/build-wp-custom-html.sh`

---

## 5. 次アクション（Day022）
1. クライアントWP環境で `wp-custom-html-block.html` を反映
2. SP/PCで表示最終確認（余白・改行・テーマ干渉）
3. 必要ならページ限定CSSパッチを追加
4. 確認完了後、完了報告テンプレート整備
