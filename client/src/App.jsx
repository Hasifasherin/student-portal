// src/App.jsx
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {isLogin ? <LoginForm switchMode={toggleForm} /> : <RegisterForm switchMode={toggleForm} />}
    </div>
  );
}
