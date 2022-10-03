describe("Browser Actions", () => {
  it("Visit Website Zero", () => {
    // Check link
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });

  it("Contains Log ing to ZeroBank", () => {
    // Check Title Navbar
    cy.get(".brand").should("contain", "Zero Bank");
    // Check Title Form Login
    cy.get(".page-header").should("contain", "Log in to ZeroBank");

    // Check Login
    cy.get(".control-label").should("contain", "Login");
    const username = cy.get("input[id='user_login']");
    username.should("be.visible");
    username.should("have.attr", "type", "text");

    // Check icon tanda tanya
    cy.get("input[id='user_login']").should("be.visible");

    // Check Password
    cy.get(".control-label").should("contain", "Password");
    const password = cy.get("input[id='user_password']");
    password.should("be.visible");
    password.should("have.attr", "type", "password");

    // Check Keep me signed in
    cy.contains("Keep me signed in");
    const checkbox = cy.get("input[id='user_remember_me']");
    checkbox.should("be.visible");
    checkbox.should("have.attr", "type", "checkbox");

    const button = cy.get("input[name='submit']");
    button.should("be.visible");
    button.should("have.attr", "type", "submit");
  });

  it("Click Keep me signed in", () => {
    const checkbox = cy.get("input[id='user_remember_me']");
    checkbox.click();
  });
});
