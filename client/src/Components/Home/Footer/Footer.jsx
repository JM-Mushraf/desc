import React from "react";
import "./Footer.css";
import incubatorLogo from "../../../../public/revaNest.png";
import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
// import Logo from "../../../public/CropNowLogo.png";
import Logo from "../../../../public/CropNowLogo.png";
const Footer = () => {
    return (
      <>
      <div className="dec-cont3">
        <img src={Logo} alt="Incubator Logo" />
        <div className="dec-cont3-cont">
          <span>Our team can assist you with consulting</span>
          <span>cropnow.contact@gmail.com</span>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-section contact-us">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> REVA Nest, Rukmini Knowledge Park, Kattigenahalli, Bangalore - 560064</p>
          <p><FaPhoneAlt /> +919141749525</p>
          <p><FaGlobe /> <a href="https://www.cropnow.in">www.cropnow.in</a></p>
          <p><FaEnvelope /> cropnow.contact@gmail.com</p>
        </div>
  
        <div className="footer-section quick-links">
          <h3>Quick Link</h3>
          <a href="#about">About</a>
          <a href="#solutions">Solutions</a>
          <a href="#product">Product</a>
          <a href="#career"><b>Career</b></a>
          <div className="social-icons">
            <a href="#twitter" className="icon">
              <FaTwitter />
            </a>
            <a href="#instagram" className="icon">
              <FaInstagram />
            </a>
            <a href="#youtube" className="icon">
              <FaYoutube />
            </a>
            <a href="#linkedin" className="icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
  
        <div className="footer-section incubator">
          <h3>Incubated At</h3>
          <img src={incubatorLogo} alt="Incubator Logo" className="incubator-logo" />
          <button className="feedback-btn">Feedback / Report</button>
        </div>
      </footer>
      </>
    );
};

export default Footer;
