# WordPress固定ページ反映手順書

## 案件情報
- 案件：節税・減価償却相談LP（架空案件）
- 反映先：クライアント既存WPサイト（https://example.com）
- テーマ：Lightning
- ページスラッグ：`/lp/tax-support`
- 権限：編集者（lp-editor）
- 反映方法：カスタムHTMLブロック＋`<style>`埋め込み
- プレビュー共有：パスワード保護付き公開

---

## 事前準備

### 1. ログイン確認
- [ ] WP管理画面（https://example.com/wp-admin/）にログイン
- [ ] 編集者権限で「固定ページ」「メディア」メニューが使えることを確認

### 2. Lightningテーマの影響調査
- [ ] 既存の固定ページをプレビューし、テーマCSSの挙動を把握
- [ ] DevToolsで以下を確認：
  - body classに付与されるクラス名（`page-id-XX` を控える）
  - テーマ由来の幅制限（`.site-body` `.entry-body` 等のmax-width）
  - テーマ由来のfont-family（見出し・本文）
  - テーマ由来のpadding/margin

### 3. 画像アップロード
- [ ] メディアライブラリに以下8点をアップロード

| # | ファイル名 | 用途 |
|---|-----------|------|
| 1 | hero-office-minimal.webp | FVヒーロー画像 |
| 2 | section-office-consulting.webp | サービス概要＋CTAセクション |
| 3 | section-divider-wave.webp | セクション区切り波形 |
| 4 | icon-compass.webp | アイコン（選ばれる理由） |
| 5 | icon-checklist.webp | アイコン（選ばれる理由） |
| 6 | icon-chat.webp | アイコン（選ばれる理由） |
| 7 | icon-shield.webp | アイコン（選ばれる理由） |
| 8 | bg-abstract-sage.webp | 背景テクスチャ（CSS内） |

- [ ] アップロード後、各画像のWP URLを控える
  - メディアライブラリ → 画像クリック → 「ファイルのURL」をコピー

---

## 反映作業

### 4. 画像URLの差し替え
- [ ] `wp-custom-html-block.html` 内の検証環境URLを、手順3で控えたWP URLに一括置換

置換対象（検証環境URL → 新URL）：

```
https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/hero-office-minimal.webp
→（新URL）

https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/section-office-consulting.webp
→（新URL）※2箇所

https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/section-divider-wave.webp
→（新URL）

https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/icon-compass.webp
→（新URL）※2箇所

https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/icon-checklist.webp
→（新URL）※2箇所

https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/icon-chat.webp
→（新URL）

https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/icon-shield.webp
→（新URL）

https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/bg-abstract-sage.webp
→（新URL）※CSS内
```

- [ ] 差し替え後、旧URL（yuki-freelife.com）が残っていないことを検索で確認

### 5. 固定ページ作成
- [ ] 固定ページ → 新規追加
- [ ] タイトル入力（例：「節税・減価償却をやさしく整理する相談窓口」）
- [ ] スラッグを `/lp/tax-support` に設定
  - パーマリンク設定で `lp/tax-support` を指定
  - ※親ページの設定やパーマリンク構造によっては調整が必要
- [ ] 「カスタムHTML」ブロックを追加
- [ ] URL差し替え済みの `wp-custom-html-block.html` の全内容を貼り付け

### 6. ページテンプレート設定
- [ ] Lightning固有のテンプレート設定を確認
  - サイドバー：なし（1カラム）に設定
  - ヘッダー/フッター：非表示にできる場合は非表示推奨（LP専用表示のため）
  - ※Lightningのバージョンにより設定項目が異なる場合あり

---

## Lightningテーマ対策（環境パッチ）

### 7. テーマCSS干渉の確認と対処
- [ ] プレビューでDevToolsを開き、以下を確認

**確認ポイント：**
1. LP全体の幅が制限されていないか（`.entry-body` 等のmax-width）
2. 見出しフォントがテーマ側で上書きされていないか
3. ボタンやリンクのスタイルがテーマと競合していないか
4. LP内の余白（padding/margin）が意図通りか

