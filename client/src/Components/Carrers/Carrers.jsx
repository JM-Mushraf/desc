import React from "react";
import "./Carrers.css";
import g1 from "../../../public/Group.png";
import g2 from "../../../public/Group1.png";
import v1 from "../../../public/Vector.png";
const Carrers = () => {
  return (
    <div className="container">
      <section className="welcome-section">
        <h1>Welcome to Your Future with CropNow!</h1>
        <p>
          CropNow is an innovative agri-tech startup that aims to revolutionize
          farming practices through advanced technology and sustainable
          solutions. We are committed to empowering farmers by integrating AI,
          IoT, and cutting-edge research into agricultural practices, making
          farming smarter, more efficient, and eco-friendly.
        </p>
      </section>

      <section className="work-culture" style={{ backgroundColor: "#1e1e1e" }}>
        <h2>Work Culture at CropNow</h2>
        <p>
          At CropNow, we embrace a culture of collaboration, flexibility, and
          innovation. Whether working from college campuses or home offices, we
          uphold a strong sense of discipline and commitment. Our focus is not
          on the number of hours worked but on the quality of the outcomes
          achieved. We highly value every team member's ideas, creativity, and
          contributions to the future of agriculture.
        </p>
      </section>

      <section className="values">
        <div className="value-card">
          <img src={g1} alt="" />
          <div className="v1">
            <p>Culture</p>
            <p className="p2">
              Emphasis on collaboration, flexibility, and innovation in our work
              culture.
            </p>
          </div>
        </div>
        <div className="value-card">
          <img src={v1} alt="" />
          <div className="v1">
            <p>Quality</p>
            <p className="p2">
              Commitment to quality outcomes over the number of hours worked.
            </p>
          </div>
        </div>
        <div className="value-card">
          <img src={g2} alt="" />
          <div className="v1">
            <p>Value</p>
            <p className="p2">
              Valuing each team member's ideas and contributions to advancing
              agriculture.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <h2>Benefits of working at CropNow</h2>
        <div className="features-section-cr">
          <div>
            <button>Learning and development</button>
            <button>Shape the future of india</button>
            <button>Experience a StartUp from scratch</button>
          </div>
          <div>
            <button>Expand Your Network</button>
            <button>Interact with Industry Experts & Professors</button>
            <button>Engage with Farmers & Solve Real-World Problems</button>
          </div>
        </div>
      </section>

      <section className="apply-section">
        <h2>APPLY NOW</h2>
        <p>
          Join C-Force, CropNow's exclusive 123-day internship program, where
          you will Innovate. Learn. Impact. Be part of an incredible journey to
          make agriculture smarter and more efficient, while shaping a better
          future for India's farming community.
        </p>
        <button className="apply-button">Apply</button>
      </section>
    </div>
  );
};

export default Carrers;
