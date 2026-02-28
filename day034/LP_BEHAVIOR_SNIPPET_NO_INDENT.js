(function () {
const config = window.LP_CONFIG || {};
const reservationUrl = config.reservationUrl || 'https://timerex.net/s/bodymake_tokyo_yuta';
const pdfDownloadUrl = config.pdfDownloadUrl || './downloads/food-checklist.pdf';
const leadEndpoint = config.leadEndpoint || 'https://formsubmit.co/ajax/contact@bodymake-yuta.com';
const siteUrl = config.siteUrl || window.location.origin;

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

function initAnalytics() {
if (config.gaMeasurementId) {
const gaScript = document.createElement('script');
gaScript.async = true;
gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.gaMeasurementId}`;
document.head.appendChild(gaScript);

window.dataLayer = window.dataLayer || [];
window.gtag = function () {
window.dataLayer.push(arguments);
};
window.gtag('js', new Date());
window.gtag('config', config.gaMeasurementId);
}

if (config.metaPixelId) {
(function (f, b, e, v, n, t, s) {
if (f.fbq) return;
n = f.fbq = function () {
n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
};
if (!f._fbq) f._fbq = n;
n.push = n;
n.loaded = true;
n.version = '2.0';
n.queue = [];
t = b.createElement(e);
t.async = true;
t.src = v;
s = b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t, s);
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

window.fbq('init', config.metaPixelId);
window.fbq('track', 'PageView');
}
}

function trackEvent(eventName, params) {
if (window.gtag) {
window.gtag('event', eventName, params || {});
}
}

function getStoredUtm() {
try {
const saved = localStorage.getItem('lp_utm');
if (!saved) return {};
return JSON.parse(saved);
} catch (_error) {
return {};
}
}

function collectAndStoreUtm() {
const url = new URL(window.location.href);
const incoming = {};
UTM_KEYS.forEach(function (key) {
const value = url.searchParams.get(key);
if (value) {
incoming[key] = value;
}
});

const merged = { ...getStoredUtm(), ...incoming };
if (Object.keys(merged).length !== 0) {
try {
localStorage.setItem('lp_utm', JSON.stringify(merged));
} catch (_error) {
// ignore
}
}
return merged;
}

function buildTrackedUrl(baseUrl, utm) {
const url = new URL(baseUrl, window.location.origin);
UTM_KEYS.forEach(function (key) {
if (utm[key]) {
url.searchParams.set(key, utm[key]);
}
});
return url.toString();
}

function buildAbsolutePdfUrl() {
return new URL(pdfDownloadUrl, siteUrl).toString();
}

function bindReservationLinks(utm) {
const links = document.querySelectorAll('.js-reservation-link');
links.forEach(function (link) {
const tracked = buildTrackedUrl(reservationUrl, utm);
link.setAttribute('href', tracked);

link.addEventListener('click', function () {
trackEvent('select_counseling_cta', {
event_category: 'engagement',
event_label: 'reservation_link',
destination: tracked,
...utm
});

if (window.fbq) {
window.fbq('trackCustom', 'SelectCounselingCTA', utm);
}
});
});
}

function fillUtmFields(utm) {
UTM_KEYS.forEach(function (key) {
const field = document.getElementById(key.replace('_', '-'));
if (field) {
field.value = utm[key] || '';
}
});
}

function initFaq() {
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function (item) {
const button = item.querySelector('.faq-button');
const answer = item.querySelector('.faq-answer');
if (!button || !answer) return;

button.addEventListener('click', function () {
const expanded = button.getAttribute('aria-expanded') === 'true';

faqItems.forEach(function (otherItem) {
const otherButton = otherItem.querySelector('.faq-button');
const otherAnswer = otherItem.querySelector('.faq-answer');
if (!otherButton || !otherAnswer) return;
otherItem.classList.remove('is-open');
otherButton.setAttribute('aria-expanded', 'false');
otherAnswer.style.maxHeight = '0px';
});

if (!expanded) {
item.classList.add('is-open');
button.setAttribute('aria-expanded', 'true');
answer.style.maxHeight = `${answer.scrollHeight}px`;
}
});
});

if (faqItems.length !== 0) {
const firstItem = faqItems[0];
const firstButton = firstItem.querySelector('.faq-button');
const firstAnswer = firstItem.querySelector('.faq-answer');
if (firstButton && firstAnswer) {
firstItem.classList.add('is-open');
firstButton.setAttribute('aria-expanded', 'true');
firstAnswer.style.maxHeight = `${firstAnswer.scrollHeight}px`;
}
}
}

function initPdfForm(utm) {
const pdfForm = document.querySelector('.pdf-form');
const successBox = document.querySelector('.pdf-success');
const downloadLink = document.querySelector('.pdf-download-link');
const autoresponseField = document.getElementById('pdf-autoresponse');

if (!(pdfForm instanceof HTMLFormElement)) return;
const absolutePdfUrl = buildAbsolutePdfUrl();

if (downloadLink instanceof HTMLAnchorElement) {
downloadLink.setAttribute('href', pdfDownloadUrl);
}
if (autoresponseField instanceof HTMLInputElement) {
autoresponseField.value = `無料PDFのお受け取りありがとうございます。以下URLからダウンロードできます。${absolutePdfUrl}`;
}

pdfForm.addEventListener('submit', async function (event) {
event.preventDefault();
if (!pdfForm.checkValidity()) {
pdfForm.reportValidity();
return;
}

const submitButton = pdfForm.querySelector('button[type="submit"]');
if (!(submitButton instanceof HTMLButtonElement)) return;

const originalLabel = submitButton.textContent || '';
submitButton.disabled = true;
submitButton.textContent = '送信中...';

const formData = new FormData(pdfForm);
formData.set('submitted_at', new Date().toISOString());
formData.set('page_url', window.location.href);
formData.set('pdf_download_url', absolutePdfUrl);
const payload = Object.fromEntries(formData.entries());

try {
let response;
const isFormSubmit = /formsubmit\.co/i.test(leadEndpoint);

if (isFormSubmit) {
response = await fetch(leadEndpoint, {
method: 'POST',
headers: { Accept: 'application/json' },
body: formData
});
} else {
response = await fetch(leadEndpoint, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
});
}

if (!response.ok) {
throw new Error(`Lead endpoint error: ${response.status}`);
}

const responseJson = await response.json().catch(function () {
return null;
});
if (responseJson && typeof responseJson.success !== 'undefined' && !responseJson.success) {
throw new Error('Lead endpoint returned unsuccessful response');
}

trackEvent('generate_lead', {
event_category: 'lead',
event_label: 'pdf_download',
...utm
});

if (window.fbq) {
window.fbq('track', 'Lead', { lead_type: 'pdf_download', ...utm });
}

if (successBox instanceof HTMLElement) {
successBox.hidden = false;
successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
} catch (_error) {
window.alert('送信に失敗しました。時間をおいて再度お試しください。');
} finally {
submitButton.disabled = false;
submitButton.textContent = originalLabel;
}
});
}

initAnalytics();
const utm = collectAndStoreUtm();
fillUtmFields(utm);
bindReservationLinks(utm);
initFaq();
initPdfForm(utm);
})();
