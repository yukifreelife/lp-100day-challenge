/**
 * Day074 - スマイル歯科
 * Medical Category LP Scripts
 */

// === DOM Elements ===
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// === Navigation ===
// Mobile menu toggle
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Sticky nav background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }

  lastScroll = currentScroll;
});

// === Smooth Scroll ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Skip if it's just "#"
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);

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

// === Intersection Observer for Fade-in Animation ===
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  fadeObserver.observe(el);
});

// Observe scale-up elements
const scaleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scale-up-visible');
      scaleObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.scale-up').forEach(el => {
  scaleObserver.observe(el);
});

// === Menu Tabs ===
const menuTabs = document.querySelectorAll('.menu-tab');
const menuPanels = document.querySelectorAll('.menu-panel');

menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('aria-controls');

    // Remove active from all tabs and panels
    menuTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    menuPanels.forEach(p => p.classList.remove('active'));

    // Add active to clicked tab and target panel
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    document.getElementById(targetId).classList.add('active');
  });
});

// === FAQ Accordion ===
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all FAQ items
    faqItems.forEach(i => i.classList.remove('active'));

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// === Contact Form ===
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Validate
    let isValid = true;

    // Required fields
    const requiredFields = ['name', 'furigana', 'phone', 'email', 'type', 'privacy'];
    requiredFields.forEach(field => {
      if (!data[field] || data[field].trim() === '') {
        isValid = false;
      }
    });

    // Email validation
    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        isValid = false;
        showNotification('正しいメールアドレスを入力してください', 'error');
      }
    }

    // Phone validation (basic)
    if (data.phone) {
      const phoneRegex = /^[0-9\-+\s()]+$/;
      if (!phoneRegex.test(data.phone)) {
        isValid = false;
        showNotification('正しい電話番号を入力してください', 'error');
      }
    }

    if (isValid) {
      // Create mailto link
      const subject = encodeURIComponent(`【Web予約】${data.type}`);
      const body = encodeURIComponent(
        `お名前: ${data.name}\n` +
        `フリガナ: ${data.furigana}\n` +
        `電話番号: ${data.phone}\n` +
        `メールアドレス: ${data.email}\n` +
        `ご相談内容: ${data.type}\n` +
        `お問い合わせ内容:\n${data.message || 'なし'}`
      );

      // Open email client
      window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;

      // Show notification
      showNotification('メールアプリが開きました。送信してください。');

      // Reset form
      contactForm.reset();
    }
  });
}

// === Notification ===
function showNotification(message, type = 'success') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }

  // Create notification
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Show notification
  requestAnimationFrame(() => {
    notification.classList.add('show');
  });

  // Hide after 5 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// === Current Year in Footer ===
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// === Page Load ===
window.addEventListener('DOMContentLoaded', () => {
  // Add loaded class to body
  document.body.classList.add('loaded');

  // Initial check for fade-in elements
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('fade-in-visible');
      }
    });
  }, 100);
});

// === Console Message ===
console.log('%cスマイル歯科 | Day074', 'color: #4A90A4; font-size: 20px; font-weight: bold;');
console.log('%cThis is a demo LP. Not for production use.', 'color: #999; font-size: 12px;');

// === Hero Slideshow ===
document.addEventListener('DOMContentLoaded', function() {
  const slideshow = document.getElementById('heroSlideshow');
  const slides = slideshow?.querySelectorAll('.hero-slide');

  if (slides && slides.length > 0) {
    let currentIndex = 0;
    const intervalTime = 5000; // 5 seconds

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    // Start slideshow
    setInterval(nextSlide, intervalTime);

    // Optional: Pause on hover
    slideshow.addEventListener('mouseenter', () => {
      // Pause logic here if needed
    });

    slideshow.addEventListener('mouseleave', () => {
      // Resume logic here if needed
    });
  }
});
