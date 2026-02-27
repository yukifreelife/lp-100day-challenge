import { expect, test } from "playwright/test";

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36";

test.use({
  userAgent: USER_AGENT,
  viewport: { width: 1440, height: 900 },
});

test("capture wing wizard flow by clicking next", async ({ page }) => {
  await page.goto("https://cp.conoha.jp/WING/Wizard/Create", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(5000);
  await page.screenshot({ path: "day033/screenshots/22-wizard-create-clickflow.png" });

  const nextButton = page.getByRole("button", { name: "次へ" }).first();
  await expect(nextButton).toBeVisible({ timeout: 15000 });
  await nextButton.click();

  await page.waitForTimeout(7000);
  await page.screenshot({ path: "day033/screenshots/23-wizard-after-next.png" });

  // Try to proceed one more step if account fields are present.
  const accountHeader = page.getByText("アカウント情報入力");
  if (await accountHeader.isVisible().catch(() => false)) {
    await page.screenshot({ path: "day033/screenshots/24-wizard-accountinfo-screen.png" });
  }
});
