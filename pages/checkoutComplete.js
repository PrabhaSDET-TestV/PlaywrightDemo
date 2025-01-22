class CheckoutComplete {
    constructor(page) {
        this.page = page;
        this.backToProductsButton = '#back-to-products';
    }
    
    async clickBackToProducts() {
        await this.page.locator(this.backToProductsButton).click();
    }
}

// Export the class so it can be imported in other files
module.exports = { CheckoutComplete };
