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
  "pageLoadTimeout": 10000,
  "responseTimeout": 10000,
  "watchForFileChanges": false,
});
