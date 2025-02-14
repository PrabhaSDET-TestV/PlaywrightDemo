import { test, expect } from '@playwright/test';
import { Login } from "../pages/login.js";
import { Inventory } from '../pages/inventory.js';
import { Cart } from '../pages/cart.js';
import { CheckoutStepOne } from '../pages/checkoutStepOne.js';
import { CheckoutStepTwo } from '../pages/checkoutStepTwo.js';
import { CheckoutComplete } from '../pages/checkoutComplete.js';

// Test to verify end-to-end order placement for a product
test('E2E Order Placement for Sauce Labs Backpack', async ({ page }) => {
    // Initialize Login page and perform login
    const login = new Login(page);
    await login.goto();
    await login.login("standard_user", "secret_sauce");

    // Validate that login was successful
    expect(await login.currentPageTitle()).toBe("Swag Labs");

    // Initialize Inventory page and add an item to the cart
    const inventory = new Inventory(page);
    await inventory.addToCart("Sauce Labs Backpack");
    await inventory.verifyCartCount("1");
    await inventory.clickCartIcon();

    // Initialize Cart page and proceed to checkout
    const cart = new Cart(page);
    await cart.clickCheckout();

    // Fill in user details on Checkout Step One page
    const checkoutStepOne = new CheckoutStepOne(page);
    await checkoutStepOne.fillFirstName("Prabhakaran");
    await checkoutStepOne.fillLastName("R");
    await checkoutStepOne.fillPostalCode("560043");
    await checkoutStepOne.clickContinue();

    // Complete the checkout process on Checkout Step Two page
    const checkoutStepTwo = new CheckoutStepTwo(page);
    await checkoutStepTwo.clickFinish();

    // Validate order confirmation message on Checkout Complete page
    const checkoutComplete = new CheckoutComplete(page);
    await checkoutComplete.validateText("Thank you for your order!");
    await checkoutComplete.clickBackToProducts();
});
