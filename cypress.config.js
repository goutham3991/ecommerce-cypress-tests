const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://automationexercise.com",
    setupNodeEvents(on, config) {
      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        }));
        preprocessor.addCucumberPreprocessorPlugin(on, config);
        return config;
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    //specPattern: "**/*.feature",
    specPattern: [
      "cypress/e2e/**/*.feature",            // BDD tests
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"  // Normal Cypress tests
    ],    
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
