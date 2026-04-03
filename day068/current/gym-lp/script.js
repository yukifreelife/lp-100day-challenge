// === State ===
const state = {
  isMenuOpen: false,
  isScrolled: false
};

// === Elements ===
const elements = {
  header: document.getElementById('header'),
  hamburger: document.getElementById('hamburger'),
  mobileMenu: document.getElementById('mobileMenu'),
  mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
  faqItems: document.querySelectorAll('.faq-item'),
  contactForm: document.getElementById('contactForm'),
  fadeElements: document.querySelectorAll('.fade-in')
};

// === Header Scroll Effect ===
function updateHeader() {
  const scrollY = window.scrollY;

  if (scrollY > 50 && !state.isScrolled) {
    state.isScrolled = true;
    elements.header.classList.add('scrolled');
  } else if (scrollY <= 50 && state.isScrolled) {
    state.isScrolled = false;
    elements.header.classList.remove('scrolled');
  }
}

// === Mobile Menu ===
function toggleMenu() {
  state.isMenuOpen = !state.isMenuOpen;

  elements.hamburger.classList.toggle('active', state.isMenuOpen);
  elements.mobileMenu.classList.toggle('active', state.isMenuOpen);

  document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
}

function closeMenu() {
  if (state.isMenuOpen) {
    state.isMenuOpen = false;
    elements.hamburger.classList.remove('active');
    elements.mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// === FAQ Accordion ===
function initFAQ() {
  elements.faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      elements.faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active', !isActive);
    });
  });
}

// === Contact Form ===
function handleFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(elements.contactForm);
  const data = Object.fromEntries(formData);

  console.log('Form submitted:', data);

  // Show success message
  alert('体験レッスンの予約を受け付けました！\n担当者より折り返しご連絡いたします。');

  elements.contactForm.reset();
}

// === Intersection Observer for Fade In ===
function initObserver() {
  const options = {
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
  }, options);

  elements.fadeElements.forEach(el => observer.observe(el));
}

// === Smooth Scroll ===
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');

      if (href === '#' || href === '') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        closeMenu();

        const headerHeight = elements.header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// === Initialize ===
function init() {
  // Event listeners
  window.addEventListener('scroll', updateHeader);
  elements.hamburger.addEventListener('click', toggleMenu);
  elements.mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Contact form
  if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', handleFormSubmit);
  }

  // Initialize features
  initFAQ();
  initObserver();
  initSmoothScroll();

  // Initial header state
  updateHeader();
}

// DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
