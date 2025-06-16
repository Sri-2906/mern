import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { username, password });
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      alert("Login failed");
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "2.5rem 2rem",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
    width: "320px",
    textAlign: "center",
    animation: "fadeIn 0.5s ease-in-out",
  };

  const headingStyle = {
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
    color: "#333",
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "0.8rem",
    marginBottom: "1.2rem",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "1rem",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#7b2cbf",
    color: "white",
    padding: "0.9rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleLogin}>
        <h2 style={headingStyle}>🔐 Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#5a189a")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#7b2cbf")}
        >
          Login
        </button>
      </form>
    </div>
  );
}
