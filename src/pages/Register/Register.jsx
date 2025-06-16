import React, { useContext, useState } from "react";
import {
  FaEye,
  FaGithub,
  FaLink,
  FaRegEyeSlash,
  FaRegUser,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo/pha course logo.png";

const Register = () => {
  const {
    setUser,
    userSignUp,
    userUpdateProfile,
    userSignInWithGoogle,
    userSignInWithGithub,
  } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const navigate = useNavigate();

  //   user register
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const newForm = new FormData(form);
    const { name, photo, email, password, confirmPassword } =
      Object.fromEntries(newForm.entries());
    console.log(confirmPassword);

    // validate password

    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const digit = /\d/;
    const specialCharacter = /[\W_]/;
    if (!upperCase.test(password)) {
      toast.error("password must have at least 1 upper case");
      return;
    }
    if (!lowerCase.test(password)) {
      toast.error("password must have at least 1 lower case");
      return;
    }
    if (!digit.test(password)) {
      toast.error("password must have at least 1 digit");
      return;
    }
    if (!specialCharacter.test(password)) {
      toast.error("password must have at least 1 special character");
      return;
    }
    if (password.length < 8) {
      toast.error("password must have at least 8 character");
      return;
    }

    if (password.includes(email)) {
      toast.error("Password cannot contain your email or part of it");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Your password is't confirmed");
      return;
    }

    // user register with email and password
    userSignUp(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        userUpdateProfile({ displayName: name, photoURL: photo })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            toast.error(error.message);
          });

        navigate("/");
        toast.success("User Successfully Registered");
        form.reset();
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(error.message);
      });
  };

  //   login with google
  const handleLoginWithGoogle = () => {
    userSignInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        userUpdateProfile({
          displayName: user?.displayName,
          photoURL: user?.photoURL,
        })
          .then(() => {
            // Profile updated!
            // ...

            toast.success("Successfully logged in", {
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
            navigate("/");
          })
          .catch((error) => {
            toast.error(`${error.message}`, {
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
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
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



  // login with github
  const handleGithubLogin = () => {
    userSignInWithGithub()
      .then((res) => {
        const user = res.user;

        userUpdateProfile({
          displayName: user?.displayName,
          photoURL: user?.photoURL,
        })
          .then(() => {
            // Profile updated!
            // ...
            setUser(user);
            toast.success("Successfully logged in", {
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
            navigate('/')
          })
          .catch((error) => {
            toast.error(`${error.message}`, {
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
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
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
    <div className="hero bg-[#09A3D1]/30 min-h-screen w-11/12 mx-auto py-10">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="bg-base-100 w-full lg:max-w-sm rounded-tl-2xl rounded-br-2xl">
          <div className="p-5">
            <img className="w-20 mx-auto" src={logo} alt="" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center">
              Register
            </h1>

            <p className="text-black/50 text-center">
              Enter your information to register
            </p>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>

              <div className="flex items-center relative">
                <FaRegUser size={15} className="absolute left-1 z-10" />
                <input
                  required
                  name="name"
                  type="text"
                  className="input w-full px-5"
                  placeholder="Name"
                />
              </div>
              <label className="label">Photo URL</label>
              <div className="flex items-center relative">
                <FaLink size={15} className="absolute left-1 z-10" />

                <input
                  required
                  name="photo"
                  type="text"
                  className="input px-5 w-full"
                  placeholder="Photo URL"
                />
              </div>
              <label className="label">Email</label>
              <div className="relative flex items-center">
                <MdOutlineEmail size={20} className="absolute z-10 pl-1" />
                <input
                  required
                  name="email"
                  type="email"
                  className="input w-full px-5"
                  placeholder="Email"
                />
              </div>
              <label className="label">Password</label>
              <div className="relative flex items-center">
                <RiLockPasswordLine size={20} className="absolute z-10 pl-1" />
                {show ? (
                  <FaRegEyeSlash
                    onClick={() => setShow(false)}
                    size={20}
                    className="absolute z-10 right-0 mr-2 cursor-pointer"
                  />
                ) : (
                  <FaEye
                    onClick={() => setShow(true)}
                    size={20}
                    className="absolute z-10 right-0 mr-2 cursor-pointer"
                  />
                )}
                <input
                  required
                  name="password"
                  type={show ? "text" : "password"}
                  className="input w-full px-5"
                  placeholder="Password"
                />
              </div>
              <label className="label">Confirm Password</label>
              <div className="relative flex items-center">
                <RiLockPasswordLine size={20} className="absolute z-10 pl-1" />
                {show2 ? (
                  <FaRegEyeSlash
                    onClick={() => setShow2(false)}
                    size={20}
                    className="absolute z-10 right-0 mr-2 cursor-pointer"
                  />
                ) : (
                  <FaEye
                    onClick={() => setShow2(true)}
                    size={20}
                    className="absolute z-10 right-0 mr-2 cursor-pointer"
                  />
                )}
                <input
                  required
                  name="confirmPassword"
                  type={show2 ? "text" : "password"}
                  className="input w-full px-5"
                  placeholder="Confirm Password"
                />
              </div>

              <button
                type="submit"
                className="btn  btn-primary bg-[#023A62]  mt-4"
              >
                Register
              </button>
              <div>
                <p>
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="text-blue-400 hover:underline hover:text-red-500"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="space-y-2">
              {/* google */}
              <button
                onClick={handleLoginWithGoogle}
                className="btn w-full bg-white text-black border-[#e5e5e5]"
              >
                <FcGoogle size={20} />
                Login with Google
              </button>
              {/* GitHub */}
              <button
                onClick={handleGithubLogin}
                className="btn w-full bg-black text-white border-black"
              >
                <FaGithub size={20}></FaGithub>
                Login with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
