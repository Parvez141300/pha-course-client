import React from "react";
import useAuth from "../../Hook/useAuth";
import { format } from "date-fns";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

const AddCourse = () => {
  const { user } = useAuth();
//   console.log(user);

  const handleCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const {hours, minutes, seconds, ...data} = Object.fromEntries(formData.entries());
    const duration = `${hours}:${minutes}:${seconds}`
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
        createdAt
    }

    // console.log(courseInfo);

    axios.post('http://localhost:3000/courses', courseInfo)
    .then(res => {
        console.log(res.data);
        if(res?.data?.insertedId){
            toast.success('Course Added', {
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
    .catch(error => {
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
    })

  };

  return (
    <div className="w-11/12 mx-auto my-8 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl md:text-4xl font-bold">Add Course</h1>
          <form onSubmit={handleCourse} className="fieldset">
            <label className="label">Title</label>
            <input
              required
              type="text"
              name="title"
              className="input w-full"
              placeholder="Course Title"
            />
            <label className="label">Description</label>
            <textarea
              required
              rows="5"
              name="description"
              className="textarea w-full"
              placeholder="Short Description"
            ></textarea>
            <label className="label">Image URL</label>
            <input
              required
              type="url"
              name="image"
              className="input w-full"
              placeholder="image url"
            />
            <label className="label">Duration:</label>
            <div className="flex items-center gap-2">
              <input
                required
                type="number"
                className="input w-full"
                name="hours"
                placeholder="Hours"
                min="0"
              />{" "}
              :
              <input
                required
                type="number"
                className="input w-full"
                name="minutes"
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
                placeholder="Seconds"
                min="0"
                max="59"
              />
            </div>

            <button className="btn btn-primary bg-[#023A62] mt-4">
              Add Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
