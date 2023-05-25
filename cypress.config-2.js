const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "h5f2nk",
  e2e: {
    baseUrl: "https://santa-secret.ru/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
