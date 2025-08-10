import React, { useContext, useState } from "react";
import { FaEye, FaGithub, FaRegEyeSlash } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo/pha course logo.png";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const location = useLocation();

  const { setUser, userSignInWithGoogle, userSignInWithGithub, userSignIn, userUpdateProfile } =
    useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  //   user login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const newForm = new FormData(form);
    const { email, password } = Object.fromEntries(newForm.entries());

    // user sign in with email and password
    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Successfully logged in");
        navigate(`${user.email ? location.state : "/"}`);
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
        // console.log(user);
        userUpdateProfile({
          displayName: user?.displayName,
          photoURL: user?.photoURL,
        })
          .then(() => {
            // Profile updated!
            // ...
            setUser(user);
            toast.success("Successfully logged in");
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            toast.error(`${error.message}`);
          });
      })
      .catch((error) => {
        toast.error(`${error.message}`);
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
            toast.success("Successfully logged in");
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            toast.error(`${error.message}`);
          });
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="hero min-h-screen w-11/12 mx-auto space-y-12">
      <Helmet>
        <title>PHA Course | Login</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="bg-base-100 w-full lg:max-w-sm rounded-tl-2xl rounded-br-2xl border-2 border-[#08A2D0]">
          <div className="p-10">
            <img className="w-20 mx-auto" src={logo} alt="" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center">
              Login
            </h1>

            <p className="text-black/50 text-center">
              Enter your information to Login
            </p>
            <form onSubmit={handleLogin} className="fieldset">
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

              <button
                type="submit"
                className="btn btn-primary bg-[#023A62] mt-4"
              >
                Login
              </button>
              <div>
                <p>
                  Already have an account?{" "}
                  <Link
                    to={"/register"}
                    className="text-blue-400 hover:underline hover:text-red-500"
                  >
                    Register
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
              <button onClick={handleGithubLogin} className="btn w-full bg-black text-white border-black">
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

export default Login;
