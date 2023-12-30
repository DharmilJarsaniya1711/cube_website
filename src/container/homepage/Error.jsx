import React, { Fragment } from "react";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Navbar/Navbar";
import { NavLink } from "react-router-dom";
const Error = (props) => {
  return (
    <Fragment>
      <div className="overflow-hidden position-relative">
        <div className="position-relative">
          <img
            src="./../images/new/dsad.png"
            className="images__bg-head"
            alt=""
          />
          <div className="position-relative z-2">
            <Navbar />
            <section className="height__100">
              <div className="container">
                <div className="text-center">
                  <h2 className="font__size--64 text__65-1024 text__65-sm text__65-xxs yeseva fw-normal">
                    404 <br />
                    Page Not Found
                  </h2>
                  <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    amet vitae vel id id porttitor ut in. <br /> Integer pretium
                    egestas nisi, nunc, purus sit vitae nisi, etiam.{" "}
                  </p>
                  <NavLink
                    to="/"
                  >
                  <button className="btn btn__green medium font__size--14 text__14-1024 color__white shadow">

                    Back to Homepage
                  </button>
                  </NavLink>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Error;
