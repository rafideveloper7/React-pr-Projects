import React from "react";
// import "./header.css";


// pass props > setCurrentPage
// here storing value in prop when each btn click
function Header({ setCurrentPage }) {
  return (
    <div className="header">
      <div className="logo"><h1>Rafi.</h1></div>
      <div className="nav">
        <ul className="nav-links">
          <li onClick={() => setCurrentPage("home")}>Home</li>
          <li onClick={() => setCurrentPage("services")}>Services</li>
          <li onClick={() => setCurrentPage("blogs")}>Blogs</li>
          <li onClick={() => setCurrentPage("about")}>About</li>
          <li onClick={() => setCurrentPage("contact")}>Contact</li>
        </ul>
      </div>
      <span className="hamberger">
        <i></i>
      </span>
    </div>
  );
}

export default Header;

