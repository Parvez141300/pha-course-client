import React, { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      toast.error("Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://assignment-11-server-tau-eight.vercel.app/contact-submit",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Message sent!",
          text: "Thank you for contacting us. We'll get back soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      let errorMessage = "Something went wrong. Please try again later.";
      
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = error.response.data.error || "Validation error";
        } else if (error.response.status === 500) {
          errorMessage = "Server error. Please try again later.";
        }
      }

      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | YourSiteName</title>
        <meta name="description" content="Contact page of YourSiteName" />
      </Helmet>

      <div className="min-h-screen p-6 md:p-12 flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
        {/* Left Side - Contact Info & Map */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">
            Get In Touch
          </h2>
          <p className=" max-w-md">
            Have questions? We'd love to hear from you. Fill out the form and we
            will get back to you as soon as possible.
          </p>

          <div className="space-y-4 ">
            <div className="flex items-center gap-3">
              <MdLocationOn className=" text-3xl" />
              <p>Gazipur, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-3xl" />
              <p>parvez.alif.dev@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MdPhone className=" text-3xl" />
              <p>+880 1872243808</p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-8 w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9088702562914!2d90.40346411541687!3d23.75297138459153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78c056701db%3A0x5c85eb6f5a9d71e8!2sDhaka!5e0!3m2!1sen!2sbd!4v1687719356920!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-6 text-[#023A62] dark:text-[#09A3D0]">
            Contact Form
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="input input-bordered w-full"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
              required
            ></textarea>

            <button
              type="submit"
              className={`btn w-full ${
                loading ? "loading" : ""
              } bg-[#023A62] hover:bg-[#022a4a] dark:bg-[#09A3D0] dark:hover:bg-[#0789b3] text-white border-none`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;