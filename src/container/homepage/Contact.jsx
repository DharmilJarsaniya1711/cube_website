import React, { Fragment } from "react";
import Consultation from "../../component/Other/Consultation";
import Footer from "../../component/Other/Footer";
import Navbar from "./../../component/Navbar/Navbar";
const Contact = (props) => {
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
            <section>
              <div className="container">
                <div className="text-center">
                  <h2 className="font__size--64 text__65-1024 text__65-sm text__65-xxs yeseva">
                    Contact Us
                  </h2>
                  <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    amet vitae vel id id porttitor ut in.{" "}
                    <br className="d-none d-md-block" /> Integer pretium egestas
                    nisi, nunc, purus sit vitae nisi, etiam.{" "}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Consultation />

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4 my-md-auto">
                <img src="./../images/new/Basemap image.png" alt="" />
              </div>
              <div className="col-md-6 my-auto">
                <div className="wrapper__info-contact text-center text-md-left d-md-flex align-items-center gap-2">
                  <div className="icon flex-shrink-0">
                    <img src="./../images/new/Message.svg" alt="" />
                  </div>
                  <h5 className="mb-0 font__size--20 text__20-1024 yeseva normal ml-3">
                    <a
                      href="mailto:sales@devoqdesign.com"
                      className=" text-dark"
                    >
                      sales@devoqdesign.com
                    </a>
                  </h5>
                </div>
                <div className="wrapper__info-contact text-center text-md-left d-md-flex align-items-center my-4 gap-2">
                  <div className="icon flex-shrink-0">
                    <img src="./../images/new/Location.svg" alt="" />
                  </div>
                  <h5 className="mb-0 font__size--20 text__20-1024 yeseva normal ml-3 text-start">
                    111, Platinum Plaza Opp. I.O.C. petrol pump, Bodakdev,
                    Ahmedabad - 380054{" "}
                  </h5>
                </div>
                <div className="wrapper__info-contact text-center text-md-left d-md-flex align-items-center gap-2">
                  <div className="icon flex-shrink-0">
                    <img src="./../images/new/Calling.svg" alt="" />
                  </div>
                  <h5 className="mb-0 font__size--20 text__20-1024 yeseva normal ml-3">
                    <a href="tel:+919898362004" className="text-dark">
                      {" "}
                      +919898362004{" "}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Contact;
