import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <header className="header">
            <nav className="nav_container">
                <div className={"nav__menu"} id="nav-menu">
                    <ul className="nav__list">
                        <button className="nav__item">
                            <NavLink to="/" className="nav__link">Home</NavLink>
                        </button>
                        <button className="nav__item">
                            <NavLink to="/about" className="nav__link">About Us</NavLink>
                        </button>
                        
                    </ul>
                    
                </div>
                
            </nav>
        </header>
      
    );
}

export default NavBar;