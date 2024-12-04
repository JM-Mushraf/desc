import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import HeroSection from "./HeroSection/HeroSection.jsx";
import Footer from "./Footer/Footer.jsx";
import "./Home.css";
import glogo from "../../../public/Group_30.png";
import ProfileCards from "./ProfileCards/ProfileCards.jsx";
import Logo from "../../../public/CropNowLogo.png";
import camera from "../../../public/camera.png";
import Rectangle from "../../../public/Rectangle.png";
const Home = () => {
  return (
    <div className="home">
      {/* <Navbar className="nav" /> */}
      <HeroSection />
      <div className="mid-cont">
        <div className="mid-cont-container">
          <img src={glogo} alt="" className="img1home"/>
          <div className="g-content">
            <span>CropLink</span>
            <span>
              Connect directly with farmers and discover fresh, local sourced
              products.
            </span>
          </div>
        </div>
        <div className="mid-cont-container">
          <img src={camera} alt="" />
          <div className="g-content">
            <span>CropGram</span>
            <span>
              The platform where users can post and share there issues and
              achievements.
            </span>
          </div>
        </div>
        <div className="mid-cont-container">
          <img src={Rectangle} alt="" />
          <div className="g-content">
            <span>CropFund</span>
            <span>
              Contribute and become a hero! we offer the people the unique
              opportunity to support farmers.
            </span>
          </div>
        </div>
      </div>
      <ProfileCards />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
