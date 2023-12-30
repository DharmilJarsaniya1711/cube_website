import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <Fragment>
      <section className="bg__black">
        <div className="container">
          <div className="row justify-content-between">
            <div className="mb-4 col-md-3">
              <h4 class="yeseva color__white normal font__size--24 text__24-1024">
                Cube<span className="color__green"> Studio</span>
              </h4>
              <p className="medium font__size--12 text__12-1024 color__white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
                vitae vel id id porttitor ut in. Integer pretium{" "}
              </p>
            </div>
            <div className="mb-4 mb-lg-0 col-6 col-md offset-md-1">
              <h5 className="medium font__size--12 text__12-1024 color__white mb-3">
                Quicklink 1
              </h5>
              <ul className="list__footer-menu">
                <li>
                  <NavLink
                    to="/"
                    className="color__white medium font__size--12 text__12-1024 opacity__5 hover"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="color__white medium font__size--12 text__12-1024 opacity__5 hover"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/portfolio"
                    className="color__white medium font__size--12 text__12-1024 opacity__5 hover"
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    className="color__white medium font__size--12 text__12-1024 opacity__5 hover"
                  >
                    Service
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="mb-4 mb-lg-0 col-12 col-md-6 col-lg-3">
              <div className="mb-4">
                <h5 className="medium font__size--12 text__12-1024 color__white mb-3">
                  Join Our Newsletter{" "}
                </h5>

                <div className="wrapper__subscribe d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control color__white medium font__size--12 text__12-1024"
                    placeholder="Your Email Address"
                  />
                  <button className="medium font__size--12 text__12-1024 btn btn__green shadow color__white shadow ml-3">
                    Send
                  </button>
                </div>
              </div>

              <h5 className="medium font__size--12 text__12-1024 color__white mb-3">
                Follow Us
              </h5>

              <ul className="list__sosmed">
                <li>
                  <a href="#!">
                    <img src="./../images/new/sos (1).png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="./../images/new/sos (2).png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="./../images/new/sos (3).png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg">
              <h5 className="medium font__size--12 text__12-1024 color__white mb-3">
                Download Our App
              </h5>
              <ul className="list__footer-menu">
                <li>
                  <a href="#!">
                    <img src="./../images/new/Google Play.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="./../images/new/App Store.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="bg__black-2 py-4">
        <div className="container d-flex flex-sm-row flex-column justify-content-between">
          <div className="color__gray-2 text-center font__size--12 text__12-1024 medium">
            &#169; 2023 Cube Studio
          </div>
          <div className="color__gray-2 text-center font__size--12 text__12-1024 medium">
          <p className="right text-uppercase">Design &amp; Developed by <a className="color__gray-2" href="https://www.devoqdesign.com">Devoq Design</a></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
