// src/components/RegisterForm.jsx
import { useState } from "react";
import axios from "axios";

export default function RegisterForm({ switchMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(""); // message to display

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      console.log("✅ Success:", res.data);
      setMsg(res.data.msg);
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      setMsg(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Register
        </button>
        {/* Show response message */}
        {msg && (
          <p className="text-sm text-center mt-2 text-red-600">{msg}</p>
        )}
      </form>
      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <button onClick={switchMode} className="text-green-600 underline">
          Login
        </button>
      </p>
    </div>
  );
}
