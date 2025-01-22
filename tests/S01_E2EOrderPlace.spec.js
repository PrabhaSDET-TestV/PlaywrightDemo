import { test, expect } from '@playwright/test';
import { Login } from "../pages/login.js";
import { Inventory } from '../pages/inventory.js';

test(`S01_E2EOrderPlace`, {tag: '@e2e'}, async ({ page }) => {
  const login = new Login(page);
  await login.goto();
  await login.login(`standard_user`,`secret_sauce`);

  expect(await login.currentPageTitle()).toBe(`Swag Labs`);

  const inventory = new Inventory(page);
  await inventory.addToCart(`Sauce Labs Backpack`);
  await inventory.verifyCartCount("1");
  await inventory.clickCartIcon();

  await page.waitForTimeout(2000);
});
