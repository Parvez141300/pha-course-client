import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";

import logo from "../assets/logo/pha course logo.png";
import { AuthContext } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const { user, userSignOut, loading } = useContext(AuthContext);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  // console.log(user?.photoURL);

  const handleUserLogout = () => {
    userSignOut()
      .then(() => {
        toast.success("User Successfully Logged out");
        setDropDownOpen(false);
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `dark:text-black nav-link ${isActive ? "active" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/all-courses"}
          className={({ isActive }) =>
            `dark:text-black nav-link ${isActive ? "active" : ""}`
          }
        >
          All Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact-us"}
          className={({ isActive }) =>
            `dark:text-black nav-link ${isActive ? "active" : ""}`
          }
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to={"/add-course"}
              className={({ isActive }) =>
                `dark:text-black nav-link ${isActive ? "active" : ""}`
              }
            >
              Add Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/manage-courses"}
              className={({ isActive }) =>
                `dark:text-black nav-link ${isActive ? "active" : ""}`
              }
            >
              Manage Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/my-enrolled-course"}
              className={({ isActive }) =>
                `dark:text-black nav-link ${isActive ? "active" : ""}`
              }
            >
              My Enrolled Courses
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav className="w-11/12 mx-auto">
      <div className="navbar px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost px-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost px-0 text-xl">
            <img className="w-24" src={logo} alt="homeLogo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end relative flex items-center gap-5">
          <ThemeToggle></ThemeToggle>

          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : user ? (
            <div
              title={user?.displayName}
              className="avatar cursor-pointer"
              onClick={() => setDropDownOpen(!dropDownOpen)}
            >
              <div className="ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring-2 ring-offset-2">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={
                    user.photoURL || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://i.ibb.co/MBtjqXQ/no-avatar.gif";
                  }}
                  alt="User"
                />
              </div>
            </div>
          ) : (
            <div className="flex justify-center gap-3">
              <Link
                to="/login"
                className="btn btn-outline outline-[#023A62] hover:bg-[#023A62] btn-primary hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary bg-[#023A62] hover:text-white"
              >
                Register
              </Link>
            </div>
          )}

          {dropDownOpen && (
            <ul className="absolute right-0 mt-24 w-48 rounded-md bg-white shadow-lg z-10">
              <li
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Link to={"/user-profile"}>Profile</Link>
              </li>
              <li
                onClick={handleUserLogout}
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Link to={"/"}>Logout</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
