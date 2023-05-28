let nameSanta = ":nth-child(3) > .frm";
let emailSanta = ":nth-child(4) > .frm";

describe("santaRegist", () => {
  beforeEach(() => {
    Cypress.config("baseUrl", "https://santa-secret.ru");
    cy.visit("/");
    cy.contains("Вход и регистрация").click({ force: true });
  });

  it("Password null", () => {
    cy.enterText(nameSanta, "Ab@mail.ru");
    cy.get(".btn-main").click({ force: true });
    cy.contains("Обязательное поле").should("exist");
  });

  it("Negative email", () => {
    cy.enterText(nameSanta, "1");
    cy.get(emailSanta).click({ force: true });
    cy.contains("Некорректный email").should("exist");
  });

  it("Positive email", () => {
    cy.enterText(nameSanta, "Ab@mail.ru");
    cy.get(emailSanta).click({ force: true });
    cy.contains("Некорректный email").should("not.exist");
  });
});

after(() => {
  console.log("Directed by Robert B. Weide");
});
