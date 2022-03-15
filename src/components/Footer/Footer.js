import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import logo from '../images/Screenshot from 2022-03-07 09-08-30.png';

class Footer extends Component {
  render() {
    return (
      <div className="footerMain">
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="requestForDemo">
          <h1>Request a demo</h1>
          <p>Reduce tickets increase customer satisfaction today.</p>
          <div className="demo">
            <button>Schedule a Demo</button>
            <button>
              <FontAwesomeIcon className="watchIcon" icon={faCirclePlay} />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="footer">
            <div className="left">
                <img src={logo} alt="" />
                <p>440 N Wolfe Rd,</p>
                <p>Sunnyvalue CA, Us</p>
                <div className="social">
                </div>
            </div>
            <div className="right">
                <div>
                    <h3>Product</h3>
                    <a href="">Product tours</a>
                    <a href="">Console login</a>
                    <a href="">Schedule a demo</a>
                </div>
                <div>
                    <h3>Trust</h3>
                    <a href="">Security & Privacy</a>
                    <a href="">GDPR</a>
                </div>
                <div>
                    <h3>Company</h3>
                    <a href="">About us</a>
                    <a href="">Careers</a>
                    <a href="">Contact us</a>
                </div>
                <div>
                    <h3>Resources</h3>
                    <a href="">Library</a>
                    <a href="">Terms of use</a>
                    <a href="">Privacy policy</a>
                    <a href="">Sitemap</a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
