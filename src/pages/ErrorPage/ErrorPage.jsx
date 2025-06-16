import React from "react";
import { Helmet } from "react-helmet-async";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router";

const ErrorPage = () => {
  const location = useLocation();
//   console.log(location.pathname);
  return (
    <div className="bg-[#09A3D1] w-full min-h-screen">
      <Helmet>
        <title>PHA Course | Error</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
        <div className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-bold">
          400
        </div>
        <p className="text-3xl text-center text-white font-bold">
          No routes matched location
        </p>
        <p className="text-3xl text-center text-white font-bold">
          {location.pathname}
        </p>
        <p className="text-white text-center">
          Our servers could not handle your request. Don't worry, our <br />
          development team was already notified. Try refreshing the page.
        </p>
        <div justify="center">
          <Link to={"/"} className="btn btn-primary bg-[#023A62]">
            <IoArrowBackCircleOutline />
            Go To HomePage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
