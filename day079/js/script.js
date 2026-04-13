/**
 * Day079 - 子ども向けプログラミング教室LP
 * JavaScript
 */

'use strict';

// ============================================
// State Management
// ============================================
const state = {
  isMobileMenuOpen: false,
  currentTab: 'beginner',
  currentVoiceTab: 'parent',
  activeFaq: null
};

// ============================================
// Mobile Navigation
// ============================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMobileMenu() {
  state.isMobileMenuOpen = !state.isMobileMenuOpen;

  mobileMenuBtn.setAttribute('aria-expanded', state.isMobileMenuOpen);
  mobileMenuBtn.classList.toggle('active');
  mobileNav.classList.toggle('active');

  if (state.isMobileMenuOpen) {
    mobileMenuBtn.setAttribute('aria-label', 'メニューを閉じる');
    document.body.style.overflow = 'hidden';
  } else {
    mobileMenuBtn.setAttribute('aria-label', 'メニューを開く');
    document.body.style.overflow = '';
  }
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Close mobile nav on link click
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (state.isMobileMenuOpen) {
      toggleMobileMenu();
    }
  });
});

// ============================================
// Header Scroll Effect
// ============================================
const header = document.getElementById('header');
let lastScrollY = 0;

function handleScroll() {
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  lastScrollY = scrollY;
}

window.addEventListener('scroll', handleScroll, { passive: true });

// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');

    if (href === '#' || href === '#main-content' || href === '#privacy') {
      return;
    }

    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      const headerHeight = header ? header.offsetHeight : 70;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Close mobile nav if open
      if (state.isMobileMenuOpen) {
        toggleMobileMenu();
      }
    }
  });
});

// ============================================
// Curriculum Tabs
// ============================================
const curriculumTabs = document.querySelectorAll('.curriculum-tab');
const curriculumContents = document.querySelectorAll('.curriculum-content');

function switchCurriculumTab(level) {
  state.currentTab = level;

  // Update tabs
  curriculumTabs.forEach(tab => {
    const isActive = tab.dataset.level === level;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-pressed', String(isActive));
  });

  // Update content
  curriculumContents.forEach(content => {
    content.classList.toggle('active', content.id === level);
  });
}

curriculumTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const level = tab.dataset.level;
    if (level !== state.currentTab) {
      switchCurriculumTab(level);
    }
  });
});

// ============================================
// Voice Tabs
// ============================================
const voiceTabs = document.querySelectorAll('.voice-tab');
const voiceContents = document.querySelectorAll('.voice-content');

function switchVoiceTab(target) {
  state.currentVoiceTab = target;

  // Update tabs
  voiceTabs.forEach(tab => {
    const isActive = tab.dataset.target === target;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-pressed', String(isActive));
  });

  // Update content
  voiceContents.forEach(content => {
    content.classList.toggle('active', content.id === target);
  });
}

voiceTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;
    if (target !== state.currentVoiceTab) {
      switchVoiceTab(target);
    }
  });
});

// ============================================
// FAQ Accordion
// ============================================
const faqQuestions = document.querySelectorAll('.faq-question');

function toggleFaq(question) {
  const isActive = question.classList.contains('active');
  const answer = question.nextElementSibling;

  // Close all other FAQs
  faqQuestions.forEach(q => {
    if (q !== question && q.classList.contains('active')) {
      q.classList.remove('active');
      q.setAttribute('aria-expanded', 'false');
      q.nextElementSibling.classList.remove('active');
    }
  });

  // Toggle current FAQ
  if (isActive) {
    question.classList.remove('active');
    question.setAttribute('aria-expanded', 'false');
    answer.classList.remove('active');
    state.activeFaq = null;
  } else {
    question.classList.add('active');
    question.setAttribute('aria-expanded', 'true');
    answer.classList.add('active');
    state.activeFaq = question;
  }
}

faqQuestions.forEach(question => {
  question.addEventListener('click', () => toggleFaq(question));
});

