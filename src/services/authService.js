import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const loginRequest = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    const errorMessage = err.response?.data?.error || "Error desconocido";
    throw new Error(errorMessage);
  }
};
