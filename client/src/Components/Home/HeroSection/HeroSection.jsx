import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./HeroSection.css"; // Import the updated CSS file
import canna from "../../../../public/CropAnna.jpg";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="hero-section">
      <div className="content">
        <h1 className="title-home">
          <span>FOR A</span>
          <span>BETTER</span>
          <span>INDIA</span>
        </h1>
        <button className="explore-button">Explore Now...</button>
      </div>
      <div className="chat-bubble">
        <img src={canna} alt="" />
        <div className="chat-title-main" onClick={() => navigate("/CropAnna")}> {/* Corrected the onClick handler */}
          <span className="chat-title">Namaste</span>
          <span className="chat-title2">
            <span>I'm CropAnna,</span>
            <span>here to assist you</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
