import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TaskPage";
import PrivateRoute from "./components/PrivateRoute";
import UserPage from "./pages/UserPage";
import Layout from "./components/Layout";
import ConfigurationPage from "./pages/ConfigurationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
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
