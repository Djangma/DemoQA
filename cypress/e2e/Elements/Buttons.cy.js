describe("Buttons", () => {
  it("Buttons check", () => {
    cy.visit("https://demoqa.com/buttons");

    // Double Clicking
    cy.get("#doubleClickBtn").click();

    // Right Clicking
    cy.get("#rightClickBtn").rightclick();

    //click me
    cy.get("#upsjE").click();
    //  cy.get('#success-message').should('be.visible').should('contain.text', 'Dynamic click successful!')
    cy.get("#dynamicClickMessage")
      .should("be.visible")
      .should("contian.text", "You have done a dynamic click");
  });
});
