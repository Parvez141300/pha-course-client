import axios from "axios";
import React from "react";
import { Bounce, toast } from "react-toastify";
import useAuth from "../../Hook/useAuth";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet-async";

const EditCourse = () => {
  const { user } = useAuth();
  const course = useLoaderData();
  console.log(course);

  // Destructure all previous course data
  const {
    _id,
    title: oldTitle,
    description: oldDescription,
    image: oldImage,
    duration: oldDuration,
  } = course;

  const durationParts = oldDuration?.split(":") || ["0", "0", "0"];
  const [oldHours, oldMinutes, oldSeconds] = durationParts;

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
    // const createdAt = format(new Date(), "hh:mm:ss aaa");
    const createdAt = new Date();

    const courseInfo = {
      name,
      email,
      duration,
      ...data,
      createdAt,
    };

    // check if changes were made?
    const hasChanged =
      oldTitle !== data.title ||
      oldDescription !== data.description ||
      oldImage !== data.image ||
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
      .put(`https://assignment-11-server-tau-eight.vercel.app/courses/${_id}`, courseInfo)
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
      <Helmet>
        <title>PHA Course | Edit Course</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl md:text-4xl font-bold">Edit Course</h1>
          <form onSubmit={handleCourse} className="fieldset">
            <label className="label">Title</label>
            <input
              required
              type="text"
              name="title"
              defaultValue={oldTitle}
              className="input w-full"
              placeholder="Course Title"
            />
            <label className="label">Description</label>
            <textarea
              required
              rows="5"
              name="description"
              defaultValue={oldDescription}
              className="textarea w-full"
              placeholder="Short Description"
            ></textarea>
            <label className="label">Image URL</label>
            <input
              required
              type="url"
              name="image"
              defaultValue={oldImage}
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
