// ========================================
// State
// ========================================
const state = {
  currentFilter: 'all',
  isMenuOpen: false,
  isModalOpen: false,
};

// ========================================
// Elements
// ========================================
const elements = {
  header: document.getElementById('header'),
  menuBtn: document.getElementById('menuBtn'),
  nav: document.getElementById('nav'),
  galleryTabs: document.querySelectorAll('.gallery-tab'),
  galleryGrid: document.getElementById('galleryGrid'),
  galleryItems: document.querySelectorAll('.gallery-item'),
  modal: document.getElementById('modal'),
  modalOverlay: document.getElementById('modalOverlay'),
  modalClose: document.getElementById('modalClose'),
  modalImage: document.getElementById('modalImage'),
  modalTitle: document.getElementById('modalTitle'),
  modalPrice: document.getElementById('modalPrice'),
};

// ========================================
// FV Gallery infinite scroll setup
// ========================================
const setupFVGallery = () => {
  const fvTrack = document.getElementById('fvTrack');
  if (!fvTrack) return;

  const originalItems = [...fvTrack.children];
  // 無限スクロール用に画像を3セット複製（合計4セット＝32枚）
  // 1セット（8枚）が見えなくなった時点でループ
  for (let i = 0; i < 3; i++) {
    originalItems.forEach(item => {
      const clone = item.cloneNode(true);
      fvTrack.appendChild(clone);
    });
  }

  // 合計32枚、1セット8枚(25%)なので全体で800%
  // -25%で1セット分（200%）ループ
  fvTrack.style.setProperty('--scroll-end', '-25%');
};
setupFVGallery();

// ========================================
// Header scroll effect
// ========================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    elements.header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    elements.header.style.boxShadow = 'none';
  }

  lastScroll = currentScroll;
});

// ========================================
// Mobile menu
// ========================================
elements.menuBtn?.addEventListener('click', () => {
  state.isMenuOpen = !state.isMenuOpen;
  elements.menuBtn.classList.toggle('active', state.isMenuOpen);
  elements.nav.classList.toggle('active', state.isMenuOpen);
  document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
});

// Close menu on link click
elements.nav?.addEventListener('click', (e) => {
  if (e.target.classList.contains('header-nav-link')) {
    state.isMenuOpen = false;
    elements.menuBtn.classList.remove('active');
    elements.nav.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ========================================
// Gallery filter
// ========================================
elements.galleryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;

    // Update active tab
    elements.galleryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Filter items
    elements.galleryItems.forEach(item => {
      const categories = item.dataset.category.split(' ');
      if (filter === 'all' || categories.includes(filter)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// ========================================
// Modal
// ========================================
const openModal = (imageSrc, title, price) => {
  elements.modalImage.src = imageSrc;
  elements.modalImage.alt = title;
  elements.modalTitle.textContent = title;
  elements.modalPrice.textContent = price;
  elements.modal.classList.add('active');
  state.isModalOpen = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  elements.modal.classList.remove('active');
  state.isModalOpen = false;
  document.body.style.overflow = '';
};

// Open modal on gallery item click
elements.galleryItems.forEach(item => {
  const thumb = item.querySelector('.gallery-thumb');
  const img = thumb.querySelector('img');
  const name = item.querySelector('.gallery-name')?.textContent || '';
  const price = item.querySelector('.gallery-price')?.textContent || '';

  thumb.addEventListener('click', () => {
    openModal(img.src, name, price);
  });
});

// Close modal events
elements.modalClose?.addEventListener('click', closeModal);
elements.modalOverlay?.addEventListener('click', closeModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.isModalOpen) {
    closeModal();
  }
});

// ========================================
// Smooth scroll for anchor links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerHeight = elements.header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// Fade-in animation on scroll
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for fade-in
document.querySelectorAll('.menu-item, .gallery-item, .flow-step, .option-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ========================================
// Form submission
// ========================================
const form = document.querySelector('.contact-form form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();

  // Here you would typically send the form data
  // For now, just show a success message
  alert('お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。');
  form.reset();
});
