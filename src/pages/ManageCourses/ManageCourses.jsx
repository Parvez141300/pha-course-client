import React, { Suspense } from "react";
import CourseList from "./shared/CourseList";
import { userCoursePromiseApi } from "../../api/courseApi";
import useAuth from "../../Hook/useAuth";
import LoadingState from "../../LoadingState/LoadingState";
import { Helmet } from "react-helmet-async";

const ManageCourses = () => {
  const { user } = useAuth();
  // console.log(user.accessToken);

  return (
    <div className="bg-[#08A4D1]/20 min-h-screen">
      <Helmet>
        <title>PHA Course | Manage Courses</title>
      </Helmet>
      <div className="w-11/12 mx-auto py-8">
        <Suspense fallback={<LoadingState></LoadingState>}>
          <CourseList
            userCoursePromiseApi={userCoursePromiseApi(user?.email, user.accessToken)}
          ></CourseList>
        </Suspense>
      </div>
    </div>
  );
};

export default ManageCourses;
