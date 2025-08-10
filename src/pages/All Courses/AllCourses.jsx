import React from "react";
import { useLoaderData } from "react-router";
import CourseCard from "../Home/Shared/CourseCard";
import { Helmet } from "react-helmet-async";

const AllCourses = () => {
  const courses = useLoaderData();
  return (
    <div className="space-y-5 w-11/12 mx-auto my-8">
      <Helmet>
        <title>All Courses | PHA Course</title>
      </Helmet>
      <h2 className="text-3xl font-bold">Courses: ({courses.length})</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
