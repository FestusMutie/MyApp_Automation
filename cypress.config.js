const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 625,
    viewportWidth: 1115,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 80000,
    watchForFileChanges:true,
    chromeWebSecurity: false,
    baseUrl: 'https://katalon-demo-cura.herokuapp.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
