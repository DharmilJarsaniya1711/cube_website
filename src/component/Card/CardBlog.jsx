import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const CardBlog = (props) => {
  return (
    <Fragment>
      <div className="wrapper__card-blog">
        <img src={props.img} className="img" alt="" />
        <p className="medium font__size--12 text__12-1024 color__green mt-3 mb-2">
          12 May 2022
        </p>
        <h5 className="yeseva font__size--20 text__20-1024">
          Lorem ipsum dolor sit amet
        </h5>
        <p className="medium font__size--14 text__14-1024 color__gray-1 lh-2 mb-4">
          Pellentesque suspendisse aenean aliquet arcu facilisi molestie. Magna
          velit, malesuada ullamcorper amet
        </p>
        <NavLink
          to="/blog-detail"
          className="medium font__size--14 text__14-1024 btn btn__outlined--green btn__action no__opacity shadow color__green"
        >
          Read More
        </NavLink>
      </div>
    </Fragment>
  );
};

export default CardBlog;
