---
name: lp-automation-v2
description: LP (Landing Page) 全自動作成スキル v2。アナリティクス、法務コンプライアンス、パフォーマンス最適化を追加強化。11ステップ完全自動化。「LPを作成」「次のLPを開始」「/lp-create」などのキーワードで起動します。
version: 2.0.0
triggers:
  - ユーザーが「LPを作成」「新規LP」「LP生成」「ランディングページ作成」などと言ったとき
  - ユーザーが「次のLPを開始」「今回のLP」「今日のLP」と言ったとき
  - ユーザーが「/lp-create」と入力したとき
parameters:
  theme:
    type: string
    description: LPのテーマ（例: 「カフェ」「歯科医院」「採用ページ」「SaaS」）
    required: false
  category:
    type: string
    description: LPのカテゴリ（例: 「飲食店」「医療」「B2B」「コマース」）
    required: false
  brand:
    type: string
    description: ブランド名またはサービス名
    required: false
  target:
    type: string
    description: ターゲットユーザー（例: 「20代女性」「中小企業経営者」「求職者」）
    required: false
  output_dir:
    type: string
    description: 出力先ディレクトリ（デフォルト: /Users/yuuki/Works/lp-100/dayXXX/current）
    required: false
  enable_ga4:
    type: boolean
    description: GA4トラッキングを有効にする（デフォルト: false）
    required: false
  enable_legal:
    type: boolean
    description: 法務ページを生成する（デフォルト: false）
    required: false
  tracking_id:
    type: string
    description: GA4測定ID（例: G-XXXXXXXXXX）
    required: false
---

# LP自動作成スキル v2

LP制作プロセスを11ステップで完全自動化します。v2で追加・強化された領域：

1. **アナリティクス & データ計測**
2. **法務コンプライアンス（日本）**
3. **パフォーマンス最適化**

## 自動化フロー

```
1. ブレインストーミング → テーマ決定、カテゴリ選択、ブランド決定
2. デザイン仕様策定 → カラー、フォント、レイアウト、セクション構成
3. コーディング → HTML/CSS/JS実装、レスポンシブ対応
4. 画像取得 → Unsplash/Pexelsからフリー素材をダウンロード
5. 評価 → LP_REVIEW_TEMPLATE.mdによる10領域評価
6. プロフェッショナル化レビュー → 5人の専門家チームによる多角的評価
7. 改善 → 評価結果に基づく改善実施
8. アナリティクス実装 → GA4、CVトラッキング、スクロール計測
9. 法務ページ生成 → 特商法表記、プライバシーポリシー
10. パフォーマンス最適化 → lazy loading、Core Web Vitals対応
11. コミット & デプロイ → Gitコミット、ローカルサーバー起動
```

---

## ステップ8: アナリティクス & データ計測【v2追加】

### 8.1 GA4実装枠

#### HTML実装（head内）

```html
<!-- Google Analytics 4 (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'send_page_view': false,
    'anonymize_ip': true,
    'custom_map': {
      'custom_dimension_1': 'lp_theme',
      'custom_dimension_2': 'lp_category'
    }
  });

  // カスタムディメンションの設定（LP固有の属性）
  gtag('event', 'page_view', {
    lp_theme: '{theme}',
    lp_category: '{category}',
    lp_version: 'v2.0'
  });
</script>
```

#### 設定プレースホルダー置換ルール

| プレースホルダー | 置換内容 | 必須 |
|----------------|----------|------|
| `G-XXXXXXXXXX` | ユーザー指定の測定ID、または `G-PLACEHOLDER` | × |
| `{theme}` | LPテーマ名 | ○ |
| `{category}` | LPカテゴリ | ○ |

### 8.2 CVトラッキング設定

#### CVポイント定義

```javascript
// CVトラッキング設定オブジェクト
const cvTracking = {
  // メインCV（問い合わせ送信）
  mainConversion: {
    eventName: 'contact_submit',
    selector: 'form[data-tracking="contact"]',
    trigger: 'submit'
  },
  // 電話CV（電話番号クリック）
  phoneCall: {
    eventName: 'phone_click',
    selector: 'a[href^="tel:"]',
    trigger: 'click'
  },
  // CTAクリック（主要ボタン）
  ctaClick: {
    eventName: 'cta_click',
    selector: '[data-tracking="cta"]',
    trigger: 'click',
    captureAttributes: ['cta_text', 'cta_position', 'cta_type']
  },
  // 資料ダウンロード
  download: {
    eventName: 'file_download',
    selector: 'a[href$=".pdf"], a[href$=".zip"]',
    trigger: 'click'
  }
};
```

