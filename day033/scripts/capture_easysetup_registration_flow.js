/* eslint-disable no-console */
const fs = require("fs/promises");
const path = require("path");
const { chromium } = require("playwright");

const OUT_DIR = "/Users/yuuki/Works/lp-100/day033/screenshots";

async function ensureOutDir() {
  await fs.mkdir(OUT_DIR, { recursive: true });
}

async function screenshot(page, name) {
  const fullPath = path.join(OUT_DIR, name);
  await page.screenshot({ path: fullPath, fullPage: true });
  console.log(`saved: ${fullPath}`);
}

async function clickIfVisible(page, selectors) {
  for (const selector of selectors) {
    const locator = page.locator(selector);
    const count = await locator.count();
    for (let i = 0; i < count; i += 1) {
      const candidate = locator.nth(i);
      try {
        if (await candidate.isVisible()) {
          await candidate.scrollIntoViewIfNeeded();
          await candidate.click({ timeout: 5000 });
          return true;
        }
      } catch (err) {
        console.log(`click failed for ${selector}[${i}]: ${String(err)}`);
      }
    }
  }
  return false;
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
  await page.goto("https://www.conoha.jp/wing/function/wp_setup/", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(2000);
  await screenshot(page, "22-easysetup-start-before-click.png");

  const beforePages = context.pages().length;
  const startClicked = await clickIfVisible(page, [
    "a[href*='/wing/onboarding/']",
    "a:has-text('お申し込み')",
    "a:has-text('簡単セットアップを開始')",
    "button:has-text('簡単セットアップを開始')",
    "text=簡単セットアップを開始",
  ]);
  console.log(`startClicked=${startClicked}`);

  await page.waitForTimeout(5000);
  let activePage = page;

  if (context.pages().length > beforePages) {
    const pages = context.pages();
    activePage = pages[pages.length - 1];
  }

  try {
    await activePage.waitForLoadState("domcontentloaded", { timeout: 30000 });
  } catch (err) {
    console.log(`load wait warning: ${String(err)}`);
  }

  await screenshot(activePage, "23-easysetup-after-start-click.png");
  console.log(`afterClickUrl=${activePage.url()}`);

  // ログイン画面へ遷移した場合は、新規登録導線まで続けて撮影する。
  let movedToSignup = false;
  if (activePage.url().includes("/login")) {
    movedToSignup = await clickIfVisible(activePage, [
      "a:has-text('新規アカウント登録はこちら')",
      "a:has-text('初めてご利用の方')",
      "a:has-text('新規登録')",
    ]);
  }
  console.log(`movedToSignup=${movedToSignup}`);
  await activePage.waitForTimeout(4000);

  if (movedToSignup) {
    try {
      await activePage.waitForLoadState("domcontentloaded", { timeout: 30000 });
    } catch (err) {
      console.log(`signup load warning: ${String(err)}`);
    }
  }

  await screenshot(activePage, "24-easysetup-signup-or-next.png");
  console.log(`finalUrl=${activePage.url()}`);

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
