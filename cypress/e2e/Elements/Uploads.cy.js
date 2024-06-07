// cypress/support/commands.js
import "cypress-file-upload";

describe("DemoQA File uploads", () => {
  // Prevent Cypress from failing the test on uncaught exceptions from cross-origin scripts
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  // Define the URL for the DemoQA uploads
  const url = "https://demoqa.com/upload-download";

  beforeEach(() => {
    cy.visit(url);
  });

  // Define the file names
  const file1 = "Copy of Manual Testing Handbook.pdf";
  const file2 = "Screenshot (251).png";

  // Single file upload
  it("Single File upload", () => {
    cy.get("#uploadFile").attachFile(file1);

    //  file download
    it("Download File", () => {
      cy.get("#downloadButton").click();
      cy.wait(5000);
    });
  });
});
