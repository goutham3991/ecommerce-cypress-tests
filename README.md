🧪 Cypress Automation Framework
A modern E2E test automation framework built using Cypress, implementing the Page Object Model (POM) design pattern, fixtures for test data, and GitHub Actions for CI/CD.

🚀 Features
✅ End-to-End UI automation using Cypress

✅ Scalable and maintainable Page Object Model

✅ Reusable custom commands

✅ Test data handling with fixtures

✅ Automated test runs on every push

✅ Scheduled test runs every 2 hours using GitHub Actions

✅ Failure alerts via email notifications

Folder Structure: 
cypress/
├── e2e/
│   ├── tests/                # Test specs
│   └── pages/                # Page Object classes
├── fixtures/                 # Test data
├── support/
│   ├── commands.js           # Custom commands
│   └── e2e.js                # Test setup
.github/
└── workflows/
    └── scheduler.yml         # GitHub Actions config

⚙️ Tech Stack
Cypress

JavaScript

GitHub Actions (CI/CD)

Page Object Model

Fixtures (Test Data)

🚗 How to Run Locally

1. Clone the Repo
git clone https://github.com/goutham3991/ecommerce-cypress-tests.git
cd your-repo-name

2. Install dependencies:
npm install

3. Run Tests
npx cypress open   # For interactive mode
npx cypress run    # For headless mode

🕒 Scheduler (CI/CD)

Location: .github/workflows/scheduler.yml

Frequency: Every 2 hours (IST)

Trigger: Test run & email on failure


🙋‍♂️ Author
Goutham Kumar
Automation Test Engineer
📧 gouthamkumar.3991@gmail.com
