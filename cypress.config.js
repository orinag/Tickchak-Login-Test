const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},

    experimentalStudio: true,
    defaultCommandTimeout: 10000,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
