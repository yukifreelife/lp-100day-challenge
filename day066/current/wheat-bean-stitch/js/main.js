/**
 * ============================================
 *   Artisan Coffee & Grain
 *   Main JavaScript - Interactive Features
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
  const heroCtaLink = document.querySelector('.hero-cta a');

  // Mobile menu elements
  const navContainer = document.querySelector('.nav-container');
  let mobileMenuBtn = null;
  let mobileMenu = null;

  /**
   * ============================================
   *   1. Header Background Change on Scroll
   * ============================================
   */
  const headerScrollThreshold = 50;

  function updateHeaderOnScroll() {
    const scrollY = window.scrollY;

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
   * ============================================
   */
  function smoothScrollTo(targetId) {
    const targetSection = document.querySelector(targetId);

    if (!targetSection) {
      log('Target section not found:', targetId);
      return;
    }

    // Calculate offset (accounting for fixed header)
    const navHeight = nav.offsetHeight;
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navHeight;

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
   * ============================================
   */
  function updateActiveNavLink() {
    const scrollY = window.scrollY;
    const navHeight = nav.offsetHeight;

    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 100;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });

    // Special case for hero section (no id)
    if (scrollY < (sections[0]?.offsetTop || 0) - navHeight - 100) {
      currentSection = 'hero';
    }

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.remove('active');

      if (href === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  /**
   * ============================================
   *   4. Mobile Menu Toggle
   * ============================================
   */
  function createMobileMenu() {
    // Create hamburger button
    mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'nav-mobile-toggle';
    mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation');
    mobileMenuBtn.innerHTML = `
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    `;

    // Create mobile menu overlay
    mobileMenu = document.createElement('div');
    mobileMenu.className = 'nav-mobile-menu';
    mobileMenu.innerHTML = `
      <div class="mobile-menu-inner">
        <div class="mobile-menu-links">
          <a href="#story" class="mobile-nav-link">Story</a>
          <a href="#products" class="mobile-nav-link">Products</a>
          <a href="#news" class="mobile-nav-link">News</a>
          <a href="#access" class="mobile-nav-link">Access</a>
        </div>
        <div class="mobile-menu-buttons">
          <button class="btn btn-primary">Online Shop</button>
          <button class="btn btn-secondary">Reserve</button>
        </div>
      </div>
    `;

    // Append to nav
    navContainer.appendChild(mobileMenuBtn);
    nav.appendChild(mobileMenu);

    // Add event listeners
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        toggleMobileMenu();
      }
    });

    // Handle mobile nav link clicks
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        toggleMobileMenu();
        setTimeout(() => smoothScrollTo(targetId), 300);
      });
    });

    log('Mobile menu created');
  }

  function toggleMobileMenu() {
    const isActive = mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    document.body.classList.toggle('menu-open');

    log('Mobile menu', isActive ? 'opened' : 'closed');
  }

  /**
   * ============================================
   *   5. Intersection Observer for Fade-in Animations
   * ============================================
   */
  const fadeInElements = document.querySelectorAll(
    '.story-content, .story-image-wrapper, .product-card, .card, .article-item, .access-info, .map-container'
  );

  const fadeInObserverOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
        log('Element faded in:', entry.target.className);
      }
    });
  }

  const fadeInObserver = new IntersectionObserver(handleIntersection, fadeInObserverOptions);

  function setupFadeInAnimations() {
    // Add fade-in class to elements
    fadeInElements.forEach(el => {
      el.classList.add('fade-in-animate');
      fadeInObserver.observe(el);
    });

    log('Fade-in animations set up for', fadeInElements.length, 'elements');
  }

  /**
   * ============================================
   *   Scroll Event Handler (throttled)
   * ============================================
   */
  let scrollTicking = false;

  function onScroll() {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        updateHeaderOnScroll();
        updateActiveNavLink();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }

  /**
   * ============================================
   *   Initialize
   * ============================================
   */
  function init() {
    log('Initializing...');

    // Check if mobile menu is needed
    if (window.innerWidth < 768) {
      createMobileMenu();
    }

    // Set up features
    setupSmoothScroll();
    setupFadeInAnimations();

    // Initial header state
    updateHeaderOnScroll();
    updateActiveNavLink();

    // Add scroll listener
    window.addEventListener('scroll', onScroll, { passive: true });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Recreate mobile menu if needed
        if (window.innerWidth < 768 && !mobileMenu) {
          createMobileMenu();
        } else if (window.innerWidth >= 768 && mobileMenu) {
          // Clean up mobile menu on desktop
          if (mobileMenuBtn) mobileMenuBtn.remove();
          if (mobileMenu) mobileMenu.remove();
          mobileMenuBtn = null;
          mobileMenu = null;
          document.body.classList.remove('menu-open');
        }
        updateActiveNavLink();
      }, 250);
    });

    log('Initialization complete');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
