import axios from "axios";
import React, { use, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { toast } from "react-toastify";
import useAuth from "../../../Hook/useAuth";

const EnrolledCourseList = ({ userEnrolledCoursePromiseApi }) => {
  const { user } = useAuth();

  const initialEnrolledCourses = use(userEnrolledCoursePromiseApi);
  const [enrolledCourses, setEnrolledCourses] = useState(
    initialEnrolledCourses
  );
  console.log(enrolledCourses);

  const handleRemoveEnrollment = async (enrolledCourseId) => {
    console.log(enrolledCourseId, user.email);
    try {
      await axios.delete(`http://localhost:3000/enrolled-courses`, {
        data: {
          enrolledEmail: user?.email,
          enrolledCourseId: enrolledCourseId,
        },
      });
      toast.success("Enrollment Cancelled");
      const remainingEnrolledCourses = enrolledCourses.filter(
        (course) => course.enrolledCourseId !== enrolledCourseId
      );
      setEnrolledCourses(remainingEnrolledCourses);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  //   {
  //     "_id": "685070a43dfb51b7f905ae2e",
  //     "enrolledEmail": "parvezhossain744471@gmail.com",
  //     "enrolledCourseId": "684fc5105ba09cbe5e04c9cf",
  //     "image": "https://happenings.lpu.in/wp-content/uploads/2020/09/Word.png",
  //     "title": "MS word",
  //     "createdAt": "2025-06-16T07:24:29.822Z",
  //     "duration": "02:50:20",
  //     "description": "Microsoft Word, often shortened to MS Word, is a word processing software developed by Microsoft. It allows users to create, edit, and format various documents like letters, reports, resumes, and more."
  // }

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
              <th>Description</th>
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
                          src={enrolledCourse?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{enrolledCourse?.title}</div>
                      <div className="text-sm opacity-50">
                        {enrolledCourse?.enrolledEmail}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{enrolledCourse?.duration}h</td>
                <td>{enrolledCourse?.description}</td>
                <th>
                  <button
                    onClick={() =>
                      handleRemoveEnrollment(enrolledCourse?.enrolledCourseId)
                    }
                    className="btn btn-ghost flex items-center gap-1"
                  >
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
