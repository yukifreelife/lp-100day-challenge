---
name: "lp-legal"
description: "LP法務コンプライアンス実装スキル。日本の特商法表記、プライバシーポリシーを実装します。"
---

## Source Metadata

The source skill included additional metadata. It is preserved here for migration traceability.

```yaml
version: 1.0.0
triggers:
  - ユーザーが「特商法」「プライバシーポリシー」「法務」「コンプライアンス」と言ったとき
  - ユーザーが「/legal」と入力したとき
parameters:
  brand_name:
    type: string
    description: ブランド/サービス名
    required: false
  representative:
    type: string
    description: 代表者名
    required: false
  zip_code:
    type: string
    description: 郵便番号
    required: false
  address:
    type: string
    description: 住所
    required: false
  phone:
    type: string
    description: 電話番号
    required: false
  email:
    type: string
    description: メールアドレス
    required: false
```

# LP法務コンプライアンス実装スキル

LPに日本の法務コンプライアンス対応ページを実装します。

## 実装機能

### 1. 特定商取引法に基づく表記

#### HTML実装

```html
<section class="legal-act" id="legal-act">
  <div class="container">
    <h1>特定商取引法に基づく表記</h1>

    <dl class="legal-list">
      <dt>販売事業者名</dt>
      <dd>{{brand_name}}</dd>

      <dt>代表責任者</dt>
      <dd>{{representative}}</dd>

      <dt>所在地</dt>
      <dd>
        〒{{zip_code}}<br>
        {{address}}
      </dd>

      <dt>連絡先</dt>
      <dd>
        TEL: {{phone}}<br>
        EMAIL: {{email}}<br>
        （受付時間: 9:00〜18:00 土日祝を除く）
      </dd>

      <dt>販売価格</dt>
      <dd>各商品ページをご参照ください</dd>

      <dt>支払い方法</dt>
      <dd>クレジットカード、銀行振込</dd>

      <dt>商品の引き渡し時期</dt>
      <dd>注文確認後、3〜7日以内に発送</dd>

      <dt>返品・キャンセルについて</dt>
      <dd>商品到着後8日以内にご連絡ください</dd>

      <dt>動作環境</dt>
      <dd>最新のブラウザでご覧ください</dd>
    </dl>
  </div>
</section>
```

#### CSS実装

```css
.legal-act {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.legal-act h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.legal-list {
  max-width: 800px;
  margin: 0 auto;
}

.legal-list dt {
  font-weight: bold;
  margin-top: 1.5rem;
  padding: 0.75rem;
  background-color: #e9ecef;
  border-left: 4px solid #007bff;
}

.legal-list dd {
  padding: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.8;
}
```

### 2. プライバシーポリシー

#### HTML実装

