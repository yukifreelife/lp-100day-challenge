/**
 * FLEURISTE MADO - Analytics Tracking
 * GA4イベント計測: CTAクリック、電話番号、スクロール深度
 */

(function() {
  'use strict';

  // ============================================
  // CV Tracking
  // ============================================

  document.addEventListener('DOMContentLoaded', function() {
    // CTAクリック計測
    document.querySelectorAll('[data-tracking="cta"]').forEach(btn => {
      btn.addEventListener('click', function() {
        const trackingData = {
          event_category: 'engagement',
          event_label: this.textContent.trim().slice(0, 50),
          cta_position: this.dataset.position || 'unknown',
          cta_type: this.dataset.type || 'button'
        };

        if (typeof gtag !== 'undefined') {
          gtag('event', 'cta_click', trackingData);
        }
        console.log('[Analytics] CTA clicked:', trackingData);
      });
    });

    // 電話番号クリック計測
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
      link.addEventListener('click', function() {
        const phoneNumber = this.textContent.trim() || this.href.replace('tel:', '');
        const trackingData = {
          event_category: 'engagement',
          event_label: phoneNumber,
          value: 1
        };

        if (typeof gtag !== 'undefined') {
          gtag('event', 'phone_click', trackingData);
        }
        console.log('[Analytics] Phone clicked:', trackingData);
      });
    });

    // 資料ダウンロード計測（PDF/ZIP）
    document.querySelectorAll('a[href$=".pdf"], a[href$=".zip"]').forEach(link => {
      link.addEventListener('click', function() {
        const fileName = this.href.split('/').pop();
        const trackingData = {
          event_category: 'engagement',
          event_label: fileName,
          value: 1
        };

        if (typeof gtag !== 'undefined') {
          gtag('event', 'file_download', trackingData);
        }
        console.log('[Analytics] File download:', trackingData);
      });
    });

    // 問い合わせフォーム送信計測
    document.querySelectorAll('form[data-tracking="contact"]').forEach(form => {
      form.addEventListener('submit', function() {
        const trackingData = {
          event_category: 'conversion',
          event_label: '問い合わせ送信',
          value: 1
        };

        if (typeof gtag !== 'undefined') {
          gtag('event', 'contact_submit', trackingData);
        }
        console.log('[Analytics] Contact form submitted:', trackingData);
      });
    });
  });

  // ============================================
  // Scroll Depth Tracking
  // ============================================

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

          const trackingData = {
            event_category: 'engagement',
            event_label: depth + '%',
            value: depth,
            non_interaction: true
          };

          if (typeof gtag !== 'undefined') {
            gtag('event', 'scroll_depth', trackingData);
          }
          console.log('[Analytics] Scroll depth:', depth + '%');
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
    }, { passive: true });
  })();

  // ============================================
  // Page View Tracking
  // ============================================

  // 初期ページビュー
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      lp_theme: 'fleurist',
      lp_category: 'flower_shop',
      lp_version: 'v1.0'
    });
  }

})();
