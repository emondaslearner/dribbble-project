import React, { Component } from "react";
import SecurityImg from "../images/screencapture-dribbble-shots-15714238-Percept-ai-Homepage-Product-Page-attachments-7514706-2022-03-08-02_59_29 (4).png";

class Security extends Component {
  render() {
    return (
      <div className="Security">
        <div data-aos="zoom-out-right"  data-aos-duration="3000"  className="left">
          <h1>Security</h1>
          <div>
            <h4>Security</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              ipsa quod quis beatae aliquam dolore deleniti quo, nobis
              repellendus perspiciatis reprehenderit a alias optio praesentium
              numquam nam earum quasi? Aperiam.
            </p>
          </div>
          <div>
            <h4>Privacy</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              ipsa quod quis beatae aliquam dolore deleniti quo, nobis
              repellendus perspiciatis reprehenderit a alias optio praesentium
              numquam nam earum quasi? Aperiam.
            </p>
          </div>
          <div>
            <h4>Data ownership</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              ipsa quod quis beatae aliquam dolore deleniti quo, nobis
              repellendus perspiciatis reprehenderit a alias optio praesentium
              numquam nam earum quasi? Aperiam.
            </p>
          </div>
        </div>
        <div data-aos="zoom-out-left"  data-aos-duration="3000"  className="right">
          <img src={SecurityImg} alt="" />
        </div>
      </div>
    );
  }
}

export default Security;
