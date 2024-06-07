// cypress/integration/checkbox_spec.js

describe("Checkbox functionality", () => {
    // Prevent Cypress from failing the test on uncaught exceptions from cross-origin scripts
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  
    it("Should be able to check and uncheck checkboxes", () => {
      // Visit the demo website
      cy.visit("https://demoqa.com/checkbox");
  
      // Verify the visibility of checkboxes
      cy.get("#tree-node > ol > li > span.rct-text.rct-text-expandable").should("be.visible");
  
      // Check the checkbox
      cy.get("#tree-node > ol > li > span.rct-checkbox > label > span").click();
  
      // Verify that the checkbox is checked
      cy.get("#result").should("have.text", "You have selected :\nhome");
    });
  });
  