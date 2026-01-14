class LoginPage {
  // Seletores
  get usernameInput() {
    return cy.get('#txt-username');
  }

  get passwordInput() {
    return cy.get('#txt-password');
  }

  get loginButton() {
    return cy.get('#btn-login');
  }

  // Ações
  fillUsername(username) {
    this.usernameInput.type(username);
    return this;
  }

  fillPassword(password) {
    this.passwordInput.type(password);
    return this;
  }

  submit() {
    this.loginButton.click();
    return this;
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
    return this;
  }

  // Verificações
  verifyLoginPageLoaded() {
    cy.url().should('include', '/profile.php#login');
    this.usernameInput.should('be.visible');
    return this;
  }
}

export default new LoginPage();