**干渉が見つかった場合の対処：**
- カスタムHTMLブロックの `<style>` 内に、page-id限定のパッチCSSを追記

```css
/* === Lightning テーマ環境パッチ（page-id-XX限定） === */
/* ※ XX は実際のpage-idに差し替え */

/* 例：幅制限の解除 */
.page-id-XX .entry-body {
  max-width: none;
  padding: 0;
}

/* 例：テーマフォントの上書き */
.page-id-XX .lp h1,
.page-id-XX .lp h2,
.page-id-XX .lp h3 {
  font-family: system-ui, -apple-system, "Segoe UI", "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif;
}
```

> 注意：Day020ではTwenty Twenty-Fourに対して `has-global-padding` / `is-layout-constrained` / `Cardo`フォントの打ち消しが必要だった。Lightningでは別のクラス名・別の干渉パターンになる可能性が高い。

---

## 表示確認

### 8. プレビュー確認（公開前チェック）
- [ ] **PC表示（1280px以上）**
  - ヒーローセクション：2カラム表示、画像の比率
  - カードグリッド：3カラム表示
  - ステップ：3カラム表示
  - CTAスプリット：2カラム表示
- [ ] **SP表示（375px / iPhone相当）**
  - FV見出しの改行位置が読みやすいか
  - ボタンのタップ領域が十分か（min-height: 44px）
  - 画像がはみ出していないか
- [ ] **タブレット表示（768px前後）**
  - レイアウト切り替えのブレークポイント付近

### 9. DevTools確認
- [ ] Network：404 = 0（画像・CSS参照切れなし）
- [ ] Console：エラーなし
- [ ] 画像：すべて200 OK
- [ ] アイコン：32px表示が崩れていないこと

---

## プレビュー共有

### 10. パスワード保護設定
- [ ] 固定ページの「公開状態」→「パスワード保護」を選択
- [ ] パスワードを設定（例：[REDACTED-REVIEW-PASSWORD]）
- [ ] 「公開」ボタンで保存

### 11. クライアントへプレビュー共有
- [ ] 以下を連絡：
  - プレビューURL（例：https://example.com/lp/tax-support/）
  - パスワード
  - 確認してほしいポイント（PC/SP表示、画像、ボタン動作等）
  - 修正があれば連絡をもらう旨

---

## 公開

### 12. 最終確認後の公開作業
- [ ] クライアントから「公開OK」の連絡を受領
- [ ] パスワード保護を解除（公開状態 →「公開」に変更）
- [ ] 公開後、実URLで最終表示確認（PC/SP）
- [ ] クライアントへ公開完了の連絡

### 13. 作業完了後
- [ ] ログイン情報を破棄（ブラウザの保存パスワードも削除）
- [ ] 作業完了の連絡をクライアントへ送付

---

## トラブルシューティング

### よくある問題と対処

| 症状 | 原因の可能性 | 対処 |
|------|------------|------|
| CSSが効かない | カスタムHTMLブロック内の`<style>`がWPに除去された | ブロックを「コード」モードで確認。除去されていたらフィルター回避を検討 |
| 画像が表示されない | メディアURLの差し替えミス / 拡張子の大小文字 | DevTools Networkで404を確認し、URLを修正 |
| レイアウトが崩れる | テーマCSSとの競合 | DevToolsで競合プロパティを特定 → `.lp` 側でスコープ強化 or `!important` |
| フォントが違う | テーマのfont-family上書き | page-id限定でfont-family再指定 |
| 幅が狭い | テーマのmax-width制限 | page-id限定で`.entry-body`等のmax-widthを解除 |
| サイドバーが出る | テンプレート設定が1カラムになっていない | 固定ページ設定でサイドバーなしに変更 |

---

---

## 参考：Lightning G3 事前調査（Day021実施）

