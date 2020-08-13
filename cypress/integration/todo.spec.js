describe('ToDoApp', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  describe('when just loaded', () => {
    it('loads an empty todo list', () => {
      cy.contains('No hay tareas. Agrega nuevas.').should('be.visible');
    });
  });

  describe('when adding a todo item', () => {
    it('should show the item on the list', () => {
      cy.get('input#add-todo').type('Comprar huevo');
      cy.get('button').contains('+').click();
      cy.contains('Comprar huevo').should('be.visible');
    });

    it('should show the total of items', () => {
      cy.get('input#add-todo').type('Comprar huevo');
      cy.get('button').contains('+').click();
      cy.get('input#add-todo').type('Lavar trastes');
      cy.get('button').contains('+').click();
      cy.get('input#add-todo').type('Sacar la basura');
      cy.get('button').contains('+').click();
      cy.contains('Total de tareas: 3').should('be.visible');
    });
  });

  describe('when clicking a todo item', () => {
    it('should mark it as completed', () => {
      cy.get('input#add-todo').type('Comprar huevo');
      cy.get('button').contains('+').click();
      cy.get('input#add-todo').type('Lavar trastes');
      cy.get('button').contains('+').click();
      cy.get('input#add-todo').type('Sacar la basura');
      cy.get('button').contains('+').click();

      cy.contains('Lavar trastes').click();
      cy.contains('Lavar trastes').parent().should('have.class', 'completed');
    });
  });
});
