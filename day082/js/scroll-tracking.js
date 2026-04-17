/**
 * FocusFlow LP - Scroll Depth Tracking
 * Tracks user scroll engagement at 25%, 50%, 75%, 90%, 100%
 */

(function() {
  'use strict';

  // スクロール深度設定
  const scrollDepths = [25, 50, 75, 90, 100];
  const trackedDepths = new Set();

  // スクロール深度計測
  function trackScrollDepth() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // スクロール百分比を計算
    const scrollPercentage = Math.round((scrollTop + windowHeight) / docHeight * 100);

    // 各深度をチェック
    scrollDepths.forEach(function(depth) {
      if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
        trackedDepths.add(depth);

        // GA4イベント送信
        if (typeof gtag === 'function') {
          gtag('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: depth + '%',
            value: depth,
            non_interaction: true
          });
        }

        // Analyticsモジュールがあればそちらでも送信
        if (window.FocusFlowAnalytics && typeof window.FocusFlowAnalytics.trackScrollDepth === 'function') {
          window.FocusFlowAnalytics.trackScrollDepth(depth);
        }

        console.log('[ScrollTracking] Depth reached:', depth + '%');
      }
    });
  }

  // スロットル付きスクロールイベント
  let scrollTimer;
  function onScroll() {
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(trackScrollDepth, 100);
  }

  // 初期化
  function init() {
    // スクロールイベントリスナー登録
    window.addEventListener('scroll', onScroll, { passive: true });

    // 初期チェック（ページ読み込み時）
    trackScrollDepth();

    console.log('[ScrollTracking] Initialized - Tracking depths:', scrollDepths);
  }

  // DOMの状態に応じて初期化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 可視性API対応（タブ切り替え時の計測）
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
      // タブがアクティブになった時に現在の深度をチェック
      trackScrollDepth();
    }
  });

})();
