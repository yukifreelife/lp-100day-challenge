/* eslint-disable no-console */
const path = require("path");
const fs = require("fs/promises");
const { chromium } = require("playwright");

const OUT_DIR = "/Users/yuuki/Works/lp-100/day033/screenshots";

async function ensureOutDir() {
  await fs.mkdir(OUT_DIR, { recursive: true });
}

async function save(page, file, fullPage = false) {
  const out = path.join(OUT_DIR, file);
  await page.screenshot({ path: out, fullPage });
  console.log(`saved: ${out} url=${page.url()}`);
}

async function markFirstVisible(page, selectors) {
  for (const selector of selectors) {
    const locator = page.locator(selector);
    const count = await locator.count();
    for (let i = 0; i < count; i += 1) {
      const el = locator.nth(i);
      try {
        if (await el.isVisible()) {
          await el.scrollIntoViewIfNeeded();
          await el.evaluate((node) => {
            node.style.outline = "4px solid #ff2d2d";
            node.style.outlineOffset = "2px";
            node.style.boxShadow = "0 0 0 5px rgba(255, 45, 45, 0.35)";
            node.style.borderRadius = "6px";
            node.style.position = node.style.position || "relative";
            node.style.zIndex = "9999";
          });
          return el;
        }
      } catch (_) {}
    }
  }
  return null;
}

async function clickFirstVisible(page, selectors) {
  for (const selector of selectors) {
    const locator = page.locator(selector);
    const count = await locator.count();
    for (let i = 0; i < count; i += 1) {
      const el = locator.nth(i);
      try {
        if (await el.isVisible()) {
          await el.scrollIntoViewIfNeeded();
          await el.click({ timeout: 10000 });
          return true;
        }
      } catch (_) {}
    }
  }
  return false;
}

async function clickAllVisibleText(page, text) {
  const locator = page.locator(`text=${text}`);
  const count = await locator.count();
  let clicked = 0;
  for (let i = 0; i < count; i += 1) {
    const el = locator.nth(i);
    try {
      if (await el.isVisible()) {
        await el.scrollIntoViewIfNeeded();
        await el.click({ timeout: 2000 });
        clicked += 1;
      }
    } catch (_) {}
  }
  return clicked;
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

  // Step 1: WINGトップ
  await page.goto("https://www.conoha.jp/wing/", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(2000);
  await markFirstVisible(page, [
    "a[href*='/wing/onboarding/']",
    "a:has-text('お申し込み')",
  ]);
  await save(page, "51-realflow-01-wing-home-apply.png");

  // Step 2: 申込クリック -> Create
  await clickFirstVisible(page, [
    "a[href*='/wing/onboarding/']",
    "a:has-text('お申し込み')",
  ]);
  await page.waitForTimeout(5000);
  await page.waitForLoadState("domcontentloaded", { timeout: 30000 }).catch(() => {});
  await save(page, "52-realflow-02-wizard-create-top.png");

  // Step 3: 必須項目（利用しない）選択 + 次へ
  await clickAllVisibleText(page, "利用しない");
  await markFirstVisible(page, ["button:has-text('次へ')", "text=次へ"]);
  await save(page, "53-realflow-03-create-select-and-next.png");
  await clickFirstVisible(page, ["button:has-text('次へ')", "text=次へ"]);
  await page.waitForTimeout(4000);
  await page.waitForLoadState("domcontentloaded", { timeout: 30000 }).catch(() => {});

  // Step 4: 情報入力
  await save(page, "54-realflow-04-accountinfo.png", true);

  // Step 5: ダミー入力で次へ（Auth到達確認）
  const stamp = Date.now();
  await page
    .locator("input[placeholder*='@example.com']")
    .nth(0)
    .fill(`demo+${stamp}@example.com`);
  await page
    .locator("input[placeholder*='@example.com']")
    .nth(1)
    .fill(`demo+${stamp}@example.com`);
  await page
    .locator("input[placeholder='9～70文字、半角英数と記号を混在']")
    .first()
    .fill("DemoPass1234!");
  await page.locator("input[placeholder='姓']").first().fill("Yamada");
  await page.locator("input[placeholder='名']").first().fill("Taro");
  await clickAllVisibleText(page, "男性");
  await page.locator("input[placeholder='150-8512']").first().fill("1508512");
  await page.locator("input[placeholder='渋谷区']").first().fill("Shibuya-ku");
  await page
    .locator("input[placeholder='桜丘町26-1']")
    .first()
    .fill("Sakuragaokacho 26-1");
  await page
    .locator("input[placeholder='セルリアンタワー11F']")
    .first()
    .fill("Cerulean Tower 11F");
  await page
    .locator("input[placeholder='090-1234-5678']")
    .first()
    .fill("09012345678");

  await markFirstVisible(page, ["button:has-text('次へ')", "text=次へ"]);
  await save(page, "55-realflow-05-accountinfo-filled-next.png", true);
  await clickFirstVisible(page, ["button:has-text('次へ')", "text=次へ"]);
  await page.waitForTimeout(12000);

  // Step 6: Auth（電話/SMS認証）
  await save(page, "56-realflow-06-auth-sms.png", true);
  console.log(`final_url=${page.url()}`);

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
