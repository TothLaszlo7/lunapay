import { useState } from "react";
import { useDashboardData } from "../../context/DashboardContext.jsx";
import { useNavigate } from "react-router-dom";

export default function SetupPage() {
  const navigate = useNavigate();

  const { dashboardData, setDashboardData } = useDashboardData();

  const [incomeDraft, setIncomeDraft] = useState(
    dashboardData.budget.incomeAmount
  );
  const [expensesDraft, setExpensesDraft] = useState(
    dashboardData.budget.expensesAmount
  );

  const savingsDraft = incomeDraft - expensesDraft;

  const updateIncome = (nextIncome) => {
    setIncomeDraft(nextIncome);

    setDashboardData((prev) => ({
      ...prev,
      budget: {
        ...prev.budget,
        incomeAmount: nextIncome,
        savingsAmount: nextIncome - expensesDraft,
      },
    }));
  };

  const updateExpenses = (nextExpenses) => {
    setExpensesDraft(nextExpenses);

    setDashboardData((prev) => ({
      ...prev,
      budget: {
        ...prev.budget,
        expensesAmount: nextExpenses,
        savingsAmount: incomeDraft - nextExpenses,
      },
    }));
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Setup</h1>
      </header>

      <main className="dashboard-grid">
        <section className="card">
          <h2>Costs setup</h2>

          <div className="control">
            <div className="control-label">Income</div>
            <div className="control-row">
              <input
                type="range"
                min="0"
                max="2000000"
                step="5000"
                value={incomeDraft}
                onChange={(e) => updateIncome(Number(e.target.value))}
              />
              <input
                className="input-dark"
                type="number"
                min="0"
                max="2000000"
                step="5000"
                value={incomeDraft}
                onChange={(e) => updateIncome(Number(e.target.value))}
                inputMode="numeric"
              />
            </div>
          </div>

          <div className="control">
            <div className="control-label">Expenses</div>
            <div className="control-row">
              <input
                type="range"
                min="0"
                max="2000000"
                step="5000"
                value={expensesDraft}
                onChange={(e) => updateExpenses(Number(e.target.value))}
              />
              <input
                className="input-dark"
                type="number"
                min="0"
                max="2000000"
                step="5000"
                value={expensesDraft}
                onChange={(e) => updateExpenses(Number(e.target.value))}
                inputMode="numeric"
              />
            </div>
          </div>

          <div className="result-row">
            <span className="label">Savings (auto)</span>
            <span
              className={`value ${savingsDraft < 0 ? "negative" : savingsDraft > 0 ? "positive" : ""}`}
            >
              {savingsDraft} Ft
            </span>
          </div>
        </section>

        <section className="card">
          <h2>Target setup</h2>

          <div className="row">
            <span>Category</span>
            <strong>{dashboardData.goal.category || "—"}</strong>
          </div>

          <select
            value={dashboardData.goal.category}
            onChange={(e) => {
              const value = e.target.value;

              setDashboardData((prev) => ({
                ...prev,
                goal: {
                  ...prev.goal,
                  category: value,
                },
              }));
            }}
          >
            <option value="">Select category…</option>
            <option value="Holiday">Holiday</option>
            <option value="Emergency fund">Emergency fund</option>
            <option value="Car">Car</option>
            <option value="Home">Home</option>
            <option value="Gadgets">Gadgets</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>

          <div className="row" style={{ marginTop: 12 }}>
            <span>Target amount</span>
          </div>

          <input
            type="range"
            min="0"
            max="10000000"
            step="50000"
            value={dashboardData.goal.targetAmount}
            onChange={(e) => {
              const value = Number(e.target.value);

              setDashboardData((prev) => ({
                ...prev,
                goal: {
                  ...prev.goal,
                  targetAmount: value,
                },
              }));
            }}
          />

          <input
            className="input-dark"
            type="number"
            min="0"
            max="10000000"
            step="50000"
            value={dashboardData.goal.targetAmount}
            onChange={(e) => {
              const value = Number(e.target.value);
              setDashboardData((prev) => ({
                ...prev,
                goal: {
                  ...prev.goal,
                  targetAmount: value,
                },
              }));
            }}
          />

          <button type="button" onClick={() => navigate("/dashboard")}>
            Save
          </button>

          <div className="row" style={{ marginTop: 12 }}>
            <span>Estimated time</span>
            <strong>
              {savingsDraft > 0 && dashboardData.goal.targetAmount > 0
                ? `~${Math.ceil(dashboardData.goal.targetAmount / savingsDraft)} months`
                : "—"}
            </strong>
          </div>
        </section>
      </main>
    </div>
  );
}
