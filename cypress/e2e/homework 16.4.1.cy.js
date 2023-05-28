describe("santaRegist", () => {
  beforeEach(() => {
    Cypress.config("baseUrl", "https://santa-secret.ru");
    cy.visit("/");
    cy.contains("Вход и регистрация").click({ force: true });
    cy.contains("Зарегистрироваться").click({ force: true });
  });

  it("Negative name", () => {
    cy.get(":nth-child(3) > .frm").type("1");
    cy.get(":nth-child(4) > .frm").click({ force: true });
    cy.contains("Имя должно быть более 2 символов").should("exist");
  });

  it("Neighbor name", () => {
    cy.get(":nth-child(3) > .frm").type("Ab");
    cy.get(":nth-child(4) > .frm").click({ force: true });
    cy.contains("Имя должно быть более 2 символов").should("not.exist");
  });

  it("Positive name", () => {
    cy.get(":nth-child(3) > .frm").type("Abc");
    cy.get(":nth-child(4) > .frm").click({ force: true });
    cy.contains("Имя должно быть более 2 символов").should("not.exist");
  });

  it("Negative email", () => {
    cy.get(":nth-child(4) > .frm").type("abd");
    cy.get(":nth-child(3) > .frm").click({ force: true });
    cy.contains("Некорректный email").should("exist");
  });

  it("Positive email", () => {
    cy.get(":nth-child(4) > .frm").type("abd@mail.ru");
    cy.get(":nth-child(3) > .frm").click({ force: true });
    cy.contains("Некорректный email").should("not.exist");
  });
});
