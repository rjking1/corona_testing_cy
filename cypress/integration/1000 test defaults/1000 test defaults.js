import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { compareFiles } from "../../../../common_cy/utils.js"

Then("click on {string} and wait", (el) => {
    cy.contains(el).click();
    cy.wait(700);
});

Then("check history", () => {
    cy.get(".apexcharts-menu-icon").click();
    cy.contains("Download CSV").click();
    compareFiles("./cypress/downloads/ca-corona.csv", "./cypress/expected/expected-ca-corona.csv")
});
