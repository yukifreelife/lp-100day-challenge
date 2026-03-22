/**
 * LP用スクリプト
 */

// スムーズスクロール
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

// フォーム送信時の処理（Contact Form 7連携用プレースホルダー）
// 実際のWordPress実装時には、Contact Form 7のフォームに置き換わります
