import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg wrapper__navbar position-relative z-3"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div className="container position-relative">
          <NavLink
            to="/"
            exact
            class={
              "navbar-brand wrapper__nav-logo yeseva position-relative font__size--24 text__24-1024 " +
              (props.type === "white" ? "color__white" : "color__black")
            }
          >
            Cube<span className="color__green"> Studio</span>
          </NavLink>

          <button
            class={"navbar-toggler nav__button position-relative "}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className="collapse navbar-collapse wrapper__navbar-menu ml-lg-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav menu__center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  exact
                  class={
                    "nav-link medium font__size--14 text__14-1024 " +
                    (props.type === "white" ? "color__white" : "")
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  class={
                    "nav-link medium font__size--14 text__14-1024 " +
                    (props.type === "white" ? "color__white" : "")
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/portofolio"
                  class={
                    "nav-link medium font__size--14 text__14-1024 " +
                    (props.type === "white" ? "color__white" : "")
                  }
                >
                  Portofolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/service"
                  class={
                    "nav-link medium font__size--14 text__14-1024 " +
                    (props.type === "white" ? "color__white" : "")
                  }
                >
                  Service
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/blog"
                  class={
                    "nav-link medium font__size--14 text__14-1024 " +
                    (props.type === "white" ? "color__white" : "")
                  }
                >
                  Blog
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <div className="dropdown wrapper__dropdown-menu">
                  <div
                    class={
                      "menu pointer " +
                      (props.status ? "color__white light" : "color__black")
                    }
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div
                      className={
                        "d-flex align-items-center normal font__size--14 text__14-1024 " +
                        (props.type === "white" ? "color__white" : "")
                      }
                    >
                      Blog
                    </div>
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="line"></div>
                    <NavLink
                      className="dropdown-item medium font__size--14 text__14-1024"
                      to="/blog"
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/blog-detail"
                      className="dropdown-item medium font__size--14 text__14-1024"
                    >
                      Blog Detail
                    </NavLink>
                    <NavLink
                      to="/error"
                      className="dropdown-item medium font__size--14 text__14-1024"
                    >
                      404
                    </NavLink>
                    <NavLink
                      to="/price"
                      className="dropdown-item medium font__size--14 text__14-1024"
                    >
                      Price
                    </NavLink>
                  </div>
                </div>
              </li> */}
              <li className="nav-item d-lg-none">
                <NavLink
                  to="/contact"
                  className={
                    "medium font__size--14 text__14-1024 ml-auto btn  no__opacity shadow btn__head " +
                    (props.type === "white"
                      ? "btn__outlined--white color__white h__black"
                      : "btn__outlined--black color__black")
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink
            to="/contact"
            className={
              "d-none d-lg-block medium font__size--14 text__14-1024 ml-auto btn  no__opacity shadow btn__head " +
              (props.type === "white"
                ? "btn__outlined--white color__white h__black"
                : "btn__outlined--black color__black")
            }
          >
            Contact Us
          </NavLink>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
