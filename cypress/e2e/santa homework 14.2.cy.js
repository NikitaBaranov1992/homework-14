describe("santa open", () => {
  beforeEach(() => {
    cy.visit("https://staging.lpitko.ru");
  });

  it.only("santa open is correct", () => {
    cy.get(".home-page__logo").should("have.length", 1);
  });
});
