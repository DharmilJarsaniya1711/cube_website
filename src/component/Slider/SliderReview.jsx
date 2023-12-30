import React, { Fragment, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const SliderReview = (props) => {
  const user = [
    {
      img: "./../images/new/Profile Image.png",
      name: "Esther Howard",
      job: "Content Creator",
    },
    {
      img: "./../images/new/Profile Image (1).png",
      name: "Guy Hawkins",
      job: "Teachers",
    },
    {
      img: "./../images/new/Profile Image (2).png",
      name: "Robert Fox",
      job: "Influencer",
    },
    {
      img: "./../images/new/Profile Image (3).png",
      name: "Lorem Pak",
      job: "Influencer",
    },
    {
      img: "./../images/new/Profile Image.png",
      name: "Esther Howard",
      job: "Content Creator",
    },
    {
      img: "./../images/new/Profile Image (1).png",
      name: "Guy Hawkins",
      job: "Teachers",
    },
    {
      img: "./../images/new/Profile Image (2).png",
      name: "Robert Fox",
      job: "Influencer",
    },
    {
      img: "./../images/new/Profile Image (3).png",
      name: "Lorem Pak",
      job: "Influencer",
    },
  ];

  const content = [
    "It was a Great Experience!",
    "It was a Great Experience!",
    "It was a Great Experience!",
    "It was a Great Experience!",
    "It was a Great Experience!",
    "It was a Great Experience!",
    "It was a Great Experience!",
    "It was a Great Experience!",
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
  };
  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-5 col-lg-4 col-xl-3 mb-4 mb-md-0">
          <Slider
            asNavFor={nav2}
            {...settings}
            ref={slider1}
            className="wrapper__slider-review-side"
          >
            {user.map((obj) => {
              return (
                <div className="items">
                  <div className="wrapper__card-review-side gap-2">
                    <img src={obj.img} className="profile" alt="" />
                    <div className="about ml-3">
                      <h5 className="mb-0 normal font__size--16 text__16-1024 yeseva">
                        {obj.name}
                      </h5>
                      <p className="mb-0 medium font__size--14 text__14-1024 color__gray-6">
                        {obj.job}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="col-md-7 col-lg-8 col-xl-9">
          <div className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <Slider
                asNavFor={nav1}
                {...settings2}
                ref={slider2}
                className="wrapper__slider-conetent"
              >
                {content.map((obj) => {
                  return (
                    <div className="items">
                      <h5 className="normal font__size--20 text__20-1024 yeseva mb-0">
                        {obj}
                      </h5>
                      <div className="d-flex align-items-center my-3">
                        <img
                          src="./../images/new/Icon - Star.png"
                          className="mr-2"
                          alt=""
                        />
                        <img
                          src="./../images/new/Icon - Star.png"
                          className="mr-2"
                          alt=""
                        />
                        <img
                          src="./../images/new/Icon - Star.png"
                          className="mr-2"
                          alt=""
                        />
                        <img
                          src="./../images/new/Icon - Star.png"
                          className="mr-2"
                          alt=""
                        />
                        <img
                          src="./../images/new/Icon - Star.png"
                          className="mr-2"
                          alt=""
                        />
                      </div>
                      <p className="medium font__size--14 text__14-1024 lh-2 color-_gray-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        A amet vitae vel id id porttitor ut in. Integer pretium
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
                  );
                })}
              </Slider>
            </div>
            <div className="col-lg-4">
              <img
                src="./../images/new/ffghgfhgf.png"
                className="images__review"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SliderReview;
