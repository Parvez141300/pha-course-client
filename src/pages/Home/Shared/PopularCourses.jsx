import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PopularCourses = () => {
  const [popularCourse, setPopularCourse] = useState([]);
  
//   console.log(popularCourse);

  useEffect(() => {
    axios
      .get("https://assignment-11-server-tau-eight.vercel.app/enrolled-courses/popular")
      .then((res) => {
        const data = res.data;
        setPopularCourse(data);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  }, []);

  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-bold">
        Popular Courses: ({popularCourse?.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {popularCourse.map((p) => (
          <div
            key={p?._id}
            className="flex flex-col items-center rounded-lg shadow-sm md:flex-row  bg-[#023A62] hover:bg-[#023A62]/80 transition duration-500"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={p?.image}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {p?.title}
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                {p?.description.slice(0, 100)}...
              </p>
              <p className=" text-gray-700 dark:text-gray-400">
                Course Duration: {p?.duration}h
              </p>
              <p className=" text-gray-700 dark:text-gray-400">
                Created Date: {format(new Date(p?.createdAt), 'yyyy-mm-dd')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
