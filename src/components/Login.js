// Login.js
import React, { useState } from "react";
import firebase from "../firebase/firebase"; // Make sure the path is correct
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        navigate("/news");

        console.log("User logged in:", user);
        // Optionally, you can do something here after successful login
      })
      .catch((error) => {
        // Login failed
        setError(error.message);
        console.error("Login error:", error);
      });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginLeft: "55px" }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <a style={{ color: "red" }} href="/">
          Register Your Account
        </a>
      </form>
    </div>
  );
};

export default Login;
