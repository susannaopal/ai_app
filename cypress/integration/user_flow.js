describe('User Flow View', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/)', {
      statusCode: 200,
      body: [{
            prompt: "songs about rain"
    }]
  });
    cy.visit('http://localhost:3000/');
});

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/')
  });

  it('should be see a title at the top of the app', () => {
    cy.get('.title')
      .contains('✨Fun with AI✨')
      .should('be.visible')
  });

  it('should see a textarea input to make a prompt request', () => {
    cy.get('.text-area')
      .should('be.visible')
  });

  it('should be able to add a prompt to receive a response from AI', () => {
    cy.get('.text-area')
      .type('songs about rain')
      .get('.submit-btn')
      .click()
      .should('be.visible')
  });
});


