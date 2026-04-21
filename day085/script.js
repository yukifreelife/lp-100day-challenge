/**
 * FRAME by Sato LP - Main Script
 * The Cinematic Aperture
 */

// ========================================
// Navigation Scroll Effect
// ========================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

function handleNavScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
}

// ========================================
// Smooth Scroll for Navigation Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Intersection Observer for Fade-in Animations
// ========================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

function handleIntersection(entries, observer) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, observerOptions);

function observeFadeInElements() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        const parent = el.closest('.pain-grid, .works-grid, .flow-list, .pricing-grid, .faq-list');
        if (parent) {
            const siblings = Array.from(parent.children);
            const elementIndex = siblings.indexOf(el);
            el.dataset.delay = elementIndex * 100;
        }
        observer.observe(el);
    });
}

// ========================================
// FAQ Accordion
// ========================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ========================================
// Initialize on DOM Ready
// ========================================

function init() {
    observeFadeInElements();
    handleNavScroll();
    initFAQ();
}

// ========================================
// Event Listeners
// ========================================

let ticking = false;

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleNavScroll();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', () => {
    observeFadeInElements();
});

// ========================================
// Accessibility: Reduce Motion
// ========================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--section-padding', '60px');
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
}

prefersReducedMotion.addEventListener('change', () => {
    if (prefersReducedMotion.matches) {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }
});

// ========================================
// Console Branding
// ========================================

console.log('%cFRAME by Sato', 'font-family: serif; font-size: 24px; color: #6B4C3B;');
console.log('%cVisual Storytelling', 'font-size: 12px; letter-spacing: 0.2em; color: #888;');
