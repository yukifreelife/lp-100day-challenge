/**
 * Scroll Depth Tracking for 鮨 さかだ LP
 * GA4 Scroll Depth Measurement
 */

(function() {
  'use strict';

  // 計測するスクロール深度（%）
  var scrollDepths = [25, 50, 75, 90, 100];
  var trackedDepths = new Set();

  /**
   * スクロール深度を計測
   */
  var trackScrollDepth = function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollPercentage = Math.round(
      (scrollTop + window.innerHeight) / document.documentElement.scrollHeight * 100
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
        console.log('[ScrollTracking] Depth reached:', depth + '%');
      }
    });
  };

  /**
   * セクション到達トラッキング
   */
  var initSectionTracking = function() {
    var sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;

    var visitedSections = new Set();

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !visitedSections.has(entry.target.id)) {
          visitedSections.add(entry.target.id);
          gtag('event', 'section_view', {
            event_category: 'engagement',
            event_label: entry.target.id,
            non_interaction: true
          });
          console.log('[ScrollTracking] Section viewed:', entry.target.id);
        }
      });
    }, {
      threshold: 0.5 // セクションの50%が見えたら計測
    });

    sections.forEach(function(section) {
      observer.observe(section);
    });
  };

  /**
   * スクロールイベントハンドラ（デバウンス付き）
   */
  var scrollTimer;
  var handleScroll = function() {
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(trackScrollDepth, 100);
  };

  /**
   * セクション滞在時間計測
   */
  var initSectionDwellTime = function() {
    var sections = document.querySelectorAll('section[id]');
    var sectionEnterTimes = new Map();

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var sectionId = entry.target.id;

        if (entry.isIntersecting && !sectionEnterTimes.has(sectionId)) {
          // セクションに入った時刻を記録
          sectionEnterTimes.set(sectionId, Date.now());
        } else if (!entry.isIntersecting && sectionEnterTimes.has(sectionId)) {
          // セクションを出た時、滞在時間を計測
          var dwellTime = Date.now() - sectionEnterTimes.get(sectionId);
          var dwellSeconds = Math.round(dwellTime / 1000);

          if (dwellSeconds >= 3) { // 3秒以上滞在したら計測
            gtag('event', 'section_dwell', {
              event_category: 'engagement',
              event_label: sectionId,
              value: dwellSeconds,
              non_interaction: true
            });
            console.log('[ScrollTracking] Section dwell:', sectionId, dwellSeconds + 's');
          }

          sectionEnterTimes.delete(sectionId);
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(function(section) {
      observer.observe(section);
    });
  };

  // 初期化実行
  document.addEventListener('DOMContentLoaded', function() {
    // スクロール深度計測開始
    window.addEventListener('scroll', handleScroll, { passive: true });
    // 初期計測
    trackScrollDepth();

    // セクショントラッキング開始
    initSectionTracking();
    initSectionDwellTime();

    console.log('[ScrollTracking] Initialized');
  });

})();
