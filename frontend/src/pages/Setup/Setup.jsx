import { useEffect, useState } from "react";
import { useDashboardData } from "../../context/DashboardContext.jsx";
import { useNavigate } from "react-router-dom";

export default function SetupPage() {
  const navigate = useNavigate();
  const { dashboardData, activePlan, updateSettings, updateActivePlan } =
    useDashboardData();
  const currency = dashboardData.settings.currency;

  
  const [incomeDraft, setIncomeDraft] = useState(
    dashboardData.settings.monthlyIncome
  );
  const [expensesDraft, setExpensesDraft] = useState(
    dashboardData.settings.avgMonthlyExpenses
  );
  const [planNameDraft, setPlanNameDraft] = useState(activePlan.name ?? "");
  const [categoryDraft, setCategoryDraft] = useState(
    activePlan.goal.category ?? ""
  );
  const [targetDraft, setTargetDraft] = useState(
    activePlan.goal.targetAmount ?? 0
  );
  const [targetDateDraft, setTargetDateDraft] = useState(
    activePlan.goal.targetDate ?? ""
  );
  
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
  if (!activePlan) return;
  if (isInitialized) return;

  setIncomeDraft(dashboardData.settings.monthlyIncome ?? 0);
  setExpensesDraft(dashboardData.settings.avgMonthlyExpenses ?? 0);

  setPlanNameDraft(activePlan.name ?? "");
  setCategoryDraft(activePlan.goal?.category ?? "");
  setTargetDraft(activePlan.goal?.targetAmount ?? 0);
  setTargetDateDraft(activePlan.goal?.targetDate ?? "");

  setIsInitialized(true);
}, [activePlan, dashboardData.settings, isInitialized]);

  const savingsDraft = incomeDraft - expensesDraft;

  function updateIncome(nextIncome) {
    setIncomeDraft(nextIncome);
    updateSettings({ monthlyIncome: nextIncome });
  }

  function updateExpenses(nextExpenses) {
    setExpensesDraft(nextExpenses);
    updateSettings({ avgMonthlyExpenses: nextExpenses });
  }

  function updatePlanName(nextName) {
    setPlanNameDraft(nextName);
    updateActivePlan({ name: nextName });
  }

  function updateCategory(nextCategory) {
    setCategoryDraft(nextCategory);
    updateActivePlan({
      goal: { category: nextCategory },
    });
  }

  function updateTarget(nextTarget) {
    setTargetDraft(nextTarget);
    updateActivePlan({
      goal: { targetAmount: nextTarget },
    });
  }

  function updateTargetDate(nextDate) {
    setTargetDateDraft(nextDate);
    updateActivePlan({
      goal: { targetDate: nextDate },
    });
  }

  const estimatedMonths =
    savingsDraft > 0 && targetDraft > 0
      ? `~${Math.ceil(targetDraft / savingsDraft)} months`
      : "—";

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Setup</h1>
      </header>

      <main className="dashboard-grid">
        <section className="card">
          <h2>Costs setup</h2>

          <div className="control">
            <div className="control-label"> Plane name: </div>
            <input
              className="input-dark"
              type="text"
              value={planNameDraft}
              onChange={(e) => {
                const value = e.target.value;
                setPlanNameDraft(value);

                updateActivePlan({ name: value });
              }}
              placeholder="e.g. Summer holiday"
            />
          </div>

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
              className={`value ${
                savingsDraft < 0
                  ? "negative"
                  : savingsDraft > 0
                    ? "positive"
                    : ""
              }`}
            >
              {savingsDraft} {currency ?? "Ft"}
            </span>
          </div>
        </section>

        {/* GOAL */}
        <section className="card">
          <h2>Target setup</h2>

          <div className="row">
            <span>Category</span>
            <strong>{categoryDraft || "—"}</strong>
          </div>

          <select
            value={categoryDraft}
            onChange={(e) => updateCategory(e.target.value)}
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


          <div className="control">
            <div className="control-label">Target date</div>
            <input
              className="input-dark"
              type="date"
              value={targetDateDraft}
              onChange={(e) => updateTargetDate(e.target.value)}
            />
          </div>

          <div className="control-row" style={{ marginTop: 8 }}>
            <input
              type="range"
              min="0"
              max="10000000"
              step="50000"
              value={targetDraft}
              onChange={(e) => updateTarget(Number(e.target.value))}
            />
            <input
              className="input-dark"
              type="number"
              min="0"
              max="10000000"
              step="50000"
              value={targetDraft}
              onChange={(e) => updateTarget(Number(e.target.value))}
              inputMode="numeric"
            />
          </div>

          <div className="row" style={{ marginTop: 12 }}>
            <span>Target amount</span>
            <strong>
              {targetDraft} {currency ?? "Ft"}
            </strong>
          </div>

          <div className="row" style={{ marginTop: 12 }}>
            <span>Estimated time</span>
            <strong>{estimatedMonths}</strong>
          </div>

          <button type="button" onClick={() => navigate("/dashboard")}>
            Save
          </button>
        </section>
      </main>
    </div>
  );
}
