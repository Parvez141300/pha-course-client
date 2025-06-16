import React, { Suspense } from "react";
import useAuth from "../../Hook/useAuth";
import { userEnrolledCoursePromiseApi } from "../../api/enrolledCourseApi";
import EnrolledCourseList from "./shared/EnrolledCourseList";
import LoadingState from "../../LoadingState/LoadingState";
import { Helmet } from "react-helmet-async";

const MyEnrolledCourses = () => {
  const { user } = useAuth();
  return (
    <div className="bg-[#08A4D1]/20 min-h-screen">
      <Helmet>
        <title>PHA Course | My Enrolled Courses</title>
      </Helmet>
      <div className="w-11/12 mx-auto py-8">
        <Suspense fallback={<LoadingState></LoadingState>}>
          <EnrolledCourseList
            userEnrolledCoursePromiseApi={userEnrolledCoursePromiseApi(
              user?.email
            )}
          ></EnrolledCourseList>
        </Suspense>
      </div>
    </div>
  );
};

export default MyEnrolledCourses;
