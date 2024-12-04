import React from "react";
import laptop from "../../../public/sunlight.png";
import m1img from "../../../public/Group_30.png";
import "./Solutions.css";
const Solutions = () => {
  return (
    <div className="sol-container">
      <div className="main-section-sol">
        <div className="main-section-img-sol">
          <img src={m1img} alt="" />
          <img src={m1img} alt="" />
          <img src={m1img} alt="" />
        </div>
        <div className="main-section-img-contt-sol">
          <div className="content-container-sol">
            <p>
              "CropNow offers cutting-edge tools and strategies to help farmers
              and agribusinesses thrive in an ever changing agricultural
              landscape. From precision farming to pest management, we empower
              you to achieve more with less."
            </p>
            <div className="features-section-sol">
              <button>About Soil</button>
              <button>About Plants</button>
              <button>Written Blogs</button>
            </div>
            <p>You can explore more about solutions . By clicking above icons.</p>
          </div>
          <div className="image-container-sol">
            <img src={laptop} alt="Main Section" className="responsive-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
