const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "h5f2nk",
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    environment: "production",
    email: "4932843@gmail.com",
    password: "GoodPassword10",
  },
});
