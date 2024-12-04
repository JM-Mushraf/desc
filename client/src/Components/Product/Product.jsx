import React from "react";
import "./Product.css"
import panzer from "../../../public/panzer.png"
import pd1 from "../../../public/pd1.png"
import pd2 from "../../../public/pd2.png"
import pd3 from "../../../public/pd3.png"
import pd4 from "../../../public/pd4.png"
import { BsChatSquareHeart } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
const Product = () => {
  return (
    <div className="container-pd">
      <div className="product-section">
        <img
          src={panzer}
          alt="Upcoming Product"
          className="product-image"
        />
        <div className="product-section-cont">
        <h2>Our Upcoming Product</h2>
        <h3 className="product-name">SEED</h3>
        <button className="notify-button">Get Notified!<BsChatSquareHeart /></button>
        </div>
      </div>
      <div className="product-section2">
      <div className="interest-section">
        <h1>If you are interested!</h1>
        <div className="email-input">
          <input type="email" placeholder="Enter your email..." />
          <button><BsFillSendFill /></button>
        </div>
        <p>Feel free to give us your email..</p>
      </div>
      <div className="image-gallery">
        <div className="image-gallery-div1">
        <img
          src={pd1}
          alt="Gallery Image 1"
          className="gallery-image"
        />
        <img
          src={pd2}
          alt="Gallery Image 2"
          className="gallery-image"
        />
        </div>
        <div className="image-gallery-div2">
        <img
          src={pd3}
          alt="Gallery Image 3"
          className="gallery-image"
        />
        <img
          src={pd4}
          alt="Gallery Image 4"
          className="gallery-image"
        />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Product;
