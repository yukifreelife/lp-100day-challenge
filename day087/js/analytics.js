/**
 * Analytics & CV Tracking for TERRA LP
 */

(function() {
    'use strict';

    // GA4 Configuration
    const GA4_MEASUREMENT_ID = 'G-PLACEHOLDER'; // Replace with actual GA4 ID

    // Initialize gtag if not already loaded
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    // CV Tracking Configuration
    const cvTracking = {
        mainConversion: {
            eventName: 'contact_submit',
            selector: 'form[data-tracking="contact"]',
            trigger: 'submit'
        },
        phoneCall: {
            eventName: 'phone_click',
            selector: 'a[href^="tel:"]',
            trigger: 'trigger'
        },
        ctaClick: {
            eventName: 'cta_click',
            selector: '[data-tracking="cta"]',
            trigger: 'click'
        }
    };

    // Initialize tracking when DOM is ready
    function initTracking() {
        trackContactSubmit();
        trackPhoneClicks();
        trackCTAClicks();
        trackDownloads();
    }

    // Track contact form submission
    function trackContactSubmit() {
        const contactForms = document.querySelectorAll('#reservationForm');
        contactForms.forEach(function(form) {
            form.addEventListener('submit', function() {
                gtag('event', 'contact_submit', {
                    event_category: 'conversion',
                    event_label: '問い合わせ送信',
                    value: 1
                });

                // Track custom conversion value
                gtag('event', 'conversion', {
                    send_to: GA4_MEASUREMENT_ID,
                    value: 18000,
                    currency: 'JPY'
                });
            });
        });
    }

    // Track phone number clicks
    function trackPhoneClicks() {
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                gtag('event', 'phone_click', {
                    event_category: 'engagement',
                    event_label: this.textContent.trim(),
                    value: 1
                });
            });
        });
    }

    // Track CTA button clicks
    function trackCTAClicks() {
        const ctaButtons = document.querySelectorAll('[data-tracking="cta"]');
        ctaButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                gtag('event', 'cta_click', {
                    event_category: 'engagement',
                    event_label: this.textContent.trim(),
                    cta_position: this.dataset.position || 'unknown',
                    cta_type: this.dataset.type || 'button'
                });
            });
        });
    }

    // Track file downloads
    function trackDownloads() {
        const downloadLinks = document.querySelectorAll('a[href$=".pdf"], a[href$=".zip"]');
        downloadLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                gtag('event', 'file_download', {
                    event_category: 'engagement',
                    event_label: this.href.split('/').pop(),
                    value: 1
                });
            });
        });
    }

    // Export for external use if needed
    window.TerraAnalytics = {
        init: initTracking,
        trackEvent: function(eventName, params) {
            gtag('event', eventName, params);
        }
    };

    // Auto-initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTracking);
    } else {
        initTracking();
    }
})();
