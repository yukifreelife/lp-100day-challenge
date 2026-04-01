/**
 * ============================================
 *   Artisan Coffee & Grain
 *   Main JavaScript - Interactive Features
 *   Enhanced with improved interactions
 * ============================================
 */

(function() {
  'use strict';

  // Debug logging
  const DEBUG = true;
  const log = (...args) => {
    if (DEBUG) console.log('[Artisan JS]', ...args);
  };

  log('Script initialized');

  /**
   * ============================================
   *   DOM Elements
   * ============================================
   */
  const nav = document.querySelector('.glass-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const heroSection = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  const heroBg = document.querySelector('.hero-bg');

  // Mobile menu elements
  const navContainer = document.querySelector('.nav-container');
  let mobileMenuBtn = null;
  let mobileMenu = null;

  // Track scroll direction for enhanced effects
  let lastScrollY = 0;
  let scrollDirection = 'down';

  /**
   * ============================================
   *   1. Header Background Change on Scroll
   *   Enhanced with scroll direction detection
   * ============================================
   */
  const headerScrollThreshold = 50;
  const headerHideThreshold = 100;

  function updateHeaderOnScroll() {
    const scrollY = window.scrollY;

    // Determine scroll direction
    if (scrollY > lastScrollY) {
      scrollDirection = 'down';
    } else {
      scrollDirection = 'up';
    }
    lastScrollY = scrollY;

    if (scrollY > headerScrollThreshold) {
      nav.classList.add('scrolled');
      nav.style.background = 'rgba(252, 249, 244, 0.95)';
      nav.style.boxShadow = '0 1px 3px rgba(28, 28, 25, 0.1)';
    } else {
      nav.classList.remove('scrolled');
      nav.style.background = 'rgba(252, 249, 244, 0.85)';
      nav.style.boxShadow = 'none';
    }
  }

  /**
   * ============================================
   *   2. Smooth Scroll Navigation
   *   Enhanced with better offset calculation
   * ============================================
   */
  function smoothScrollTo(targetId) {
    const targetSection = document.querySelector(targetId);

    if (!targetSection) {
      log('Target section not found:', targetId);
      return;
    }

    // Calculate offset (accounting for fixed header)
    const navHeight = nav ? nav.offsetHeight : 0;
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navHeight - 20;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    log('Scrolled to:', targetId);
  }

  // Set up smooth scroll for all anchor links
  function setupSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          toggleMobileMenu();
        }

        smoothScrollTo(targetId);
      });
    });

    log('Smooth scroll enabled for', anchorLinks.length, 'links');
  }

  /**
   * ============================================
   *   3. Active Nav Link Highlighting on Scroll
   *   Enhanced with visual feedback
   * ============================================
   */
  function updateActiveNavLink() {
    const scrollY = window.scrollY;
    const navHeight = nav ? nav.offsetHeight : 0;
    const windowHeight = window.innerHeight;

    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 100;
      const sectionBottom = sectionTop + section.offsetHeight;

      // Check if section is in view
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });

    // Special case for hero section (no id)
    if (scrollY < (sections[0]?.offsetTop || windowHeight) - navHeight - 100) {
      currentSection = 'hero';
    }

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const wasActive = link.classList.contains('active');

      link.classList.remove('active');

      if (href === `#${currentSection}`) {
        link.classList.add('active');

        // Add visual feedback if this is a newly active link
        if (!wasActive && href !== '#hero') {
          link.style.transform = 'translateY(-2px)';
          setTimeout(() => {
            link.style.transform = '';
          }, 300);
        }
      }
    });
  }

  /**
   * ============================================
   *   4. Mobile Menu Toggle
   *   Enhanced with accessibility and keyboard support
   *   Uses HTML-based menu (not dynamically created)
   * ============================================
   */
  function setupMobileMenu() {
    // Get existing menu elements from HTML
    mobileMenuBtn = document.querySelector('.nav-mobile-toggle');
    mobileMenu = document.querySelector('.nav-mobile-menu');

    if (!mobileMenuBtn || !mobileMenu) {
      log('Mobile menu elements not found in HTML');
      return;
    }

    // Add event listener to toggle button
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        toggleMobileMenu();
      }
    });

    // Handle mobile nav link clicks
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach((link, index) => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        toggleMobileMenu();
        // Wait for menu to close before scrolling
        setTimeout(() => smoothScrollTo(targetId), 350);
      });

      // Add staggered animation on menu open
      link.style.transitionDelay = `${index * 50}ms`;
    });

    // Keyboard support
    document.addEventListener('keydown', handleKeyboard);

    log('Mobile menu setup complete');
  }

  function toggleMobileMenu() {
    if (!mobileMenu || !mobileMenuBtn) return;

    const isActive = mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');

    // Update ARIA attributes
    mobileMenuBtn.setAttribute('aria-expanded', isActive);
    mobileMenu.setAttribute('aria-hidden', !isActive);

    // Body scroll lock with saved scroll position
    if (isActive) {
      document.body.classList.add('menu-open');
      document.body.style.top = `-${window.scrollY}px`;
      // Focus first link in menu
      setTimeout(() => {
        const firstLink = mobileMenu.querySelector('.mobile-nav-link');
        if (firstLink) firstLink.focus();
      }, 100);
    } else {
      const scrollY = parseInt(document.body.style.top || '0');
      document.body.classList.remove('menu-open');
      document.body.style.top = '';
      window.scrollTo(0, -scrollY);
      // Return focus to toggle button
      mobileMenuBtn.focus();
    }

    log('Mobile menu', isActive ? 'opened' : 'closed');
  }

  function handleKeyboard(e) {
    if (!mobileMenu || !mobileMenu.classList.contains('active')) return;

    // Close on Escape
    if (e.key === 'Escape') {
      toggleMobileMenu();
      return;
    }

    // Trap focus within menu
    if (e.key === 'Tab') {
      const focusableElements = mobileMenu.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  /**
   * ============================================
   *   5. Intersection Observer for Fade-in Animations
   *   Enhanced with staggered animations
   * ============================================
   */
  const fadeInElements = document.querySelectorAll(
    '.story-content, .story-image-wrapper, .product-card, .card, .article-item, .access-info, .map-container'
  );

  const fadeInObserverOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.15
  };

  function handleIntersection(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const target = entry.target;

        // Add visible class with staggered delay for grid items
        if (target.classList.contains('product-card') ||
            target.classList.contains('article-item')) {
          const siblings = Array.from(target.parentNode.children);
          const indexInGrid = siblings.indexOf(target);
          target.style.transitionDelay = `${indexInGrid * 100}ms`;
        }

        target.classList.add('fade-in-visible');

        // Remove inline transition delay after animation completes
        setTimeout(() => {
          target.style.transitionDelay = '';
        }, 700);

        observer.unobserve(target);
        log('Element faded in:', target.className);
      }
    });
  }

  const fadeInObserver = new IntersectionObserver(handleIntersection, fadeInObserverOptions);

  function setupFadeInAnimations() {
    fadeInElements.forEach(el => {
      el.classList.add('fade-in-animate');
      fadeInObserver.observe(el);
    });

    log('Fade-in animations set up for', fadeInElements.length, 'elements');
  }

  /**
   * ============================================
   *   6. Parallax Effect on Hero Section
   *   Subtle parallax for premium feel
   * ============================================
   */
  function updateParallax() {
    if (!heroBg || !heroContent) return;

    const scrollY = window.scrollY;
    const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;

    // Only apply parallax within hero section
    if (scrollY < heroHeight) {
      const parallaxSpeed = 0.4;
      const parallaxOffset = scrollY * parallaxSpeed;

      heroBg.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;
      heroContent.style.transform = `translate3d(0, ${parallaxOffset * 0.5}px, 0)`;
      heroContent.style.opacity = 1 - (scrollY / (heroHeight * 0.7));
    }
  }

  /**
   * ============================================
   *   Scroll Event Handler (throttled)
   *   Enhanced with parallax
   * ============================================
   */
  let scrollTicking = false;

  function onScroll() {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        updateHeaderOnScroll();
        updateActiveNavLink();
        updateParallax();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }

  /**
   * ============================================
   *   Enhanced Intersection Observer for Grid Items
   *   Separate observer for staggered grid animations
   * ============================================
   */
  function setupGridAnimations() {
    const productsGrid = document.querySelector('.products-grid');
    const articleList = document.querySelector('.article-list');

    if (productsGrid) {
      const productCards = productsGrid.querySelectorAll('.product-card');
      productCards.forEach((card, index) => {
        card.style.setProperty('--stagger-delay', `${index * 100}ms`);
      });
    }

    if (articleList) {
      const articles = articleList.querySelectorAll('.article-item');
      articles.forEach((article, index) => {
        article.style.setProperty('--stagger-delay', `${index * 150}ms`);
      });
    }

    log('Grid animations configured');
  }

  /**
   * ============================================
   *   Visual Feedback for Active Links
   *   Add ripple effect on click
   * ============================================
   */
  function setupLinkFeedback() {
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.cssText = `
          position: absolute;
          width: 100%;
          height: 2px;
          background: var(--color-secondary, #7d562d);
          bottom: 0;
          left: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        `;
        this.style.position = 'relative';
        this.appendChild(ripple);

        // Animate ripple
        requestAnimationFrame(() => {
          ripple.style.transform = 'scaleX(1)';
        });

        // Clean up after animation
        setTimeout(() => {
          ripple.style.opacity = '0';
          setTimeout(() => ripple.remove(), 300);
        }, 300);
      });
    });

    log('Link feedback effects added');
  }

  /**
   * ============================================
   *   Initialize
   *   Enhanced with all features
   * ============================================
   */
  function init() {
    log('Initializing...');

    // Set up mobile menu (exists in HTML, just needs event listeners)
    setupMobileMenu();

    // Set up all features
    setupSmoothScroll();
    setupFadeInAnimations();
    setupGridAnimations();
    setupLinkFeedback();

    // Initial header state
    updateHeaderOnScroll();
    updateActiveNavLink();

    // Add scroll listener with passive for better performance
    window.addEventListener('scroll', onScroll, { passive: true });

    // Handle window resize with debounce
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Close mobile menu if switching to desktop
        if (window.innerWidth >= 768 && mobileMenu && mobileMenu.classList.contains('active')) {
          toggleMobileMenu();
        }
        updateActiveNavLink();
      }, 250);
    });

    // Add reveal animation on page load
    document.body.classList.add('page-loaded');
    setTimeout(() => {
      document.body.classList.add('page-animated');
    }, 100);

    log('Initialization complete');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for potential external use
  window.ArtisanJS = {
    scrollTo: smoothScrollTo,
    toggleMenu: () => mobileMenu && toggleMobileMenu(),
    refresh: updateActiveNavLink
  };

})();
