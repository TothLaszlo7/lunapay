# LunaPay

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-12.9.0-FFCA28?logo=firebase&logoColor=black" />
  <img src="https://img.shields.io/badge/React_Router-7.13.0-CA4245?logo=reactrouter&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-9.39.1-4B32C3?logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Prettier-configured-F7B93E?logo=prettier&logoColor=black" />
</p>

> LunaPay is a runnable frontend MVP for personal finance planning.
> It helps users understand how their money may evolve over time based on manually entered income, expenses and financial goals.

---

## Project Status

This project is currently a **runnable frontend MVP**.

The application is under active development and is waiting for mentor feedback before a planned refactor.

Current status:

* Frontend MVP is runnable locally
* Firebase configuration is prepared
* Authentication-related structure is included
* Dashboard and planning pages are implemented
* Backend folder is currently reserved for future API development
* Dockerized version is planned in a separate container-focused repository

The goal is not to present this as a finished production application, but as a realistic portfolio project that demonstrates frontend application structure, financial planning logic, Firebase integration and future infrastructure-oriented thinking.

---

## About The Project

LunaPay is a personal finance planning application that helps users answer a simple but important question:

> How much money will I have after X months based on my income, expenses and goals?

The application focuses on:

* monthly income planning
* expense tracking
* savings calculation
* financial goal planning
* simple projections over time
* clear dashboard-based feedback
* user control and privacy

The MVP intentionally uses **manual data input** instead of bank integrations. This keeps the first version simple, transparent and realistic.

---

## Project Goals

The main goals of LunaPay are:

* provide a clear overview of monthly finances
* calculate savings over time
* help users plan for future goals
* show simple financial progress indicators
* keep the first version understandable and trustworthy
* avoid unnecessary complexity in the MVP phase
* build a foundation that can later be extended with backend and infrastructure features

---

## MVP Scope

### What the MVP includes

* Manual monthly income input
* Monthly expenses
* Savings calculation
* Goal-based planning
* Dashboard overview
* Protected route structure
* Firebase configuration
* Authentication-related context and service structure
* Finance utility functions
* Vite-based local development setup

### What the MVP does not include yet

* Bank account access
* Bank card access
* PSD2 / Open Banking integration
* Automatic transaction imports
* Advanced AI-driven financial advice
* Investment or market predictions
* Production backend API
* Dockerized production deployment in this repository

These features are intentionally postponed to keep the MVP focused and realistic.

---

## Privacy & Trust

LunaPay does **not** access real bank accounts or card data.

All financial information is manually provided by the user.

This approach helps keep the MVP:

* transparent
* easier to understand
* safer to test
* free from unnecessary financial data access
* focused on planning instead of banking integrations

---

## Built With

### Frontend

* React
* Vite
* React Router
* CSS Modules
* Global CSS

### Backend / Services

* Firebase
* Firebase configuration prepared in the frontend
* Backend folder reserved for future API development

### Development Tools

* Node.js
* npm
* ESLint
* Prettier
* Git
* GitHub

---

## Application Structure

```text
lunapay/
│
├── backend/
│   └── Reserved for future backend/API development
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   └── ProtectedRoute/
│   │   │
│   │   ├── config/
│   │   │   ├── appConfig.js
│   │   │   └── firebase.js
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── DashboardContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard/
│   │   │   ├── Login/
│   │   │   ├── Plans/
│   │   │   └── Setup/
│   │   │
│   │   ├── services/
│   │   │   └── authService.js
│   │   │
│   │   ├── styles/
│   │   │   └── global.css
│   │   │
│   │   ├── utils/
│   │   │   ├── finance.js
│   │   │   └── money.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env.example
│   ├── package.json
│   ├── vite.config.js
│   └── README.frontend.md
│
└── README.md
```

---

## Main Features

### Dashboard

The dashboard is structured around reusable cards and financial overview components.

Current dashboard-related components include:

* BudgetCard
* GoalCard
* GoalProgressCard
* NextStepsCard

