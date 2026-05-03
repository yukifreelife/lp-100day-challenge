# LP自動作成v2 実装コード例

## 1. アナリティクス実装コード

### GA4基本実装（head内）

```html
<!-- index.htmlのhead内に追加 -->
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

  gtag('event', 'page_view', {
    lp_theme: 'カフェ',
    lp_category: '飲食店',
    lp_version: 'v2.0'
  });
</script>
```

### CVトラッキング実装（analytics.js）

```javascript
// js/analytics.js
document.addEventListener('DOMContentLoaded', function() {
  // CVトラッキング設定
  const cvTracking = {
    contactSubmit: {
      selector: 'form[data-tracking="contact"]',
      eventName: 'contact_submit'
    },
    phoneClick: {
      selector: 'a[href^="tel:"]',
      eventName: 'phone_click'
    },
    ctaClick: {
      selector: '[data-tracking="cta"]',
      eventName: 'cta_click'
    },
    download: {
      selector: 'a[href$=".pdf"], a[href$=".zip"]',
      eventName: 'file_download'
    }
  };

  // 問い合わせ送信
  document.querySelectorAll(cvTracking.contactSubmit.selector).forEach(form => {
    form.addEventListener('submit', function() {
      gtag('event', cvTracking.contactSubmit.eventName, {
        event_category: 'conversion',
        event_label: '問い合わせ送信',
        value: 1
      });
    });
  });

  // 電話クリック
  document.querySelectorAll(cvTracking.phoneClick.selector).forEach(link => {
    link.addEventListener('click', function() {
      gtag('event', cvTracking.phoneClick.eventName, {
        event_category: 'engagement',
        event_label: this.textContent.trim(),
        value: 1
      });
    });
  });

  // CTAクリック
  document.querySelectorAll(cvTracking.ctaClick.selector).forEach(btn => {
    btn.addEventListener('click', function() {
      gtag('event', cvTracking.ctaClick.eventName, {
        event_category: 'engagement',
        event_label: this.textContent.trim(),
        cta_position: this.dataset.position || 'unknown',
        cta_type: this.dataset.type || 'button'
      });
    });
  });

  // 資料ダウンロード
  document.querySelectorAll(cvTracking.download.selector).forEach(link => {
    link.addEventListener('click', function() {
      gtag('event', cvTracking.download.eventName, {
        event_category: 'engagement',
        event_label: this.href.split('/').pop(),
        value: 1
      });
    });
  });
});
```

### スクロール計測実装（scroll-tracking.js）

```javascript
// js/scroll-tracking.js
(function() {
  'use strict';

  const scrollDepths = [25, 50, 75, 90, 100];
  const trackedDepths = new Set();
  let scrollTimer = null;

  const trackScrollDepth = function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const scrollPercentage = Math.round(
      (scrollTop + windowHeight) / docHeight * 100
    );

    scrollDepths.forEach(function(depth) {
      if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
        trackedDepths.add(depth);

        gtag('event', 'scroll_depth', {
          event_category: 'engagement',
          event_label: depth + '%',
          value: depth,
          non_interaction: true
        });

        // デバッグ用
        console.log('Scroll depth tracked:', depth + '%');
      }
    });
  };

  // throttle付きスクロールイベント
  window.addEventListener('scroll', function() {
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(trackScrollDepth, 100);
  });

  // ページ離脱時に100%到達チェック
  window.addEventListener('beforeunload', function() {
    trackScrollDepth();
  });
})();
```

---

## 2. 法務ページ実装コード

### 特商法表記（legal-act.html）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>特定商取引法に基づく表記 | {{brand_name}}</title>
  <link rel="stylesheet" href="css/legal.css">
