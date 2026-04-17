/**
 * Micro-Interactions for 鮨 さかだ LP
 * 3D Card Effects & Parallax
 */

(function() {
  'use strict';

  // ============================================
  // 3D Tilt Effect for Cards
  // ============================================
  var init3DCards = function() {
    var cards = document.querySelectorAll('.voice-card');

    cards.forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        // Check if user prefers reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          return;
        }

        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var rotateX = (y - centerY) / 10;
        var rotateY = (centerX - x) / 10;

        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';
      });

      card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  };

  // ============================================
  // Parallax Effect for Hero
  // ============================================
  var initParallax = function() {
    var hero = document.querySelector('.hero-content');
    if (!hero) return;

    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    window.addEventListener('scroll', function() {
      var scrolled = window.pageYOffset;
      var parallaxSpeed = 0.5;
      hero.style.transform = 'translateY(' + (scrolled * parallaxSpeed) + 'px)';
    }, { passive: true });
  };

  // ============================================
  // Staggered Animation for Grid Items
  // ============================================
  var initStaggeredAnimation = function() {
    var grids = document.querySelectorAll('.features-grid, .course-grid, .gallery-grid');

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var items = entry.target.querySelectorAll('.fade-in');
          items.forEach(function(item, index) {
            setTimeout(function() {
              item.classList.add('fade-in-visible');
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    grids.forEach(function(grid) {
      observer.observe(grid);
    });
  };

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  var initSmoothScroll = function() {
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#' || !document.querySelector(href)) return;

        e.preventDefault();
        var target = document.querySelector(href);
        var headerOffset = 70;
        var elementPosition = target.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
  };

  // ============================================
  // Magnetic Button Effect
  // ============================================
  var initMagneticButtons = function() {
    var buttons = document.querySelectorAll('.btn-primary');

    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    buttons.forEach(function(button) {
      button.addEventListener('mousemove', function(e) {
        var rect = button.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = 'translate(' + (x / 5) + 'px, ' + (y / 5) + 'px)';
      });

      button.addEventListener('mouseleave', function() {
        button.style.transform = 'translate(0, 0)';
      });
    });
  };

  // ============================================
  // Initialize all micro-interactions
  // ============================================
  var init = function() {
    init3DCards();
    initParallax();
    initStaggeredAnimation();
    initSmoothScroll();
    initMagneticButtons();

    console.log('[MicroInteractions] Initialized');
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
