/**
 * Before/After Slider
 * ドラッグで比較するスライダー
 */

export function initBeforeAfterSlider(options = {}) {
  const {
    containerSelector = '.ba-slider-content',
    beforeSelector = '.ba-before',
    afterSelector = '.ba-after',
    handleSelector = '.ba-handle',
    navSelector = '.ba-nav-btn',
    images = []
  } = options;

  const container = document.querySelector(containerSelector);
  const beforeEl = document.querySelector(beforeSelector);
  const afterEl = document.querySelector(afterSelector);
  const handle = document.querySelector(handleSelector);
  const navButtons = document.querySelectorAll(navSelector);

  if (!container || !beforeEl || !afterEl || !handle) return;

  let currentIndex = 0;
  let isDragging = false;
  let sliderPosition = 50;

  // Update images if multiple sets provided
  function updateImages(index) {
    if (!images[index]) return;

    const imgSet = images[index];
    const beforeImg = beforeEl.querySelector('img');
    const afterImg = afterEl.querySelector('img');

    if (beforeImg) {
      beforeImg.src = imgSet.before;
    }
    if (afterImg) {
      afterImg.src = imgSet.after;
    }

    sliderPosition = 50;
    updateSlider(sliderPosition);

    navButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    currentIndex = index;
  }

  // Navigation buttons
  navButtons.forEach((button, index) => {
    button.addEventListener('click', () => updateImages(index));
  });

  // Mouse events
  handle.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', endDrag);

  // Touch events
  handle.addEventListener('touchstart', (e) => startDrag(e.touches[0]));
  document.addEventListener('touchmove', (e) => {
    if (isDragging) {
      e.preventDefault();
      onDrag(e.touches[0]);
    }
  }, { passive: false });
  document.addEventListener('touchend', endDrag);

  // Click to jump
  container.addEventListener('click', (e) => {
    if (e.target !== handle && !handle.contains(e.target)) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      sliderPosition = (x / rect.width) * 100;
      updateSlider(sliderPosition);
    }
  });

  function startDrag(e) {
    isDragging = true;
    container.style.cursor = 'grabbing';
  }

  function onDrag(e) {
    if (!isDragging) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    sliderPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
    updateSlider(sliderPosition);
  }

  function endDrag() {
    isDragging = false;
    container.style.cursor = '';
  }

  function updateSlider(position) {
    beforeEl.style.clipPath = `polygon(${position}% 0%, 100% 0%, 100% 100%, ${position}% 100%)`;
    handle.style.left = `${position}%`;
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      updateImages(currentIndex > 0 ? currentIndex - 1 : (images.length || 1) - 1);
    } else if (e.key === 'ArrowRight') {
      updateImages(currentIndex < (images.length || 1) - 1 ? currentIndex + 1 : 0);
    }
  });
}
