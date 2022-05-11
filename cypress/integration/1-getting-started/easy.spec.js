describe('Easy check', () => {
  beforeEach(() => {
    cy.visit('https://ant.design/components/tree-select/');
  });

  it('should have a title', () => {
    cy.title().should('include', 'TreeSelect - Ant Design');
  });

  it('should have a tree select', () => {
    const el = cy.get('.ant-tree-select').first();
    el.should('be.visible');
    el.click();

    cy.get('.ant-select-dropdown').should('be.visible');
  });
});
