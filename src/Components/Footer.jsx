import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo/pha course logo.png";

import {
  FaAddressBook,
  FaFacebook,
  FaInstagram,
  FaMobile,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#023A62]">
      <div className="w-11/12 mx-auto divide-y text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
          <div className="flex flex-col gap-4">
            <Link to={"/"}>
              <div className=" bg-white rounded-full w-fit">
                <img className="w-20" src={logo} alt="" />
              </div>
            </Link>
            <p className="text-white">
              PHA is a multinational course where people. can learn programming,
              health, design etc. In this course people can enroll to an course
              to learn anytime and anywhere.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-white font-bold">
              Links
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to={'/'} rel="noopener noreferrer" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/courses'} rel="noopener noreferrer" href="#">
                  Courses
                </Link>
              </li>
              <li>
                <Link to={'/login'} rel="noopener noreferrer" href="#">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-white font-bold">
              Terms
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
            <div className="uppercase font-bold text-white">Social media</div>
            <div className="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaFacebook size={25}></FaFacebook>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center p-1"
              >
                <FaTwitter size={25}></FaTwitter>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaInstagram size={25}></FaInstagram>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaYoutube size={25}></FaYoutube>
              </a>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-white">
          © 2025 Company Co. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
