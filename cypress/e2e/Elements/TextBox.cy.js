describe("DemoQA Text Box ", () => {
    // Prevent Cypress from failing the test on uncaught exceptions from cross-origin scripts
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  
    it("fills out the form and submits it", () => {
      // Define user data variables
      const userName = "Djangmah Benedicta";
      const userEmail = "djangmah100@gmail.com";
      const currentUserAddress = "anaji-taadi";
      const permanentUserAddress = "ttu new site";
  
      // Define the URL for the DemoQA text box page
      const url = "https://demoqa.com/text-box";
  
      // Visit the DemoQA text box page
      cy.visit(url);
  
      // Fill out the form fields using XPath and user data variables
      cy.xpath('//input[@id="userName"]').type(userName);
      cy.xpath('//input[@id="userEmail"]').type(userEmail);
      cy.xpath('//textarea[@id="currentAddress"]').type(currentUserAddress);
      cy.xpath('//textarea[@id="permanentAddress"]').type(permanentUserAddress);
  
      // Submit the form
      cy.get('#submit').click();
  
      // Verify the output using XPath and the user data variables
      cy.get('#name').should("contain", userName);
      cy.get('#email').should("contain", userEmail);
      cy.get('#currentAddress').should("contain", currentUserAddress);
      cy.get('#permanentAddress').should("contain", permanentUserAddress);
    });
  });
  