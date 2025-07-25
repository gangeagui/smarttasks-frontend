import "../styles/registerPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/userService";

function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setError("");
    setSuccess("");

    try {
      await createUser({
        username: form.username,
        email: form.email,
        password: form.password
      });
      setSuccess("✅ Registro exitoso. Redirigiendo al inicio de sesión...");
      setTimeout(() => navigate("/"), 10000);
    } catch (err) {
      const backendMessage =
        err.response?.data?.message || "Error al registrar el usuario";
      setError(backendMessage);
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <h2>Crear Cuenta</h2>

        {error && <p className="register-error">{error}</p>}
        {success && <p className="register-success">{success}</p>}
        
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Ingresa tu nombre de usuario"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ejemplo@correo.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Repite tu contraseña"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="register-button">
          Registrarse
        </button>

        <p className="back-to-login">
          ¿Ya tienes cuenta? <a href="/">Inicia sesión</a>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
