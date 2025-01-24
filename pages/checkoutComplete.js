import { expect } from '@playwright/test';
class CheckoutComplete {
    constructor(page) {
        this.page = page;
        this.backToProductsButton = '#back-to-products';
        this.orderMessage = `#checkout_complete_container h2`;
    }
    
    async validateText(expectedText) {
        const actualText = await this.page.locator(this.orderMessage);
        await expect(actualText).toHaveText(expectedText);
        console.log(`Final message are matched.`);
    }

    async clickBackToProducts() {
        await this.page.locator(this.backToProductsButton).click();
    }
}

// Export the class so it can be imported in other files
module.exports = { CheckoutComplete };
