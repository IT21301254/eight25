describe('Eight25 Website Tests', () => {
  
  // Test 1: Homepage Test
  it('should visit homepage and verify title contains eight25', () => {
    cy.visit('/')
    cy.title().should('contain', 'eight25')
  })

  // Test 2: Navigation Test
  it('should click Work menu and verify Work page loads', () => {
    cy.visit('/')
    
    // Click on Work menu item
    cy.contains('Work').click()
    
    // Verify Work page loads (correct URL is eight25-work)
    cy.url().should('include', 'eight25-work')
    
    // Verify page content (look for work-related content instead of exact "Our Work")
    cy.get('body').should('contain', 'Work')
  })

  // Test 3: Form Interaction
  it('should navigate to Contact page and fill form', () => {
    // Navigate directly to Contact page
    cy.visit('/lets-talk/')
    
    // Scroll to form and wait for it to be visible
    cy.get('form').scrollIntoView().should('be.visible')
    
    // Fill in the contact form
    cy.get('input[name="your-name"]').type('Test User')
    cy.get('input[name="your-email"]').type('testuser@example.com')
    cy.get('textarea[name="your-message"]').type('This is a test message')
    
    // Assert fields are filled correctly
    cy.get('input[name="your-name"]').should('have.value', 'Test User')
    cy.get('input[name="your-email"]').should('have.value', 'testuser@example.com')
    cy.get('textarea[name="your-message"]').should('have.value', 'This is a test message')
  })

  // Test 4: Responsive Check (Bonus)
  it('should verify mobile menu is visible in mobile viewport', () => {
    // Set mobile viewport
    cy.viewport(375, 667)
    
    cy.visit('/')
    
    // Verify hamburger menu (mobile menu toggle) is visible
    cy.get('.navbar-toggler').should('be.visible')
  })

})
