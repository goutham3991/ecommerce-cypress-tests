const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    URL: 'https://automationexercise.com',
  },
  "pageLoadTimeout": 10000,
  "responseTimeout": 10000,
});
