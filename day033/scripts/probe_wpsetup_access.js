/* eslint-disable no-console */
const { chromium } = require("playwright");

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    viewport: { width: 1440, height: 2000 },
    locale: "ja-JP",
  });
  const page = await context.newPage();

  await page.goto("https://cp.conoha.jp/WING/Wizard/Create", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(1200);

  // 必須項目をざっくり選択
  const none = page.locator("text=利用しない");
  for (let i = 0; i < (await none.count()); i += 1) {
    const t = none.nth(i);
    try {
      if (await t.isVisible()) {
        await t.click({ timeout: 2000 });
      }
    } catch (_) {}
  }

  const next = page.locator("button:has-text('次へ')").first();
  if (await next.count()) {
    await next.click({ timeout: 8000 });
    await page.waitForTimeout(3000);
  }

  console.log(`after_next=${page.url()}`);
  await page.screenshot({
    path: "/Users/yuuki/Works/lp-100/day033/screenshots/39-probe-accountinfo.png",
    fullPage: true,
  });

  await page.goto("https://cp.conoha.jp/WING/Wizard/WpSetup", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(2000);
  const text = await page.locator("body").innerText();
  console.log(
    JSON.stringify(
      {
        url: page.url(),
        hasWpSetup: text.includes("WordPressかんたんセットアップ"),
        hasWhois: text.includes("Whois"),
        hasLogin: text.includes("ログイン"),
      },
      null,
      2
    )
  );
  await page.screenshot({
    path: "/Users/yuuki/Works/lp-100/day033/screenshots/40-probe-wpsetup.png",
    fullPage: true,
  });

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
