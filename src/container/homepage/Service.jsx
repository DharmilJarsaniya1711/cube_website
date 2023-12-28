import React, { Fragment } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Other/Footer";

const Service = (props) => {
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
                    Service
                  </h2>
                  <p className="medium font__size--14 font__14-1024 lh-2 color__gray-1">
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

        <section>
          <div className="container">
            <div className="text-center">
              <h4 className="normal font__size--40 text__40-1024 text__40-md text__40-mm yeseva mb-5">
                Our Service
              </h4>

              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="wrapper__service-grid">
                        <div className="icon mb-4 mx-auto">
                          <img src="./../images/Graph.png" alt="" />
                        </div>

                        <h5 className="normal font__size--24 text__24-1024 yeseva">
                          Interior Design
                        </h5>
                        <p className="medium font__size--14 font__14-1024 lh-2 color__gray-1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A amet vitae vel id id porttitor ut in. Integer
                          pretium egestas nisi, nunc, purus sit vitae nisi,
                          etiam.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="wrapper__service-grid">
                        <div className="icon mb-4 mx-auto">
                          <img src="./../images/Home.png" alt="" />
                        </div>

                        <h5 className="normal font__size--24 text__24-1024 yeseva">
                          Home Design
                        </h5>
                        <p className="medium font__size--14 font__14-1024 lh-2 color__gray-1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A amet vitae vel id id porttitor ut in. Integer
                          pretium egestas nisi, nunc, purus sit vitae nisi,
                          etiam.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="wrapper__service-grid">
                        <div className="icon mb-4 mx-auto">
                          <img src="./../images/Work.png" alt="" />
                        </div>

                        <h5 className="normal font__size--24 text__24-1024 yeseva">
                          Office Design
                        </h5>
                        <p className="medium font__size--14 font__14-1024 lh-2 color__gray-1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A amet vitae vel id id porttitor ut in. Integer
                          pretium egestas nisi, nunc, purus sit vitae nisi,
                          etiam.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <h4 className="normal font__size--40 text__40-1024 text__40-md text__40-mm yeseva mb-0">
                How it Works
              </h4>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row mb__5">
                  <div className="col-md-6 mb-4 my-md-auto text-center">
                    <img
                      src="./../images/new/qw (2).png"
                      className="images__how"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 pl__sm-5 pl-5 my-auto position-relative">
                    <div className="wrapper__number normal font__size--24 text__24-1024 yeseva color__white left">
                      <div className="circle">1</div>
                    </div>
                    <div className="normal font__size--12 text__12-1024 yeseva mb-0 color__gray-2">
                      STEP 1
                    </div>
                    <h1 className="normal font__size--24 text__24-1024 yeseva">
                      Select one of our talented designers.
                    </h1>
                    <p className="medium font__size--14 font__14-1024 lh-2 color__gray-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      amet vitae vel id id porttitor ut in. Integer pretium
                      egestas nisi, nunc, purus sit vitae nisi, etiam.
                    </p>
                  </div>
                </div>
                <div className="row mb__5">
                  <div className="col-md-6 order-md-1 order-2 my-auto pl__sm-5 pl-md-2 text-md-right pr-md-5 position-relative">
                    <div className="wrapper__number normal font__size--24 text__24-1024 yeseva color__white right">
                      <div className="circle">2</div>
                    </div>
                    <div className="normal font__size--12 text__12-1024 yeseva mb-0 color__gray-2">
                      STEP 2
                    </div>
                    <h1 className="normal font__size--24 text__24-1024 yeseva">
                      Tell us all about your dream home.
                    </h1>
                    <p className="medium font__size--14 font__14-1024 lh-2 color__gray-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      amet vitae vel id id porttitor ut in. Integer pretium
                      egestas nisi, nunc, purus sit vitae nisi, etiam.
                    </p>
                  </div>
                  <div className="col-md-6 order-1 order-md-2 mb-4 my-md-auto text-center">
                    <img
                      src="./../images/new/qw (1).png"
                      className="images__how"
                      alt=""
                    />
                  </div>
                </div>
                <div className="row mb__5">
                  <div className="col-md-6 mb-4 my-md-auto text-center">
                    <img
                      src="./../images/new/qw (3).png"
                      className="images__how"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 pl__sm-5 pl-5 my-auto position-relative">
                    <div className="wrapper__number normal font__size--24 text__24-1024 yeseva color__white left">
                      <div className="circle">3</div>
                    </div>
                    <div className="normal font__size--12 text__12-1024 yeseva mb-0 color__gray-2">
                      STEP 3
                    </div>
                    <h1 className="normal font__size--24 text__24-1024 yeseva">
                      Your designer will blow your mind.
                    </h1>
                    <p className="medium font__size--14 font__14-1024 lh-2 color__gray-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      amet vitae vel id id porttitor ut in. Integer pretium
                      egestas nisi, nunc, purus sit vitae nisi, etiam.
                    </p>
                  </div>
                </div>
                <div className="row mb__5">
                  <div className="col-md-6 order-md-1 order-2 my-auto  pl__sm-5 pl-md-2 text-md-right pr-md-5 position-relative">
                    <div className="wrapper__number normal font__size--24 text__24-1024 yeseva color__white right">
                      <div className="circle">4</div>
                    </div>
                    <div className="normal font__size--12 text__12-1024 yeseva mb-0 color__gray-2">
                      STEP 4
                    </div>
                    <h1 className="normal font__size--24 text__24-1024 yeseva">
                      Tell us which design ideas you vibe.
                    </h1>
                    <p className="medium font__size--14 font__14-1024 lh-2 color__gray-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      amet vitae vel id id porttitor ut in. Integer pretium
                      egestas nisi, nunc, purus sit vitae nisi, etiam.
                    </p>
                  </div>
                  <div className="col-md-6 order-1 order-md-2 mb-4 my-md-auto text-center">
                    <img
                      src="./../images/new/qw (5).png"
                      className="images__how"
                      alt=""
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4 my-md-auto text-center">
                    <img
                      src="./../images/new/qw (4).png"
                      className="images__how"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 pl__sm-5 pl-5 my-auto position-relative">
                    <div className="wrapper__number none normal font__size--24 text__24-1024 yeseva color__white left">
                      <div className="circle">5</div>
                    </div>
                    <div className="normal font__size--12 text__12-1024 yeseva mb-0 color__gray-2">
                      STEP 5
                    </div>
                    <h1 className="normal font__size--24 text__24-1024 yeseva">
                      Shop items from your design in one place.
                    </h1>
                    <p className="medium font__size--14 font__14-1024 lh-2 color__gray-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      amet vitae vel id id porttitor ut in. Integer pretium
                      egestas nisi, nunc, purus sit vitae nisi, etiam.
                    </p>
                  </div>
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

export default Service;
