import React, { Component } from "react";
import logo from "../images/Screenshot from 2022-03-07 09-08-30.png";
import image from "../images/Screenshot from 2022-03-07 07-47-47.png";
import bg2 from "../images/image (1).jpg";
import bg from "../images/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay,faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor() {
    super();
  }
  changeActive(e) {
    e.preventDefault();
    const navItem = document.querySelectorAll(".navBar li");
    for (let i = 0; i < navItem.length; i++) {
      document
        .querySelectorAll(".navBar li a")
        [i].classList.remove("activeNav");
    }
    e.target.classList.add("activeNav");
  }
  changeAuthActive(e) {
    e.preventDefault();
    const navItem = document.querySelectorAll(".auth a");
    for (let i = 0; i < navItem.length; i++) {
      document.querySelectorAll(".auth a")[i].classList.remove("activeAuth");
    }
    e.target.classList.add("activeAuth");
  }
  showMenu(){
    document.querySelector('.navBar').style.display = 'block'
    document.querySelector('.navBar').classList.add('menuAnimation')
    document.querySelector('.navBar').classList.remove('closeAnimation')
  }
  closeMenu(){
    document.querySelector('.navBar').classList.add('closeAnimation')
    document.querySelector('.navBar').classList.remove('menuAnimation')
    setTimeout(() => {
      document.querySelector('.navBar').style.display = 'none'
    },1000)
  }
  render() {
    return (
      <div className="header">
        <div className="menu">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navBar">
            <ul>
              <li>
                <a onClick={this.changeActive} href="#">
                  Home
                </a>
              </li>
              <li>
                <a onClick={this.changeActive} href="#">
                  Project
                </a>
              </li>
              <li>
                <a onClick={this.changeActive} href="#">
                  Solutions
                </a>
              </li>
              <li>
                <a onClick={this.changeActive} href="#">
                  Customers
                </a>
              </li>
              <li>
                <a onClick={this.changeActive} href="#">
                  Company
                </a>
              </li>
              <li>
                <a onClick={this.changeActive} href="#">
                  Learn
                </a>
              </li>
              <li className="authInMobile">
                <a onClick={this.changeActive} href="#">
                  Log in
                </a>
              </li>
              <li className="authInMobile">
                <a onClick={this.changeActive} href="#">
                  See demo
                </a>
              </li>
              <FontAwesomeIcon onClick={this.closeMenu} className="close" icon={faTimes} />
            </ul>
          </div>
          <div className="auth">
            <a onClick={this.changeAuthActive} href="#">
              Log in
            </a>
            <a onClick={this.changeAuthActive} className="activeAuth" href="#">
              See demo
            </a>
          </div>
          <div className="bar">
            <FontAwesomeIcon onClick={this.showMenu} className="menuBar" icon={faBars} />
          </div>
        </div>
        <img data-aos="fade-down-left" data-aos-duration="2000" className="bg" src={bg} alt="" />
        <div data-aos="fade-down-right" data-aos-duration="2000" className="headerContent">
          <h1>
            Give Your Customers the <span>Support</span> they Deserve
          </h1>
          <p>
            Make customers happy and scale customer service without increasing
            unit costs.
          </p>
          <div className="demo">
            <button>Schedule a Demo</button>
            <button>
              <FontAwesomeIcon className="watchIcon" icon={faCirclePlay} />
              Watch Demo
            </button>
          </div>
          <div className="reduceDemo">
            <h1>60%</h1>
            <p>Reduce your team's workflow up to...</p>
          </div>
        </div>
        <div className="container">
          <img data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="leftBg" src={bg2} alt="" />
          <div className="mobileImg">
            <img src={image} alt="" />
          </div>
          <div  data-aos="zoom-in-right" data-aos-duration="2000" className="leftContent">
            <span>MAKE CUSTOMER HAPPY</span>
            <h1>Scale customer service without increasing unit costs</h1>
          </div>
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="rightContent">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
