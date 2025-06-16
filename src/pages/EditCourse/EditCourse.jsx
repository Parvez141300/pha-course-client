import axios from "axios";
import { format } from "date-fns";
import React from "react";
import { useLoaderData } from "react-router";
import { Bounce, toast } from "react-toastify";
import useAuth from "../../Hook/useAuth";

const EditCourse = () => {
  const { user } = useAuth();
  const {
    _id,
    duration: oldDuration,
    title,
    description,
    image,
  } = useLoaderData();
  const Duration = oldDuration.split(":");
  const oldHours = Duration[0];
  const oldMinutes = Duration[1];
  const oldSeconds = Duration[2];

  //   {
  //     "_id": "684eda209058c4275142d8e1",
  //     "name": "parvez hossain",
  //     "email": "parvezhossain744471@gmail.com",
  //     "duration": "2:12:20",
  //     "title": "Graphics Design",
  //     "description": "Graphic design is the art and practice of planning and projecting ideas and experiences with visual and textual content. It's a creative discipline that combines art and technology to communicate messages, inform, inspire, and captivate audiences. Graphic designers use visual elements like typography, images, colors, and layout techniques to create effective communication. ",
  //     "image": "https://i.ibb.co.com/CKNpNLQ6/graphics-design.jpg",
  //     "createdAt": "08:35:12 pm"
  // }

  const handleCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { hours, minutes, seconds, ...data } = Object.fromEntries(
      formData.entries()
    );
    const duration = `${hours}:${minutes}:${seconds}`;
    const email = user?.email;
    const name = user?.displayName;

    // current time
    const createdAt = format(new Date(), "hh:mm:ss aaa");

    const courseInfo = {
      name,
      email,
      duration,
      ...data,
      createdAt,
    };

    // check if changes were made?
    const hasChanged =
      title !== data.title ||
      description !== data.description ||
      image !== data.image ||
      oldDuration !== duration;

    if (!hasChanged) {
      toast.info("No changes were made!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    
    // update info
    axios
      .put(`http://localhost:3000/courses/${_id}`, courseInfo)
      .then((res) => {
        console.log(res.data);
        if (res?.data?.modifiedCount > 0) {
          toast.success("Successfully Updated Course", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.success(`${error.message}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };
  return (
    <div className="w-11/12 mx-auto my-8 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl md:text-4xl font-bold">Edit Course</h1>
          <form onSubmit={handleCourse} className="fieldset">
            <label className="label">Title</label>
            <input
              required
              type="text"
              name="title"
              defaultValue={title}
              className="input w-full"
              placeholder="Course Title"
            />
            <label className="label">Description</label>
            <textarea
              required
              rows="5"
              name="description"
              defaultValue={description}
              className="textarea w-full"
              placeholder="Short Description"
            ></textarea>
            <label className="label">Image URL</label>
            <input
              required
              type="url"
              name="image"
              defaultValue={image}
              className="input w-full"
              placeholder="image url"
            />
            <label className="label">Duration:</label>
            <div className="flex items-center gap-2">
              <input
                required
                type="number"
                name="hours"
                defaultValue={oldHours}
                className="input w-full"
                placeholder="Hours"
                min="0"
              />{" "}
              :
              <input
                required
                type="number"
                className="input w-full"
                name="minutes"
                defaultValue={oldMinutes}
                placeholder="Minutes"
                min="0"
                max="59"
              />
              :
              <input
                required
                type="number"
                className="input w-full"
                name="seconds"
                defaultValue={oldSeconds}
                placeholder="Seconds"
                min="0"
                max="59"
              />
            </div>

            <button className="btn btn-primary bg-[#023A62] mt-4">
              Update Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
