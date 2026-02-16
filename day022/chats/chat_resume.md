# day022 → day023 引き継ぎ（chat_resume.md）

## 0. 引き継ぎの前提（最重要）
- 構造（セクション順・見出し・導線）は維持（構成変更禁止）
- 追加CSSなし（`<style>` 同梱方式）で運用する
- 貼り付け形式は Gutenberg コードエディター向けファイルを使う

---

## 1. Day022で解決したこと
- 既存WordPress（Lightning）を再利用した際の表示崩れを解消
  - 右側余白（実質2カラム化）
  - 見出しの青線
  - フッター下部の青線
- `style`同梱が効く貼り付け方式を確定
  - `wp:html` コメント付きデータをコードエディターに貼る

---

## 2. 現在の正本ファイル（必ずここを使う）
- 貼り付け用（最優先）
  - `/Users/yuuki/Works/lp-100/day022/wp-custom-html-gutenberg-code-editor.html`
- 生成スクリプト
  - `/Users/yuuki/Works/lp-100/day022/scripts/build-wp-custom-html.sh`
- ローカル編集元
  - `/Users/yuuki/Works/lp-100/day022/index.html`
  - `/Users/yuuki/Works/lp-100/day022/styles.css`

---

## 3. 再生成コマンド
```bash
cd /Users/yuuki/Works/lp-100/day022
./scripts/build-wp-custom-html.sh https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02
```

---

## 4. WordPress反映手順（確定版）
1. 固定ページを「コードエディター」で開く
2. 既存本文を全削除
3. `wp-custom-html-gutenberg-code-editor.html` を丸ごと貼る
4. 更新
5. ハードリロード（Cmd + Shift + R）

---

## 5. 注意点（再発防止）
- ビジュアル編集や通常のカスタムHTML貼り付けだと、`style`が不安定になる場合がある
- Lightningのページテンプレート設定だけでは崩れが残るケースがあるため、同梱CSSでテーマ外側レイアウトを抑える
- 「表示崩れ修正」と「デザイン調整」は分けて進める（保全コミットを先に切る）

---

## 6. 次回やること（Day023）
1. PC/SPで最終スクショを保存（納品控え）
2. 404/Consoleエラーの最終点検
3. Day022の報告文面テンプレート整備
4. 必要なら不要ファイル（body-only系）の整理判断
