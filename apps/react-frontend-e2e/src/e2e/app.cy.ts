import { getAddTodoButton, getTodos } from '../support/app.po';

describe('react-frontend-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    getTodos().should((todos) => expect(todos.length).equal(2));
    getAddTodoButton().click();
    getTodos().should((todos) => expect(todos.length).equal(3));
  });
});
