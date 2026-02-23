import { createContext, useContext, useEffect, useMemo, useState } from "react";

const DashboardContext = createContext(null);

const STORAGE_KEY = "lunapay:dashboard:v1";

const DEFAULT_DATA = {
  settings: {
    currency: "HUF",
  },
  budget: {
    incomeAmount: 0,
    expensesAmount: 0,
  },
  goal: {
    category: "",
    targetAmount: 0,
  },
};

function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function normalizeLoadedData(raw) {
  if (!raw || typeof raw !== "object") return DEFAULT_DATA;

  const budget = raw.budget || {};
  const goal = raw.goal || {};

  const settings = raw.settings || {};

  return {
    settings: {
      currency:
        typeof settings.currency === "string" ? settings.currency : "HUF",
    },
    budget: {
      incomeAmount: Number(budget.incomeAmount || 0),
      expensesAmount: Number(budget.expensesAmount || 0),
    },
    goal: {
      category: typeof goal.category === "string" ? goal.category : "",
      targetAmount: Number(goal.targetAmount || 0),
    },
  };
}

export function DashboardDataProvider({ children }) {
  const [dashboardData, setDashboardData] = useState(DEFAULT_DATA);

  useEffect(() => {
    const raw = safeParse(localStorage.getItem(STORAGE_KEY));
    const normalized = normalizeLoadedData(raw);
    setDashboardData(normalized);
  }, []);

  useEffect(() => {
    const minimal = {
      settings: {
        currency:
          typeof dashboardData.settings?.currency === "string"
            ? dashboardData.settings.currency
            : "HUF",
      },
      budget: {
        incomeAmount: Number(dashboardData.budget?.incomeAmount || 0),
        expensesAmount: Number(dashboardData.budget?.expensesAmount || 0),
      },
      goal: {
        category:
          typeof dashboardData.goal?.category === "string"
            ? dashboardData.goal.category
            : "",
        targetAmount: Number(dashboardData.goal?.targetAmount || 0),
      },
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(minimal));
  }, [dashboardData]);

  const value = useMemo(
    () => ({ dashboardData, setDashboardData }),
    [dashboardData]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboardData() {
  const ctx = useContext(DashboardContext);
  if (!ctx)
    throw new Error(
      "useDashboardData must be used within DashboardDataProvider"
    );
  return ctx;
}
