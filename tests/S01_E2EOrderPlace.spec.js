import { test, expect } from '@playwright/test';

test(`S01_E2EOrderPlace`, async ({ page }) => {
  await page.goto(process.env.URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
