import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService.js";

export default function DashboardPage() {
  const navigate = useNavigate();

  async function handleLogout() {
  await logout();
  navigate("/login");
  }

  return (
    <div style={{ padding: 16 }}>
      <h1>Dashboard</h1>
      <p>Placeholder</p>
      <button onClick={handleLogout}>
      Logout
      </button>
    </div>
  );
}