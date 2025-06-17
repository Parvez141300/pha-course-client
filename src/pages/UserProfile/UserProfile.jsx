import React from "react";
import useAuth from "../../Hook/useAuth";
import { format } from "date-fns";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const UserProfile = () => {
  const { user } = useAuth();
  console.log(user);
  const { photoURL, email, displayName, metadata } = user;

  const createdDate = format(
    new Date(Number(metadata.createdAt)),
    "dd-MM-yyyy hh:mm:ss"
  );

  const lastLoginDate = format(
    new Date(Number(metadata.lastLoginAt)),
    "dd-MM-yyyy hh:mm:ss"
  );

  return (
    <div className="bg-[#CEEDF6]">
      <div className="w-11/12 mx-auto min-h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center mx-auto w-1/2 p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
          <img
            src={photoURL}
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                User: {displayName}
              </h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                E-mail: {email}
              </p>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                Created Date: {createdDate}
              </p>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                Last Login Date: {lastLoginDate}
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              <FaFacebook size={30}></FaFacebook>
              <FaXTwitter size={30}></FaXTwitter>
              <FaYoutube size={30}></FaYoutube>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
