describe("Pay Bills page test case", () => {
  it("Visit Pay Bills", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });

  it("Should try to login", () => {
    cy.fixture("paysavedpayee").then((paysavedpayee) => {
      const username = paysavedpayee.username;
      const password = paysavedpayee.password;

      cy.login(username, password);
    });
  });

  it("Should try to fitur pay bills in pay saved payee", () => {
    cy.fixture("paysavedpayee").then((paysavedpayee) => {
      const paye = paysavedpayee.paye;
      const account = paysavedpayee.account;
      const amount = paysavedpayee.amount;
      const date = paysavedpayee.date;
      const desc = paysavedpayee.desc;

      cy.paysavedpayee(paye, account, amount, date, desc);
    });
  });
});
