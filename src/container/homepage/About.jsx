import React, { Fragment } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Other/Footer";
import Consultation from "../../component/Other/Consultation";

const About = (props) => {
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
                  <h2 className="font__size--64 text__65-1024 text__65-sm text__65-xxs yeseva fw-normal">About Us</h2>
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
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row mb__5">
                  <div className="col-md-6 mb-4 my-md-auto">
                    <img
                      src="./../images/new/dsasad.png"
                      className="images__about"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 my-auto">
                    <h4 className="normal font__size--40 text__40-1024 text__40-md text__40-mm yeseva mb-3">
                    About Cube Studio
                    </h4>
                    <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      amet vitae vel id id porttitor ut in. Integer pretium
                      egestas nisi, nunc, purus sit vitae nisi, etiam.
                      Fermentum, fringilla nisl elementum, mattis amet,
                      elementum, cras elementum morbi. Aliquet ut mus arcu,
                      ornare nunc nisi, dignissim in. Diam mus fermentum
                      volutpat arcu pulvinar scelerisque auctor sed. Feugiat
                      turpis vitae porttitor in odio lacus praesent mauris. At
                      massa lobortis mi id molestie nibh sociis. Sem quis sed
                      quisque fames urna elit molestie nisl. Auctor sit tellus
                      sed nunc cursus nibh tempus.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 order-md-1 order-2 my-auto">
                    <h4 className="normal font__size--40 text__40-1024 text__40-md text__40-mm yeseva mb-3">
                      Why Choose Cube Studio
                    </h4>
                    <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      amet vitae vel id id porttitor ut in. Integer pretium
                      egestas nisi, nunc, purus sit vitae nisi, etiam.
                    </p>

                    <div className="d-flex align-items-center mb-4 gap-2">
                      <img src="./../images/new/Group 24030.svg" alt="" />
                      <span className="medium font__size--14 text__14-1024 lh-2 color__gray-1 ml-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </div>
                    <div className="d-flex align-items-center mb-4 gap-2">
                      <img src="./../images/new/Group 24030.svg" alt="" />
                      <span className="medium font__size--14 text__14-1024 lh-2 color__gray-1 ml-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <img src="./../images/new/Group 24030.svg" alt="" />
                      <span className="medium font__size--14 text__14-1024 lh-2 color__gray-1 ml-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 order-1 order-md-2 mb-4 my-md-auto">
                    <img
                      src="./../images/new/dssaff.png"
                      className="images__about"
                      alt=""
                    />
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
                Meet Our Best Team
              </h4>
            </div>

            <div className="row gap-4 justify-content-center">
              <div className="col-xl-10">
                <div className="row justify-content-center">
                  <div className="col-sm-6 col-md-4 mb-4 mb-md-0">
                    <div className="wrapper__card-team position-relative overflow-hidden">
                      <img src="./../images/new/tm (1).png" alt="" />
                      <div className="bg"></div>
                      <div className="about text-center">
                        <h5 className="font__size--16 text__16-1024 normal color__white yeseva mb-0">
                          David Babarna
                        </h5>
                        <p className="medium font__size--12 text__12-1024 color__white mb-0">
                          Interior Designer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 mb-4 mb-md-0">
                    <div className="wrapper__card-team position-relative overflow-hidden">
                      <img src="./../images/new/tm (3).png" alt="" />
                      <div className="bg"></div>
                      <div className="about text-center">
                        <h5 className="font__size--16 text__16-1024 normal color__white yeseva mb-0">
                          David Babarna
                        </h5>
                        <p className="medium font__size--12 text__12-1024 color__white mb-0">
                          Interior Designer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 mb-4 mb-md-0">
                    <div className="wrapper__card-team position-relative overflow-hidden">
                      <img src="./../images/new/tm (2).png" alt="" />
                      <div className="bg"></div>
                      <div className="about text-center">
                        <h5 className="font__size--16 text__16-1024 normal color__white yeseva mb-0">
                          David Babarna
                        </h5>
                        <p className="medium font__size--12 text__12-1024 color__white mb-0">
                          Interior Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-10">
                <div className="row justify-content-center">
                  <div className="col-sm-6 col-md-4 mb-4 mb-md-0">
                    <div className="wrapper__card-team position-relative overflow-hidden">
                      <img src="./../images/new/tm (4).png" alt="" />
                      <div className="bg"></div>
                      <div className="about text-center">
                        <h5 className="font__size--16 text__16-1024 normal color__white yeseva mb-0">
                          David Babarna
                        </h5>
                        <p className="medium font__size--12 text__12-1024 color__white mb-0">
                          Interior Designer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 mb-4 mb-md-0">
                    <div className="wrapper__card-team position-relative overflow-hidden">
                      <img src="./../images/new/tm (5).png" alt="" />
                      <div className="bg"></div>
                      <div className="about text-center">
                        <h5 className="font__size--16 text__16-1024 normal color__white yeseva mb-0">
                          David Babarna
                        </h5>
                        <p className="medium font__size--12 text__12-1024 color__white mb-0">
                          Interior Designer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 mb-4 mb-md-0">
                    <div className="wrapper__card-team position-relative overflow-hidden">
                      <img src="./../images/new/tm (6).png" alt="" />
                      <div className="bg"></div>
                      <div className="about text-center">
                        <h5 className="font__size--16 text__16-1024 normal color__white yeseva mb-0">
                          David Babarna
                        </h5>
                        <p className="medium font__size--12 text__12-1024 color__white mb-0">
                          Interior Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Consultation />

        <Footer />
      </div>
    </Fragment>
  );
};

export default About;
