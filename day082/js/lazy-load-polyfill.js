/**
 * FocusFlow LP - Lazy Load Polyfill
 * Intersection Observer API polyfill for older browsers
 * Handles lazy loading of images and iframes
 */

(function() {
  'use strict';

  // Intersection Observer API対応確認
  const hasIntersectionObserver = 'IntersectionObserver' in window;
  const hasNativeLazyLoading = 'loading' in HTMLImageElement.prototype;

  /**
   * Intersection Observerを使用したLazy Loading
   */
  function setupIntersectionObserver() {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;

          // data-src属性から画像を読み込み
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }

          // data-srcset属性がある場合は対応
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }

          // 読み込み完了クラスを追加
          img.classList.remove('lazy');
          img.classList.add('lazy-loaded');

          // 監視を解除
          imageObserver.unobserve(img);

          console.log('[LazyLoad] Image loaded:', img.src);
        }
      });
    }, {
      // ルートマージン（ビューポート外50pxから先読み）
      rootMargin: '50px 0px',
      // 0%以上表示されたらトリガー
      threshold: 0.01
    });

    // 遅延読み込み対象の画像を監視
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });

    console.log('[LazyLoad] Observing', lazyImages.length, 'lazy images');
  }

  /**
   * レガシーブラウザ用フォールバック
   * 全ての画像を即時読み込み
   */
  function setupLegacyFallback() {
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(function(img) {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
      img.classList.remove('lazy');
      img.classList.add('lazy-loaded');
    });
    console.log('[LazyLoad] Legacy fallback loaded', lazyImages.length, 'images');
  }

  /**
   * iframeのLazy Loading
   */
  function setupIframeLazyLoading() {
    if (hasNativeLazyLoading) {
      // ネイティブlazy loadingがある場合はHTML側で対応
      return;
    }

    if (hasIntersectionObserver) {
      const iframeObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const iframe = entry.target;

            if (iframe.dataset.src) {
              iframe.src = iframe.dataset.src;
            }

            iframe.classList.remove('lazy-iframe');
            iframe.classList.add('lazy-loaded');

            iframeObserver.unobserve(iframe);
          }
        });
      }, {
        rootMargin: '100px 0px',
        threshold: 0.01
      });

      const lazyIframes = document.querySelectorAll('iframe.lazy-iframe');
      lazyIframes.forEach(function(iframe) {
        iframeObserver.observe(iframe);
      });
    }
  }

  /**
   * 背景画像のLazy Loading
   */
  function setupBackgroundLazyLoading() {
    if (!hasIntersectionObserver) {
      return;
    }

    const bgObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const element = entry.target;

          if (element.dataset.bg) {
            element.style.backgroundImage = 'url(' + element.dataset.bg + ')';
            element.classList.add('bg-loaded');
          }

          bgObserver.unobserve(element);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    const lazyBgs = document.querySelectorAll('[data-bg]');
    lazyBgs.forEach(function(el) {
      bgObserver.observe(el);
    });
  }

  /**
   * 初期化関数
   */
  function init() {
    // ネイティブlazy loading対応ブラウザでは処理をスキップ
    // ただし、ポリフィルとして機能させるためには実行が必要

    if (hasIntersectionObserver) {
      setupIntersectionObserver();
      setupIframeLazyLoading();
      setupBackgroundLazyLoading();
    } else {
      // レガシーブラウザ用フォールバック
      setupLegacyFallback();
    }

    // ページ読み込み時にすでにビューポート内にある画像を即時ロード
    setTimeout(function() {
      const lazyImages = document.querySelectorAll('img.lazy');
      lazyImages.forEach(function(img) {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // ビューポート内にある場合は即時読み込み
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
          img.classList.remove('lazy');
          img.classList.add('lazy-loaded');
        }
      });
    }, 100);
  }

  // DOMの状態に応じて初期化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 画像読み込みエラーハンドリング
  window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
      e.target.classList.add('img-error');
      console.error('[LazyLoad] Image load error:', e.target.src);
    }
  }, true);

})();