</head>
<body>
  <header class="legal-header">
    <div class="container">
      <h1>特定商取引法に基づく表記</h1>
      <a href="index.html" class="back-link">← LPに戻る</a>
    </div>
  </header>

  <main class="legal-content">
    <div class="container">
      <dl class="legal-list">
        <div class="legal-item">
          <dt>販売事業者名</dt>
          <dd>{{brand_name}}</dd>
        </div>

        <div class="legal-item">
          <dt>代表責任者</dt>
          <dd>{{representative}}</dd>
        </div>

        <div class="legal-item">
          <dt>所在地</dt>
          <dd>
            〒{{zip_code}}<br>
            {{address}}
          </dd>
        </div>

        <div class="legal-item">
          <dt>連絡先</dt>
          <dd>
            <p>TEL: <a href="tel:{{phone_number_raw}}">{{phone_number}}</a></p>
            <p>EMAIL: <a href="mailto:{{email_address}}">{{email_address}}</a></p>
            <p class="hours">受付時間: {{business_hours}}</p>
          </dd>
        </div>

        <div class="legal-item">
          <dt>販売価格</dt>
          <dd>{{price_description}}</dd>
        </div>

        <div class="legal-item">
          <dt>支払い方法</dt>
          <dd>{{payment_methods}}</dd>
        </div>

        <div class="legal-item">
          <dt>商品の引き渡し時期</dt>
          <dd>{{delivery_timing}}</dd>
        </div>

        <div class="legal-item">
          <dt>返品・キャンセルについて</dt>
          <dd>{{return_policy}}</dd>
        </div>

        <div class="legal-item">
          <dt>動作環境</dt>
          <dd>{{system_requirements}}</dd>
        </div>
      </dl>
    </div>
  </main>

  <footer class="legal-footer">
    <div class="container">
      <p>&copy; 2026 {{brand_name}}. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
```

### プライバシーポリシー（privacy.html）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>プライバシーポリシー | {{brand_name}}</title>
  <link rel="stylesheet" href="css/legal.css">
</head>
<body>
  <header class="legal-header">
    <div class="container">
      <h1>プライバシーポリシー</h1>
      <a href="index.html" class="back-link">← LPに戻る</a>
    </div>
  </header>

  <main class="legal-content">
    <div class="container">
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
        <p>なお、Cookieを無効にすると、一部の機能が正常に動作しない場合があります。</p>
      </article>

      <article class="policy-section">
        <h2>6. 個人情報の開示・訂正・削除</h2>
        <p>お客様は、ご自身の個人情報の開示、訂正、削除を求めることができます。お問い合わせフォームよりご連絡ください。</p>
      </article>

      <article class="policy-section">
        <h2>7. お問い合わせ窓口</h2>
        <p>個人情報に関するお問い合わせは以下までお願いいたします。</p>
        <ul class="contact-info">
          <li>メールアドレス：<a href="mailto:{{email_address}}">{{email_address}}</a></li>
          <li>電話番号：<a href="tel:{{phone_number_raw}}">{{phone_number}}</a></li>
        </ul>
      </article>

      <article class="policy-section">
        <h2>8. プライバシーポリシーの変更</h2>
        <p>当社は、本ポリシーを適宜見直し、その改善に努めます。修正された最新のプライバシーポリシーは常に本ページに開示されます。</p>
      </article>
    </div>
  </main>

  <footer class="legal-footer">
    <div class="container">
      <p>&copy; 2026 {{brand_name}}. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
```

### 法務ページスタイル（legal.css）

```css
/* css/legal.css */
:root {
  --color-primary: #2C5282;
  --color-text: #1A202C;
  --color-text-secondary: #718096;
  --color-bg: #F7FAFC;
  --color-light-gray: #E2E8F0;
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--color-text);
  background-color: var(--color-bg);
  line-height: 1.8;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.legal-header {
  background-color: white;
  border-bottom: 1px solid var(--color-light-gray);
  padding: var(--spacing-lg) 0;
}

.legal-header h1 {
  font-size: var(--font-size-2xl);
  text-align: center;
  margin-bottom: var(--spacing-sm);
}

.back-link {
  display: inline-block;
  text-align: center;
  color: var(--color-primary);
  text-decoration: none;
  margin-top: var(--spacing-sm);
}

.back-link:hover {
  text-decoration: underline;
}

.legal-content {
  padding: var(--spacing-xl) 0;
}

.update-date {
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.legal-list {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
}

.legal-item {
  border-bottom: 1px solid var(--color-light-gray);
}

.legal-item:last-child {
  border-bottom: none;
}

.legal-list dt {
  font-weight: bold;
  padding: var(--spacing-md);
  background-color: #F7FAFC;
  border-left: 4px solid var(--color-primary);
}

.legal-list dd {
  padding: var(--spacing-md);
}

.policy-section {
  background-color: white;
  border-radius: 8px;
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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
  padding: var(--spacing-sm);
  background-color: var(--color-bg);
  border-radius: 4px;
  margin-bottom: var(--spacing-xs);
}

.contact-info a {
  color: var(--color-primary);
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.legal-footer {
  background-color: white;
  border-top: 1px solid var(--color-light-gray);
  padding: var(--spacing-lg) 0;
  text-align: center;
}

.legal-footer p {
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .legal-header h1 {
    font-size: 1.5rem;
  }

  .policy-section h2 {
    font-size: 1.25rem;
  }
}
```

