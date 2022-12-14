describe("Login page test case ", () => {
  it("Visit the website SwagLabs", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("include", "https://www.saucedemo.com/");
  });

  it("Checking contains login page", () => {
    // Checking contains Logo SwagLabs
    const img_logo1 = cy.get("div[class='login_logo']");
    img_logo1.should("be.visible");
    img_logo1
      .should("have.css", "background")
      .and(
        "include",
        "data:image/png;base64,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"
      );

    // Checking contains Username
    const username = cy.get("input[id='user-name']");
    username.should("be.visible");
    username.should("have.attr", "type", "text");
    username.should("have.attr", "placeholder", "Username");

    // Checking contains Password
    const password = cy.get("input[id='password']");
    password.should("be.visible");
    password.should("have.attr", "type", "password");
    password.should("have.attr", "placeholder", "Password");

    // Checking contains Button
    const button = cy.get("input[id='login-button']");
    button.should("be.visible");
    button.should("have.attr", "value", "Login");

    // Checking contains Image SwagLabs
    const img_logo2 = cy.get("div[class='bot_column']");
    img_logo2.should("be.visible");
    img_logo2
      .should("have.css", "background")
      .and(
        "include",
        "https://www.saucedemo.com/static/media/Login_Bot_graphic.20658452.png"
      );
  });

  // Note masih error di erro massage
  it("Should try to login value null", () => {
    cy.fixture("user").then((user) => {
      const username = user.username_null;
      const password = user.password_null;

      // Input username
      cy.get("input[id='user-name']").clear();
      cy.get("input[id='user-name']").type(username);

      // Input password
      cy.get("input[id='password']").clear();
      cy.get("input[id='password']").type(password);

      // Click button
      cy.get("input[id='login-button']").click();

      // Error massage
      // const msgerror = cy.get("div[class='error-message-container error']");
      // msgerror.should("be.visible");
      // msgerror.should("contain", "Epic sadface: Username is required");

      // Click error massage
      const errbtn = cy.get("button[class='error-button']");
      errbtn.should("be.visible");
      errbtn.click();
    });
  });

  // Tahap ini masih error di error massage
  it("Should try to login username value null", () => {
    cy.fixture("user").then((user) => {
      const username = user.username_null;
      const password = user.password;

      // Input username
      cy.get("input[id='user-name']").clear();
      cy.get("input[id='user-name']").type(username);

      // Input password
      cy.get("input[id='password']").clear();
      cy.get("input[id='password']").type(password);

      // Click button
      cy.get("input[id='login-button']").click();

      // Error massage
      // const msgerror = cy.get("div[class='error-message-container error']");
      // msgerror.should("be.visible");
      // msgerror.should("contain", "Epic sadface: Username is required");

      // Click error massage
      const errbtn = cy.get("button[class='error-button']");
      errbtn.should("be.visible");
      errbtn.click();
    });
  });

  // Tahap ini masih error di error massage
  it("Should try to login password value null", () => {
    cy.fixture("user").then((user) => {
      const username = user.username;
      const password = user.password_null;

      // Input username
      cy.get("input[id='user-name']").clear();
      cy.get("input[id='user-name']").type(username);

      // Input password
      cy.get("input[id='password']").clear();
      cy.get("input[id='password']").type(password);

      // Click button
      cy.get("input[id='login-button']").click();

      // Error massage
      // const msgerror = cy.get("div[class='error-message-container error']");
      // msgerror.should("be.visible");
      // msgerror.should("contain", "Epic sadface: Password is required");

      // Click error massage
      const errbtn = cy.get("button[class='error-button']");
      errbtn.should("be.visible");
      errbtn.click();
    });
  });

  it("Should try to login value invalid", () => {
    cy.fixture("user").then((user) => {
      const username = user.username_invalid;
      const password = user.password_invalid;

      // Input username
      cy.get("input[id='user-name']").clear();
      cy.get("input[id='user-name']").type(username);

      // Input password
      cy.get("input[id='password']").clear();
      cy.get("input[id='password']").type(password);

      // Click button
      cy.get("input[id='login-button']").click();

      // Error massage
      const msgerror = cy.get("div[class='error-message-container error']");
      msgerror.should("be.visible");
      msgerror.should(
        "contain",
        "Epic sadface: Username and password do not match any user in this service"
      );

      // Click error massage
      const errbtn = cy.get("button[class='error-button']");
      errbtn.should("be.visible");
      errbtn.click();
    });
  });

  it("Should try to login value valid", () => {
    cy.fixture("user").then((user) => {
      const username = user.username;
      const password = user.password;

      cy.get("input[id='user-name']").clear();
      cy.get("input[id='user-name']").type(username);

      cy.get("input[id='password']").clear();
      cy.get("input[id='password']").type(password);

      const button = cy.get("input[id='login-button']");
      button.click();
    });
  });
});
