import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TaskPage";
import PrivateRoute from "./components/PrivateRoute";
import UsersPage from "./pages/UsersPage";
import Layout from "./components/Layout";
import ConfigurationPage from "./pages/ConfigurationPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {<Route path="/forgot-password" element={<ForgotPasswordPage />} />}
      {<Route path="/reset-password" element={<ResetPasswordPage />} />}
      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/configuration" element={<ConfigurationPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
