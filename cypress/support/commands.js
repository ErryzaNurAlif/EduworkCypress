// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();

  // Input username
  cy.get("input[id='user_login']").clear();
  cy.get("input[id='user_login']").type(username);

  // Input password
  cy.get("input[id='user_password']").clear();
  cy.get("input[id='user_password']").type(password);

  // Click keep me signed in
  cy.get("input[id='user_remember_me']")
    .not("[disabled]")
    .check()
    .should("be.checked");

  // Click sign in
  cy.get("input[name='submit']").click();

  // Checking url setelah login benar url account
  cy.url().should(
    "eq",
    "http://zero.webappsecurity.com/bank/account-summary.html"
  );

  // Click ke pay bills
  cy.get("#pay_bills_tab > a").click();

  // Checking bahwa benar url pay bills
  cy.url().should("eq", "http://zero.webappsecurity.com/bank/pay-bills.html");
});

Cypress.Commands.add("paysavedpayee", (paye, account, amount, date, desc) => {
  cy.clearCookies();
  cy.clearLocalStorage();

  // Selecting bank of america
  cy.get("select[id='sp_payee']").select(paye).should("have.value", "bofa");

  // Selecting checking
  cy.get("select[id='sp_account']").select(account).should("have.value", "2");

  // Input amount
  cy.get("input[id='sp_amount']").type(amount);

  // Input date
  cy.get("input[id='sp_date']").type(date).should("have.value", "2022-10-03");
  cy.get(".ui-datepicker-days-cell-over > .ui-state-default").click();

  // Input description
  cy.get("input[id='sp_description']").type(desc);

  // Click button pay
  cy.get("input[id='pay_saved_payees']").click();

  // Checking back url login
  cy.url().should("eq", "http://zero.webappsecurity.com/login.html");
});
