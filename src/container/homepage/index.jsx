import React, { Fragment } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

import CardBlog from "../../component/Card/CardBlog";
import Consultation from "../../component/Other/Consultation";
import Footer from "../../component/Other/Footer";
import SliderReview from "../../component/Slider/SliderReview";
import Navbar from "./../../component/Navbar/Navbar";

const Index = (props) => {
  const blog = [
    "./../images/new/img (1).png",
    "./../images/new/img (2).png",
    "./../images/new/img (3).png",
  ];

  useEffect(() => {
    $("a[href^='#click-']").on("click", function (e) {
      e.preventDefault();
      $(".responsive__fixed").removeClass("show");
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        1000
      );
    });
  }, []);

  return (
    <Fragment>
      <div className="overflow-hidden position-relative">
        <div className="position-relative">
          <img src="./../images/new/dsad.png" className="images__bg-head" alt="" />
          <div className="position-relative z-2">
            <Navbar />
            <section className="height__100">
              <div className="container">
                <div className="text-center">
                  <h2 className="font__size--64 text__65-1024 text__65-sm text__65-xxs normal yeseva">
                    Make room for better living
                  </h2>
                  <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    amet vitae vel id id porttitor ut in.{" "}
                    <br className="d-none d-md-block" /> Integer pretium egestas
                    nisi, nunc, purus sit vitae nisi, etiam.{" "}
                  </p>

                  <a
                    href="#click-about"
                    className="btn btn__green medium font__size--14 text__14-1024 color__white shadow"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section id="click-about" className="pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-6 mb-4 my-lg-auto">
                    <img
                      src="./../images/new/dssaff.png"
                      className="images__about-head"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 my-auto">
                    <h4 className="normal font__size--40 text__40-1024 text__40-md text__40-mm yeseva mb-3">
                      About InterQ
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
              </div>
            </div>
          </div>
        </section>

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

                        <h5 className="normal font__size--24 text__24-1024 text__24-sm text__24-xs yeseva">
                          Interior Design
                        </h5>
                        <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1">
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

                        <h5 className="normal font__size--24 text__24-1024 text__24-sm text__24-xs yeseva">
                          Home Design
                        </h5>
                        <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A amet vitae vel id id porttitor ut in. Integer
                          pretium egestas nisi, nunc, purus sit vitae nisi,
                          etiam.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-md-0">
                      <div className="wrapper__service-grid">
                        <div className="icon mb-4 mx-auto">
                          <img src="./../images/Work.png" alt="" />
                        </div>

                        <h5 className="normal font__size--24 text__24-1024 text__24-sm text__24-xs yeseva">
                          Office Design
                        </h5>
                        <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1">
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
            <div className="text-center">
              <h4 className="normal font__size--40 text__40-1024 text__40-md text__40-mm yeseva mb-3">
                Recent Project
              </h4>
              <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
                vitae vel id id porttitor ut in. <br /> Integer pretium egestas
                nisi, nunc, purus sit vitae nisi, etiam.
              </p>

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
          </div>
        </section>

        <section className="bg__gray-3">
          <div className="container">
            <div className="text-center mb-5">
              <h4 className="normal font__size--40 text__40-1024 text__40-md text__40-mm yeseva mb-3">
                Get More Updates
              </h4>
              <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
                vitae vel id id porttitor ut in. <br /> Integer pretium egestas
                nisi, nunc, purus sit vitae nisi, etiam.
              </p>
            </div>
            <div className="row mb-4">
              {blog.map((obj) => {
                return (
                  <div className="col-lg-4 mb-4">
                    <CardBlog img={obj} />
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <NavLink
                to="/blog"
                className="btn btn__green medium font__size--14 text__14-1024 color__white shadow"
              >
                View All
              </NavLink>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <h4 className="normal font__size--40 text__40-1024 text__40-md text__40-mm yeseva mb-3">
                Our Customers Review
              </h4>
              <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
                vitae vel id id porttitor ut in. <br /> Integer pretium egestas
                nisi, nunc, purus sit vitae nisi, etiam.
              </p>
            </div>

            <SliderReview />
          </div>
        </section>

        <Consultation />

        <Footer />
      </div>
    </Fragment>
  );
};

export default Index;