```html
<section class="privacy-policy" id="privacy-policy">
  <div class="container">
    <h1>プライバシーポリシー</h1>

    <p class="update-date">最終更新日：2026年4月23日</p>

    <article class="policy-section">
      <h2>1. 個人情報の取得について</h2>
      <p>{{brand_name}}（以下、「当社」）は、お客様の個人情報を以下の目的で取得します。</p>
      <ul>
        <li>お問い合わせへの回答</li>
        <li>サービスの提供</li>
        <li>お客様へのご連絡</li>
        <li>統計データの分析</li>
      </ul>
    </article>

    <article class="policy-section">
      <h2>2. 個人情報の利用目的</h2>
      <p>当社は、取得した個人情報を以下の目的で利用します。</p>
      <ul>
        <li>サービスの提供・運営</li>
        <li>お問い合わせへの対応</li>
        <li>新サービス・情報の通知</li>
        <li>アクセス解析・統計</li>
      </ul>
    </article>

    <article class="policy-section">
      <h2>3. 個人情報の第三者提供</h2>
      <p>当社は、お客様の同意を得た場合、または法令に基づく場合を除き、第三者に個人情報を提供いたしません。</p>
    </article>

    <article class="policy-section">
      <h2>4. 個人情報の安全管理</h2>
      <p>当社は、個人情報の漏洩、滅失、き損等を防止するため、必要かつ適切な安全対策を講じます。</p>
    </article>

    <article class="policy-section">
      <h2>5. Cookie（クッキー）について</h2>
      <p>当社は、アクセス解析のためCookieを使用しています。Cookieはブラウザの設定で無効にすることができます。</p>
    </article>

    <article class="policy-section">
      <h2>6. 個人情報の開示・訂正・削除</h2>
      <p>お客様は、ご自身の個人情報の開示、訂正、削除を求めることができます。お問い合わせフォームよりご連絡ください。</p>
    </article>

    <article class="policy-section">
      <h2>7. お問い合わせ窓口</h2>
      <p>個人情報に関するお問い合わせは以下までお願いいたします。</p>
      <ul class="contact-info">
        <li>メールアドレス：{{email}}</li>
        <li>電話番号：{{phone}}</li>
      </ul>
    </article>

    <article class="policy-section">
      <h2>8. プライバシーポリシーの変更</h2>
      <p>当社は、本ポリシーを適宜見直し、その改善に努めます。修正された最新のプライバシーポリシーは常に本ページに開示されます。</p>
    </article>
  </div>
</section>
```

#### CSS実装

```css
.privacy-policy {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.privacy-policy h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.update-date {
  text-align: center;
  color: #6c757d;
  margin-bottom: 3rem;
}

.policy-section {
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.policy-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #007bff;
}

.policy-section ul {
  padding-left: 2rem;
  margin-top: 1rem;
}

.policy-section ul li {
  margin-bottom: 0.5rem;
}

.contact-info {
  list-style: none;
  padding-left: 0;
}

.contact-info li {
  padding: 0.75rem;
  background-color: #e9ecef;
  border-radius: 4px;
}
```

### 3. フッターリンク追加

#### HTML実装

```html
<footer class="footer">
  <div class="container">
    <div class="footer-links">
      <a href="#legal-act">特定商取引法に基づく表記</a>
      <a href="#privacy-policy">プライバシーポリシー</a>
      <a href="#contact">お問い合わせ</a>
    </div>
    <p class="copyright">&copy; 2026 {{brand_name}}. All rights reserved.</p>
  </div>
</footer>
```

## 実装手順

### ステップ1: プレースホルダーの置換

| プレースホルダー | デフォルト値 |
|----------------|-------------|
| {{brand_name}} | [ブランド/サービス名] |
| {{representative}} | [代表者名] |
| {{zip_code}} | 000-0000 |
| {{address}} | 東京都千代田区xxx町1-2-3 |
| {{phone}} | 000-xxxx-xxxx |
| {{email}} | contact@example.com |

### ステップ2: ファイル作成

```bash
# 法務ページを作成
# 1. 既存LPにセクションとして追加する場合
# 2. 独立ページとして作成する場合
```

### ステップ3: フッターリンク追加

既存のフッターに法務ページへのリンクを追加

## チェックリスト

```markdown
## 法務コンプライアンスチェックリスト

- [ ] 特商法表記ページを作成
- [ ] プライバシーポリシーページを作成
- [ ] フッターに法務ページへのリンクを追加
- [ ] 必要なプレースホルダーをすべて置換
- [ ] 最新の更新日を記載
- [ ] お問い合わせ窓口情報を記載
```

## ファイル構成

```
project/
├── index.html              # フッターリンク追加
├── legal-act.html          # 特商法表記（独立ページ版）
├── privacy.html            # プライバシーポリシー（独立ページ版）
└── css/
    └── legal.css           # 法務ページスタイル
```

## 注意点

1. **プレースホルダー**: 必ず実情報に置換
2. **更新日**: 変更時は日付を更新
3. **リンク**: フッターから全法務ページにアクセス可能に
4. **電子公文**: 必要に応じて電子公文适应

## 更新履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v1.0.0 | 2026-04-23 | 初版作成 |