#### 実装コード

```javascript
// CVトラッキング実装（analytics.jsとして出力）
document.addEventListener('DOMContentLoaded', function() {
  // メインCV（問い合わせ送信）
  const contactForms = document.querySelectorAll('form[data-tracking="contact"]');
  contactForms.forEach(form => {
    form.addEventListener('submit', function() {
      gtag('event', 'contact_submit', {
        event_category: 'conversion',
        event_label: '問い合わせ送信',
        value: 1
      });
    });
  });

  // 電話CV
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: this.textContent.trim(),
        value: 1
      });
    });
  });

  // CTAクリック
  const ctaButtons = document.querySelectorAll('[data-tracking="cta"]');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: this.textContent.trim(),
        cta_position: this.dataset.position || 'unknown',
        cta_type: this.dataset.type || 'button'
      });
    });
  });

  // 資料ダウンロード
  const downloadLinks = document.querySelectorAll('a[href$=".pdf"], a[href$=".zip"]');
  downloadLinks.forEach(link => {
    link.addEventListener('click', function() {
      gtag('event', 'file_download', {
        event_category: 'engagement',
        event_label: this.href.split('/').pop(),
        value: 1
      });
    });
  });
});
```

### 8.3 スクロール計測

#### 実装コード

```javascript
// スクロール深度計測（scroll-tracking.jsとして出力）
(function() {
  const scrollDepths = [25, 50, 75, 90, 100];
  const trackedDepths = new Set();

  const trackScrollDepth = function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const scrollPercentage = Math.round((scrollTop + windowHeight) / docHeight * 100);

    scrollDepths.forEach(function(depth) {
      if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
        trackedDepths.add(depth);

        gtag('event', 'scroll_depth', {
          event_category: 'engagement',
          event_label: depth + '%',
          value: depth,
          non_interaction: true
        });
      }
    });
  };

  // スクロールイベント（throttle付き）
  let scrollTimer;
  window.addEventListener('scroll', function() {
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(trackScrollDepth, 100);
  });
})();
```

### 8.4 アナリティクス設定チェックリスト

```markdown
## GA4設定チェックリスト

- [ ] GA4測定IDを設定済み（G-XXXXXXXXXX）
- [ ] gtag.jsをhead内に実装
- [ ] IPアドレス anonymize を有効化
- [ ] カスタムディメンション（lp_theme, lp_category）を設定
- [ ] CVトラッキング（問い合わせ送信）を実装
- [ ] 電話番号クリックを計測
- [ ] CTAクリックを計測
- [ ] スクロール深度（25/50/75/90/100%）を計測
- [ ] 資料ダウンロードを計測（該当の場合）
```

### 8.5 アナリティクス出力ファイル構成

```
dayXXX/
├── js/
│   ├── analytics.js       # CVトラッキング実装
│   └── scroll-tracking.js # スクロール計測
└── analytics-config.json   # 設定ファイル
```

---

## ステップ9: 法務コンプライアンス（日本）【v2追加】

### 9.1 特商法表記（特定商取引法に基づく表記）

#### ページ構成

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
        TEL: {{phone_number}}<br>
        EMAIL: {{email_address}}<br>
        （受付時間: {{business_hours}}）
      </dd>

      <dt>販売価格</dt>
      <dd>{{price_description}}</dd>

      <dt>支払い方法</dt>
      <dd>{{payment_methods}}</dd>

      <dt>商品の引き渡し時期</dt>
      <dd>{{delivery_timing}}</dd>

      <dt>返品・キャンセルについて</dt>
      <dd>{{return_policy}}</dd>

      <dt>動作環境</dt>
      <dd>{{system_requirements}}</dd>
    </dl>
  </div>
</section>
```

#### CSS実装

```css
.legal-act {
  padding: var(--spacing-xl) 0;
  background-color: var(--color-bg);
}

.legal-act h1 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.legal-list {
  max-width: 800px;
  margin: 0 auto;
}

.legal-list dt {
  font-weight: bold;
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm);
  background-color: var(--color-light-gray);
  border-left: 4px solid var(--color-primary);
}

