import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Not logged in.");
      return;
    }

    axios
      .get("http://localhost:5000/api/auth/dashboard", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setMessage(res.data.msg);
      })
      .catch(() => {
        setMessage("Access denied or invalid token.");
      });
  }, []);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p className="mt-4">{message}</p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
