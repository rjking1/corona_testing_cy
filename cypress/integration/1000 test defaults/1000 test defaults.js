import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { compareFiles } from "../../../../common_cy/utils.js";

Then("click on {string} {int} times", (el, n) => {
  for (let i = 1; i <= n; i++) {
    cy.contains(el).click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(550);
  }
});

Then("check expected {string}", (fileName) => {
  cy.get(".apexcharts-menu-icon").click();
  cy.contains("Download CSV").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(500);
  compareFiles(
    `./cypress/downloads/ca-corona.csv`,
    `./cypress/expected/expected-${fileName}.csv`
  );
});
