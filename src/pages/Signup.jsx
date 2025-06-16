import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Signup() {
  const [email, setUsername] = useState("");
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
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
    </form>
  );
}
