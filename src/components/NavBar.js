import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="header">
      <nav className="nav_container">
        <div className="logoDiv">
          <h1>Ålesund Weather</h1>
        </div>

        <div className="listContainer">
          <ul className="nav__list">
            <li>
              <NavLink
                to="/"
                className="nav__link"
                style={({ isActive }) => {
                  return isActive
                    ? { color: "white" }
                    : { textDecoration: "none" };
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
                  return isActive
                    ? { color: "white" }
                    : { textDecoration: "none" };
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="emptyDiv">
          <h1>Ålesund Weather</h1>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
