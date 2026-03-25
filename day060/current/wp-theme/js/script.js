/**
 * LP用スクリプト
 */

(function() {
    'use strict';

    // DOM読み込み後に実行
    document.addEventListener('DOMContentLoaded', function() {
        // アンカーリンクのスムーズスクロール
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    const offset = 0;

                    window.scrollTo({
                        top: targetPosition - offset,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
})();
