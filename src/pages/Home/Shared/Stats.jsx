import React from "react";
import {
  FaAngular,
  FaHtml5,
  FaReact,
  FaVuejs,
  FaUserGraduate,
  FaAward,
  FaClock,
  FaSync,
} from "react-icons/fa";
import { SiNextdotjs, SiNuxtdotjs, SiSvelte, SiGatsby } from "react-icons/si";
import { FaLayerGroup } from "react-icons/fa6";

const Stats = () => {
  return (
    <div className="bg-[#CEEDF6] dark:bg-[#CEEDF6] rounded-xl">
      <section className="">
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <h2 className="text-3xl font-bold text-start text-black">
            Course You Will Learn
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-between">
            <FaAngular className="w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 text-[#023A62] dark:text-[#3ABFF8]" />
            <SiGatsby className="w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 text-[#023A62] dark:text-[#3ABFF8]" />
            <FaHtml5 className="w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 text-[#023A62] dark:text-[#3ABFF8]" />
            <SiNextdotjs className="w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 text-[#023A62] dark:text-[#3ABFF8]" />
            <SiNuxtdotjs className="w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 text-[#023A62] dark:text-[#3ABFF8]" />
            <FaReact className="w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 text-[#023A62] dark:text-[#3ABFF8]" />
            <SiSvelte className="w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 text-[#023A62] dark:text-[#3ABFF8]" />
            <FaVuejs className="w-12 h-12 mx-10 my-6 md:mx-12 lg:m-0 text-[#023A62] dark:text-[#3ABFF8]" />
          </div>
        </div>
      </section>
      <section className="p-4 my-6 md:p-8">
        <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex overflow-hidden rounded-lg bg-white dark:bg-gray-700 shadow-md">
            <div className="flex items-center justify-center px-4 bg-[#023A62] dark:bg-[#3ABFF8] text-white">
              <FaLayerGroup className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between flex-1 p-3">
              <p className="text-2xl font-semibold text-[#023A62] dark:text-white">
                200+
              </p>
              <p className="text-gray-600 dark:text-gray-300">Projects</p>
            </div>
          </div>
          <div className="flex overflow-hidden rounded-lg bg-white dark:bg-gray-700 shadow-md">
            <div className="flex items-center justify-center px-4 bg-[#023A62] dark:bg-[#3ABFF8] text-white">
              <FaUserGraduate className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between flex-1 p-3">
              <p className="text-2xl font-semibold text-[#023A62] dark:text-white">
                7 500+
              </p>
              <p className="text-gray-600 dark:text-gray-300">Students</p>
            </div>
          </div>
          <div className="flex overflow-hidden rounded-lg bg-white dark:bg-gray-700 shadow-md">
            <div className="flex items-center justify-center px-4 bg-[#023A62] dark:bg-[#3ABFF8] text-white">
              <FaAward className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between flex-1 p-3">
              <p className="text-2xl font-semibold text-[#023A62] dark:text-white">
                14
              </p>
              <p className="text-gray-600 dark:text-gray-300">Awards</p>
            </div>
          </div>
          <div className="flex overflow-hidden rounded-lg bg-white dark:bg-gray-700 shadow-md">
            <div className="flex items-center justify-center px-4 bg-[#023A62] dark:bg-[#3ABFF8] text-white">
              <FaClock className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between flex-1 p-3">
              <p className="text-2xl font-semibold text-[#023A62] dark:text-white">
                24/7 h
              </p>
              <p className="text-gray-600 dark:text-gray-300">Support</p>
            </div>
          </div>
          <div className="flex overflow-hidden rounded-lg bg-white dark:bg-gray-700 shadow-md">
            <div className="flex items-center justify-center px-4 bg-[#023A62] dark:bg-[#3ABFF8] text-white">
              <FaSync className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between flex-1 p-3">
              <p className="text-2xl font-semibold text-[#023A62] dark:text-white">
                99,9 %
              </p>
              <p className="text-gray-600 dark:text-gray-300">Uptime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
