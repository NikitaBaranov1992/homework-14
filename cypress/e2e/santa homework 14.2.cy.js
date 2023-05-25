describe("santa open", () => {
  beforeEach(() => {
    Cypress.config("baseUrl", "https://santa-secret.ru");
    cy.visit("https://santa-secret.ru");
  });

  it.only("santa open is correct", () => {
    cy.get(".home-page__logo").should("have.length", 1);
  });
});
