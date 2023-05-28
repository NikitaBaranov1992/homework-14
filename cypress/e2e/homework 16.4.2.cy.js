describe("santaRegist", () => {
  beforeEach(() => {
    Cypress.config("baseUrl", "https://santa-secret.ru");
    cy.visit("/");
    cy.contains("Вход и регистрация").click({ force: true });
  });

  it("Password null", () => {
    cy.enterText(":nth-child(3) > .frm", "Ab@mail.ru");
    cy.get(".btn-main").click({ force: true });
    cy.contains("Обязательное поле").should("exist");
  });

  it("Negative email", () => {
    cy.enterText(":nth-child(3) > .frm", "1");
    cy.get(":nth-child(4) > .frm").click({ force: true });
    cy.contains("Некорректный email").should("exist");
  });

  it("Positive email", () => {
    cy.enterText(":nth-child(3) > .frm", "Ab@mail.ru");
    cy.get(":nth-child(4) > .frm").click({ force: true });
    cy.contains("Некорректный email").should("not.exist");
  });
});

after(() => {
  console.log("Directed by Robert B. Weide");
});
