describe("API Tests", () => {
  beforeEach(() => {
    cy.errorHandler();
  });

  it("Should intercept the POST request and validate response", () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.intercept("POST", "https://sumome.com/services").as("postServices");
    cy.visit("/");
    cy.wait("@postServices", { timeout: 10000}).then((interception) => {
      const displayRules =
        interception.response.body.shareService.display_rules;
      displayRules.forEach((rule) => {
        if (rule.id) {
          expect(rule).to.have.property("created_at");
          expect(rule).to.have.property("updated_at");
          const createdAtDate = rule.created_at.split("T")[0];
          const updatedAtDate = rule.updated_at.split("T")[0];
          const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          expect(createdAtDate).to.match(dateRegex);
          expect(updatedAtDate).to.match(dateRegex);
          // cy.log(rule.created_at.split('T')[0])
        }
      });
      const foundRule = displayRules.find(
        (rule) => rule.filter_value === "industry-trends/trendlines"
      );
      expect(foundRule).to.not.be.empty;
      // cy.log(JSON.stringify(foundRule))
      const extractedValues = {
        id: foundRule.id,
        site_id: foundRule.site_id,
        app_id: foundRule.app_id,
        object_id: foundRule.object_id,
        group_id: foundRule.group_id,
      };

      cy.log(JSON.stringify(extractedValues));
    });
  });
});
