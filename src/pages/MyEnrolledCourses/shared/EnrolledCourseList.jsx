import { format } from "date-fns";
import React, { use } from "react";
import { CiCircleRemove } from "react-icons/ci";

const EnrolledCourseList = ({ userEnrolledCoursePromiseApi }) => {
  const enrolledCourses = use(userEnrolledCoursePromiseApi);
  console.log(enrolledCourses);
  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-bold">
        Course Enrolled by you: ({enrolledCourses?.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#08A3D1] text-white">
            <tr>
              <th>No.</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Course Creation</th>
              <th>Remove Enrollment</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((enrolledCourse, index) => (
              <tr key={enrolledCourse?._id} className="hover:bg-base-100">
                <th>{index + 1}</th>
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
                      <div className="text-sm opacity-50">
                        {enrolledCourse.enrolledEmail}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{enrolledCourse.duration}h</td>
                <td>
                  {format(new Date(enrolledCourse.createdAt), "hh:mm:ss aaa")}
                </td>
                <th>
                  <button className="btn btn-ghost flex items-center gap-1">
                    <CiCircleRemove size={20} /> Remove
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledCourseList;
