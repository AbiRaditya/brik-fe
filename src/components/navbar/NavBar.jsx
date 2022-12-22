import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar" id="navigation-bar">
      <NavLink to="/">Customer</NavLink>
      <NavLink to="/admin">Admin page</NavLink>
    </nav>
  );
};

export default NavBar;
