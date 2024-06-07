describe("DemoQA Radio Button ", () => {
  // Prevent Cypress from failing the test on uncaught exceptions from cross-origin scripts
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it("this test for the radio butoon ", () => {
    //navigate to the url of radio button page
    cy.visit("https://demoqa.com/radio-button");

    //   visibility of the radio buttons
    cy.get("label[for='yesRadio']").should("be.visible");
    cy.get("label[for='impressiveRadio']").should("be.visible");
    cy.get("label[for='noRadio']").should("be.visible");

    //  selecting the radio  buttons

    cy.get("label[for='yesRadio']").check().should("be.checked");
    // Verify that the 'Impressive' radio button is not checked
    cy.get("input[id='impressiveRadio']").should("not.be.checked");

    // Verify that the 'No' radio button is not checked
    cy.get("input[id='noRadio']").should("not.be.checked");

    // Select the 'Impressive' radio button and verify it's checked
    cy.get("input[id='impressiveRadio']").check().should("be.checked");

    // Verify that the 'Yes' radio button is not checked after selecting 'Impressive'
    cy.get("input[id='yesRadio']").should("not.be.checked");

    // Verify that the 'No' radio button is still not checked
    cy.get("input[id='noRadio']").should("not.be.checked");
  });
});
