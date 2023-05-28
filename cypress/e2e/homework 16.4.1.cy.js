let nameSanta = ":nth-child(3) > .frm";
let emailSanta = ":nth-child(4) > .frm";

describe("santaRegist", () => {
  beforeEach(() => {
    Cypress.config("baseUrl", "https://santa-secret.ru");
    cy.visit("/");
    cy.contains("Вход и регистрация").click({ force: true });
    cy.contains("Зарегистрироваться").click({ force: true });
    cy.wait(500);
  });

  it("Negative name, one symbol", () => {
    cy.enterText(nameSanta, "1");
    cy.get(emailSanta).click({ force: true });
    cy.contains("Имя должно быть более 2 символов").should("exist");
  });

  it("Negative name, big name", () => {
    cy.enterText(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
    cy.get(emailSanta).click({ force: true });
    cy.contains("Имя должно быть не более 64 символов").should("exist");
  });

  it("Neighbor name", () => {
    cy.enterText(nameSanta, "Ab");
    cy.get(emailSanta).click({ force: true });
    cy.contains("Имя должно быть более 2 символов").should("not.exist");
  });

  it("Positive name", () => {
    cy.enterText(nameSanta, "Abc");
    cy.get(emailSanta).click({ force: true });
    cy.contains("Имя должно быть более 2 символов").should("not.exist");
  });

  it("Negative email", () => {
    cy.enterText(emailSanta, "abd");
    cy.get(nameSanta).click({ force: true });
    cy.contains("Некорректный email").should("exist");
  });

  it("Positive email", () => {
    cy.enterText(emailSanta, "abd@mail.ru");
    cy.get(nameSanta).click({ force: true });
    cy.contains("Некорректный email").should("not.exist");
  });
});

after(() => {
  console.log("Directed by Robert B. Weide");
});
