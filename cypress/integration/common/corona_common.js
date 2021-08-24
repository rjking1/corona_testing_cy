import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("I open the corona app", () => {
  cy.visit(Cypress.env("CORONA_URL"));
  cy.wait(1000);
})

Then("click on element {string}", (el) => {
  cy.get(el).click();
});

Then("click on {string}", (txt) => {
  cy.contains(txt).click();
});

Then("enter {string} into {string}", (txt,id) => {
  cy.get(id).focus().clear().type(txt);
});

Then("check {string} has text {string}", (el, txt) => {
  // have.text does not work. why?
  cy.get(el).should('have.value', txt)
})
