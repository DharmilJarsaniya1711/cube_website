import React, { Fragment } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Other/Footer";

const Portofolio = (props) => {
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
                  <h2 className="font__size--64 text__65-1024 text__65-sm text__65-xxs yeseva">Portofolio</h2>
                  <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    amet vitae vel id id porttitor ut in. <br className="d-none d-md-block" /> Integer pretium
                    egestas nisi, nunc, purus sit vitae nisi, etiam.{" "}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <h4 className="normal font__size--40 text__40-1024 text__40-md text__40-mm yeseva mb-3">
                Recent Project
              </h4>
              <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
                vitae vel id id porttitor ut in. <br className="d-none d-md-block" /> Integer pretium egestas
                nisi, nunc, purus sit vitae nisi, etiam.
              </p>
            </div>

            <div className="row">
              <div className="col-md">
                <img
                  src="./../images/new/Image (26).png"
                  className="images__grid-project mb-4 one"
                  alt=""
                />
                <img
                  src="./../images/new/Image (27).png"
                  className="images__grid-project one"
                  alt=""
                />
              </div>
              <div className="col-md mt-4 mt-md-0">
                <img
                  src="./../images/new/Image (28).png"
                  className="images__grid-project two"
                  alt=""
                />
              </div>
              <div className="col-lg-3 mt-4 mt-lg-0">
                <img
                  src="./../images/new/Image (29).png"
                  className="images__grid-project mb-4 one"
                  alt=""
                />
                <img
                  src="./../images/new/Image (30).png"
                  className="images__grid-project one"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <h4 className="normal font__size--40 text__40-1024 text__40-md text__40-mm yeseva mb-3">Furniture</h4>
              <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
                vitae vel id id porttitor ut in. <br className="d-none d-md-block" /> Integer pretium egestas
                nisi, nunc, purus sit vitae nisi, etiam.
              </p>
            </div>

            <div className="row">
              <div className="col-md-7 mb-4 mb-md-0">
                <img
                  src="./../images/new/fut (1).png"
                  className="images__grid-project fit1 mb-4"
                  alt=""
                />

                <div className="row">
                  <div className="col-md-8 mb-4 mb-md-0">
                    <img
                      src="./../images/new/fut (7).png"
                      className="images__grid-project fit2"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4">
                    <img
                      src="./../images/new/fut (6).png"
                      className="images__grid-project fit3 mb-4"
                      alt=""
                    />
                    <img
                      src="./../images/new/fut (5).png"
                      className="images__grid-project fit3 mb-4"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <img
                  src="./../images/new/fut (4).png"
                  className="images__grid-project fit4 mb-4"
                  alt=""
                />
                <img
                  src="./../images/new/fut (3).png"
                  className="images__grid-project fit4 mb-4"
                  alt=""
                />
                <img
                  src="./../images/new/fut (2).png"
                  className="images__grid-project fit4 mb-4"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Portofolio;
