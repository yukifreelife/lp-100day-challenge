/**
 * Analytics Tracking for 鮨 さかだ LP
 * GA4 Event Tracking Implementation
 */

(function() {
  'use strict';

  /**
   * CVトラッキング - 予約フォーム送信
   */
  const initFormTracking = function() {
    const forms = document.querySelectorAll('form[data-tracking="contact"]');
    forms.forEach(function(form) {
      form.addEventListener('submit', function() {
        gtag('event', 'contact_submit', {
          event_category: 'conversion',
          event_label: '予約送信',
          value: 1
        });
        console.log('[Analytics] Contact form submitted');
      });
    });
  };

  /**
   * 電話クリックトラッキング
   */
  const initPhoneTracking = function() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        gtag('event', 'phone_click', {
          event_category: 'engagement',
          event_label: this.textContent.trim()
        });
        console.log('[Analytics] Phone clicked:', this.textContent.trim());
      });
    });
  };

  /**
   * CTAクリックトラッキング
   */
  const initCTATracking = function() {
    const ctaButtons = document.querySelectorAll('[data-tracking="cta"], .btn-primary');
    ctaButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        // フォーム送信時は除外
        if (this.type === 'submit') return;

        gtag('event', 'cta_click', {
          event_category: 'engagement',
          event_label: this.textContent.trim().replace(/\s+/g, ' ').substring(0, 50)
        });
        console.log('[Analytics] CTA clicked:', this.textContent.trim());
      });
    });
  };

  /**
   * ナビゲーションクリックトラッキング
   */
  const initNavTracking = function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        gtag('event', 'nav_click', {
          event_category: 'navigation',
          event_label: this.textContent.trim()
        });
      });
    });
  };

  /**
   * スムーズスクロールトラッキング
   */
  const initSmoothScrollTracking = function() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || !document.querySelector(targetId)) return;

        gtag('event', 'anchor_click', {
          event_category: 'navigation',
          event_label: targetId.substring(1)
        });
      });
    });
  };

  /**
   * ギャラリー画像クリックトラッキング
   */
  const initGalleryTracking = function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    if (galleryItems.length === 0) return;

    galleryItems.forEach(function(img, index) {
      img.addEventListener('click', function() {
        gtag('event', 'gallery_click', {
          event_category: 'engagement',
          event_label: '画像_' + (index + 1)
        });
      });
    });
  };

  /**
   * お客様の声展开トラッキング
   */
  const initVoiceTracking = function() {
    const voiceItems = document.querySelectorAll('.voice-item');
    if (voiceItems.length === 0) return;

    voiceItems.forEach(function(item, index) {
      item.addEventListener('click', function() {
        gtag('event', 'voice_click', {
          event_category: 'engagement',
          event_label: 'お客様の声_' + (index + 1)
        });
      });
    });
  };

  // 初期化実行
  document.addEventListener('DOMContentLoaded', function() {
    initFormTracking();
    initPhoneTracking();
    initCTATracking();
    initNavTracking();
    initSmoothScrollTracking();
    initGalleryTracking();
    initVoiceTracking();

    console.log('[Analytics] All tracking initialized');
  });

})();
