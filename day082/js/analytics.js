/**
 * FocusFlow LP - Analytics & CV Tracking
 * GA4 Conversion Tracking Implementation
 */

(function() {
  'use strict';

  // CVトラッキング設定
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

  // 初期化関数
  function initTracking() {
    // DOMが読み込まれたら実行
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupTracking);
    } else {
      setupTracking();
    }
  }

  // トラッキング設定
  function setupTracking() {
    // メインCV（問い合わせ送信）
    setupContactTracking();

    // 電話CV
    setupPhoneTracking();

    // CTAクリック
    setupCTATracking();

    // 資料ダウンロード
    setupDownloadTracking();

    // ページビュー（カスタム）
    trackPageView();
  }

  // 問い合わせ送信トラッキング
  function setupContactTracking() {
    const contactForms = document.querySelectorAll(cvTracking.mainConversion.selector);
    contactForms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        // フォーム検証
        if (!form.checkValidity()) {
          return;
        }

        // GA4イベント送信
        if (typeof gtag === 'function') {
          gtag('event', cvTracking.mainConversion.eventName, {
            event_category: 'conversion',
            event_label: '問い合わせ送信',
            value: 1
          });
        }

        // コンソールログ（開発用）
        console.log('[Analytics] Contact form submitted');
      });
    });
  }

  // 電話番号クリックトラッキング
  function setupPhoneTracking() {
    const phoneLinks = document.querySelectorAll(cvTracking.phoneCall.selector);
    phoneLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        const phoneNumber = this.textContent.trim() || this.href;

        if (typeof gtag === 'function') {
          gtag('event', cvTracking.phoneCall.eventName, {
            event_category: 'engagement',
            event_label: phoneNumber,
            value: 1
          });
        }

        console.log('[Analytics] Phone clicked:', phoneNumber);
      });
    });
  }

  // CTAクリックトラッキング
  function setupCTATracking() {
    const ctaButtons = document.querySelectorAll(cvTracking.ctaClick.selector);
    ctaButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const ctaText = this.textContent.trim();
        const ctaPosition = this.dataset.position || 'unknown';
        const ctaType = this.dataset.type || 'button';

        if (typeof gtag === 'function') {
          gtag('event', cvTracking.ctaClick.eventName, {
            event_category: 'engagement',
            event_label: ctaText,
            cta_position: ctaPosition,
            cta_type: ctaType,
            value: 1
          });
        }

        console.log('[Analytics] CTA clicked:', {
          text: ctaText,
          position: ctaPosition,
          type: ctaType
        });
      });
    });
  }

  // 資料ダウンロードトラッキング
  function setupDownloadTracking() {
    const downloadLinks = document.querySelectorAll(cvTracking.download.selector);
    downloadLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        const fileName = this.href.split('/').pop();

        if (typeof gtag === 'function') {
          gtag('event', cvTracking.download.eventName, {
            event_category: 'engagement',
            event_label: fileName,
            value: 1
          });
        }

        console.log('[Analytics] File download:', fileName);
      });
    });
  }

  // カスタムページビュー
  function trackPageView() {
    if (typeof gtag === 'function') {
      // LP固有のカスタムディメンション
      gtag('event', 'page_view', {
        lp_theme: 'productivity-saas',
        lp_category: 'b2c',
        lp_version: 'v2.0',
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }

  // スクロール深度イベント（外部ファイルから呼び出し用）
  function trackScrollDepth(depth) {
    if (typeof gtag === 'function') {
      gtag('event', 'scroll_depth', {
        event_category: 'engagement',
        event_label: depth + '%',
        value: depth,
        non_interaction: true
      });
    }
  }

  // グローバルスコープに公開（必要な場合）
  window.FocusFlowAnalytics = {
    trackScrollDepth: trackScrollDepth
  };

  // 初期化実行
  initTracking();

})();
