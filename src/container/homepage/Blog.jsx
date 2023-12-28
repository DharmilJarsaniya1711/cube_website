import React, { Fragment } from "react";
import CardBlog from "../../component/Card/CardBlog";
import Footer from "../../component/Other/Footer";
import Navbar from "./../../component/Navbar/Navbar";
const Blog = (props) => {
  const blog = [
    "./../images/new/img (1).png",
    "./../images/new/img (2).png",
    "./../images/new/img (3).png",
    "./../images/new/img (4).png",
    "./../images/new/img (5).png",
    "./../images/new/img (6).png",
    "./../images/new/img (7).png",
    "./../images/new/img (8).png",
    "./../images/new/img (9).png",
  ];
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
                    Blog
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

        <section>
          <div className="container">
            <div className="row">
              {blog.map((obj) => {
                return (
                  <div className="col-md-6 col-lg-4 mb-4">
                    <CardBlog img={obj} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Blog;
