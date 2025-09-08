# QA Engineer Assessment - Automation & AI

## Overview

This project contains Cypress automation tests for the eight25media website as part of a QA Engineer assessment.

## Section 1 - Cypress Setup

**Project Setup:**
- Node.js project initialized
- Cypress installed as dev dependency
- Test runner verified and working

## Section 2 - Cypress Automation Task

**Test Cases Implemented:**

1. **Homepage Test**
   - Visits the homepage
   - Verifies page title contains "eight25"

2. **Navigation Test**
   - Clicks on Work menu item
   - Verifies Work page loads correctly

3. **Form Interaction**
   - Navigates to Contact page
   - Fills contact form with test data:
     - Name: Test User
     - Email: testuser@example.com
     - Message: This is a test message
   - Verifies all fields are filled correctly

4. **Responsive Check**
   - Tests mobile viewport (375x667)
   - Verifies hamburger menu is visible

**All tests are passing successfully.**

## How to Run Tests

**Install dependencies:**
```bash
npm install
```

**Run tests in headless mode:**
```bash
npx cypress run
```

**Open Cypress test runner:**
```bash
npx cypress open
```

## Section 3 - Low-Code / AI Automation

**Using Testim for the same test flow:**

**Step 1: Record the Flow**
- Open Testim and create new test
- Navigate to eight25media.com
- Click record button
- Perform actions: visit homepage, click Work menu, go to Contact page, fill form
- Testim automatically captures elements and actions

**Step 2: Add Validations**
- Add assertion for page title containing "eight25"
- Add validation for Work page content
- Add checks for form field values

**Step 3: Configure Test**
- Set test name and description
- Choose browser and device settings
- Set up mobile viewport for responsive test

**Step 4: Run and Maintain**
- Execute test from Testim dashboard
- Review results and screenshots
- AI automatically suggests fixes if elements change

**Benefits of Testim:**
- No coding required for basic flows
- AI-powered element identification
- Automatic healing when UI changes
- Visual test creation and editing

## Section 4 - AI in QA

**How AI-based test automation will improve software testing in the next 3 years:**

AI will significantly enhance test automation by providing intelligent test generation that automatically creates test cases from user behavior and application analysis. Self-healing capabilities will reduce maintenance overhead by automatically updating tests when UI elements change. AI will improve test coverage by identifying untested code paths and edge cases that human testers might miss. Additionally, predictive analytics will help prioritize testing efforts by identifying high-risk areas based on code changes and historical defect patterns. These advances will make testing more efficient, reliable, and comprehensive while reducing the manual effort required for test maintenance.

## Project Structure

```
cypress/
├── e2e/
│   └── eight25-tests.cy.js    # Main test file
└── support/
    ├── e2e.js                 # Support configuration
    └── commands.js            # Custom commands
```
