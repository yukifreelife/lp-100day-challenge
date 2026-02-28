# Day034 ログイン後作業ロードマップ

作成日: 2026-02-28  
前提: ユーザー本人が WordPress 管理画面へログインできる

## 目的
- 静的LP（Day032正本）を WordPress 上へ移行する
- 予約導線、PDF導線、計測設定を壊さずに再現する
- 公開後にクライアントが文言・画像を更新しやすい状態にする

## ゴール
- トップLPが WordPress 上で表示される
- `privacy` / `tokushoho` 相当ページが表示される
- 予約CTAとPDFフォームが動く
- GA4 / Meta / UTM の主要導線が維持される

## フェーズ1: 管理画面の事前確認
所要目安: 10〜20分

### やること
1. `/wp-admin` にログイン
2. 固定ページ一覧を開く
3. 既存の `WP固定ページ納品用` が使えるか確認
4. メディアライブラリが使えるか確認
5. 追加CSSまたはコード挿入ができる場所を確認

### 完了条件
- 編集対象にする固定ページを決めている
- 画像/PDFをアップロードできることを確認している

### 分岐
- `WP固定ページ納品用` が使いやすい: そのページを移行先にする
- 使いにくい / パスワード保護が邪魔: 新規固定ページを作成する

## フェーズ2: 素材のアップロード
所要目安: 15〜30分

### やること
1. `/Users/yuuki/Works/lp-100/day034/source/images/` 配下の必要画像をアップロード
2. `/Users/yuuki/Works/lp-100/day034/source/downloads/food-checklist.pdf` をアップロード
3. それぞれのアップロードURLを控える

### この段階で控えるもの
- ヒーロー画像URL
- 各セクション画像URL
- PDFの公開URL

### 完了条件
- 使う画像URLとPDF URLが揃っている

## フェーズ3: トップLPページの移植
所要目安: 45〜90分

### やること
1. 移行元HTMLを開く
   - `/Users/yuuki/Works/lp-100/day034/source/index.html`
2. `<main>` 内の構成をベースに、固定ページ本文へ移す
3. 画像パスを WordPress のメディアURLへ差し替える
4. `./privacy.html` / `./tokushoho.html` は、後で作る固定ページURLに差し替える前提で仮置きする
5. 予約ボタンの文言と配置を維持する

### 優先して再現するセクション
1. FV
2. 料金
3. 無料カウンセリング
4. FAQ
5. 最終CTA
6. PDFフォーム

### 完了条件
- トップLPの本文が WordPress 側に入り、主要セクションが表示される

## フェーズ4: 法務ページの移植
所要目安: 15〜30分

### やること
1. `privacy.html` を固定ページ化
   - `/Users/yuuki/Works/lp-100/day034/source/privacy.html`
2. `tokushoho.html` を固定ページ化
   - `/Users/yuuki/Works/lp-100/day034/source/tokushoho.html`
3. トップLPのフッターリンクを、それぞれの WordPress URL に更新

### 完了条件
- 2つの法務ページが公開できる
- トップLPからリンクで飛べる

## フェーズ5: CSS / JS / 設定値の適用
所要目安: 30〜60分

### やること
1. CSSを適用
   - 元ファイル: `/Users/yuuki/Works/lp-100/day034/source/styles.css`
   - 方法: 追加CSS、またはテーマ/プラグインのコード挿入
2. `window.LP_CONFIG` を適用
   - `reservationUrl`
   - `pdfDownloadUrl`
   - `leadEndpoint`
   - `gaMeasurementId`
   - `metaPixelId`
3. JSを適用
   - 元ファイル: `/Users/yuuki/Works/lp-100/day034/source/script.js`
4. `pdfDownloadUrl` だけは WordPress のPDF URLへ置換

### 注意
- 予約URLは `https://timerex.net/s/bodymake_tokyo_yuta`
- `leadEndpoint` は `https://formsubmit.co/ajax/contact@bodymake-yuta.com`
- JSを入れないと、予約URLのUTM引き継ぎ、PDF送信完了表示、計測イベントが動かない

### 完了条件
- 表示崩れが大きく減り、インタラクションが動く

## フェーズ6: 動作確認
所要目安: 20〜40分

### やること
1. PC表示を確認
2. SP表示を確認
3. 予約CTAを1つ以上クリック
4. PDFフォームをテスト送信
5. PDFダウンロードリンクを確認
6. 法務ページの表示を確認

### 確認ポイント
- 予約CTAがすべて同じ TimeRex URL に飛ぶ
- PDF送信後に `.pdf-success` 相当の完了表示が出る
- PDFリンクが正しいファイルを開く
- フッターの法務リンクが切れていない

### 完了条件
- ユーザー操作に関わる主要導線が一通り通る

## フェーズ7: 計測確認
所要目安: 15〜30分

### やること
1. GA4リアルタイムで確認
   - `page_view`
   - `select_counseling_cta`
   - `generate_lead`
2. Meta Pixel確認
   - `PageView`
   - `SelectCounselingCTA`
   - `Lead`
3. UTM付きURLで流入し、予約URLへの引き継ぎを確認

### 完了条件
- 主要イベントが少なくとも一度確認できる

## フェーズ8: 引き渡し前整理
所要目安: 10〜20分

### やること
1. クライアントが編集するページ名を決める
2. 触らない方がよい箇所を整理する
   - 計測コード
   - フォーム設定
   - 予約リンクの設定値
3. 作業完了後、`lpadmin` の扱いを決める
   - パスワード変更
   - アカウント削除

### 完了条件
- 公開後の最小運用ルールを説明できる

## 優先順位（時間が足りない場合）
1. トップLP表示
2. 予約CTA
3. 法務ページ
4. PDFフォーム
5. 計測確認

## 詰まりやすいポイント
- 既存固定ページがパスワード保護されている
- テーマ側の余白や見出し装飾が干渉する
- HTMLブロック内で相対パスのまま残る
- JSの設置場所が不適切で、イベントが動かない

## 参照ファイル
- `/Users/yuuki/Works/lp-100/day034/WORDPRESS_IMPLEMENTATION_MAP.md`
- `/Users/yuuki/Works/lp-100/day034/WORDPRESS_MIGRATION_CHECKLIST.md`
- `/Users/yuuki/Works/lp-100/day034/source/index.html`
- `/Users/yuuki/Works/lp-100/day034/source/styles.css`
- `/Users/yuuki/Works/lp-100/day034/source/script.js`
