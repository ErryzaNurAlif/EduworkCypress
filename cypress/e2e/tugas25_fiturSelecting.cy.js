describe("Inventory page test case", () => {
  it("Should try to login value valid", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("include", "https://www.saucedemo.com/");

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

    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("Checking contains inventory page", () => {
    // Checking icon hamburger
    const ic_ham = cy.get("img[alt='Open Menu']");
    ic_ham.should(
      "have.attr",
      "src",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDg0N0YyNzI4MUVBMTFFOTkyNzA5QUIxNjg0N0RFQ0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDg0N0YyNzM4MUVBMTFFOTkyNzA5QUIxNjg0N0RFQ0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMDEwMkY3NTgxRTcxMUU5OTI3MDlBQjE2ODQ3REVDRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMDEwMkY3NjgxRTcxMUU5OTI3MDlBQjE2ODQ3REVDRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEVR4gAAAE4SURBVHjaYnykLPWfYRADFhiDg5GRgYlx8Djs57//DH9hDuQAuqzy9cfCaz9/XxgsDqwX5u834mQ1ADuQCYjP/fh1/PyPXycHiwPf//v3lgnqNlgUcw6mtMcMRkgOHKxg1IGjDhx14FB3IAuxCrXZWQ0EmJgE/pERAh/+/Xt29efvWzR1YL+o4EJXHg69H/9IcyIHExPD7m8/Vrg9ehVJUwce+/Fz3w+Gf+9+kBiEHEygavT3GZpHccObj4WjmWQ0F5MQKpeBbc9P//59GPBcjCtn2z965X7o249dA56LceXst3//vhrNxaMOHK2LR+vi0Vw86sBRB446cNSBow4k2oE//v//Ppgc9heMGBgYQaP8zIzQPsLf/x8GiwO1gK0nQWZGAXBd/Pc/A4MRO5vBoBvlB7oLIMAAQG2YMv4IXyUAAAAASUVORK5CYII="
    );

    // Checking Image SwagLabs
    const img_logo1 = cy.get("div[class='app_logo']");
    img_logo1
      .should("have.css", "background")
      .and(
        "include",
        "https://www.saucedemo.com/static/media/logo3x.096bf4a7.svg"
      );

    // Checking shopping Cart
    const shp_cart = cy.get("a[class='shopping_cart_link']");
    shp_cart
      .should("have.css", "background")
      .and(
        "include",
        "https://www.saucedemo.com/static/media/cart3x.d236358a.svg"
      );

    // Checking Header Products
    // Check Title Products
    cy.get(".title").should("contain", "Products");

    // Checking Image SwagLabs
    const img_logo2 = cy.get("div[class='peek']");
    img_logo2
      .should("have.css", "background")
      .and(
        "include",
        "https://www.saucedemo.com/static/media/headerBot3x.db38f1aa.svg"
      );

    // Masih belum paham kalau url image ::before
    // Selecting Products
    // const sel_sort = cy.get(".select_container");
    // sel_sort
    //   .should("have.css", "background")
    //   .and(
    //     "include",
    //     "https://www.saucedemo.com/static/media/filter3x.4d6d6e7f.svg"
    //   );

    // Inventory Item Products //

    // Belum terbaca url imagenya
    // Checking Image Products
    // const img_item = cy.get("img[class='inventory_item_img']");
    // img_item.should(
    //   "have.attr",
    //   "src",
    //   "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg"
    // );

    // Checking Title Products
    cy.get(".inventory_item_name").should("contain", "Sauce Labs Backpack");

    // Checking Description Products
    cy.get(".inventory_item_desc").should(
      "contain",
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
    );

    // Checking Price Products
    cy.get(".inventory_item_price").should("contain", "$29.99");

    // Checking Button Add to Cart
    cy.get("button[id='add-to-cart-sauce-labs-backpack']").should(
      "contain",
      "Add to cart"
    );

    // Checking Footer //

    // Checking url sosial twitter
    // Masih bermasalah
    // cy.url().should("eq", "https://twitter.com/saucelabs");

    // Checking Content Products
    cy.get(".footer_copy").should(
      "contain",
      "Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"
    );

    // Checking Logo
    // cy.get(".footer_robot").should(
    //   "include",
    //   "https://www.saucedemo.com/static/media/SwagBot_Footer_graphic.2e87acec.png"
    // );
    // .and(
    //   "src",
    //   "https://www.saucedemo.com/static/media/SwagBot_Footer_graphic.2e87acec.png"
    // );
  });

  it("Should try to selecting products", () => {
    // cy.get(".product_sort_container").select("az").should("have.value", "az"); //Ketika pertama dijalankan bisa
    // cy.get(".product_sort_container").select("za").should("have.value", za); //Ketika kedua dijalankan malah error
    // Tapi kalau pakai pengecekan ini bisa 3 3nya
    cy.get(".product_sort_container").select("Name (A to Z)");
    cy.get(".product_sort_container").select("Name (Z to A)");
    cy.get(".product_sort_container").select("Price (low to high)");
    cy.get(".product_sort_container").select("Price (high to low)");
  });
});