### Financial Planning

The project includes utility functions for money formatting and finance-related calculations.

Current utility files:

* `finance.js`
* `money.js`

### Authentication Structure

The project includes an authentication-related structure using:

* `AuthContext`
* `authService`
* Firebase configuration
* protected route handling

### Planning Pages

The project contains pages for creating and viewing plans:

* PlansPage
* NewPlanPage
* PlanDetailsPage

### Setup Flow

The project includes a setup page for preparing the user experience and initial app state.

---

## Running Locally

The runnable application is inside the `frontend/` folder.

### 1. Clone the repository

```bash
git clone https://github.com/TothLaszlo7/lunapay.git
cd lunapay
```

### 2. Navigate to the frontend folder

```bash
cd frontend
```

### 3. Create environment file

Copy the example environment file:

```bash
cp .env.example .env
```

Example environment values:

```env
VITE_APP_NAME=LunaPay
VITE_APP_VERSION=0.1.0
VITE_API_BASE_URL=http://localhost:8080
```

### 4. Install dependencies

```bash
npm install
```

### 5. Start the development server

```bash
npm run dev
```

The Vite development server will start locally and print the local URL in the terminal.

---

## Available Scripts

Run these commands from the `frontend/` folder.

### Start development server

```bash
npm run dev
```

### Create production build

```bash
npm run build
```

### Run linting

```bash
npm run lint
```

### Preview production build locally

```bash
npm run preview
```

---

## Environment Variables

The frontend uses Vite environment variables.

Example:

```env
VITE_APP_NAME=LunaPay
VITE_APP_VERSION=0.1.0
VITE_API_BASE_URL=http://localhost:8080
```

Notes:

* `.env.example` is committed to show the required structure.
* Real `.env` files should not contain sensitive production secrets.
* Firebase-related configuration should be handled carefully.
* Public frontend environment variables are visible in the browser bundle, so private secrets must not be stored there.

---

## Current Limitations

The project is still under active development.

Current limitations:

* Backend folder is currently reserved for future API development
* Some parts may change after mentor feedback
* Refactoring is planned
* Automated tests are not yet included
* Dockerization is planned separately
* Production deployment is not part of the current MVP

---

## Quality & Validation

Current validation methods:

* manual testing in the browser
* Vite development server
* ESLint configuration
* build script
* project structure review
* mentor feedback pending

Future quality improvements:

* add automated tests
* improve component structure after mentor feedback
* add form validation tests
* add finance utility tests
* add CI checks
* add Docker-based local setup

---

## Security Notes

LunaPay is a financial planning MVP, but it does not connect to real bank accounts.

Important security notes:

* no bank account access is used
* no card data is collected
* no automatic transaction import is implemented
* financial data is manually entered by the user
* frontend `.env` variables must not contain private secrets
* Firebase configuration should be reviewed before production use

---

## Future Improvements

Planned or possible improvements:

* refactor after mentor feedback
* improve component structure
* add automated tests
* add backend API
* add database persistence improvements
* improve Firebase authentication flow
* add Docker setup
* connect with the LunaPay Container Platform repository
* add CI workflow
* add deployment documentation
* improve dashboard visualizations
* add screenshots to the README
* add demo deployment link

---

## What I Learned

This project helped me practice:

* building a React application with Vite
* structuring a frontend project into pages, components, context, services and utilities
* using Firebase configuration in a frontend app
* creating protected route structure
* separating financial logic into utility files
* thinking in MVP scope instead of overbuilding
* documenting current limitations honestly
* planning future backend and infrastructure improvements

---

## Related Repository

A separate repository is planned for the Dockerized/containerized version of this application:

[LunaPay Container Platform](https://github.com/TothLaszlo7/lunapay-container-platform)

---

## Author

**Laszlo Toth**

GitHub: https://github.com/TothLaszlo7

LinkedIn: https://www.linkedin.com/in/laszlo-toth-it
