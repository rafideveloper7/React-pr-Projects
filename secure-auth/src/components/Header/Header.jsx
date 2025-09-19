import React from "react";
import "../../Pages/css/header.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">Our Team</div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/employees">Employee</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
