import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function OtpForm() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = element.value;
    setOtp(updatedOtp);

    // Move to the next input field if a digit is entered
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Entered OTP: ${otp.join("")}`);
    navigate("/dashboard");
  };
  return (
    <div className="w-full lg:w-1/2 p-10 h-[680px] flex flex-col">
      <div className="flex items-center justify-between">
        <a href="#" className="text-blue-500 text-sm flex items-center">
          <FaChevronLeft />{" "}
          <span className="text-[#8692A6]" onClick={() => navigate("/")}>
            {" "}
            Back
          </span>
        </a>

        <p className="text-gray-500 text-[12px] flex flex-col">
          Step 1 of 2{" "}
          <a href="" className="text-[#1666FE] font-semibold">
            SignUp
          </a>
        </p>
      </div>

      <p className="text-sm text-center text-gray-500 mt-6">
        Already have an account?{" "}
        <a href="#" className="text-[#1666FE] font-semibold">
          Login
        </a>
      </p>

      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-[24px] font-semibold text-gray-800">
            Check your Mail
          </h1>
          <p className="mt-2 text-sm text-gray-600 w-[456px]">
            We've sent a 6-digit confirmation code to{" "}
            <span className="font-medium">username@gmail.com</span>. <br />
            Make sure you enter the correct code.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex justify-center space-x-3">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg bg-[#1666FE33]"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => navigate('main')}
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OtpForm;