import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import './Signup.css // make sure this path is correct

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

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
          <p>Already have an account? <span onClick={() => navigate("/login")} style={{ color: '#007bff', cursor: 'pointer' }}>Login</span></p>
        </form>
      </div>
    </div>
  );
}
