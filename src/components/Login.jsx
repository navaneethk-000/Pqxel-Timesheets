import { Link, useNavigate } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { googleIcon, linkedIn, loginImg, logo } from "../assets";

function Login({ onLogin }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex sm:w-full items-center justify-center mt-8 px-4 sm:px-6 lg:px-8 py-10 ">
        <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white shadow-lg rounded-md overflow-hidden">
          {/* Left Section */}
          <div className="hidden lg:flex w-1/2 relative bg-blue-600">
            <img
              src={loginImg}
              className="absolute inset-0 bg-cover bg-center opacity-100"
              alt=""
            />
            <img
              src={logo} // Replace with the actual logo
              alt="Logo"
              className="absolute top-8 left-8 w-24"
            />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12">
            <div className="text-right">
              <p className="text-[#BDBDBD]">
                {" "}
                Don’t have an account?{" "}
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-medium text-gray-800">Welcome</h2>
              <p className="text-sm text-gray-600">Login to continue</p>
            </div>
            <form className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    placeholder="Your password"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <IoMdEyeOff />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Remember Me
                  </label>
                </div>

                <Link
                  to={"forgotpassword"}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => navigate("signup")}
              >
                Login
              </button>
            </form>
            <div className="relative flex items-center justify-center mt-6">
              <span className="absolute bg-white px-2 text-sm text-gray-500">
                or continue with
              </span>
              <div className="w-full h-px bg-gray-300"></div>
            </div>
            <div className="flex items-center justify-center mt-6 space-x-4">
              <button className="flex items-center justify-center w-10 h-10 text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200">
                <img
                  src={googleIcon}
                  className="flex items-center justify-center w-10 h-10 text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
                  alt=""
                />
              </button>
              <button className="flex items-center justify-center w-10 h-10 text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200">
                <img src={linkedIn} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
