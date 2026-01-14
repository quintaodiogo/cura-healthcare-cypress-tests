class HomePage {
  // Seletores
  get makeAppointmentButton() {
    return cy.get('#btn-make-appointment');
  }

  // Ações
  clickMakeAppointment() {
    this.makeAppointmentButton.click();
    return this;
  }

  // Verificações
  verifyHomePageLoaded() {
    this.makeAppointmentButton.should('be.visible');
    cy.url().should('include', 'katalon-demo-cura.herokuapp.com');
    return this;
  }
}

export default new HomePage();
