/**
 * Form Validation
 * お問い合わせフォームのバリデーション
 */

export function initFormValidation(formId = 'contactForm') {
  const form = document.getElementById(formId);
  if (!form) return;

  // Set minimum date to tomorrow
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById('name')?.value?.trim(),
      email: document.getElementById('email')?.value?.trim(),
      date: document.getElementById('date')?.value,
      privacy: document.getElementById('privacy')?.checked
    };

    if (!validateForm(data)) {
      return;
    }

    // Success
    showNotification('送信しました！', 'success');
    form.reset();
  });
}

function validateForm(data) {
  if (!data.name) {
    showNotification('お名前を入力してください', 'error');
    return false;
  }

  if (!data.email) {
    showNotification('メールアドレスを入力してください', 'error');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    showNotification('有効なメールアドレスを入力してください', 'error');
    return false;
  }

  if (!data.date) {
    showNotification('ご希望日を選択してください', 'error');
    return false;
  }

  if (!data.privacy) {
    showNotification('プライバシーポリシーに同意してください', 'error');
    return false;
  }

  return true;
}

export function showNotification(message, type = 'info') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}
