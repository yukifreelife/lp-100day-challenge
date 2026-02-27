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
        await page.waitForTimeout(150);
      }
    } catch (_) {
      // ignore
    }
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
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: "/Users/yuuki/Works/lp-100/day033/screenshots/37-probe-before.png",
    fullPage: true,
  });

  const clickedNone = await clickAllVisibleByText(page, "利用しない");
  const clickedNext = await clickAllVisibleByText(page, "次へ");
  console.log(`clickedNone=${clickedNone} clickedNext=${clickedNext}`);
  await page.waitForTimeout(5000);

  const pageText = await page.locator("body").innerText();
  const hasAccountInfo = pageText.includes("アカウント情報入力");
  const hasInfoInput = pageText.includes("情報入力");
  const hasPayment = pageText.includes("支払い方法");
  console.log(
    JSON.stringify(
      {
        url: page.url(),
        hasAccountInfo,
        hasInfoInput,
        hasPayment,
      },
      null,
      2
    )
  );

  await page.screenshot({
    path: "/Users/yuuki/Works/lp-100/day033/screenshots/38-probe-after-next.png",
    fullPage: true,
  });

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
