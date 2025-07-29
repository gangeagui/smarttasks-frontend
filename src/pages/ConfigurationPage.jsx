import "../styles/configurationPage.css";
import { useAuth } from "../context/useAuth";

function ConfigurationPage() {
  const { user } = useAuth();

  return (
    <div className="configuration-container">
      <h2>Configuración</h2>
      <p className="subtitle">Gestiona tu cuenta y preferencias del sistema</p>

      <div className="config-grid">
        <div className="config-section card-left">
          <h3>Información del Usuario</h3>
          <div className="config-card">
            <p><strong>Nombre:</strong> {user?.username}</p>
            <p><strong>Correo:</strong> {user?.email}</p>
            <p><strong>Rol:</strong> {user?.role === "ROLE_ADMIN" ? "Administrador" : "Usuario"}</p>
          </div>
        </div>

        <div className="config-section card-right">
          <h3>Cambiar Contraseña</h3>
          <form className="config-form">
            <div className="form-group">
              <label>Nueva Contraseña</label>
              <input type="password" placeholder="Ingresa nueva contraseña" />
            </div>
            <div className="form-group">
              <label>Confirmar Contraseña</label>
              <input type="password" placeholder="Confirma la nueva contraseña" />
            </div>
            <button type="submit" className="save-button">Guardar Cambios</button>
          </form>
        </div>
      </div>
      <div className="config-section danger-zone">
        <h3>Zona de Riesgo</h3>
        <p className="warning-text">
          Esta acción no se puede deshacer. Si deseas eliminar tu cuenta, haz clic en el botón.
        </p>
        <button className="delete-button">Eliminar Cuenta</button>
      </div>
    </div>
  );
}

export default ConfigurationPage;
