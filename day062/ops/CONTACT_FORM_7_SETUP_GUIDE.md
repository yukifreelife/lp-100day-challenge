# Contact Form 7 連携手順書

**テーマ名**: LP Manufacturing Recruitment
**作成日**: 2026-03-26

---

## 目的

WordPressテーマに含まれるお問い合わせフォームを、Contact Form 7で動作させるための設定手順です。

---

## 手順1: Contact Form 7 をインストール・有効化

1. WordPress管理画面へアクセス
2. `プラグイン` > `新規追加`
3. 「Contact Form 7」を検索
4. `今すぐインストール` > `有効化`

---

## 手順2: お問い合わせフォームを作成

1. `お問い合わせ` > `新規追加`
2. フォーム名を入力（例：採用相談フォーム）
3. フォーム内容を入力

**フォーム例**:
```
<label> お名前（必須）
    [text* your-name] </label>

<label> 会社名
    [text your-company] </label>

<label> メールアドレス（必須）
    [email* your-email] </label>

<label> 電話番号
    [tel your-tel] </label>

<label> お問い合わせ内容（必須）
    [textarea* your-message] </label>

[submit "送信する"]
```

4. `保存` をクリック

---

## 手順3: フォームIDを確認

フォーム作成後、フォームIDを確認します。

**確認方法1: 管理画面のURLで確認**
- フォーム編集画面のURLを見る
- `post=123` の数字部分がフォームID
- 例: `/wp-admin/post.php?post=123&action=edit` → IDは「123」

**確認方法2: ショートコードで確認**
- フォーム一覧画面で「ショートコード」を確認
- `[contact-form-7 id="123" ...]` の数字部分がフォームID

---

## 手順4: functions.php の書き換え

WordPress管理画面の「外観」>「テーマファイルエディター」から、またはFTP/SFTPでファイルを編集します。

### 管理画面から編集する場合

1. `外装` > `テーマファイルエディター`
2. テーマ: `LP Manufacturing Recruitment`
3. テーマファイル: `Theme Functions (functions.php)`
4. 87行目付近を探す

### 編集箇所

```php
// 変更前
$form_id = 0; // ここにContact Form 7のフォームIDを指定

// 変更後（例：フォームIDが123の場合）
$form_id = 123; // ここにContact Form 7のフォームIDを指定
```

### FTP/SFTPで編集する場合

1. サーバーへ接続
2. `/wp-content/themes/lp-manufacturing-recruitment/functions.php` をダウンロード
3. テキストエディタで87行目付近を編集
4. 上書きアップロード

---

## 手順5: 動作確認

1. LPページを表示
2. お問い合わせフォームが表示されているか確認
3. テスト送信してメールが届くか確認

---

## トラブルシューティング

### Q. フォームが表示されない
- Contact Form 7が有効化されているか確認
- フォームIDが正しいか確認
- キャッシュをクリアして確認

### Q. 送信後、メールが届かない
- WordPress管理画面 `お問い合わせ` > `メール` タブで送信先メールアドレスを確認
- 迷惑メールフォルダを確認

### Q. 「お問い合わせフォームは現在準備中です。」と表示される
- Contact Form 7が有効化されていない、またはフォームIDが0のまま

---

## サポート

不明点がございましたら、お気軽にお問い合わせください。
