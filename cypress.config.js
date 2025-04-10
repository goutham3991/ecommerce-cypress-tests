const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://automationexercise.com",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  env:{
    URL: 'https://automationexercise.com',
  },
  "pageLoadTimeout": 60000,
  "responseTimeout": 10000,
  "watchForFileChanges": false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    overwrite: true,
    html: true,
    json: true
  }
});
