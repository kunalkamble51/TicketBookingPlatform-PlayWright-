    # EventHub Automated Testing Framework

This repository contains an automated end-to-end (E2E) and API testing framework for the EventHub platform, built using Playwright.

## 🚀 Overview

The framework is designed to be robust, scalable, and maintainable. It covers critical user workflows such as user authentication, event discovery, and ticket booking. It leverages the Page Object Model (POM) for UI tests and a dedicated API abstraction layer for backend service testing.

## ✨ Features

-   **E2E & API Test Suites:** Comprehensive tests for authentication, event booking, and more.
-   **Playwright-Powered:** Utilizes Playwright for reliable cross-browser automation.
-   **Page Object Model (POM):** UI interactions are encapsulated in page classes for better maintainability and code reuse.
-   **API Abstraction Layer:** Clean, reusable methods for interacting with backend services.
-   **Dynamic Test Data:** Generates unique data for each test run to ensure test independence.
-   **Parallel Execution:** Configured to run tests in parallel for faster feedback.
-   **HTML Reporting:** Generates detailed HTML reports for easy debugging and analysis.

## 📂 Project Structure

```
.
├── Api/                # API client wrappers (Auth, Booking, Events)
├── Pages/              # Page Object Model classes
├── test-data/          # Static test data
├── tests/              # Playwright test files (*.spec.js)
│   └── auth/           # API-specific tests
├── utils/              # Utility helpers (data creation, token management)
├── .gitignore
├── package.json
└── playwright.config.js # Playwright configuration
```

## 🛠️ Setup and Installation

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18.x or later recommended)
-   npm (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd TicketBookingPlatform
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**
    This command downloads the browser binaries required by Playwright.
    ```bash
    npx playwright install
    ```

## 🧪 Running the Tests

This project uses `npm` scripts to simplify running tests. You can run them using the following commands from the project root directory.

### Running Test Suites

**Run all tests in parallel (headless mode):**
```bash
npm test
```

### Run tests in Headed Mode

To watch the tests execute in a browser window.
```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/login.spec.js
```

## 📊 Viewing Test Reports

After the tests have run, an HTML report is generated in the `playwright-report` directory. You can view it with this command:

```bash
npx playwright show-report
```