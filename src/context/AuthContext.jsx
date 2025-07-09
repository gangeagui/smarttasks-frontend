import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        const decoded = jwtDecode(storedToken);
        return {
          token: storedToken,
          email: decoded.email,
          username: decoded.username,
          id: decoded.id,
        };
      } catch (err) {
        console.error("Token inválido:", err);
        return null;
      }
    }
    return null;
  });

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      const userData = {
        token,
        email: decoded.email,
        username: decoded.username,
        id: decoded.id,
      };
      localStorage.setItem("token", token);
      setUser(userData);
    } catch (err) {
      console.error("Error al decodificar token", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
