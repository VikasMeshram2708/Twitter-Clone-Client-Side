import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand bg-primary navbar-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Twitter Clone
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
