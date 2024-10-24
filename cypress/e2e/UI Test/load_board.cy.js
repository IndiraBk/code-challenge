import data from "../../fixtures/loadBoardData.json";
import LoadBoardPage from "../../pages/LoadBoardPage";

describe("UI Test for DAT Load Board Page ", () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });

  it("Should open the Load Boards Page and validate elements", () => {
    cy.visit("https://www.dat.com/load-boards");
    cy.url().should("include", "load-boards");
    cy.title().should("equal", "Load Board - DAT");
    cy.contains("Load board plans").should("be.visible");
    cy.contains("Combo").click();
    cy.contains("Select Broker/Carrier").should(
      "have.text",
      "Formerly Power Select Broker/Carrier"
    );
  });

  // Second version of the UI test solution, using fixtures and page object module
  it("Should open the Load Boards Page and validate elements", () => {
    cy.visit(data.pageUrl);
    cy.url().should("include", data.pagePath);
    cy.title().should("equal", data.title);
    LoadBoardPage.plansSection.should("be.visible");
    LoadBoardPage.comboBtn.click();
    LoadBoardPage.selectBrokerCarrier.should(
      "have.text",
      data.selectBrokerCarrierText
    );
  });
});
