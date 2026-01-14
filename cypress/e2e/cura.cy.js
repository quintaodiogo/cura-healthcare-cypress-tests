import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';
import AppointmentPage from '../support/pages/AppointmentPage';
import ConfirmationPage from '../support/pages/ConfirmationPage';

describe('CURA Healthcare Service - E2E Tests', () => {
  let credentials;
  let appointmentData;

  before(() => {
    // Carrega dados de teste uma vez antes de todos os testes
    cy.fixture('credentials').then((data) => {
      credentials = data;
    });
    cy.fixture('appointments').then((data) => {
      appointmentData = data;
    });
  });

  beforeEach(() => {
    // Visita a página inicial antes de cada teste
    cy.visit('/');
    HomePage.verifyHomePageLoaded();
  });

  describe('Navegação e Interface', () => {
    it('deve exibir a página inicial corretamente', () => {
      HomePage.verifyHomePageLoaded();
      HomePage.makeAppointmentButton.should('contain', 'Make Appointment');
    });

    it('deve navegar para a página de login ao clicar em Make Appointment', () => {
      HomePage.clickMakeAppointment();
      LoginPage.verifyLoginPageLoaded();
    });
  });

  describe('Autenticação', () => {
    it('deve realizar login com credenciais válidas', () => {
      HomePage.clickMakeAppointment();
      LoginPage.verifyLoginPageLoaded();
      LoginPage.login(credentials.username, credentials.password);
      AppointmentPage.verifyAppointmentPageLoaded();
    });

    it('deve realizar login usando comando customizado', () => {
      cy.login(credentials.username, credentials.password);
      AppointmentPage.verifyAppointmentPageLoaded();
    });
  });

  describe('Agendamento de Consultas', () => {
    beforeEach(() => {
      // Faz login antes de cada teste de agendamento
      cy.login(credentials.username, credentials.password);
    });

    it('deve preencher e enviar o formulário de agendamento com sucesso', () => {
      const appointment = appointmentData.validAppointment;

      AppointmentPage.fillAppointmentForm(appointment);

      ConfirmationPage.verifyConfirmationPageLoaded();
      ConfirmationPage.verifyConfirmationTitle();
      ConfirmationPage.verifyAppointmentDetails({
        facility: appointment.facility,
        hospitalReadmission: appointment.hospitalReadmission,
        program: appointment.program,
        comment: appointment.comment
      });
    });

    it('deve criar agendamento de checkup de rotina', () => {
      const appointment = appointmentData.appointments.routineCheckup;

      AppointmentPage
        .selectFacility(appointment.facility)
        .checkHospitalReadmission()
        .selectHealthcareProgram(appointment.program)
        .fillVisitDate(appointment.visitDate)
        .fillComment(appointment.comment)
        .submitAppointment();

      ConfirmationPage.verifyConfirmationTitle();
      ConfirmationPage.verifyAppointmentDetails({
        comment: appointment.comment
      });
    });

    it('deve permitir agendar consulta sem readmissão hospitalar', () => {
      const appointment = appointmentData.appointments.emergencyVisit;

      AppointmentPage.fillAppointmentForm(appointment);

      ConfirmationPage.verifyConfirmationTitle();
      ConfirmationPage.verifyAppointmentDetails({
        facility: appointment.facility,
        hospitalReadmission: false,
        program: appointment.program
      });
    });
  });

  describe('Validações de Formulário', () => {
    beforeEach(() => {
      cy.login(credentials.username, credentials.password);
    });

    it('deve validar que todos os campos do formulário estão visíveis', () => {
      AppointmentPage.facilityDropdown.should('be.visible');
      AppointmentPage.hospitalReadmissionCheckbox.should('be.visible');
      AppointmentPage.medicaidRadio.should('be.visible');
      AppointmentPage.visitDateInput.should('be.visible');
      AppointmentPage.commentTextarea.should('be.visible');
      AppointmentPage.bookAppointmentButton.should('be.visible');
    });
  });
});