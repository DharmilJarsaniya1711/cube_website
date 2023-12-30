import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import CardBlog from "../../component/Card/CardBlog";
import Footer from "../../component/Other/Footer";
import Navbar from "./../../component/Navbar/Navbar";
const BlogDetail = (props) => {
  const blog = [
    "./../images/new/img (1).png",
    "./../images/new/img (2).png",
    "./../images/new/img (3).png",
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
          <div className="path__wrap-head"></div>
          <div className="position-relative">
            <Navbar type={"white"} />
            <section>
              <div className="container">
                <div className="text-center">
                  <h2 className="font__size--64 text__65-1024 text__65-sm text__65-xxs normal color__white yeseva">
                    Blog Title
                  </h2>
                  <p className="medium font__size--14 text__14-1024 color__white lh-2">
                    By Nanas on 12 May 2022
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="text-center">
              <img
                src="./../images/new/Rectangle 2.png"
                className="images__cover-detail mb-5"
                alt=""
              />
            </div>

            <p className="medium font__size--14 text__14-1024 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
              vitae vel id id porttitor ut in. Integer pretium egestas nisi,
              nunc, purus sit vitae nisi, etiam. Fermentum, fringilla nisl
              elementum, mattis amet, elementum, cras elementum morbi. Aliquet
              ut mus arcu, ornare nunc nisi, dignissim in. Diam mus fermentum
              volutpat arcu pulvinar scelerisque auctor sed. Feugiat turpis
              vitae porttitor in odio lacus praesent mauris. At massa lobortis
              mi id molestie nibh sociis. Sem quis sed quisque fames urna elit
              molestie nisl. Auctor sit tellus sed nunc cursus nibh tempus.
            </p>
            <p className="medium font__size--14 text__14-1024 mb-4">
              Ac sit nunc eleifend condimentum rutrum ultrices a. Faucibus
              suscipit dictumst tristique lectus pharetra mus quam ut. Tortor a,
              dolor ullamcorper volutpat vestibulum elit sit. Nisl rutrum tortor
              aliquet cursus blandit massa est nunc. Turpis nec habitant
              pharetra, gravida risus. Sem id nulla eleifend sed eu a cras
              tristique sit. Aliquam hac commodo, commodo vitae, massa nullam.
              Interdum scelerisque curabitur dictum morbi neque, proin vitae
              est.
            </p>
            <p className="medium font__size--14 text__14-1024 mb-4">
              Quam ac nunc elementum nunc, eu, amet. Nisl libero turpis nec sem
              orci facilisi. Duis viverra consequat, est commodo, neque, in
              orci. Tortor tincidunt morbi proin et etiam fermentum porta. In
              aliquet sit pharetra scelerisque aliquet nisi cras sed placerat.
              Sit imperdiet vitae tincidunt aliquet cras a arcu dolor commodo.
              Arcu dui tincidunt sagittis cursus et, amet quis purus et. Sapien
              etiam orci, pellentesque suspendisse aenean aliquet arcu facilisi
              molestie. Magna velit, malesuada ullamcorper amet, curabitur
              ultrices tempus tincidunt quam. Sit vestibulum, scelerisque urna,
              vel.
            </p>

            <div className="row">
              <div className="col-md-6">
                <img
                  src="./../images/new/blog_detail_1.png"
                  className="mb-4 images__side"
                  alt=""
                />
                <img
                  src="./../images/new/blog_detail_2.png"
                  className="mb-4 images__side"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <p className="medium font__size--14 text__14-1024 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  amet vitae vel id id porttitor ut in. Integer pretium egestas
                  nisi, nunc, purus sit vitae nisi, etiam. Fermentum, fringilla
                  nisl elementum, mattis amet, elementum, cras elementum morbi.
                  Aliquet ut mus arcu, ornare nunc nisi, dignissim in. Diam mus
                  fermentum volutpat arcu pulvinar scelerisque auctor sed.
                  Feugiat turpis vitae porttitor in odio lacus praesent mauris.
                  At massa lobortis mi id molestie nibh sociis. Sem quis sed
                  quisque fames urna elit molestie nisl. Auctor sit tellus sed
                  nunc cursus nibh tempus.
                </p>
                <p className="medium font__size--14 text__14-1024 mb-4">
                  Ac sit nunc eleifend condimentum rutrum ultrices a. Faucibus
                  suscipit dictumst tristique lectus pharetra mus quam ut.
                  Tortor a, dolor ullamcorper volutpat vestibulum elit sit. Nisl
                  rutrum tortor aliquet cursus blandit massa est nunc. Turpis
                  nec habitant pharetra, gravida risus. Sem id nulla eleifend
                  sed eu a cras tristique sit. Aliquam hac commodo, commodo
                  vitae, massa nullam. Interdum scelerisque curabitur dictum
                  morbi neque, proin vitae est.
                </p>
                <p className="medium font__size--14 text__14-1024 mb-4">
                  Quam ac nunc elementum nunc, eu, amet. Nisl libero turpis nec
                  sem orci facilisi. Duis viverra consequat, est commodo, neque,
                  in orci. Tortor tincidunt morbi proin et etiam fermentum
                  porta. In aliquet sit pharetra scelerisque aliquet nisi cras
                  sed placerat. Sit imperdiet vitae tincidunt aliquet cras a
                  arcu dolor commodo. Arcu dui tincidunt sagittis cursus et,
                  amet quis purus et. Sapien etiam orci, pellentesque
                  suspendisse aenean aliquet arcu facilisi molestie. Magna
                  velit, malesuada ullamcorper amet, curabitur ultrices tempus
                  tincidunt quam. Sit vestibulum, scelerisque urna, vel.
                </p>
                <p className="medium font__size--14 text__14-1024 mb-4">
                  Ac sit nunc eleifend condimentum rutrum ultrices a. Faucibus
                  suscipit dictumst tristique lectus pharetra mus quam ut.
                  Tortor a, dolor ullamcorper volutpat vestibulum elit sit. Nisl
                  rutrum tortor aliquet cursus blandit massa est nunc. Turpis
                  nec habitant pharetra, gravida risus. Sem id nulla eleifend
                  sed eu a cras tristique sit. Aliquam hac commodo, commodo
                  vitae, massa nullam. Interdum scelerisque curabitur dictum
                  morbi neque, proin vitae est.
                </p>
              </div>
            </div>

            <p className="medium font__size--14 text__14-1024 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
              vitae vel id id porttitor ut in. Integer pretium egestas nisi,
              nunc, purus sit vitae nisi, etiam. Fermentum, fringilla nisl
              elementum, mattis amet, elementum, cras elementum morbi. Aliquet
              ut mus arcu, ornare nunc nisi, dignissim in. Diam mus fermentum
              volutpat arcu pulvinar scelerisque auctor sed. Feugiat turpis
              vitae porttitor in odio lacus praesent mauris. At massa lobortis
              mi id molestie nibh sociis. Sem quis sed quisque fames urna elit
              molestie nisl. Auctor sit tellus sed nunc cursus nibh tempus.
            </p>
            <p className="medium font__size--14 text__14-1024 mb-4">
              Ac sit nunc eleifend condimentum rutrum ultrices a. Faucibus
              suscipit dictumst tristique lectus pharetra mus quam ut. Tortor a,
              dolor ullamcorper volutpat vestibulum elit sit. Nisl rutrum tortor
              aliquet cursus blandit massa est nunc. Turpis nec habitant
              pharetra, gravida risus. Sem id nulla eleifend sed eu a cras
              tristique sit. Aliquam hac commodo, commodo vitae, massa nullam.
              Interdum scelerisque curabitur dictum morbi neque, proin vitae
              est.
            </p>
            <p className="medium font__size--14 text__14-1024 mb-4">
              Quam ac nunc elementum nunc, eu, amet. Nisl libero turpis nec sem
              orci facilisi. Duis viverra consequat, est commodo, neque, in
              orci. Tortor tincidunt morbi proin et etiam fermentum porta. In
              aliquet sit pharetra scelerisque aliquet nisi cras sed placerat.
              Sit imperdiet vitae tincidunt aliquet cras a arcu dolor commodo.
              Arcu dui tincidunt sagittis cursus et, amet quis purus et. Sapien
              etiam orci, pellentesque suspendisse aenean aliquet arcu facilisi
              molestie. Magna velit, malesuada ullamcorper amet, curabitur
              ultrices tempus tincidunt quam. Sit vestibulum, scelerisque urna,
              vel.
            </p>
          </div>
        </section>

        <div className="container">
          <div className="text-center">
            <h5 className="font__size--20 text__20-1024 normal yeseva mb-3">
              Share this blog
            </h5>
            <div className="wrapper__sosmed-blog">
              <a href="#!">
                <img src="./../images/new/sos (1).png" alt="" />
              </a>
              <a href="#!">
                <img src="./../images/new/sos (2).png" alt="" />
              </a>
              <a href="#!">
                <img src="./../images/new/sos (3).png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <section>
          <div className="container">
            <h5 className="normal font__size--64 text__65-1024 text__65-sm text__65-xxs yeseva mb-4 text-center">
              Recent Blog
            </h5>
            <div className="row mb-4">
              {blog.map((obj) => {
                return (
                  <div className="col-md-6 col-lg-4 mb-4">
                    <CardBlog img={obj} />
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <NavLink
                to="/blog"
                className="medium font__size--14 text__14-1024 color__white btn btn__green shadow"
              >
                View All
              </NavLink>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default BlogDetail;
