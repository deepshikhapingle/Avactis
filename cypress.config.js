const { defineConfig } = require("cypress");
//const { allureCypress } = require("allure-cypress/reporter");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));
  // allureCypress(on, {
  //   resultsDir: "./allure-results",
  // });

  //Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({
  viewportHeight: 960,
  viewportWidth: 1536,
  e2e: {
    setupNodeEvents,
    specPattern: ["**/*.feature", "**/*.cy.js"],
    stepDefinitions: [
      "cypress/e2e/BDD/stepDefinition/**/*.{js,ts}",
      "cypress/e2e/[filepath].{js,ts}",
      "cypress/support/stepDefinition/**/*.{js,ts}",
    ]

  },
});
