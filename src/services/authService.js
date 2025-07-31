import api from "./api";

export const loginRequest = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (err) {
    const errorMessage =
      err.response?.data?.error ||
      err.response?.data?.message ||
      "Error al iniciar sesión";
    throw new Error(errorMessage);
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await api.post("/auth/forgot-password", { email });
    return response.data;
  } catch (err) {
    const errorMessage =
      err.response?.data?.error ||
      err.response?.data?.email ||
      err.response?.data?.message ||
      "Error al enviar el correo.";
    throw new Error(errorMessage);
  }
};

export const resetPassword = async (token, newPassword) => {
  try {
    const response = await api.post("/auth/reset-password", {
      token,
      newPassword,
    });
    return response.data;
  } catch (err) {
    const errorMessage =
      err.response?.data?.error ||
      err.response?.data?.newPassword ||
      err.response?.data?.message ||
      "Error al restablecer la contraseña.";
    throw new Error(errorMessage);
  }
};
