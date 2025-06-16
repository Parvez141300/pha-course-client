import React, { Suspense } from "react";
import CourseList from "./shared/CourseList";
import { userCoursePromiseApi } from "../../api/courseApi";
import useAuth from "../../Hook/useAuth";
import LoadingState from "../../LoadingState/LoadingState";

const ManageCourses = () => {
  const { user } = useAuth();

  return (
    <div className="bg-[#08A4D1]/20">
      <div className="w-11/12 mx-auto py-8">
        <Suspense fallback={<LoadingState></LoadingState>}>
          <CourseList
            userCoursePromiseApi={userCoursePromiseApi(user?.email)}
          ></CourseList>
        </Suspense>
      </div>
    </div>
  );
};

export default ManageCourses;
