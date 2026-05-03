import { useEffect } from "react";

function upsertMeta(attribute, key, value) {
  if (!value) return;

  let node = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attribute, key);
    document.head.appendChild(node);
  }
  node.setAttribute("content", value);
}

function upsertCanonical(url) {
  let node = document.head.querySelector('link[rel="canonical"]');
  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", "canonical");
    document.head.appendChild(node);
  }
  node.setAttribute("href", url);
}

function upsertJsonLd(data) {
  let node = document.head.querySelector("#structured-data");
  if (!node) {
    node = document.createElement("script");
    node.id = "structured-data";
    node.type = "application/ld+json";
    document.head.appendChild(node);
  }
  node.textContent = JSON.stringify(data);
}

function buildJsonLd({ siteData, page, canonicalUrl, pageKey }) {
  return {
    "@context": "https://schema.org",
    "@type": pageKey === "contact" ? "ContactPage" : "WebPage",
    name: page.metaTitle,
    description: page.metaDescription ?? siteData.brand.description,
    url: canonicalUrl,
    inLanguage: "ja-JP",
    isPartOf: {
      "@type": "WebSite",
      name: siteData.brand.name,
      url: siteData.siteUrl,
    },
    about: {
      "@type": "Service",
      name: siteData.brand.name,
      serviceType: "オンライン秘書サービス",
      areaServed: {
        "@type": "Country",
        name: "日本",
      },
      audience: {
        "@type": "Audience",
        audienceType: "個人事業主・小規模チーム",
      },
      provider: {
        "@type": "Organization",
        name: siteData.brand.name,
        url: siteData.siteUrl,
        logo: `${siteData.siteUrl}${siteData.brand.logoMark}`,
      },
    },
  };
}

function SeoHead({ siteData, page, pageKey }) {
  useEffect(() => {
    const path = pageKey === "home" ? "/" : `/${pageKey}`;
    const canonicalUrl = `${siteData.siteUrl}${path}`;
    const description = page.metaDescription ?? siteData.brand.description;
    const ogImage = `${siteData.siteUrl}${page.hero.image}`;

    document.title = page.metaTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", "オンライン秘書,事務代行,日程調整,メール返信,資料整理,個人事業主");
    upsertMeta("name", "referrer", "strict-origin-when-cross-origin");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:title", page.metaTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:site_name", siteData.brand.name);
    upsertMeta("property", "og:locale", "ja_JP");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", page.metaTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);
    upsertCanonical(canonicalUrl);
    upsertJsonLd(buildJsonLd({ siteData, page, canonicalUrl, pageKey }));
  }, [siteData, page, pageKey]);

  return null;
}

export default SeoHead;
