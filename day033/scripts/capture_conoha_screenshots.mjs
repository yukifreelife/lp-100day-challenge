import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const outDir = path.resolve("day033/screenshots");

async function capture() {
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 920 } });

  // 1) ConoHa WING トップ
  await page.goto("https://www.conoha.jp/wing/", { waitUntil: "domcontentloaded", timeout: 120000 });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(outDir, "01-conoha-wing-top.png") });

  // 2) お申し込み遷移先（取得できる範囲で）
  try {
    const applyLink = page
      .locator('a:has-text("お申し込み"), button:has-text("お申し込み"), a:has-text("今すぐお申し込み")')
      .first();
    await applyLink.click({ timeout: 15000 });
    await page.waitForTimeout(3500);
    await page.screenshot({ path: path.join(outDir, "02-conoha-apply-page.png") });
  } catch (error) {
    await page.screenshot({ path: path.join(outDir, "02-conoha-apply-page-fallback.png") });
  }

  // 3) WINGパック（ドメイン検索の実画面）
  await page.goto("https://www.conoha.jp/wing/wingpack/", {
    waitUntil: "domcontentloaded",
    timeout: 120000,
  });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(outDir, "03-wingpack-top.png") });

  try {
    const domainSearchHeading = page.locator("text=まずは取得したいドメイン名を検索").first();
    await domainSearchHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);
    await page.screenshot({ path: path.join(outDir, "04-wingpack-domain-search-section.png") });
  } catch (error) {
    await page.screenshot({ path: path.join(outDir, "04-wingpack-domain-search-section-fallback.png") });
  }

  // 4) 公式スタートアップガイド
  await page.goto("https://help.conoha.jp/wing/wingstartup/", {
    waitUntil: "domcontentloaded",
    timeout: 120000,
  });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(outDir, "05-wing-startup-guide.png") });

  await browser.close();
}

capture().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
