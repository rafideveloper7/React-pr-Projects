import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Register from "../Register/Register";
import Home from "../Home/Home";
import "../css/login.css";
import LoginLogo from "../../assets/bg-img-auth-.png"



function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    // return user.email === email && user.password === password ? <Home /> : alert("Invalid inputs")

    if (!user) {
      alert("user not eist!");
      return;
    }

    if (user.email === email && user.password === password) {
      return <Home />;
    } else {
      alert("invalid inputs / user not exist");
    }

    // if (email === data.email && password === data.password) {
    //   alert("yes typed data = to local storage");
    // } else {
    //   console.log("data not = ");
    // }
  };

  return (
    <>
      <div className="login-main-container">
        <div className="left-content">
          <div className="content">
            <img src={LoginLogo} alt="logo" />
          <h1>Welcome back!</h1>
          <p>Login to get access of this web!</p>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={onLogin}>
            <div className="inputs">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                id="email"
                placeholder=" your registered email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="inputs">
              <label htmlFor="password">Password : </label>
              <input
                type="password"
                id="password"
                placeholder=" type your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="inputs">
              <input className="login-btn" type="submit" value="login" />
            </div>
            <div className="inputs">

            <p>
              Don't have an accont <Link to="/register">Register</Link>
            </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