### テーマ基本情報
- 開発：株式会社ベクトル（国産テーマ）
- 現行世代：G3（Ver.14〜15系）
- CSSフレームワーク：Bootstrap由来の `.container` クラス体系
- デフォルトフォント：`ヒラギノ角ゴ ProN`, `Meiryo`, `MS PGothic`, sans-serif
- CSS変数プレフィックス：`--vk-`（例：`--vk-width-container`）
- スキン：「Origin III」（デフォルト）／「Plain」（カスタマイズ向け・打ち消しCSS少）

### 固定ページのHTML構造（想定）
```
body.page-id-XX
  └─ .main-section
       └─ article
            ├─ .entry-header（ページタイトル）
            ├─ .entry-body（本文 ← カスタムHTMLブロックの内容はここ）
            └─ .entry-footer
```

### LP埋め込みで干渉が予想されるポイント

| # | 干渉パターン | 原因クラス／プロパティ | 対処方針 |
|---|------------|---------------------|---------|
| 1 | コンテナ幅の制限（最重要） | `.container` に `max-width`（sm=540/md=720/lg=960/xl=1140px） | page-id限定で `max-width: none` |
| 2 | 本文領域の幅・余白 | `.entry-body` / `.main-section` の padding / max-width | page-id限定で解除 |
| 3 | フォント干渉 | テーマの `body, html` font-family指定 | `.lp` スコープで再指定（概ね近いフォントスタックなので軽微の可能性） |
| 4 | ページタイトルバー | `.page-header` が自動表示される | `display: none` で非表示 |
| 5 | サイドバー | レイアウト設定が2カラムの場合 | 固定ページ編集画面の「Lightningデザイン設定」で1カラムに変更 |
| 6 | テーマヘッダー/フッター | LP専用表示にしたい場合 | `display: none`（要クライアント確認） |

### Day020（Twenty Twenty-Four）との干渉パターン比較

| 干渉パターン | Twenty Twenty-Four | Lightning G3 |
|------------|-------------------|-------------|
| 幅制限 | `.is-layout-constrained` | `.container` + `max-width` |
| 余白 | `.has-global-padding` | `.container` のpadding |
| フォント | `Cardo`（英字セリフ体） | ヒラギノ角ゴ系（ゴシック） |
| 本文領域 | `.entry-content` | `.entry-body` |
| ページタイトル | なし（FSE） | `.page-header`（自動表示） |
| CSS変数 | `--wp--` 系 | `--vk-` 系 |

### 想定パッチCSS（仮・ログイン後にDevToolsで確認して調整）

```css
/* === Lightning G3 環境パッチ（page-id-XX限定） === */
/* ※ XX は実際のpage-idに差し替え */

/* ページタイトルバーを非表示 */
.page-id-XX .page-header { display: none; }

/* コンテナ幅制限の解除 */
.page-id-XX .main-section,
.page-id-XX .entry-body {
  max-width: none;
  padding: 0;
}

/* テーマフォントの上書き（必要に応じて） */
.page-id-XX .lp {
  font-family: system-ui, -apple-system, "Segoe UI",
    "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif;
}

/* サイトヘッダー/フッターの非表示（LP専用にする場合・要クライアント確認） */
/*
.page-id-XX .site-header,
.page-id-XX .site-footer { display: none; }
*/
```

> **重要：** 上記はWeb調査に基づく「仮の」パッチです。実際のクラス名やCSS詳細はログイン後にDevToolsで確認してから確定してください。Lightningのバージョンやスキン設定によって異なる場合があります。

## 参考：Day020での知見（Twenty Twenty-Four）
- `has-global-padding` → 左右余白を生む → padding解除で対処
- `is-layout-constrained` → 幅制限 → max-width解除で対処
- 見出しフォント `Cardo` → system-uiに上書きで対処
- 対処はすべて `page-id-8` 限定CSSで実施（他ページに影響なし）

→ Lightningでは同様の問題が「別のクラス名」で発生する可能性あり。DevToolsで確認が必須。
