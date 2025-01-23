import { test, expect } from '@playwright/test';
import { Login } from "../pages/login.js";
import { Inventory } from '../pages/inventory.js';
import { Cart } from '../pages/cart.js';
import { CheckoutStepOne } from '../pages/checkoutStepOne.js';
import { CheckoutStepTwo } from '../pages/checkoutStepTwo.js';
import { CheckoutComplete } from '../pages/checkoutComplete.js';

test(`S01_E2EOrderPlace`, {tag: '@e2e'}, async ({ page }) => {
  const login = new Login(page);
  await login.goto();
  await login.login(`standard_user`,`secret_sauce`);

  expect(await login.currentPageTitle()).toBe(`Swag Labs`);

  const inventory = new Inventory(page);
  await inventory.addToCart(`Sauce Labs Backpack`);
  await inventory.verifyCartCount("1");
  await inventory.clickCartIcon();

  const cart = new Cart(page);
  await cart.clickCheckout();

  const checkoutStepOne = new CheckoutStepOne(page);
  await checkoutStepOne.fillFirstName(`Prabhakaran`);
  await checkoutStepOne.fillLastName(`Ravi`);
  await checkoutStepOne.fillPostalCode(`560043`);
  await checkoutStepOne.clickContinue();

  const checkoutStepTwo = new CheckoutStepTwo(page);
  await checkoutStepTwo.clickFinish();

  const checkoutComplete = new CheckoutComplete(page);
  await checkoutComplete.clickBackToProducts();

  await page.waitForTimeout(2000);
});
