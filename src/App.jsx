import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TaskPage";
import PrivateRoute from "./components/PrivateRoute";
import UserPage from "./pages/UserPage";
import Layout from "./components/Layout";
import ConfigurationPage from "./pages/ConfigurationPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/configuration" element={<ConfigurationPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
