/* eslint-disable no-console */
const { chromium } = require("playwright");

async function clickAllVisibleByText(page, text) {
  const locator = page.locator(`text=${text}`);
  const count = await locator.count();
  let clicked = 0;
  for (let i = 0; i < count; i += 1) {
    const item = locator.nth(i);
    try {
      if (await item.isVisible()) {
        await item.scrollIntoViewIfNeeded();
        await item.click({ timeout: 2000 });
        clicked += 1;
        await page.waitForTimeout(120);
      }
    } catch (_) {}
  }
  return clicked;
}

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
  await page.waitForTimeout(1800);

  await clickAllVisibleByText(page, "利用しない");
  await clickAllVisibleByText(page, "次へ");
  await page.waitForTimeout(3500);

  console.log(`url=${page.url()}`);
  const fields = await page.$$eval("input, select, textarea", (els) =>
    els.map((el) => {
      const r = el.getBoundingClientRect();
      return {
        tag: el.tagName.toLowerCase(),
        type: el.type || "",
        name: el.name || "",
        id: el.id || "",
        placeholder: el.getAttribute("placeholder") || "",
        x: Math.round(r.x),
        y: Math.round(r.y),
        w: Math.round(r.width),
        h: Math.round(r.height),
      };
    })
  );
  console.log(JSON.stringify(fields, null, 2));

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
