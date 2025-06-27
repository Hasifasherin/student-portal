// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
              <LoginForm />
            </div>
          }
        />

        <Route
          path="/register"
          element={
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
              <RegisterForm />
            </div>
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
