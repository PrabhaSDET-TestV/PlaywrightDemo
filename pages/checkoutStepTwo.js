class CheckoutStepTwo {
    constructor(page) {
        this.page = page;
        this.finishButton = '#finish';
        this.cancelButton = '#cancel';
    }

    async clickFinish() {
        await this.page.locator(this.finishButton).click();
    }

    async clickCancel() {
        await this.page.locator(this.cancelButton).click();
    }
}

// Export the class so it can be imported in other files
module.exports = { CheckoutStepTwo };
