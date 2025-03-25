describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if all slides have valid description', function () {
    const slides = [
      { title: 'Rome', description: 'Italy' },
      { title: 'London', description: 'United Kingdom' },
      { title: 'Paris', description: 'France' },
    ];

    cy.visit('http://localhost:3000');
    
    slides.forEach((slide, index) => {
      if (index !== 0) {
        cy.get('.swiper-button-next').click();
        cy.wait(2000);
      }
      cy.get('.swiper-slide-active .card-description h1')
        .should('be.visible')
        .and('have.text', slide.title);
      cy.get('.swiper-slide-active .card-description p')
        .should('be.visible')
        .and('have.text', slide.description);
    });
  });
});