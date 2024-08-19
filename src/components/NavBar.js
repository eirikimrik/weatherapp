import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="header">
      <nav className="nav_container">
        <ul className="nav__list">
          <li>
            <NavLink
              to="/"
              className="nav__link"
              style={({ isActive }) => {
                return isActive ? { color: "white" } : { textDecoration: "none" };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav__link"
              style={({ isActive }) => {
                return isActive ? { color: "white" } : { textDecoration: "none" };
              }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
