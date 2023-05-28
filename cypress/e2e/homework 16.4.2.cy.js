describe("santaRegist", () => {
  beforeEach(() => {
    Cypress.config("baseUrl", "https://santa-secret.ru");
    cy.visit("/");
    cy.contains("Вход и регистрация").click({ force: true });
  });

  it("Password null", () => {
    cy.get(":nth-child(3) > .frm").type("Ab@mail.ru");
    cy.contains("Войти").click({ force: true });
    cy.contains("Обязательное поле").should("exist");
  });

  it("Negative email", () => {
    cy.get(":nth-child(3) > .frm").type("1");
    cy.get(":nth-child(4) > .frm").click({ force: true });
    cy.contains("Некорректный email").should("exist");
  });

  it("Positive email", () => {
    cy.get(":nth-child(3) > .frm").type("Ab@mail.ru");
    cy.get(":nth-child(4) > .frm").click({ force: true });
    cy.contains("Некорректный email").should("not.exist");
  });
});
