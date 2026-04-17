/**
 * Cookie Consent Banner for 鮨 さかだ LP
 * GDPR/CCPA対応
 */

(function() {
  'use strict';

  var STORAGE_KEY = 'cookie_consent';
  var banner = document.getElementById('cookieBanner');
  var acceptBtn = document.getElementById('cookieAccept');

  // Check if user has already consented
  var hasConsented = localStorage.getItem(STORAGE_KEY);

  /**
   * Hide the cookie banner
   */
  var hideBanner = function() {
    if (banner) {
      banner.style.display = 'none';
    }
  };

  /**
   * Save consent to localStorage
   */
  var saveConsent = function() {
    localStorage.setItem(STORAGE_KEY, 'true');
    localStorage.setItem(STORAGE_KEY + '_date', new Date().toISOString());
  };

  /**
   * Handle accept button click
   */
  var handleAccept = function() {
    saveConsent();
    hideBanner();

    // Track consent event if GA4 is available
    if (typeof gtag === 'function') {
      gtag('event', 'cookie_consent', {
        event_category: 'engagement',
        event_label: 'accepted'
      });
    }
  };

  /**
   * Initialize cookie banner
   */
  var init = function() {
    // If already consented, don't show banner
    if (hasConsented) {
      hideBanner();
      return;
    }

    // Show banner after a short delay for better UX
    setTimeout(function() {
      if (banner) {
        banner.classList.add('cookie-banner-visible');
      }
    }, 1000);

    // Bind accept button
    if (acceptBtn) {
      acceptBtn.addEventListener('click', handleAccept);
    }
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
