import { format } from "date-fns";
import React, { use } from "react";

const EnrolledCourseList = ({ userEnrolledCoursePromiseApi }) => {
  const enrolledCourses = use(userEnrolledCoursePromiseApi);
  console.log(enrolledCourses);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Created/Updated Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map((enrolledCourse, index) => (
            <tr key={enrolledCourse?._id}>
              <th>
                {index + 1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={enrolledCourse.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{enrolledCourse.title}</div>
                    <div className="text-sm opacity-50">{enrolledCourse.enrolledEmail}</div>
                  </div>
                </div>
              </td>
              <td>
                {enrolledCourse.duration}h
              </td>
              <td>
                {format(new Date(enrolledCourse.createdAt), "hh:mm:ss aaa")}
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledCourseList;
