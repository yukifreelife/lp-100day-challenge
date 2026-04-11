/**
 * Simple Space - Main JavaScript
 * 整理収納アドバイザーLP
 */

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// Mobile Menu Toggle
// ===================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
  // Initialize aria-expanded
  navToggle.setAttribute('aria-expanded', 'false');

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    const newState = !isExpanded;

    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', newState.toString());
    navToggle.setAttribute('aria-label', newState ? 'メニューを閉じる' : 'メニューを開く');
  });

  // Close menu when clicking on a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'メニューを開く');
    });
  });
}

// ===================================
// Intersection Observer for Fade-in
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===================================
// FAQ Accordion
// ===================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  if (question) {
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items and reset aria-expanded
      faqItems.forEach(i => {
        i.classList.remove('active');
        const q = i.querySelector('.faq-question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  }
});

// ===================================
// Form Validation
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  // Set minimum date to today
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const privacy = document.getElementById('privacy').checked;

    if (!name || !email || !date || !privacy) {
      showNotification('必須項目を入力してください', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification('有効なメールアドレスを入力してください', 'error');
      return;
    }

    // Show success message (in real app, send to server)
    showNotification('送信しました！24時間以内にご連絡いたします', 'success');
    contactForm.reset();
  });
}

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add styles
  Object.assign(notification.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '16px 24px',
    backgroundColor: type === 'success' ? '#7CB9A8' : '#E57373',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    zIndex: '10000',
    animation: 'slideIn 0.3s ease',
    fontWeight: '500'
  });

  document.body.appendChild(notification);

  // Auto remove after 4 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

// ===================================
// Header Background on Scroll
// ===================================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
  }

  lastScroll = currentScroll;
});

// ===================================
// Before/After Slider
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const sliderContent = document.querySelector('.ba-slider-content');
  const beforeElement = document.querySelector('.ba-before');
  const handle = document.querySelector('.ba-handle');
  const navButtons = document.querySelectorAll('.ba-nav-btn');

  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  let sliderPosition = 50; // Starting position (50%)

  if (!sliderContent || !beforeElement) return;

  // Initialize slider
  updateSlider(sliderPosition);

  // Navigation buttons
  navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Update active button
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      // Switch images based on index
      updateSliderImages(index);
    });
  });

  // Handle dragging
  if (handle) {
    handle.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);

    // Touch events
    handle.addEventListener('touchstart', startDragging);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', stopDragging);
  }

  function startDragging(e) {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    sliderContent.style.cursor = 'grabbing';
  }

  function drag(e) {
    if (!isDragging) return;

    e.preventDefault();
    currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const diffX = currentX - startX;

    // Calculate new position (0-100)
    sliderPosition = Math.max(0, Math.min(100, 50 + (diffX / sliderContent.offsetWidth) * 100));

    updateSlider(sliderPosition);
  }

  function stopDragging() {
    isDragging = false;
    sliderContent.style.cursor = 'ew-resize';
  }

  function updateSlider(position) {
    beforeElement.style.clipPath = `polygon(${position}% 0%, 100% 0%, 100% 100%, ${position}% 100%)`;
    handle.style.left = position + '%';
  }

  function updateSliderImages(index) {
    // Image sets: 0=Closet, 1=Kitchen, 2=Room
    const imageSets = [
      { before: 'images/before1.jpg', after: 'images/after1.jpg' },
      { before: 'images/before2.jpg', after: 'images/after2.jpg' },
      { before: 'images/before3.jpg', after: 'images/after3.jpg' }
    ];

    const beforeImg = document.querySelector('.ba-before img');
    const afterImg = document.querySelector('.ba-after img');

    if (beforeImg && afterImg && imageSets[index]) {
      beforeImg.src = imageSets[index].before;
      afterImg.src = imageSets[index].after;

      // Update alt text based on image set
      const altLabels = ['クローゼット', 'キッチン', '部屋'];
      beforeImg.alt = `Before - ${altLabels[index]}`;
      afterImg.alt = `After - ${altLabels[index]}`;
    }
  }
});

// ===================================
// Initialize
// ===================================
console.log('Simple Space LP loaded');
