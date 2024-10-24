SDET Code Challenge

Overview
This project contains automated UI and API tests for the DAT Load Board page using Cypress. The purpose of these tests is to validate UI components and API responses, simulating a real-world test scenario.

Table of Contents
Prerequisites
Installation
Project Structure
Running the Tests
Test Details
UI Test
API Test
Pipeline Configuration
Additional Information

Prerequisites
Ensure you have the following installed on your system:
Node.js (v21.7.3 or higher) – Download here

Installation
1. Navigate into the project folder:
cd challenge

2. Install the necessary dependencies:
npm install

3.Open Cypress to verify installation:
npx cypress open

Project Structure

challenge/
├── cypress/
│   ├── e2e/
│   │   ├── API test/
│   │   │   └── api_tests.cy.js  # API test script
│   │   └── UI test/
│   │       └── load_board.cy.js # UI test script
│   ├── fixtures/
│   │   └── loadBoardData.json   # Test data for UI tests
│   ├── pages/
│   │   └── LoadBoardPage.js     # Page Object for Load Board
│   └── support/
│       ├── commands.js          # Custom commands
│       └── e2e.js               # Global test behavior
├── .gitignore                   # Ignore files for Git
├── cypress.config.js            # Cypress configuration
├── package-lock.json            # npm package lock file
└── package.json                 # Project metadata

Running the Tests
To run the tests locally:

Run in headless mode:
npx cypress run

Run via Cypress UI:
npx cypress open
You can then select the tests to run interactively.

Test Details
UI Test
The UI test is located in cypress/e2e/UI test/load_board.cy.js and checks for:

Correct page load of the DAT Load Board.
Visibility of the 'Load Board Plans' section.
Functionality of the 'Combo' option.
Renaming confirmation from ‘Power Select Broker/Carrier’ to 'DAT One Select Broker/Carrier'.

API Test
The API test is located in cypress/e2e/API test/api_tests.cy.js. It validates:

Correct format of created_at and updated_at fields in display rules.
Verifies the rule corresponding to industry-trends/trendlines and extracts key fields (id, site_id, app_id, etc.).