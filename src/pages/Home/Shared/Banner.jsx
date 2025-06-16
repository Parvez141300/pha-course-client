import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../../assets/banner/banner 1.jpg";
import banner2 from "../../../assets/banner/banner 2.png";
import banner3 from "../../../assets/banner/banner 3.jpg";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#023A62",
            width: "40px",
            height: "40px",
            borderRadius: "9999px",
            right: "10px",
            zIndex: "10"
          }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#023A62",
            width: "40px",
            height: "40px",
            borderRadius: "9999px",
            left: "10px",
            zIndex: "10",
          }}
        onClick={onClick}
      />
    );
  }

const Banner = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full mx-auto relative slider-container">
      <Slider {...settings}>
        <div>
          <div className="absolute z-10 inset-0 bg-black/50 ">
            <div className="absolute z-10 text-white flex flex-col justify-center px-5 md:px-16 py-8 h-full space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Programming Course
              </h2>
              <p>
                Programming is the process of creating a set of instructions
                that <br />
                a computer can understand and follow to perform specific tasks.
                It <br />
                involves writing code, which is a set of commands in a
                programming
              </p>
            </div>
          </div>
          <img
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
            src={banner1}
            alt=""
          />
        </div>
        <div>
          <div className="absolute z-10 inset-0 bg-black/50 ">
            <div className="absolute z-10 text-white flex flex-col justify-center  px-5 md:px-16 py-8 h-full space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Health Course
              </h2>
              <p>
                A "health course" can refer to a wide variety of educational{" "}
                <br />
                programs focused on different aspects of health and wellness.{" "}
                <br />
                These can range from basic first aid and nutrition courses to{" "}
                <br />
              </p>
            </div>
          </div>
          <img
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
            src={banner2}
            alt=""
          />
        </div>
        <div>
          <div className="absolute z-10 inset-0 bg-black/50 ">
            <div className="absolute z-10 text-white flex flex-col justify-center  px-5 md:px-16 py-8 h-full space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Design Course
              </h2>
              <p>
                A "designing course" typically refers to educational programs{" "}
                <br />
                that teach individuals to create visual concepts and solutions{" "}
                <br />
                for various applications.
              </p>
            </div>
          </div>
          <img
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
            src={banner3}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
