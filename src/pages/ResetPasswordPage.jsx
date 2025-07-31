import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/authService";
import "../styles/registerPage.css";

function ResetPasswordPage() {
  const [params] = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const token = params.get("token");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const responseMessage = await resetPassword(token, password);
      setMessage(responseMessage.message);
      setTimeout(() => navigate("/"), 2000);
      setPassword("");
      setConfirm("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Restablecer contraseña</h2>

        {message && <p className="register-success">{message}</p>}
        {error && <p className="register-error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nueva contraseña</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirmar contraseña</label>
            <input
              type="password"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          <button type="submit" className="register-button">
            Cambiar contraseña
          </button>

          <div className="back-to-login">
            <a href="/">Volver al inicio de sesión</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
