class CheckoutStepOne {
    constructor(page) {
        this.page = page;
        this.firstNameField = '#first-name';
        this.lastNameField = '#last-name';
        this.postalCodeField = '#postal-code';
        this.continueButton = '#continue';
        this.cancelButton = '#cancel';
    }

    async fillFirstName(firstName) {
        await this.page.locator(this.firstNameField).fill(firstName);
    }

    async fillLastName(lastName) {
        await this.page.locator(this.lastNameField).fill(lastName);
    }

    async fillPostalCode(postalCode) {
        await this.page.locator(this.postalCodeField).fill(postalCode);
    }

    async clickContinue() {
        await this.page.locator(this.continueButton).click();
    }

    async clickCancel() {
        await this.page.locator(this.cancelButton).click();
    }
}

// Export the class so it can be imported in other files
module.exports = { CheckoutStepOne };