### フッターリンク実装

```html
<!-- index.htmlのfooter内 -->
<footer class="footer">
  <div class="container">
    <div class="footer-links">
      <a href="legal-act.html">特定商取引法に基づく表記</a>
      <span class="divider">|</span>
      <a href="privacy.html">プライバシーポリシー</a>
      <span class="divider">|</span>
      <a href="#contact">お問い合わせ</a>
    </div>
    <p class="copyright">&copy; 2026 {{brand_name}}. All rights reserved.</p>
  </div>
</footer>
```

---

## 3. パフォーマンス最適化コード

### Lazy Loading（lazy-load-polyfill.js）

```javascript
// js/lazy-load-polyfill.js
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  const lazyImages = document.querySelectorAll('img.lazy');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          loadImage(img);
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  } else {
    // フォールバック
    lazyImages.forEach(function(img) {
      loadImage(img);
    });
  }

  function loadImage(img) {
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      img.classList.add('lazy-loaded');
    }
    if (img.dataset.srcset) {
      img.srcset = img.dataset.srcset;
    }
  }
});
```

### Critical CSS（クリティカルCSS例）

```css
/* index.htmlの<style>タグ内にインライン */
/* ファーストビューに必要な最小限のCSS */
:root {
  --color-primary: #2C5282;
  --color-text: #1A202C;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Noto Sans JP', sans-serif;
  line-height: 1.6;
  color: var(--color-text);
}
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.hero h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  color: white;
  text-align: center;
}
.hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### レスポンシブ画像

```html
<img
  srcset="images/hero-800.webp 800w,
          images/hero-1200.webp 1200w,
          images/hero-1920.webp 1920w"
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 90vw,
         80vw"
  src="images/hero-1920.jpg"
  alt="メインビジュアル"
  loading="eager"
  width="1920"
  height="1080"
  decoding="async"
  class="hero-image">
```

### パフォーマンス最適化（style.css追加）

```css
/* css/style.cssに追加 */

/* アスペクト比予約（CLS防止） */
img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
}

/* Lazy Loadingトランジション */
img.lazy {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

img.lazy-loaded {
  opacity: 1;
}

/* フォント読み込み最適化 */
@font-face {
  font-family: 'Noto Sans JP';
  font-display: swap;
  src: local('Noto Sans JP'),
       url('https://fonts.gstatic.com/s/notosansjp/v32/...') format('woff2');
}

/* スクロールバー最適化（Safari） */
* {
  -webkit-overflow-scrolling: touch;
}

/* テキストレンダリング最適化 */
body {
  text-rendering: optimizeLegibility;
  -webkit-font-feature-settings: "kern" 1;
  font-feature-settings: "kern" 1;
}

/* GPUアクセラレーション（アニメーション要素）*/
.hero,
.cta-button,
.fade-in {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

---

## 4. HTML最適化（head内）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO -->
  <meta name="description" content="{{description}}">
  <meta name="keywords" content="{{keywords}}">

  <!-- Open Graph -->
  <meta property="og:title" content="{{title}}">
  <meta property="og:description" content="{{description}}">
  <meta property="og:image" content="{{og_image}}">
  <meta property="og:url" content="{{page_url}}">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{{title}}">
  <meta name="twitter:description" content="{{description}}">
  <meta name="twitter:image" content="{{og_image}}">

  <!-- Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- Preload Hero Image -->
  <link rel="preload" href="images/hero.jpg" as="image">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">

  <!-- GA4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    /* GA4設定 */
  </script>

  <!-- Critical CSS (インライン) -->
  <style>
    /* クリティカルCSS */
  </style>

  <!-- 非クリティカルCSS（遅延読み込み） -->
  <link rel="preload" href="css/style.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="css/style.css"></noscript>

  <title>{{title}}</title>
</head>
```
