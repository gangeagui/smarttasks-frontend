import "../styles/dashboardPage.css";
import { useAuth } from "../context/useAuth";

function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Bienvenido, {user.username}</h1>
      <p className="dashboard-subtitle">
        Aquí tienes un resumen de tu actividad.
      </p>

      <div className="dashboard-cards">
        <div className="card">
          <h2>Tareas</h2>
          <p>25</p>
        </div>
        <div className="card">
          <h2>Completadas</h2>
          <p>10</p>
        </div>
        {user?.role === "ROLE_ADMIN" && (
          <div className="card">
            <h2>Usuarios</h2>
            <p>5</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
