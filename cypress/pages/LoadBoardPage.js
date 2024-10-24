class LoadBoardPage{
   get comboBtn() {return cy.contains('Combo')};
   get selectBrokerCarrier() {return cy.contains('Select Broker/Carrier')};
   get plansSection() {return cy.contains('Load board plans')};
}

export default new LoadBoardPage();