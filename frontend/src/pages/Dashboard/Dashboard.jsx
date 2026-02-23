import BudgetCard from "../../components/Dashboard/BudgetCard.jsx";
import GoalCard from "../../components/Dashboard/GoalCard.jsx";
import NextStepsCard from "../../components/Dashboard/NextStepsCard.jsx";

import { useDashboardData } from "../../context/DashboardContext.jsx";
import { calcSavings, calcMonthsToGoal } from "../../utils/finance.js";
import { formatMoney } from "../../utils/money.js";

export default function DashboardPage() {
  const { dashboardData } = useDashboardData();

  const income = dashboardData.budget.incomeAmount;
  const expenses = dashboardData.budget.expensesAmount;
  const savings = calcSavings(income, expenses);

  const months = calcMonthsToGoal(dashboardData.goal.targetAmount, savings);

  const currency = dashboardData.settings?.currency || "HUF";

  const incomeText = formatMoney(income, currency);
  const expensesText = formatMoney(expenses, currency);
  const savingsText = formatMoney(savings, currency);
  const targetText = formatMoney(dashboardData.goal.targetAmount, currency);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>

      <main className="dashboard-grid">
        <BudgetCard
          incomeText={incomeText}
          expensesText={expensesText}
          savingsText={savingsText}
        />

        <GoalCard
          category={dashboardData.goal.category}
          targetText={targetText}
          months={months}
        />

        <NextStepsCard />
      </main>
    </div>
  );
}