.legal-list dd {
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  line-height: 1.8;
}
```

#### プレースホルダー置換テンプレート

| プレースホルダー | デフォルト値 | 説明 |
|----------------|-------------|------|
| {{brand_name}} | 「[ブランド/サービス名]」 | 会社名または事業者名 |
| {{representative}} | 「代表者名」 | 代表責任者名 |
| {{zip_code}} | 「XXX-XXXX」 | 郵便番号 |
| {{address}} | 「住所」 | 所在地 |
| {{phone_number}} | 「XX-XXXX-XXXX」 | 電話番号 |
| {{email_address}} | 「contact@example.com」 | メールアドレス |
| {{business_hours}} | 「9:00〜18:00（土日祝を除く）」 | 営業時間 |
| {{price_description}} | 「各商品ページをご参照ください」 | 価格説明 |
| {{payment_methods}} | 「クレジットカード、銀行振込」 | 支払方法 |
| {{delivery_timing}} | 「注文確認後、X日以内に発送」 | 配送時期 |
| {{return_policy}} | 「商品到着後8日以内に連絡ください」 | 返品ポリシー |
| {{system_requirements}} | 「最新のブラウザでご覧ください」 | 動作環境 |

### 9.2 プライバシーポリシー

#### ページ構成

```html
<section class="privacy-policy" id="privacy-policy">
  <div class="container">
    <h1>プライバシーポリシー</h1>

    <p class="update-date">最終更新日：2026年4月16日</p>

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
        <li>メールアドレス：{{email_address}}</li>
        <li>電話番号：{{phone_number}}</li>
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
  padding: var(--spacing-xl) 0;
  background-color: var(--color-bg);
}

.privacy-policy h1 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.update-date {
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.policy-section {
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  padding: var(--spacing-lg);
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.policy-section h2 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-primary);
}

.policy-section ul {
  padding-left: var(--spacing-lg);
  margin-top: var(--spacing-sm);
}

.policy-section ul li {
  margin-bottom: var(--spacing-xs);
}

.contact-info {
  list-style: none;
  padding-left: 0;
}

.contact-info li {
  padding: var(--spacing-xs);
  background-color: var(--color-light-gray);
  border-radius: 4px;
}
```

### 9.3 法務ページ統合

#### フッターリンク追加

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

### 9.4 法務コンプライアンスチェックリスト

```markdown
## 法務コンプライアンスチェックリスト

- [ ] 特商法表記ページを作成
- [ ] プライバシーポリシーページを作成
- [ ] フッターに法務ページへのリンクを追加
- [ ] 必要なプレースホルダーをすべて置換
- [ ] 最新の更新日を記載
- [ ] お問い合わせ窓口情報を記載
```

### 9.5 法務ページ出力ファイル構成

```
dayXXX/
├── index.html          # フッターリンク追加
├── legal-act.html      # 特商法表記（独立ページ版）
├── privacy.html        # プライバシーポリシー（独立ページ版）
└── css/
    └── legal.css       # 法務ページスタイル
```

---

## ステップ10: パフォーマンス最適化【v2追加】

### 10.1 Lazy Loading実装

#### ネイティブLazy Loading

```html
<!-- 画像にloading属性を追加 -->
<img src="images/hero.jpg"
     alt="メインビジュアル"
     loading="eager"
     width="1920"
     height="1080">

<!-- 以下の画像はlazy loading -->
<img src="images/concept-1.jpg"
     alt="特徴1"
     loading="lazy"
     width="800"
     height="600">

<img src="images/concept-2.jpg"
     alt="特徴2"
     loading="lazy"
     width="800"
     height="600">

<!-- iframeのlazy loading -->
<iframe src="https://www.youtube.com/embed/XXX"
        title="動画"
        loading="lazy"
        width="560"
        height="315">
</iframe>
```

#### JavaScript Lazy Loading（ポリフィル対応）

```javascript
// lazy-load-polyfill.js
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer API対応確認
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  } else {
    // フォールバック（全て即時読み込み）
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(function(img) {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
    });
  }
});
```

### 10.2 Core Web Vitals配慮

#### LCP（Largest Contentful Paint）最適化

```html
<!-- ヒーロー画像は優先的に読み込み -->
<link rel="preload" href="images/hero.jpg" as="image">

