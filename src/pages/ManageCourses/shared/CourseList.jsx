import axios from "axios";
import React, { use, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CourseList = ({ userCoursePromiseApi }) => {
  const initialCourses = use(userCoursePromiseApi);
  const [courses, setCourses] = useState(initialCourses);
console.log(courses);
  const handleDeleteCourse = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/courses/${_id}`)
          .then((res) => {
            console.log(res.data);

            if (res?.data?.deletedCount) {
              const filteredCourse = courses.filter(
                (course) => course._id != _id
              );
              setCourses(filteredCourse);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-bold">
        Course has created by you: ({courses?.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#09A3D0] text-white">
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Enrolled</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course?._id} className="hover:bg-base-300">
                <th>{index + 1}</th>
                <td>{course?.title}</td>
                <td>{course?.description}</td>
                <td>{course?.enrollmentCount}</td>
                <td>
                  <div className="join join-vertical lg:join-horizontal gap-2">
                    <Link
                      to={`/edit-course/${course._id}`}
                      className="btn join-item"
                    >
                      <FaRegEdit size={20} />
                    </Link>
                    <button
                      onClick={() => handleDeleteCourse(course._id)}
                      className="btn join-item"
                    >
                      <FaRegTrashAlt size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseList;
