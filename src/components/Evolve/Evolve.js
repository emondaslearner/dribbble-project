import React, { Component } from "react";
import img from "../images/screencapture-dribbble-shots-15714238-Percept-ai-Homepage-Product-Page-attachments-7514706-2022-03-08-02_59_29 (2).png";
import img1 from "../images/Screenshot from 2022-03-13 11-29-18.png";
import img2 from "../images/Screenshot from 2022-03-13 11-29-18 (1).png";
import img3 from "../images/Screenshot from 2022-03-13 11-29-18 (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
class Evolve extends Component {
  render() {
    return (
      <>
        <div className="evolve">
          <div data-aos="zoom-in-right" data-aos-duration="2000" className="left">
            <h1>Evolve</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ut quisquam, recusandae quidem autem repudiandae fuga similique
              mollitia maiores aspernatur magni perferendis, dolor sed error sit
              omnis labore commodi perspiciatis animi debitis obcaecati illum!
              Nemo accusantium facilis vero dolores tempora sequi modi eius ut
              nisi blanditiis deleniti magni porro, eaque, cumque atque omnis
              quisquam saepe dolorem quidem. Perferendis et nostrum autem
              debitis aliquam obcaecati repellat ea,
            </p>
          </div>
          <div data-aos="zoom-in-left" data-aos-duration="2000" className="right">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="experience">
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"  data-aos-duration="3000" className="left">
            <img src={img1} alt="" />
            <h3>Al self-evolving ability</h3>
            <div>
              <FontAwesomeIcon className="check" icon={faSquareCheck} />
              <p>
                Expand knowledge coverage and al performance over,time with
                non-operation effect needed from CS teem
              </p>
            </div>
            <div>
              <FontAwesomeIcon className="check" icon={faSquareCheck} />
              <p>Al system and workflow customization on-code </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"  data-aos-duration="3000" className="middle">
            <img src={img2} alt="" />
            <h3>Know the ROI</h3>
            <div>
              <FontAwesomeIcon className="check" icon={faSquareCheck} />
              <p>Comprehensive analytics and dashboard</p>
            </div>
            <div>
              <FontAwesomeIcon className="check" icon={faSquareCheck} />
              <p>Weekly stakeholders report</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"  data-aos-duration="3000" className="right">
            <img src={img3} alt="" />
            <h3>Evolve your organization</h3>
            <div>
              <FontAwesomeIcon className="check" icon={faSquareCheck} />
              <p>Comprehensive analytics and dashboard</p>
            </div>
            <div>
              <FontAwesomeIcon className="check" icon={faSquareCheck} />
              <p>Weekly stakeholders report</p>
            </div>
            <div>
              <FontAwesomeIcon className="check" icon={faSquareCheck} />
              <p>
                Expand knowledge coverage and al performance over,time with
                non-operation effect needed from CS teem
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Evolve;
