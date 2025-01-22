class Cart {
    constructor(page) {
        this.page = page;
        this.checkoutButton = '#checkout';
        this.removeButton = '#remove-sauce-labs-backpack';
        this.continueShoppingButton = '#continue-shopping';
    }

    async clickCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }

    async clickRemove() {
        await this.page.locator(this.removeButton).click();
    }

    async clickContinueShopping() {
        await this.page.locator(this.continueShoppingButton).click();
    }
}

// Export the class so it can be imported in other files
module.exports = { Cart };
