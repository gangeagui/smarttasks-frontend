import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Layout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          background: "#333",
          color: "white",
        }}
      >
        <div>
          <strong>SmartTasks</strong>
          <Link to="/dashboard" style={{ marginLeft: "1rem", color: "#ccc" }}>
            Inicio
          </Link>
          <Link to="/tasks" style={{ marginLeft: "1rem", color: "#ccc" }}>
            Tareas
          </Link>
        </div>
        <div>
          {user && (
            <>
              <span style={{ marginRight: "1rem" }}>Hola, {user.username}</span>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          )}
        </div>
      </nav>

      <main style={{ padding: "2rem" }}>{children}</main>
    </div>
  );
}

export default Layout;
