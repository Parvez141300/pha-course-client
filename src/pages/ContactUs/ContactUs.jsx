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

  // ফর্ম ইনপুট হ্যান্ডলার
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ফর্ম সাবমিট হ্যান্ডলার
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      toast.error("Please fill all fields");
      return;
    }

    // সহজ ইমেইল ভ্যালিডেশন
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);

    try {
      // এখানে তোমার API URL দিবে অথবা Firebase function call দিবে
      // নিচের উদাহরণ axios POST request এর জন্য
    //   await axios.post("/api/contact", formData);

      Swal.fire({
        icon: "success",
        title: "Message sent!",
        text: "Thank you for contacting us. We'll get back soon.",
      });

      // ফর্ম ক্লিয়ার করা
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
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

      <div className="min-h-screen bg-base-100 p-6 md:p-12 flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
        {/* Left Side - Contact Info & Map */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-primary">Get In Touch</h2>
          <p className="text-neutral max-w-md">
            Have questions? We’d love to hear from you. Fill out the form and we
            will get back to you as soon as possible.
          </p>

          <div className="space-y-4 text-neutral">
            <div className="flex items-center gap-3">
              <MdLocationOn className="text-primary text-3xl" />
              <p>123 Main St, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-primary text-3xl" />
              <p>info@yoursite.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MdPhone className="text-primary text-3xl" />
              <p>+880 1234 567890</p>
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
        <div className="md:w-1/2 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-6 text-primary">
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
              className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
