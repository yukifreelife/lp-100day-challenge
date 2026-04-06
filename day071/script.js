/**
 * ROAST LAB - Script
 * Day071 - Cafe & Roastery LP
 */

// ========================================
// Navigation
// ========================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ========================================
// Smooth Scroll
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = nav.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Menu Tabs
// ========================================
const menuTabs = document.querySelectorAll('.menu-tab');
const menuContents = document.querySelectorAll('.menu-content');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;

        // Reset all fade-in elements first
        const allFadeElements = document.querySelectorAll('.menu-content .fade-in');
        allFadeElements.forEach(el => {
            el.classList.remove('visible');
            el.style.opacity = '';
            el.style.transform = '';
        });

        // Remove active class from all tabs and contents
        menuTabs.forEach(t => t.classList.remove('active'));
        menuContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');

        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
            targetContent.classList.add('active');

            // Trigger fade-in animation for new content
            const fadeElements = targetContent.querySelectorAll('.fade-in');
            fadeElements.forEach(el => {
                // Force reflow
                void el.offsetWidth;
                el.classList.add('visible');
            });
        }
    });
});

// ========================================
// Intersection Observer for Fade-in
// ========================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

// ========================================
// Parallax Effect for Hero
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent && scrolled < window.innerHeight) {
        const parallaxSpeed = 0.3;
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.7));
    }
});

// ========================================
// Gallery Scroll Hint
// ========================================
const galleryScroll = document.querySelector('.gallery-scroll');
const galleryTrack = document.querySelector('.gallery-track');

if (galleryScroll && galleryTrack) {
    // Check if scrollable
    if (galleryTrack.scrollWidth > galleryScroll.clientWidth) {
        // Add scroll hint
        const scrollHint = document.createElement('div');
        scrollHint.className = 'gallery-scroll-hint';
        const hintText = document.createElement('span');
        hintText.textContent = '← スクロールして見る →';
        scrollHint.appendChild(hintText);
        scrollHint.style.cssText = `
            text-align: center;
            padding: 1rem;
            color: var(--color-text-light);
            font-size: 0.875rem;
            animation: pulse 2s infinite;
        `;
        galleryScroll.parentNode.insertBefore(scrollHint, galleryScroll);

        // Hide hint after scrolling
        let hasScrolled = false;
        galleryScroll.addEventListener('scroll', () => {
            if (!hasScrolled && galleryScroll.scrollLeft > 50) {
                scrollHint.style.opacity = '0';
                scrollHint.style.transition = 'opacity 0.3s';
                hasScrolled = true;
            }
        });
    }
}

// ========================================
// Active Section Highlight in Nav
// ========================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - nav.offsetHeight - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// ========================================
// Page Load Animation
// ========================================
window.addEventListener('load', () => {
    // Initial fade-in for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Trigger initial fade-in for visible elements
    const initialFadeElements = document.querySelectorAll('.hero ~ section .fade-in');
    initialFadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            setTimeout(() => {
                el.classList.add('visible');
            }, Math.random() * 200);
        }
    });
});

// ========================================
// Dynamic Year in Footer
// ========================================
const currentYear = new Date().getFullYear();
const footerCopy = document.querySelector('.footer-copy');
if (footerCopy) {
    footerCopy.textContent = `© ${currentYear} ROAST LAB. All rights reserved.`;
}

// ========================================
// FAQ Toggle
// ========================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';

        // Close all other FAQs
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle current FAQ
        question.setAttribute('aria-expanded', !isExpanded);
    });
});
