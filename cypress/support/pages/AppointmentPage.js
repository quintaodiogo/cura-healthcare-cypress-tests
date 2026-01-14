class AppointmentPage {
  // Seletores
  get facilityDropdown() {
    return cy.get('#combo_facility');
  }

  get hospitalReadmissionCheckbox() {
    return cy.get('#chk_hospotal_readmission');
  }

  get medicaidRadio() {
    return cy.get('#radio_program_medicaid');
  }

  get medicareRadio() {
    return cy.get('#radio_program_medicare');
  }

  get noneRadio() {
    return cy.get('#radio_program_none');
  }

  get visitDateInput() {
    return cy.get('#txt_visit_date');
  }

  get commentTextarea() {
    return cy.get('#txt_comment');
  }

  get bookAppointmentButton() {
    return cy.get('#btn-book-appointment');
  }

  // Ações
  selectFacility(facility) {
    this.facilityDropdown.select(facility);
    return this;
  }

  checkHospitalReadmission() {
    this.hospitalReadmissionCheckbox.check();
    return this;
  }

  selectHealthcareProgram(program) {
    const programMap = {
      'Medicare': this.medicareRadio,
      'Medicaid': this.medicaidRadio,
      'None': this.noneRadio
    };
    programMap[program].check();
    return this;
  }

  fillVisitDate(date) {
    this.visitDateInput.type(date);
    cy.get('body').click(); // Fechar datepicker
    return this;
  }

  fillComment(comment) {
    this.commentTextarea.type(comment);
    return this;
  }

  submitAppointment() {
    this.bookAppointmentButton.click();
    return this;
  }

  fillAppointmentForm(appointmentData) {
    this.selectFacility(appointmentData.facility);
    
    if (appointmentData.hospitalReadmission) {
      this.checkHospitalReadmission();
    }
    
    this.selectHealthcareProgram(appointmentData.program);
    this.fillVisitDate(appointmentData.visitDate);
    this.fillComment(appointmentData.comment);
    this.submitAppointment();
    
    return this;
  }

  // Verificações
  verifyAppointmentPageLoaded() {
    cy.url().should('include', '/#appointment');
    this.facilityDropdown.should('be.visible');
    return this;
  }
}

export default new AppointmentPage();
