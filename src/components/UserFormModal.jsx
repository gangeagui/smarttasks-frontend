import { useState, useEffect } from "react";
//import "../styles/userModal.css";

function UserFormModal({ show, onClose, onSave, user }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setForm({
        username: user.username || "",
        email: user.email || "",
        password: "",
      });
    } else {
      setForm({
        username: "",
        email: "",
        password: "",
      });
    }
    setError("");
  }, [user, show]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // Cuando editas, la contraseña puede quedar vacía
    if (!user && !form.password) {
      setError("La contraseña es obligatoria");
      return;
    }

    await onSave(form);
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{user ? "Editar Usuario" : "Nuevo Usuario"}</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre de Usuario</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>{user ? "Nueva Contraseña (opcional)" : "Contraseña"}</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder={user ? "Dejar en blanco para mantener actual" : ""}
            />
          </div>
          <button type="submit" className="save-button">
            {user ? "Guardar Cambios" : "Crear Usuario"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserFormModal;
