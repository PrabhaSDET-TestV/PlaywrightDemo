module.exports = {
    usernameField: '#user-name',
    passwordField: '#password',
    loginButton: '#login-button',
  
    async enterUsername(page, username) {
      await page.fill(this.usernameField, username);
    },
  
    async enterPassword(page, password) {
      await page.fill(this.passwordField, password);
    },
  
    async clickLogin(page) {
      await page.click(this.loginButton);
    },
  
    async login(page, username, password) {
      await this.enterUsername(page, username);
      await this.enterPassword(page, password);
      await this.clickLogin(page);
    }
};
  