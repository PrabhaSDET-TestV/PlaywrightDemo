import { test, expect } from '@playwright/test';
import { Login } from "../pages/login.js";
import { Inventory } from '../pages/inventory.js';
import { Cart } from '../pages/cart.js';
import { CheckoutStepOne } from '../pages/checkoutStepOne.js';
import { CheckoutStepTwo } from '../pages/checkoutStepTwo.js';
import { CheckoutComplete } from '../pages/checkoutComplete.js';
const dataSet = JSON.parse(JSON.stringify(require("../tests-data/S01_E2EOrderPlace.json")));

for(const data of dataSet) {

  test(`E2EPlaceFor${data.product}`, {tag: '@e2e'}, async ({ page }) => {
    const login = new Login(page);
    await login.goto();
    await login.login(data.username, data.password);
  
    expect(await login.currentPageTitle()).toBe(data.inventoryPageTitle);
  
    const inventory = new Inventory(page);
    await inventory.addToCart(data.product);
    await inventory.verifyCartCount("1");
    await inventory.clickCartIcon();
  
    const cart = new Cart(page);
    await cart.clickCheckout();
  
    const checkoutStepOne = new CheckoutStepOne(page);
    await checkoutStepOne.fillFirstName(data.firstName);
    await checkoutStepOne.fillLastName(data.lastName);
    await checkoutStepOne.fillPostalCode(data.postalCode);
    await checkoutStepOne.clickContinue();
  
    const checkoutStepTwo = new CheckoutStepTwo(page);
    await checkoutStepTwo.clickFinish();
  
    const checkoutComplete = new CheckoutComplete(page);
    await checkoutComplete.validateText("Thank you for your order!");
    await checkoutComplete.clickBackToProducts();
  });

}

