import React, { useState } from 'react';
import Logo from "../../../public/CropNowLogo.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";  // Import the Home icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";  // Import the arrow icon
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [loginDropdownActive, setLoginDropdownActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleLoginDropdown = () => {
    setLoginDropdownActive(!loginDropdownActive);
  };

  return (
    <nav className="navbar">
      <div className='navbar-main-2'>
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" className="navbar-logo-image" />
        <div className='navbar-logo-name'>
          <span>Crop</span>
          <span>Now</span>
        </div>
      </div>
      <ul className={`navbar-links ${menuActive ? "active" : ""}`}>
        <li className='nav-home'>
          <Link to="/"><FaHome size={24} /></Link>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/careers">Careers</Link></li>
      </ul>
      </div>
      <div className="navbar-actions">
        <Link to="/cropdesk" className="dec-btn">CropDesk</Link>
        <div className="login-dropdown">
          <button className="login-btn" onClick={toggleLoginDropdown} style={{border:"none"}}>
            Login 
            <MdOutlineKeyboardArrowDown 
              className={`arrow ${loginDropdownActive ? "arrow-up" : ""}`} 
              size={24} 
            />
          </button>
          <div className={`dropdown-menu ${loginDropdownActive ? "show" : ""}`}>
            <Link to="/register" className="dropdown-btn">Register</Link>
          </div>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
