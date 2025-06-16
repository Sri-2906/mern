import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await api.post("/signup", { username, password });
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to right, #d9a7c7, #fffcdc)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const boxStyle = {
    backgroundColor: "#fff",
    padding: "2.5rem 2rem",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
    width: "320px",
    textAlign: "center",
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
    backgroundColor: "#ff6f61",
    color: "white",
    padding: "0.9rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  const linkTextStyle = {
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={headingStyle}>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e85c50")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6f61")}
          >
            Signup
          </button>
          <p style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
            Already have an account?{" "}
            <span style={linkTextStyle} onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
