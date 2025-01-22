class Login {
  constructor(page) {
    this.page = page;
    this.usernameField = '#user-name';
    this.passwordField = '#password';
    this.loginButton = '#login-button';
  }

  // Function to load the URL
  async goto(){
    await this.page.goto(`https://www.saucedemo.com/`);
  }

  // Function to enter the username
  async enterUsername(username) {
    await this.page.locator(this.usernameField).fill(username);
  }

  // Function to enter the password
  async enterPassword(password) {
    await this.page.locator(this.passwordField).fill(password);
  }

  // Function to click the login button
  async clickLogin() {
    await this.page.locator(this.loginButton).click();
  }

  // Function to complete the login process
  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async currentPageTitle() {
    return await this.page.title();
  }
}

// Export the class so it can be imported in other files
module.exports = {Login};
