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

async function fillByPlaceholder(page, placeholder, value, nth = 0) {
  const locator = page.locator(`input[placeholder='${placeholder}']`).nth(nth);
  if (await locator.count()) {
    await locator.fill(value);
    return true;
  }
  return false;
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

  console.log(`start_url=${page.url()}`);

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
  await fillByPlaceholder(page, "姓", "Yamada");
  await fillByPlaceholder(page, "名", "Taro");
  await clickAllVisibleByText(page, "男性");
  await fillByPlaceholder(page, "150-8512", "1508512");
  await fillByPlaceholder(page, "渋谷区", "Shibuya-ku");
  await fillByPlaceholder(page, "桜丘町26-1", "Sakuragaokacho 26-1");
  await fillByPlaceholder(page, "セルリアンタワー11F", "Cerulean Tower 11F");
  await fillByPlaceholder(page, "090-1234-5678", "09012345678");

  await page.waitForTimeout(800);
  await page.screenshot({
    path: "/Users/yuuki/Works/lp-100/day033/screenshots/44-probe-accountinfo-filled.png",
    fullPage: true,
  });

  await clickAllVisibleByText(page, "次へ");
  await page.waitForTimeout(5000);

  console.log(`after_next_url=${page.url()}`);
  const bodyText = await page.locator("body").innerText();
  console.log(
    JSON.stringify(
      {
        hasAuth: bodyText.includes("認証"),
        hasPayment: bodyText.includes("支払い方法"),
        hasConfirm: bodyText.includes("確認画面"),
        hasError: bodyText.includes("エラー"),
      },
      null,
      2
    )
  );

  await page.screenshot({
    path: "/Users/yuuki/Works/lp-100/day033/screenshots/45-probe-after-accountinfo-next.png",
    fullPage: true,
  });

  await page.waitForTimeout(12000);
  await page.screenshot({
    path: "/Users/yuuki/Works/lp-100/day033/screenshots/46-probe-auth-ready.png",
    fullPage: true,
  });

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
