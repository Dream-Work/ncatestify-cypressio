describe("Validate internal links", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("startUrl"));
    cy.wait(Cypress.env("waitForStartpage"));
  });

  it("Every page has status code 200 and no redirect", () => {
    const hostname = window.location.hostname.split(".").slice(-2).join(".");

    let data: string[] = [];

    cy.get("a").each((item) => {
      const url = item.attr("href");


      if (url !== undefined && Cypress._.indexOf(data, url) === -1) {
        data.push(url);

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
      }
    });
  });

  it('Validate that imprint is visible', () => {
    cy.get('a').contains('Impressum').should('be.visible');
  })
});
