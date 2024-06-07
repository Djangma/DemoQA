describe('OrangeHRM Login Test', () => {
    const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    const validUsername = 'Admin';
    const validPassword = 'admin123';
    const invalidUsername = 'invalidUser';
    const invalidPassword = 'invalidPass';
  
    beforeEach(() => {
      cy.visit(url);
    });
  
    it('should successfully login with valid credentials', () => {
      cy.get('input[name="username"]').type(validUsername);
      cy.get('input[name="password"]').type(validPassword);
      cy.get('button[type="submit"]').click();
      
      // Verify successful login by checking URL or a specific element
      cy.url().should('include', '/dashboard/index');
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard');
    });
  
    it('should display error with invalid username', () => {
      cy.get('input[name="username"]').type(invalidUsername);
      cy.get('input[name="password"]').type(validPassword);
      cy.get('button[type="submit"]').click();
      
      // Verify error message
      cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
    });
  
    it('should display error with invalid password', () => {
      cy.get('input[name="username"]').type(validUsername);
      cy.get('input[name="password"]').type(invalidPassword);
      cy.get('button[type="submit"]').click();
      
      // Verify error message
      cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
    });
  
    it('should display error with empty credentials', () => {
      cy.get('button[type="submit"]').click();
      
      // Verify error message for both fields
      cy.get('.oxd-input-group > .oxd-text').should('contain', 'Required');
    });
  });
  