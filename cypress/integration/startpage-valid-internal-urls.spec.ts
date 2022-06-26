describe("Validate internal links", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("startUrl"));
    cy.wait(Cypress.env("waitForStartpage"));
  });

  it("Every page has status code 200 and no redirect", () => {
    const hostname = window.location.hostname.split(".").slice(-2).join(".");

    cy.get("a").each((item) => {
      const url = item.attr("href");

      if (url.indexOf('mailto') == -1 && url && (url.startsWith("/") || url.includes(hostname))) {
        cy.request({
          url: url,
          followRedirect: false,
        }).then((resp) => {
          expect(resp.status).to.eq(200);
        });
      } else {
        cy.log("Skip item: " + url);
      }
    });
  });
});
