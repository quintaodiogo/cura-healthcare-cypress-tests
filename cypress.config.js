const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // URL base da aplicação
    baseUrl: 'https://katalon-demo-cura.herokuapp.com',
    
    // Configurações de viewport
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Timeout padrão para comandos
    defaultCommandTimeout: 10000,
    
    // Timeout para page load
    pageLoadTimeout: 30000,
    
    // Configurações de vídeo e screenshots
    video: true,
    screenshotOnRunFailure: true,
    
    // Configurações de retry
    retries: {
      runMode: 2,
      openMode: 0
    },
    
    // Configuração de Node Events
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
