import { test, expect } from '@playwright/test';

test('E2E Order Placement using Advanced Locators', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
    
  // Capture and compare screenshot before filling in credentials
//   await page.getByPlaceholder('Username').fill('standard_user');
  await expect(page).toHaveScreenshot('login-page.png');

  // Login using getByLabel and getByPlaceholder
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Add item to cart using filter chaining method
  await page.locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .getByRole('button', { name: 'Add to cart' })
    .click();

  // Navigate to cart
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.getByRole('button', { name: 'Checkout' }).click();

  // Enter checkout information using getByLabel
  await page.getByPlaceholder('First Name').fill('Prabhakaran');
  await page.getByPlaceholder('Last Name').fill('Ravi');
  await page.getByPlaceholder('Zip/Postal Code').fill('625705');
  await page.getByRole('button', { name: 'Continue' }).click();

  // Complete the order
  await page.getByRole('button', { name: 'Finish' }).click();
  await expect(page.getByText('Thank you for your order!')).toBeVisible(); // Verify confirmation message
  await page.getByRole('button', { name: 'Back Home' }).click();
});
