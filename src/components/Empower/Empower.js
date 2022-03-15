import React, { Component } from "react";
import empowerImage from "../images/Screenshot from 2022-03-08 01-44-59.png";
import img1 from "../images/Screenshot from 2022-03-08 01-45-09.png";
import img2 from "../images/Screenshot from 2022-03-08 01-45-09 (1).png";
import img3 from "../images/Screenshot from 2022-03-08 01-45-09 (2).png";
import img4 from "../images/Screenshot from 2022-03-08 01-45-09 (3).png";

class Empower extends Component {
  render() {
    return (
      <div className="mainEmpower">
        <div className="Empower">
          <div className="mainContent">
            <div data-aos="fade-right" data-aos-duration="2000" className="empowerImage">
              <img src={empowerImage} alt="" />
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="empowerContent">
              <h1>Empower agents</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nobis maiores cum dolorem soluta mollitia similique,
                illo eveniet libero ad.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus repudiandae, numquam in eum delectus dolorem
                necessitatibus vero est natus minus?
              </p>
            </div>
          </div>
          <div className="dashboardImg">
            <div data-aos="flip-up" data-aos-duration="2000" className="item">
              <img src={img1} alt="" />
              <h6>Smooth handover to human agent</h6>
            </div>
            <div data-aos="flip-up" data-aos-duration="2000" className="item">
              <img src={img2} alt="" />
              <h6>Extracted conversation context</h6>
            </div>
            <div data-aos="flip-up" data-aos-duration="2000" className="item">
              <img src={img3} alt="" />
              <h6>Ticket triaging and triaging</h6>
            </div>
            <div data-aos="flip-up" data-aos-duration="2000" className="item">
              <img src={img4} alt="" />
              <h6>All system and workflow customization width no-code</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Empower;
