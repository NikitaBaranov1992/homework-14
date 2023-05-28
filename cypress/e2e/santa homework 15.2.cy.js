let email = Cypress.env("email");
let password = Cypress.env("password");

before(() => {
  cy.log("Run tests");
});

describe("santa", () => {
  beforeEach(() => {
    Cypress.config("baseUrl", "https://santa-secret.ru");
    cy.visit("/login");
    cy.get("[name=email]").type(email);
    cy.get("[name=password]").type(password);
    cy.get(".form-auth__button").click();
    cy.wait(500);
  });

  it("account", () => {
    cy.contains("Никита Баранов").click({ force: true });
    cy.locUrl("/account");
    cy.go("back");
  });

  it("boxes", () => {
    cy.contains("Коробки").click({ force: true });
    cy.locUrl("/account/boxes");
    cy.go("back");
  });

  it("randomizer", () => {
    cy.contains("Быстрая жеребьевка").click();
    cy.locUrl("/randomizer");
    cy.go("back");
  });

  it("add box", () => {
    cy.contains("Создать коробку").click();
    cy.locUrl("/box/new");
    cy.go("back");
  });
});
