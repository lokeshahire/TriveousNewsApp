import React, { useState } from "react";
import firebase from "../firebase/firebase";
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
        const user = userCredential.user;
        navigate("/login");

        console.log("User registered:", user);
      })
      .catch((error) => {
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
