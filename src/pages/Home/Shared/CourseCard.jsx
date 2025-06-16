import React from "react";
import { Link } from "react-router";

const CourseCard = ({ course }) => {
  //   console.log(course);
  const { _id, title, description, image, createdAt } = course;
  return (
    <div className="card bg-[#09A3D1]/20 shadow-sm hover:scale-105 transition duration-500 group">
      <figure>
        <img
          className="p-6 w-full h-64 object-cover rounded-4xl transition duration-300 group-hover:brightness-50"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 50)}...</p>
        <div className="card-actions justify-between items-center">
          <p className="font-bold">Created At: {createdAt}</p>
          <Link to={`/course-details/${_id}`}>
            <button className="btn btn-primary btn-outline outline-[#023A62] hover:bg-[#023A62]">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
