describe("santaRegist", () => {
  beforeEach(() => {
    Cypress.config("baseUrl", "https://santa-secret.ru");
    cy.visit("/");
    cy.contains("Вход и регистрация").click({ force: true });
    cy.contains("Зарегистрироваться").click({ force: true });
    cy.wait(500);
  });

  it("Negative name, one symbol", () => {
    cy.enterText(":nth-child(3) > .frm", "1");
    cy.get(":nth-child(4) > .frm").click({ force: true });
    cy.contains("Имя должно быть более 2 символов").should("exist");
  });

  it("Negative name, big name", () => {
    cy.enterText(
      "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    );
    cy.get(":nth-child(4) > .frm").click({ force: true });
    cy.contains("Имя должно быть не более 64 символов").should("exist");
  });

  it("Neighbor name", () => {
    cy.enterText(":nth-child(3) > .frm", "Ab");
    cy.get(":nth-child(4) > .frm").click({ force: true });
    cy.contains("Имя должно быть более 2 символов").should("not.exist");
  });

  it("Positive name", () => {
    cy.enterText(":nth-child(3) > .frm", "Abc");
    cy.get(":nth-child(4) > .frm").click({ force: true });
    cy.contains("Имя должно быть более 2 символов").should("not.exist");
  });

  it("Negative email", () => {
    cy.enterText(":nth-child(4) > .frm", "abd");
    cy.get(":nth-child(3) > .frm").click({ force: true });
    cy.contains("Некорректный email").should("exist");
  });

  it("Positive email", () => {
    cy.enterText(":nth-child(4) > .frm", "abd@mail.ru");
    cy.get(":nth-child(3) > .frm").click({ force: true });
    cy.contains("Некорректный email").should("not.exist");
  });
});

after(() => {
  console.log("Directed by Robert B. Weide");
});
