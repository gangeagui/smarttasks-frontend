import { useState } from "react";
import { forgotPassword } from "../services/authService";
import "../styles/registerPage.css";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const responseMessage = await forgotPassword(email);
      setMessage(responseMessage.message);
      setEmail("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Recuperar contraseña</h2>

        {message && <p className="register-success">{message}</p>}
        {error && <p className="register-error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="register-button">
            Enviar enlace
          </button>

          <div className="back-to-login">
            <a href="/">Volver al inicio de sesión</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
