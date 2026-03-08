(function () {
var config = window.LP_CONFIG || {};
var id = config.metaPixelId || '871190680965123';
if (!id || window.fbq) return;
var tagName = 'scr' + 'ipt';
var srcBase = 'https://connect.facebook.net/en_US/';
var srcPath = 'fbevents.js';
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
})(window, document, tagName, srcBase + srcPath);
window.fbq('init', id);
window.fbq('track', 'PageView');
})();
