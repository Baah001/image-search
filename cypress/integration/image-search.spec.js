context('Assertions', () => {
  beforeEach(() => {
	cy.visit('localhost:4200/');
  });

  describe('Homepage should function proper', () => {
	it('should render with a label', () => {
		cy.get('label.col-form-label').should('contain', 'Search for images');
	});

    it('.type() - type into a DOM element - no profanity', () => {
      // https://on.cypress.io/type
      cy.get('input#imageSearch')
        .type('house').should('have.value', 'house');

      cy.get('.btn.btn-primary')
        .click();

      cy.get('.card-body').should('be.visible');
    });

    it('.type() - type into a DOM element - profanity', () => {
      // https://on.cypress.io/type
      cy.get('input#imageSearch')
        .type('fuck').should('have.value', 'fuck');


      cy.get('.alert-danger').contains('Please, mind your language');
    })
  });
});
