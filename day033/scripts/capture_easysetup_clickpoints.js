/* eslint-disable no-console */
const fs = require("fs/promises");
const path = require("path");
const { chromium } = require("playwright");

const OUT_DIR = "/Users/yuuki/Works/lp-100/day033/screenshots";

async function ensureOutDir() {
  await fs.mkdir(OUT_DIR, { recursive: true });
}

async function highlightAndShot(
  page,
  { url, selectors, outFile, delay = 1800, fullPage = false }
) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(delay);

  let matched = null;
  for (const selector of selectors) {
    const locator = page.locator(selector);
    const count = await locator.count();
    for (let i = 0; i < count; i += 1) {
      const target = locator.nth(i);
      if (await target.isVisible()) {
        await target.scrollIntoViewIfNeeded();
        await target.evaluate((el) => {
          el.style.outline = "4px solid #ff2d2d";
          el.style.outlineOffset = "2px";
          el.style.boxShadow = "0 0 0 5px rgba(255, 45, 45, 0.35)";
          el.style.borderRadius = "6px";
          el.style.position = el.style.position || "relative";
          el.style.zIndex = "9999";
        });
        matched = selector;
        break;
      }
    }
    if (matched) break;
  }

  const fullPath = path.join(OUT_DIR, outFile);
  await page.screenshot({ path: fullPath, fullPage });
  console.log(`saved: ${fullPath} matched=${matched ?? "none"}`);
}

async function run() {
  await ensureOutDir();

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    viewport: { width: 1440, height: 2000 },
    locale: "ja-JP",
  });

  const page = await context.newPage();

  await highlightAndShot(page, {
    url: "https://www.conoha.jp/wing/function/wp_setup/",
    selectors: [
      "a:has-text('お申し込み')",
      "a[href*='/wing/onboarding/']",
      "text=簡単セットアップを開始",
    ],
    outFile: "27-clickpoint-easysetup-entry.png",
    fullPage: false,
  });

  await highlightAndShot(page, {
    url: "https://cp.conoha.jp/WING/Wizard/Create",
    selectors: [
      "button:has-text('次へ')",
      "text=次へ",
      "input[type='submit']",
    ],
    outFile: "28-clickpoint-wizard-next.png",
    fullPage: false,
  });

  await highlightAndShot(page, {
    url: "https://www.conoha.jp/login/",
    selectors: [
      "a:has-text('新規アカウント登録はこちら')",
      "a[href*='/vps/signup']",
    ],
    outFile: "29-clickpoint-login-signup-link.png",
    fullPage: false,
  });

  await highlightAndShot(page, {
    url: "https://www.conoha.jp/vps/signup/?btn_id=login--form_vps-signup",
    selectors: [
      "button:has-text('次へ')",
      "input[type='submit']",
      "text=次へ",
    ],
    outFile: "30-clickpoint-signup-next.png",
    fullPage: false,
  });

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
