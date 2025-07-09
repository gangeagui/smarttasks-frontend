import "../styles/login.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
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
    <div className="login-container d-flex justify-content-center align-items-center">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        {error && <p className="login-error">{error}</p>}

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberCheck"
          />
          <label className="form-check-label" htmlFor="rememberCheck">
            Remember me
          </label>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </div>

        <p className="forgot-password text-center mt-3">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
