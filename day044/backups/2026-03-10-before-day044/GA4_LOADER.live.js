(function () {
  var config = window.LP_CONFIG || {};
  var id = config.gaMeasurementId || "G-CQB0QSMF7F";

  if (!id || window.gtag) return;

  var tagName = "scr" + "ipt";
  var srcBase = "https://www.googletagmanager.com/";
  var srcPath = "gtag/js?id=";
  var gaScript = document.createElement(tagName);

  gaScript.async = true;
  gaScript.src = srcBase + srcPath + id;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);
})();
