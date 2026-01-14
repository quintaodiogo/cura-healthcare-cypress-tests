class ConfirmationPage {
  // Seletores
  get confirmationTitle() {
    return cy.get('h2');
  }

  get facilityValue() {
    return cy.get('#facility');
  }

  get hospitalReadmissionValue() {
    return cy.get('#hospital_readmission');
  }

  get programValue() {
    return cy.get('#program');
  }

  get visitDateValue() {
    return cy.get('#visit_date');
  }

  get commentValue() {
    return cy.get('#comment');
  }

  get homeButton() {
    return cy.get('.btn-default');
  }

  // Verificações
  verifyConfirmationPageLoaded() {
    cy.url().should('include', '/appointment.php#summary');
    this.confirmationTitle.should('be.visible');
    return this;
  }

  verifyConfirmationTitle() {
    this.confirmationTitle.should('contain', 'Appointment Confirmation');
    return this;
  }

  verifyAppointmentDetails(expectedData) {
    if (expectedData.facility) {
      this.facilityValue.should('contain', expectedData.facility);
    }
    
    if (expectedData.hospitalReadmission !== undefined) {
      const expectedValue = expectedData.hospitalReadmission ? 'Yes' : 'No';
      this.hospitalReadmissionValue.should('contain', expectedValue);
    }
    
    if (expectedData.program) {
      this.programValue.should('contain', expectedData.program);
    }
    
    if (expectedData.visitDate) {
      this.visitDateValue.should('contain', expectedData.visitDate);
    }
    
    if (expectedData.comment) {
      this.commentValue.should('contain', expectedData.comment);
    }
    
    return this;
  }
}

export default new ConfirmationPage();
