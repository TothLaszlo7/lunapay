import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import EmailLogin from "./pages/Login/EmailLogin.jsx";
import DashboardPage from "./pages/Dashboard/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import SetupPage from "./pages/Setup/Setup.jsx";
import PlansPage from "./pages/Plans/PlansPage.jsx";
import NewPlanPage from "./pages/Plans/NewPlanPage.jsx";
import PlanDetailsPage from "./pages/Plans/PlanDetailsPage.jsx";

import { DashboardDataProvider } from "./context/DashboardContext.jsx";

export default function App() {
  return (
    <DashboardDataProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/login/email" element={<EmailLogin />} />

        <Route
          path="/plans"
          element={
            <ProtectedRoute>
              <PlansPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/plans/new"
          element={
            <ProtectedRoute>
              <NewPlanPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/plans/:id"
          element={
            <ProtectedRoute>
              <PlanDetailsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/setup"
          element={
            <ProtectedRoute>
              <SetupPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </DashboardDataProvider>
  );
}
