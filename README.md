# LunaPay

LunaPay is a personal finance planning application that helps users understand
how their money evolves over time.

The core idea is simple:
**how much money will I have after X months, based on my income and expenses?**

The application focuses on clarity, conscious financial planning, and realistic
assumptions rather than complex banking integrations or speculative forecasts.

---

## Project Goals

- Provide a clear overview of monthly finances
- Calculate savings over time
- Help users plan for future goals (not limited to vacations)
- Offer basic, actionable recommendations when finances are tight
- Keep the first version simple, transparent, and trustworthy

---

## MVP Scope

The MVP intentionally focuses on **manual data input**.

### What the MVP includes:
- Manual monthly income input
- Monthly expenses (fixed, variable, irregular)
- Savings calculation (income – expenses)
- Optional savings rate tracking
- Financial goals with target amounts
- Time-based projections (monthly)
- Rule-based recommendations for negative cashflow
- Simple dashboard overview

### What the MVP does NOT include:
- Bank card or bank account access
- PSD2 / Open Banking integration
- Automatic transaction imports
- Advanced AI-driven financial advice
- Investment or market predictions

These features are intentionally postponed to keep the MVP focused and realistic.

---

## Privacy & Trust

LunaPay does **not** access bank accounts or card data.

All financial information is manually provided by the user.
This ensures transparency, user control, and reduced security risks in the MVP phase.

---

## Architecture Overview

The project is structured with clear separation of concerns:
