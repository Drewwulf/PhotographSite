describe('Navbar Component', () => {
  beforeEach(() => {
    // Відкриваємо головну сторінку перед кожним тестом
    cy.visit('http://localhost:3001/');
  });

  it('повинні бути посилання на Home, Gallery, та Profile', () => {
    cy.get('nav').first().within(() => {  // Використовуємо .first() для обмеження вибору
      cy.contains('Home').should('exist');
      cy.contains('Gallery').should('exist');
      cy.contains('Profile').should('exist');
    });
  });

  it('повинні відображатися посилання на Login та Register, коли користувач не увійшов', () => {
    cy.get('nav').first().within(() => {  // Використовуємо .first() для обмеження вибору
      cy.contains('Login').should('exist');
      cy.contains('Register').should('exist');
      cy.contains('Logout').should('not.exist');
    });
  });



  it('повинен переходити на правильну сторінку при кліку на посилання', () => {
    cy.get('nav').first().within(() => {
      cy.contains('Home').click({ force: true }); // Використовуємо force: true для обов’язкового кліку
    });
    cy.url().should('include', '/');

    cy.get('nav').first().within(() => {
      cy.contains('Gallery').click({ force: true }); // Те саме для Gallery
    });
    cy.url().should('include', '/gallery');

    cy.get('nav').first().within(() => {
      cy.contains('Profile').click({ force: true }); // Те саме для Profile
    });
    cy.url().should('include', '/profile');
  });


});
