// src/components/LoginForm.jsx
import { useState } from "react";
import axios from "axios";

export default function LoginForm({ switchMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(""); // For feedback message

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      console.log("✅ Login success:", res.data);
      setMsg("Login successful!");
    } catch (err) {
      console.error("❌ Login error:", err.response?.data || err.message);
      setMsg(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {/* Show message */}
        {msg && (
          <p className="text-center text-sm mt-2 text-green-600">{msg}</p>
        )}
      </form>
      <p className="text-sm mt-4 text-center">
        Don't have an account?{" "}
        <button onClick={switchMode} className="text-blue-600 underline">
          Register
        </button>
      </p>
    </div>
  );
}