// ============================================
// Form Validation
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    let isValid = true;

    // Reset errors
    contactForm.querySelectorAll('.error-message').forEach(el => el.remove());
    contactForm.querySelectorAll('.has-error').forEach(el => {
      el.classList.remove('has-error');
      el.style.borderColor = '';
    });

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'childName'];

    requiredFields.forEach(fieldName => {
      const field = contactForm.querySelector(`[name="${fieldName}"]`);
      const value = formData.get(fieldName);

      if (!value || value.trim() === '') {
        showError(field, 'この項目は必須です');
        isValid = false;
      }
    });

    // Validate email
    const emailField = contactForm.querySelector('[name="email"]');
    const emailValue = formData.get('email');

    if (emailValue && !isValidEmail(emailValue)) {
      showError(emailField, '有効なメールアドレスを入力してください');
      isValid = false;
    }

    // Validate phone
    const phoneField = contactForm.querySelector('[name="phone"]');
    const phoneValue = formData.get('phone');

    if (phoneValue && !isValidPhone(phoneValue)) {
      showError(phoneField, '有効な電話番号を入力してください（例：090-1234-5678）');
      isValid = false;
    }

    // Validate privacy checkbox
    const privacyField = contactForm.querySelector('[name="privacy"]');
    if (!privacyField.checked) {
      showError(privacyField, 'プライバシーポリシーに同意してください');
      isValid = false;
    }

    if (isValid) {
      showSuccessMessage();
      contactForm.reset();
    }
  });
}

function showError(field, message) {
  field.classList.add('has-error');
  field.style.borderColor = 'var(--color-danger)';

  const error = document.createElement('span');
  error.className = 'error-message';
  error.textContent = message;
  error.style.color = '#EF4444';
  error.style.fontSize = 'var(--font-size-sm)';
  error.style.display = 'block';
  error.style.marginTop = 'var(--spacing-xs)';

  field.parentNode.appendChild(error);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^(0\d{1,4}-?\d{1,4}-?\d{3,4})$/;
  return phoneRegex.test(phone.replace(/[－‐]/g, '-'));
}

function showSuccessMessage() {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.innerHTML = `
    <div style="
      background: var(--color-success);
      color: white;
      padding: var(--spacing-lg);
      border-radius: var(--border-radius-md);
      text-align: center;
      margin-bottom: var(--spacing-lg);
    ">
      <strong>送信完了しました！</strong><br>
      2営業日以内にご連絡いたします。
    </div>
  `;

  contactForm.parentNode.insertBefore(successDiv, contactForm);

  successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

  setTimeout(() => {
    successDiv.remove();
  }, 5000);
}

// ============================================
// Countdown Timer
// ============================================
const campaignTimer = document.getElementById('campaignTimer');
const countdownElements = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};

// Set campaign end date (7 days from now for demo)
const campaignEndDate = new Date();
campaignEndDate.setDate(campaignEndDate.getDate() + 7);
campaignEndDate.setHours(23, 59, 59, 999);

function updateCountdown() {
  const now = new Date();
  const diff = campaignEndDate - now;

  if (diff <= 0) {
    // Campaign ended
    Object.values(countdownElements).forEach(el => {
      if (el) el.textContent = '00';
    });
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (countdownElements.days) countdownElements.days.textContent = String(days).padStart(2, '0');
  if (countdownElements.hours) countdownElements.hours.textContent = String(hours).padStart(2, '0');
  if (countdownElements.minutes) countdownElements.minutes.textContent = String(minutes).padStart(2, '0');
  if (countdownElements.seconds) countdownElements.seconds.textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Show timer after a delay for attention
setTimeout(() => {
  if (campaignTimer) {
    campaignTimer.classList.add('visible');
    if (header) header.classList.add('has-timer');
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('has-timer');
  }
}, 2000);

// ============================================
// Floating CTA (Mobile)
// ============================================
const floatingCta = document.getElementById('floatingCta');
let lastScrollY = 0;
let floatingCtaShown = false;

function handleFloatingCta() {
  const scrollY = window.scrollY;
  const heroSection = document.querySelector('.hero');
  const heroBottom = heroSection ? heroSection.offsetTop + heroSection.offsetHeight : 600;

  // Show after scrolling past hero section
  if (scrollY > heroBottom && !floatingCtaShown) {
    floatingCtaShown = true;
    if (floatingCta) floatingCta.classList.add('visible');
  } else if (scrollY < heroBottom && floatingCtaShown) {
    floatingCtaShown = false;
    if (floatingCta) floatingCta.classList.remove('visible');
  }

  lastScrollY = scrollY;
}

window.addEventListener('scroll', handleFloatingCta, { passive: true });

// ============================================
// Fade In Animation (Intersection Observer)
// ============================================
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe elements
function observeFadeInElements() {
  const fadeElements = document.querySelectorAll(
    '.problem-card, .feature-card, .benefit-card, .voice-card, .price-card, .timeline-item'
  );

  fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  observeFadeInElements();

  // Set initial states
  if (curriculumTabs.length > 0) {
    switchCurriculumTab('beginner');
  }

  if (voiceTabs.length > 0) {
    switchVoiceTab('parent');
  }
});
