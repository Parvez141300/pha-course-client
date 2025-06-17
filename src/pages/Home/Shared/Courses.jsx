import React, { use } from "react";
import CourseCard from "./CourseCard";

const Courses = ({ coursePromise }) => {
  const courses = use(coursePromise);
  // console.log(courses);
  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-bold">Courses: ({courses.length})</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
        }
      </div>
    </div>
  );
};

export default Courses;
