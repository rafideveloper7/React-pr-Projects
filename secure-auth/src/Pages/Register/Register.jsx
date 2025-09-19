import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import "../css/register.css";
import RegisterLogo from "../../assets/bg-img-auth-.png";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();

    if (userName === "" || email === "" || password === "") {
      alert("Empty Inputs!");
      return <Navigate to="/register" />;
    }

    // make obj for new user and saved in localStorage()
    const newUser = { userName, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/");
  };

  return (
    <>
      <div className="login-main-container">
        <div className="left-content">
          <div className="content">
            <img src={RegisterLogo} alt="logo" />
            <h1>Create new account</h1>
            <p>Register to get access of this web!</p>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={onRegister}>
            <div className="inputs">
              <label htmlFor="fullName">Name : </label>
              <input
                type="text"
                id="fullName"
                value={userName}
                placeholder=" full-name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="inputs">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder=" your email adress"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="inputs">
              <label htmlFor="password">Password : </label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder=" type your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="inputs">
              <input
                className="register-btn"
                type="submit"
                id="register"
                value="Register"
              />
            </div>
            <p>
              Already have an account <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
