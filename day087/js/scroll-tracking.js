/**
 * Scroll Depth Tracking for TERRA LP
 */

(function() {
    'use strict';

    // Scroll depth milestones to track
    var scrollDepths = [25, 50, 75, 90, 100];
    var trackedDepths = new Set();
    var scrollTimer = null;

    /**
     * Track scroll depth percentage
     */
    function trackScrollDepth() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var windowHeight = window.innerHeight;
        var docHeight = document.documentElement.scrollHeight;

        var scrollPercentage = Math.round((scrollTop + windowHeight) / docHeight * 100);

        scrollDepths.forEach(function(depth) {
            if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
                trackedDepths.add(depth);

                // Send to GA4
                if (window.gtag) {
                    gtag('event', 'scroll_depth', {
                        event_category: 'engagement',
                        event_label: depth + '%',
                        value: depth,
                        non_interaction: true
                    });
                }

                // Log for development
                console.log('Scroll depth reached: ' + depth + '%');
            }
        });
    }

    /**
     * Throttled scroll event handler
     */
    function onScroll() {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(trackScrollDepth, 100);
    }

    /**
     * Initialize scroll tracking
     */
    function initScrollTracking() {
        // Track initial page view depth
        trackScrollDepth();

        // Add scroll listener
        window.addEventListener('scroll', onScroll, { passive: true });

        // Track depth on page visibility change (for mobile tab switching)
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                trackScrollDepth();
            }
        });
    }

    // Auto-initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollTracking);
    } else {
        initScrollTracking();
    }

    // Export for external use
    window.TerraScrollTracking = {
        init: initScrollTracking,
        getTrackedDepths: function() {
            return Array.from(trackedDepths);
        }
    };
})();
