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

  const none = page.locator("text=利用しない");
  for (let i = 0; i < (await none.count()); i += 1) {
    const t = none.nth(i);
    try {
      if (await t.isVisible()) await t.click({ timeout: 2000 });
    } catch (_) {}
  }

  const next = page.locator("button:has-text('次へ')").first();
  if (await next.count()) {
    await next.click({ timeout: 10000 });
    await page.waitForTimeout(3000);
  }

  console.log(`url=${page.url()}`);

  const fields = await page.$$eval("input, select, textarea", (els) =>
    els
      .map((el) => {
        const r = el.getBoundingClientRect();
        return {
          tag: el.tagName.toLowerCase(),
          type: el.type || "",
          name: el.name || "",
          id: el.id || "",
          placeholder: el.getAttribute("placeholder") || "",
          className: (el.className || "").toString(),
          x: Math.round(r.x),
          y: Math.round(r.y),
          w: Math.round(r.width),
          h: Math.round(r.height),
          visible: !!(r.width && r.height),
        };
      })
      .filter((x) => x.visible)
      .sort((a, b) => a.y - b.y)
  );

  console.log(JSON.stringify(fields, null, 2));

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
