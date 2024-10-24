import React, { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <a href="#">ShambaLink</a>
      </div>

      <nav className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li
            onMouseEnter={() => handleSubMenu(1)}
            onMouseLeave={() => handleSubMenu(null)}
          >
            <a href="/home">Home</a>
            <a href="#">Services</a>
            <ul className={`submenu ${activeMenu === 1 ? "open" : ""}`}>
              <li>
                <a href="#">Agriculture Information</a>
              </li>
              <li>
                <a href="#">Showcase Products</a>
              </li>
              <li>
                <a href="#">Sell Services</a>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleSubMenu(2)}
            onMouseLeave={() => handleSubMenu(null)}
          >
            <a href="#">Opportunities</a>
            <ul className={`submenu ${activeMenu === 2 ? "open" : ""}`}>
              <li>
                <a href="#">Local Jobs</a>
              </li>
              <li>
                <a href="#">Farming Grants</a>
              </li>
              <li>
                <a href="#">Training Programs</a>
              </li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleSubMenu(3)}
            onMouseLeave={() => handleSubMenu(null)}
          >
            <a href="#">Resources</a>
            <ul className={`submenu ${activeMenu === 3 ? "open" : ""}`}>
              <li>
                <a href="#">Market Trends</a>
              </li>
              <li>
                <a href="#">Farmer Tips</a>
              </li>
              <li>
                <a href="#">Weather Updates</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <a href="/login">
          <button className="login-btn">Login</button>
        </a>
        <a href="/signup">
          <button className="signup-btn">Sign Up</button>
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Navbar;
