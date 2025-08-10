import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { MdOutlineEmail, MdOutlinePublishedWithChanges } from "react-icons/md";
import { useLoaderData } from "react-router";
import useAuth from "../../Hook/useAuth";
import { Bounce, toast } from "react-toastify";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import { format } from "date-fns";
import { Helmet } from "react-helmet-async";
import CourseCard from "../Home/Shared/CourseCard";

const CourseDetails = () => {
  const { user } = useAuth();
  const { _id, name, email, duration, title, description, image, createdAt } =
    useLoaderData();

  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isLimitExceeded, setIsLimitExceeded] = useState(false);
  const [enrollmentCount, setEnrollmentCount] = useState(0);
  const [popularCourse, setPopularCourse] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://assignment-11-server-tau-eight.vercel.app/enrolled-courses/popular"
      )
      .then((res) => {
        const data = res.data;
        setPopularCourse(data);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://assignment-11-server-tau-eight.vercel.app/enrolled-courses?email=${user?.email}`
      )
      .then((res) => {
        const enrolledCourses = res.data;
        const alreadyEnrolled = enrolledCourses.find(
          (course) => course?.enrolledCourseId == _id
        );
        setIsEnrolled(alreadyEnrolled);
        setIsLimitExceeded(enrolledCourses.length >= 3);
      });
  }, [user, _id]);

  const handleEnroll = async () => {
    if (!user) {
      return;
    }
    if (isEnrolled) {
      // unenroll
      try {
        await axios.delete(
          `https://assignment-11-server-tau-eight.vercel.app/enrolled-courses`,
          {
            data: {
              enrolledEmail: user.email,
              enrolledCourseId: _id,
              enrollmentCount: enrollmentCount - 1,
            },
          }
        );
        toast.success("Enrollment Cancelled");
        setIsEnrolled(false);
        setEnrollmentCount(enrollmentCount - 1);
        setIsLimitExceeded(false);
      } catch (error) {
        toast.error(`${error.message}`);
      }
    } else {
      try {
        const enrollInfo = {
          enrolledEmail: user.email,
          enrolledCourseId: _id,
          enrollmentCount: enrollmentCount + 1,
        };
        await axios.post(
          `https://assignment-11-server-tau-eight.vercel.app/enrolled-courses`,
          enrollInfo
        );
        toast.success("Enrollment Succeeded");
        setIsEnrolled(true);
        setEnrollmentCount(enrollmentCount + 1);
      } catch (error) {
        toast.error(`${error.message}`);
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>PHA Course | Course Details</title>
      </Helmet>
      <div className="w-11/12 mx-auto py-8 flex flex-col lg:flex-row gap-5">
        {/* Main Course Content - Left Side */}
        <div className="flex-1 space-y-5">
          <div className="flex flex-col md:flex-row gap-5">
            <img 
              className="w-full md:w-52 h-auto object-cover rounded-lg" 
              src={image} 
              alt={title} 
            />
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#023A62] dark:text-[#09A3D0]">
                {title}
              </h1>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:w-5/6">
                <p className="flex items-center gap-2 text-sm md:text-base">
                  <MdOutlinePublishedWithChanges /> Posted By: {name}
                </p>
                <p className="flex items-center gap-2 text-sm md:text-base">
                  <FaPen /> Created At:{" "}
                  {format(new Date(createdAt), "hh:mm:ss aaa")}
                </p>
              </div>
              <p className="flex items-center gap-2 text-sm md:text-base">
                <GiDuration />
                Duration: {duration} h
              </p>
              <p className="text-black/50 dark:text-gray-300 font-bold flex items-center gap-2 text-sm md:text-base">
                <MdOutlineEmail />
                Email: {email}
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            {user ? (
              <button
                onClick={handleEnroll}
                disabled={!isEnrolled && isLimitExceeded}
                className={`btn w-full md:w-48 ${
                  isEnrolled
                    ? "bg-[#023A62] hover:bg-[#022a4a] text-white"
                    : "btn-outline border-[#023A62] text-[#023A62] hover:bg-[#023A62] hover:text-white"
                }`}
              >
                {isEnrolled ? "Enrolled" : "Enroll"}
              </button>
            ) : (
              <button
                className="btn w-full md:w-48 btn-outline border-[#023A62] text-[#023A62] hover:bg-[#023A62] hover:text-white"
                disabled
              >
                Enroll
              </button>
            )}

            {!user && (
              <div className="flex items-center rounded shadow-md overflow-hidden max-w-xl relative dark:bg-gray-50 dark:text-gray-800">
                <div className="self-stretch flex items-center px-3 flex-shrink-0 dark:bg-gray-300 dark:text-violet-600">
                  <TiDeleteOutline size={40} />
                </div>
                <div className="p-4 flex-1">
                  <p className="text-sm dark:text-gray-600">
                    <span className="font-bold">Error:</span>
                    If you don't login you can't enroll the course
                  </p>
                </div>
              </div>
            )}

            {isLimitExceeded && (
              <div className="text-red-600 font-semibold">
                You can't enroll in more than 3 courses.
              </div>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#023A62] dark:text-[#09A3D0]">Description</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        </div>

        {/* Popular Courses - Right Side */}
        <div className="lg:w-80 xl:w-96 space-y-5">
          <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0]">
            Popular Courses ({popularCourse?.length})
          </h2>
          <div className="h-[calc(100vh-200px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#023A62] scrollbar-track-gray-100 dark:scrollbar-thumb-[#09A3D0] dark:scrollbar-track-gray-800">
            {popularCourse?.map((course) => (
              <div key={course._id} className="mb-5">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;