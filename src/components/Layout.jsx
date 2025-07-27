import { Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { useNavigate, Link } from "react-router-dom";
import {
  FaTasks,
  FaUserFriends,
  FaCog,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";
import "../styles/layout.css";

function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-brand">SmartTasks</h2>
          <p className="sidebar-username">{user.username}</p>
          <small className="sidebar-role">
            {user.role === "ROLE_ADMIN" ? "Administrador" : "Usuario"}
          </small>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="sidebar-link">
            <FaHome className="sidebar-icon" />
            Dashboard
          </Link>
          <Link to="/tasks" className="sidebar-link">
            <FaTasks className="sidebar-icon" />
            Tareas
          </Link>
          {user?.role === "ROLE_ADMIN" && (
            <Link to="/users" className="sidebar-link">
              <FaUserFriends className="sidebar-icon" />
              Usuarios
            </Link>
          )}
          <Link to="/configuration" className="sidebar-link">
            <FaCog className="sidebar-icon" />
            Configuración
          </Link>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-button" onClick={handleLogout}>
            <FaSignOutAlt className="sidebar-icon" />
            Cerrar sesión
          </button>
        </div>
      </aside>

      <main className="main-area">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
