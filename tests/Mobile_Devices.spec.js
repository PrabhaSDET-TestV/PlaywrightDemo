import { test, expect, devices } from '@playwright/test';
import { Login } from "../pages/login.js";
import { Inventory } from '../pages/inventory.js';
import { Cart } from '../pages/cart.js';
import { CheckoutStepOne } from '../pages/checkoutStepOne.js';
import { CheckoutStepTwo } from '../pages/checkoutStepTwo.js';
import { CheckoutComplete } from '../pages/checkoutComplete.js';

// Set test to run in an emulated iPhone 12 environment
// Emulation allows Playwright to mimic the behavior of a real device by applying viewport size, user agent, touch support, and other settings.
// Playwright achieves this by using predefined device descriptors from 'devices' which configure the browser accordingly.
test.use({ ...devices['iPhone 12'] });

// End-to-End test for placing an order on a mobile device
test('Mobile Test - E2E Order', async ({ page }) => {
    // Login process
    const login = new Login(page);
    await login.goto();
    await login.login("standard_user", "secret_sauce");
    expect(await login.currentPageTitle()).toBe("Swag Labs");

    // Add item to cart
    const inventory = new Inventory(page);
    await inventory.addToCart("Sauce Labs Backpack");
    await inventory.verifyCartCount("1");
    await inventory.clickCartIcon();

    // Proceed to checkout
    const cart = new Cart(page);
    await cart.clickCheckout();

    // Fill in checkout details
    const checkoutStepOne = new CheckoutStepOne(page);
    await checkoutStepOne.fillFirstName("Prabhakaran");
    await checkoutStepOne.fillLastName("R");
    await checkoutStepOne.fillPostalCode("560043");
    await checkoutStepOne.clickContinue();

    // Complete the order
    const checkoutStepTwo = new CheckoutStepTwo(page);
    await checkoutStepTwo.clickFinish();

    // Validate order confirmation message
    const checkoutComplete = new CheckoutComplete(page);
    await checkoutComplete.validateText("Thank you for your order!");
    await checkoutComplete.clickBackToProducts();
});
