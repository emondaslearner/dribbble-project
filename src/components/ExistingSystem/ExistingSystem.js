import React, { Component } from "react";
import img from "../images/screencapture-dribbble-shots-15714238-Percept-ai-Homepage-Product-Page-attachments-7514706-2022-03-08-02_59_29 (3).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
class ExistingSystem extends Component {
  render() {
    return (
      <div className="existingSystem">
        <div className="left">
          <img className="rotate" src={img} alt="" />
        </div>
        <div data-aos="zoom-in-up"  data-aos-duration="3000" className="right">
          <h1>Work with your existing systems</h1>
          <div>
            <div>
              <div>
                <FontAwesomeIcon className="fontAwesome" icon={faSquareCheck} />
                <p>Salesforce</p>
              </div>
              <div>
                <FontAwesomeIcon className="fontAwesome" icon={faSquareCheck} />
                <p>Zendesk</p>
              </div>
              <div>
                <FontAwesomeIcon className="fontAwesome" icon={faSquareCheck} />
                <p>Kestomer</p>
              </div>
              <div>
                <FontAwesomeIcon className="fontAwesome" icon={faSquareCheck} />
                <p>Oracle</p>
              </div>
            </div>
            <div>
                <div>
                  <FontAwesomeIcon className="fontAwesome" icon={faSquareCheck} />
                  <p>Intercom</p>
                </div>
                <div>
                  <FontAwesomeIcon className="fontAwesome" icon={faSquareCheck} />
                  <p>Shopify</p>
                </div>
                <div>
                  <FontAwesomeIcon className="fontAwesome" icon={faSquareCheck} />
                  <p>Magento</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExistingSystem;
