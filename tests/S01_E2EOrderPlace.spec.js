import { test, expect } from '@playwright/test';
import { login } from "../pages/login.js"
test(`S01_E2EOrderPlace`, async ({ page }) => {
  await page.goto(process.env.URL);
  await login(page, process.env.USERNAME, process.env.PASSWORD);
});
