import { test, expect } from '@playwright/test';

class Inventory {
    constructor(page) {
      this.page = page;
      this.productClass = `.inventory_item`;
      this.cartIcon = '#shopping_cart_container';
      this.cartCountSelector = `${this.cartIcon} span`;
    }
    
    async addToCart(productName) {
        await this.page
        .locator(this.productClass)
        .filter({ hasText: productName })
        .getByRole('button', { name: 'Add to cart' })
        .click();
    }

    async clickCartIcon() {
        await this.page.locator(this.cartIcon).click();
    }

    // Method to verify the cart count
    async verifyCartCount(expectedCount) {
        const countText = await this.page.locator(this.cartCountSelector);
        await expect(countText).toHaveText(expectedCount);
        console.log(`Added counts are matched.`)
    }

  }
  
  // Export the class so it can be imported in other files
  module.exports = {Inventory}
  