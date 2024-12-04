import React from "react";
import "./About.css";
import laptop from "../../../public/Laptop2.png";
import mplant from "../../../public/mplant.png";
import former from "../../../public/former.png";

import m1img from "../../../public/Group_30.png"
const About = () => {
  return (
    <div className="page-container">

      <div className="main-section">
        <div className="main-section-img">
            <img src={m1img} alt="" />
            <img src={m1img} alt="" />
            <img src={m1img} alt="" />
        </div>
        <div className="main-section-img-contt">
        <div className="content-container">
          <h1>CropNow</h1>
          <p>
            CropNow is dedicated to revolutionizing agriculture by empowering farmers with advanced technology,
            education, and community support. Our mission is to enhance productivity, foster innovation, and ensure
            sustainable farming practices across India.
          </p>
        </div>
        <div className="image-container">
          <img src={laptop} alt="Main Section" className="responsive-image" />
        </div>
        </div>
      </div>
      <div className="mission-section">
        <div className="mission-image">
          <img src={mplant} alt="Mission" className="responsive-image" />
        </div>
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At CropNow, we aim to improve the lives of farmers by providing them with the tools and knowledge necessary
            to thrive in the modern agricultural landscape. We believe that with the right support, every farmer can
            achieve higher productivity, better crop management, and increased financial stability.
          </p>
        </div>
      </div>
      <div className="goal-section">
        <div className="goal-content">
          <h2>Our Goal</h2>
          <p>
            The primary purpose of CropNow is to solve the myriad challenges faced by Indian farmers, providing them
            with the necessary education, resources, and support to enhance their agricultural practices and
            livelihoods. Our platform also aims to inspire students and young professionals to embrace farming, making
            agricultural activities more accessible and manageable for all. Additionally, CropNow seeks to gather funds
            to support financially struggling farmers, ensuring they have the means to succeed.
          </p>
        </div>
        <div className="goal-image">
          <img src={former} alt="Goal" className="responsive-image" />
        </div>
      </div>
      <div className="features-section">
        <div>
        <button>Educational Empowerment</button>
        <button>Community Support and Engagement</button>
        <button>Financial Assistance</button>
        </div>
        <div>
        <button>Technological Integration</button>
        <button>Market Access and Information</button>
        <button>Youth and Student Engagement</button>
        </div>
      </div>
    </div>
  );
};

export default About;
