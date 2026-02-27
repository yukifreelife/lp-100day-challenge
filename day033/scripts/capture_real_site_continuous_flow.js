/* eslint-disable no-console */
const fs = require("fs/promises");
const path = require("path");
const { chromium } = require("playwright");

const OUT_DIR = "/Users/yuuki/Works/lp-100/day033/screenshots";

async function ensureOutDir() {
  await fs.mkdir(OUT_DIR, { recursive: true });
}

async function shot(page, filename, fullPage = false) {
  const out = path.join(OUT_DIR, filename);
  await page.screenshot({ path: out, fullPage });
  console.log(`saved: ${out}  url=${page.url()}`);
}

async function highlightFirstVisible(page, selectors) {
  for (const selector of selectors) {
    const locator = page.locator(selector);
    const count = await locator.count();
    for (let i = 0; i < count; i += 1) {
      const item = locator.nth(i);
      try {
        if (await item.isVisible()) {
          await item.scrollIntoViewIfNeeded();
          await item.evaluate((el) => {
            el.style.outline = "4px solid #ff2d2d";
            el.style.outlineOffset = "2px";
            el.style.boxShadow = "0 0 0 5px rgba(255, 45, 45, 0.35)";
            el.style.borderRadius = "6px";
            el.style.position = el.style.position || "relative";
            el.style.zIndex = "9999";
          });
          return { ok: true, locator: item, selector };
        }
      } catch (err) {
        console.log(`highlight failed ${selector}[${i}] ${String(err)}`);
      }
    }
  }
  return { ok: false };
}

async function clickVisible(page, selectors) {
  for (const selector of selectors) {
    const locator = page.locator(selector);
    const count = await locator.count();
    for (let i = 0; i < count; i += 1) {
      const item = locator.nth(i);
      try {
        if (await item.isVisible()) {
          await item.scrollIntoViewIfNeeded();
          await item.click({ timeout: 10000 });
          return { ok: true, selector };
        }
      } catch (err) {
        console.log(`click failed ${selector}[${i}] ${String(err)}`);
      }
    }
  }
  return { ok: false };
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

  // 1) ConoHa WINGトップ
  await page.goto("https://www.conoha.jp/wing/", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(2000);
  await highlightFirstVisible(page, [
    "a[href*='/wing/onboarding/']",
    "a:has-text('お申し込み')",
  ]);
  await shot(page, "31-flow-01-wing-home-apply.png");

  // 2) お申し込みクリック -> onboarding/create
  const beforePages = context.pages().length;
  const clickedApply = await clickVisible(page, [
    "a[href*='/wing/onboarding/']",
    "a:has-text('お申し込み')",
  ]);
  console.log(`clickedApply=${clickedApply.ok}`);

  await page.waitForTimeout(5000);
  let active = page;
  if (context.pages().length > beforePages) {
    active = context.pages()[context.pages().length - 1];
  }
  try {
    await active.waitForLoadState("domcontentloaded", { timeout: 30000 });
  } catch (err) {
    console.log(`load warning A ${String(err)}`);
  }

  await shot(active, "32-flow-02-after-apply.png");

  // 3) WING作成ウィザード次へを強調
  if (!active.url().includes("/WING/Wizard/Create")) {
    await active.goto("https://cp.conoha.jp/WING/Wizard/Create", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await active.waitForTimeout(2000);
  }
  await highlightFirstVisible(active, ["button:has-text('次へ')", "text=次へ"]);
  await shot(active, "33-flow-03-wizard-create-next.png");

  // 4) 次へクリック -> ログインもしくは次画面
  const clickedNext = await clickVisible(active, [
    "button:has-text('次へ')",
    "text=次へ",
  ]);
  console.log(`clickedNext=${clickedNext.ok}`);
  await active.waitForTimeout(5000);
  try {
    await active.waitForLoadState("domcontentloaded", { timeout: 30000 });
  } catch (err) {
    console.log(`load warning B ${String(err)}`);
  }
  await shot(active, "34-flow-04-after-next.png");

  // 5) ログインなら新規登録リンクを強調
  if (active.url().includes("/login")) {
    await highlightFirstVisible(active, [
      "a:has-text('新規アカウント登録はこちら')",
      "a[href*='/vps/signup']",
    ]);
    await shot(active, "35-flow-05-login-signup-link.png");

    const clickedSignup = await clickVisible(active, [
      "a:has-text('新規アカウント登録はこちら')",
      "a[href*='/vps/signup']",
    ]);
    console.log(`clickedSignup=${clickedSignup.ok}`);
    await active.waitForTimeout(4000);
    try {
      await active.waitForLoadState("domcontentloaded", { timeout: 30000 });
    } catch (err) {
      console.log(`load warning C ${String(err)}`);
    }
  }

  // 6) 新規登録ページ（実サイト同一フローの到達点）
  await highlightFirstVisible(active, ["button:has-text('次へ')", "text=次へ"]);
  await shot(active, "36-flow-06-signup-next.png");

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
