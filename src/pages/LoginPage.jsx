import "../styles/loginPage.css";
import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { loginRequest } from "../services/authService";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginRequest(email, password);
      login(token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>

        {error && <p className="login-error">{error}</p>}

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>

        <p className="forgot-password">
          ¿Olvidaste tu <a href="#">contraseña?</a>
        </p>
        <p className="register-link">
          ¿No tienes una cuenta? <a href="/register">Regístrate</a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
