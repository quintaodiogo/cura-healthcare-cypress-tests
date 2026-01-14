// ***********************************************
// Comandos customizados para CURA Healthcare Service
// ***********************************************

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AppointmentPage from './pages/AppointmentPage';

/**
 * Comando para fazer login no sistema
 * @example cy.login('John Doe', 'ThisIsNotAPassword')
 */
Cypress.Commands.add('login', (username, password) => {
  HomePage.clickMakeAppointment();
  LoginPage.verifyLoginPageLoaded();
  LoginPage.login(username, password);
  AppointmentPage.verifyAppointmentPageLoaded();
});

/**
 * Comando para fazer login usando credenciais do fixture
 * @example cy.loginWithFixture()
 */
Cypress.Commands.add('loginWithFixture', () => {
  cy.fixture('credentials').then((credentials) => {
    cy.login(credentials.username, credentials.password);
  });
});

/**
 * Comando para limpar cookies e session storage
 * @example cy.clearSession()
 */
Cypress.Commands.add('clearSession', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});