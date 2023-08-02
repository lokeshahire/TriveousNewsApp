import React, { useState } from "react";
import firebase from "../firebase/firebase"; // Make sure the path is correct
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registration successful
        const user = userCredential.user;
        navigate("/login");

        console.log("User registered:", user);
        // Optionally, you can do something here after successful registration
      })
      .catch((error) => {
        // Registration failed
        setError(error.message);
        console.error("Registration error:", error);
      });
  };

  return (
    <div className="container">
      <h2>Register</h2>
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
        <button type="button" onClick={handleRegister}>
          Register
        </button>
        <a style={{ color: "red" }} href="/login">
          Already Account
        </a>
      </form>
    </div>
  );
};

export default Register;
