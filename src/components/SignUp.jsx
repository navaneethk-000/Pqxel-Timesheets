import { Outlet } from "react-router-dom";
import { loginImg, logo } from "../assets";

function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="hidden lg:flex w-1/2 relative">
          <img
            src={loginImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
          <img src={logo} alt="Logo" className="absolute top-8 left-8 w-24" />
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default SignUp;
