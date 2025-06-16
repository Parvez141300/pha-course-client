import React, { useState } from "react";
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

const CourseDetails = () => {
  const { user } = useAuth();
  const [toggle, setToggle] = useState(false);
  const { _id, name, email, duration, title, description, image, createdAt } =
    useLoaderData();

  const handleEnroll = (enrolledCourseId) => {
    setToggle(true);
    console.log(enrolledCourseId);
    const enrollInfo = {
      enrolledCourseId,
      enrolledEmail: user?.email,
    };

    axios
      .post(`http://localhost:3000/enrolled-courses`, enrollInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Successfully Course Enrolled", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error?.message}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="bg-[#08A4D1]/20">
      <Helmet>
        <title>PHA Course | Course Details</title>
      </Helmet>
      <div className="w-11/12 mx-auto py-8">
        <div className="space-y-2">
          <div>
            <img className="w-full md:w-52" src={image} alt="" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {title}
          </h1>
          <div className="flex flex-wrap justify-between items-center md:w-5/12">
            <p className="flex items-center gap-2">
              <MdOutlinePublishedWithChanges /> Posted By: {name}
            </p>
            <p className="flex items-center gap-2">
              <FaPen /> Created At: {format(new Date(createdAt), "hh:mm:ss aaa")}
            </p>
          </div>
          <p className="flex items-center gap-2">
            <GiDuration />
            Duration: {duration} h
          </p>
          <p className="text-black/50 font-bold flex items-center gap-2">
            <MdOutlineEmail />
            Email: {email}
          </p>
          <div>
            {user ? (
              <button
                onClick={() => handleEnroll(_id)}
                className={`btn  hover:bg-[#023A62] ${
                  toggle
                    ? "bg-[#023A62] btn-primary"
                    : "btn-outline btn-primary"
                }`}
              >
                {toggle ? "Enrolled" : "Enroll"}
              </button>
            ) : (
              <button
                className="btn btn-primary btn-outline bg-[#023A62]"
                disabled
              >
                Enroll
              </button>
            )}
          </div>
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
          <div>
            <h3 className="text-xl font-bold text-justify">Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