<!-- preconnectでDNS事前解決 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Webフォントのdisplay swap -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
```

#### FID（First Input Delay）/ INP改善

```javascript
// 長時間実行タスクの分割
function processItems(items) {
  const batchSize = 50;
  let index = 0;

  function processChunk() {
    const endIndex = Math.min(index + batchSize, items.length);

    for (let i = index; i < endIndex; i++) {
      // アイテム処理
      processItem(items[i]);
    }

    index = endIndex;

    if (index < items.length) {
      // 次のチャンクをスケジュール（メインスレッドを解放）
      requestIdleCallback(processChunk) ||
        setTimeout(processChunk, 0);
    }
  }

  processChunk();
}
```

#### CLS（Cumulative Layout Shift）防止

```css
/* 画像スペース確保 */
img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
}

/* 動的コンテンツ用スペース確保 */
.banner-placeholder {
  min-height: 250px;
  background-color: #f0f0f0;
}

/* フォントの予約スペース */
body {
  font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### 10.3 画像最適化指針

#### 推奨フォーマット

| 種類 | 推奨フォーマット | 用途 |
|------|-----------------|------|
| 写真 | WebP（第二選択: JPEG） | ヒーロー、ギャラリー |
| イラスト | WebP（第二選択: PNG） | アイコン、イラスト |
| ロゴ | SVG | ブランドロゴ |
| アニメーション | AVIF | 動画・アニメ |

#### レスポンシブ画像実装

```html
<img srcset="images/hero-800.jpg 800w,
             images/hero-1200.jpg 1200w,
             images/hero-1920.jpg 1920w"
     sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 90vw,
            80vw"
     src="images/hero-1920.jpg"
     alt="メインビジュアル"
     loading="eager"
     width="1920"
     height="1080"
     decoding="async">
```

#### 圧縮設定

```javascript
// 画像圧縮タスク（参考：Sharp使用）
const sharp = require('sharp');

const compressImage = async (input, output) => {
  await sharp(input)
    .resize(1920, 1080, {
      fit: 'inside',
      withoutEnlargement: true
    })
    .webp({
      quality: 80,
      effort: 4
    })
    .toFile(output);
};
```

### 10.4 CSS最適化

```css
/* Critical CSS（ファーストビュー用インラインCSS） */
/* index.htmlの<style>タグ内に直接記述 */

.hero {
  /* ヒーローセクションのスタイルのみ */
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero h1 {
  /* 主要テキストスタイル */
  font-size: clamp(2rem, 5vw, 4rem);
  color: white;
}

/* 非クリティカルCSSは遅延読み込み */
<link rel="preload" href="css/style.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="css/style.css"></noscript>
```

### 10.5 JavaScript最適化

```html
<!-- deferで解析をブロックせず実行 -->
<script src="js/analytics.js" defer></script>
<script src="js/lazy-load-polyfill.js" defer></script>

<!-- moduleとして読み込む場合 -->
<script type="module" src="js/main.js"></script>
```

### 10.6 パフォーマンスチェックリスト

```markdown
## パフォーマンスチェックリスト

- [ ] ヒーロー画像にloading="eager"、他はloading="lazy"
- [ ] すべての画像にwidth/height属性を指定
- [ ] フォントにdisplay=swapを指定
- [ ] preconnectでDNS事前解決
- [ ] レスポンシブ画像（srcset/sizes）を実装
- [ ] 非同期JavaScript（defer/async）を使用
- [ ] Critical CSSをインライン化
- [ ] iframeにlazy loadingを適用
- [ ] アスペクト比予約（CLS防止）
- [ ] 長時間実行タスクを分割
```

---

## ステップ10.5: コード品質 & UX強化【v2.1追加】

### HTMLバリデーション

#### html-validateによる検証

```bash
# html-validateのインストール
npm install -g html-validate

# バリデーション実行
npx html-validate index.html

# 自動修正（可能な場合）
npx html-validate --fix index.html
```

#### よくあるエラーと修正

| エラー | 原因 | 修正方法 |
|--------|------|----------|
| no-implicit-button-type | buttonにtype属性なし | `<button type="button">` |
| tel-non-breaking | 電話番号に通常ハイフン | `&#8209;` に置換 |
| hidden-focusable | フォーカス可能要素にaria-hidden | aria-hidden削除またはtabindex="-1" |
| element-required-attributes | 必須属性が欠落 | 適切な属性を追加 |

### Toast通知システム（alert()置換）

#### 実装理由
- alert()はスレッドをブロックし、UXを損なう
- カスタムトーストでブランド整合性を維持
- モバイルフレンドリーな通知体験

#### 実装コード（toast.js）

```javascript
(function() {
  'use strict';

  var toastContainer = null;

  function init() {
    toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toastContainer';
      toastContainer.setAttribute('role', 'alert');
      toastContainer.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastContainer);
    }
  }

  function show(message, type, duration) {
    duration = duration || 5000;
    init();

    var toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.setAttribute('role', 'alert');

    // 安全にDOM構築（textContentでXSS防止）
    var messageSpan = document.createElement('span');
    messageSpan.className = 'toast-message';
    messageSpan.textContent = message;
    toast.appendChild(messageSpan);

    var closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.setAttribute('aria-label', '閉じる');
    closeBtn.onclick = function() { toast.remove(); };
    toast.appendChild(closeBtn);

    toastContainer.appendChild(toast);

    setTimeout(function() {
      if (toast.parentElement) {
        toast.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(function() { if (toast.parentElement) toast.remove(); }, 300);
      }
    }, duration);
  }

  window.Toast = {
    success: function(msg, dur) { return show(msg, 'success', dur); },
    error: function(msg, dur) { return show(msg, 'error', dur); },
    info: function(msg, dur) { return show(msg, 'info', dur); }
  };
})();
```

#### CSS実装

```css
.toast-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.toast {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  animation: toastIn 0.3s ease;
}

.toast-success { border-left: 4px solid #10B981; }
.toast-error { border-left: 4px solid #EF4444; }
.toast-info { border-left: 4px solid #2563EB; }

@keyframes toastIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes toastOut {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
}
```

#### HTML配置

```html
<!-- トーストコンテナ -->
<div class="toast-container" id="toastContainer" role="alert" aria-live="polite"></div>

<!-- スクリプト読み込み -->
<script src="js/toast.js" defer></script>
```

### セキュリティヘッダー

```html
<!-- ヘッドセクション内に追加 -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
<meta name="referrer" content="strict-origin-when-cross-origin">
```

### アクセシビリティ強化

#### focus-visible実装

```css
/* キーボードナビゲーション用フォーカス */
:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 2px;
}

/* マウス操作時はフォーカス枠非表示 */
:focus:not(:focus-visible) {
  outline: none;
}
```

#### 電話番号リンク

```html
<!-- 正しい実装 -->
<a href="tel:0120&#8209;123&#8209;456">0120&#8209;123&#8209;456</a>
```

### ローディング状態

#### CSS実装

```css
.btn:disabled,
.btn.btn-loading {
  opacity: 0.7;
  cursor: not-allowed;
  pointer-events: none;
}

.btn.btn-loading {
  position: relative;
  color: transparent;
}

.btn.btn-loading::after {
  content: '';
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  top: 50%;
  left: 50%;
  margin-left: -0.625rem;
  margin-top: -0.625rem;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

#### JavaScript実装

```javascript
// フォーム送信時
submitBtn.classList.add('btn-loading');
submitBtn.disabled = true;

// API呼び出し後
setTimeout(function() {
  submitBtn.classList.remove('btn-loading');
  submitBtn.disabled = false;
}, 1000);
```

### コード品質チェックリスト

```markdown
## コード品質チェックリスト

- [ ] HTMLバリデーション合格
- [ ] console.log削除
- [ ] alert()をToastに置換
- [ ] セキュリティヘッダー実装
- [ ] :focus-visible 実装
- [ ] 電話番号 &#8209; 対応
- [ ] 画像エラーハンドリング実装
- [ ] ボタン ローディング状態実装
```

---

## 既存ステップ（v1からの継承）

### ステップ1: ブレインストーミング

### ステップ2: デザイン仕様策定

### ステップ3: コーディング

### ステップ4: 画像取得

### ステップ5: 評価

### ステップ6: プロフェッショナル化レビュー

### ステップ7: 改善

---

## ステップ11: コミット & デプロイ

### 11.1 Gitコミット

```bash
git add .
git commit -m "feat: LP作成 v2 {テーマ}

- テーマ: {テーマ}
- カテゴリ: {カテゴリ}
- ブランド: {ブランド}
- ターゲット: {ターゲット}

v2追加機能:
- GA4トラッキング実装
- CVイベント計測（問い合わせ、電話、CTA、スクロール）
- 特商法表記ページ
- プライバシーポリシーページ
- パフォーマンス最適化（lazy loading、Core Web Vitals）

Co-Authored-By: Codex Opus 4.6 (1M context) <noreply@anthropic.com>"
```

### 11.2 ローカルサーバー起動

```bash
cd /Users/yuuki/Works/lp-100
python3 -m http.server 8080 > /dev/null 2>&1 &
SERVER_PID=$!
open http://localhost:8080/dayXXX/
```

---

## ディレクトリ構造

```
dayXXX/
├── index.html              # メインHTML
├── legal-act.html          # 特商法表記【v2追加】
├── privacy.html            # プライバシーポリシー【v2追加】
├── css/
│   ├── style.css          # メインスタイルシート
│   ├── legal.css          # 法務ページスタイル【v2追加】
│   └── critical.css       # クリティカルCSS【v2追加】
├── js/
│   ├── script.js          # メインJavaScript
│   ├── analytics.js       # CVトラッキング【v2追加】
│   ├── scroll-tracking.js # スクロール計測【v2追加】
│   └── lazy-load-polyfill.js # Lazy Loading【v2追加】
├── images/                # 画像ディレクトリ
├── analytics-config.json   # GA4設定【v2追加】
└── README.md              # LP概要
```

---

## v2新機能オプトイン/アウト

### オプション無効時の動作

| 機能 | 無効時の動作 | デフォルト |
|------|------------|----------|
| GA4 | プレースホルダーID `G-PLACEHOLDER` を使用 | false |
| 法務ページ | 生成しない | false |
| Lazy Loading | 適用しない | true |
| パフォーマンスCSS | 適用しない | true |

---

## 実装チェックリスト統合

```markdown
## LP作成完了チェックリスト

### 基本機能
- [ ] HTML構築完了
- [ ] CSS実装完了
- [ ] JavaScript実装完了
- [ ] 画像配置完了
- [ ] レスポンシブ確認

### アナリティクス（v2）
- [ ] GA4実装
- [ ] CVトラッキング実装
- [ ] スクロール計測実装

### 法務（v2）
- [ ] 特商法表記作成
- [ ] プライバシーポリシー作成
- [ ] フッターリンク追加

### パフォーマンス（v2）
- [ ] Lazy Loading適用
- [ ] Core Web Vitals対応
- [ ] 画像最適化（WebP、srcset）

### 品質（v2.1追加）
- [ ] HTMLバリデーション（html-validate）合格
- [ ] console.log削除
- [ ] alert()をToast通知に置換
- [ ] 画像エラーハンドリング実装

### セキュリティ（v2.1追加）
- [ ] セキュリティヘッダー実装
  - [ ] X-Content-Type-Options: nosniff
  - [ ] X-Frame-Options: SAMEORIGIN
  - [ ] X-XSS-Protection: 1; mode=block
- [ ] Referrer Policy: strict-origin-when-cross-origin

### アクセシビリティ（v2.1拡張）
- [ ] :focus-visible 実装
- [ ] skip link 強化
- [ ] 電話番号ハイフン（&#8209;）対応
- [ ] 画像altテキスト具体化

### UX（v2.1追加）
- [ ] ボタン ローディング状態実装
- [ ] フォーム送信時のフィードバック
- [ ] トースト通知コンポーネント

### 品質
- [ ] LP評価実施
- [ ] プロフェッショナル化レビュー実施
- [ ] 必要な改善実施

### デプロイ
- [ ] Gitコミット
- [ ] ローカルサーバー確認
```

---

## 改善履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v2.0.0 | 2026-04-16 | **大規模アップデート**<br>- ステップ8「アナリティクス & データ計測」追加<br>- ステップ9「法務コンプライアンス（日本）」追加<br>- ステップ10「パフォーマンス最適化」追加<br>- フローを9ステップから11ステップに拡張 |
| v2.1.0 | 2026-04-17 | **品質 & UX強化**<br>- HTMLバリデーション（html-validate）追加<br>- Toast通知システム実装（alert()置換）<br>- セキュリティヘッダー追加<br>- アクセシビリティ強化（:focus-visible）<br>- ローディング状態実装<br>- 画像エラーハンドリング |
