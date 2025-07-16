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
          <strong className="sidebar-brand">SmartTasks</strong>
          <p>{user.username}</p>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="sidebar-link">
            <FaHome className="sidebar-icon" />
            Inicio
          </Link>
          <Link to="/tasks" className="sidebar-link">
            <FaTasks className="sidebar-icon" />
            Tareas
          </Link>
          <Link to="/users" className="sidebar-link">
            <FaUserFriends className="sidebar-icon" />
            Usuarios
          </Link>
          <Link to="/configuration" className="sidebar-link">
            <FaCog className="sidebar-icon" />
            Configuración
          </Link>
          <button className="logout-button" onClick={handleLogout}>
            <FaSignOutAlt className="sidebar-icon" />
            Cerrar sesión
          </button>
        </nav>
      </aside>

      <main className="main-area">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
