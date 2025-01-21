import { logo } from "../assets";
import { IoMdHome } from "react-icons/io";
import { BsArrow90DegRight } from "react-icons/bs";
import { HiDocumentChartBar } from "react-icons/hi2";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RiSettings3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full w-[105px] bg-white text-black p-4 flex flex-col items-center">
      {/* Logo Section */}
      <div className="mb-6 flex items-center w-[64px] h-[43px] justify-center">
        <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />
      </div>
      <div className="flex justify-center mt-20">
        {/* Navigation Menu */}
        <ul className="text-[#1666FE] flex flex-col gap-8 mt-12">
          <li className="mb-4">
            <Link className="hover:text-gray-300" to={"dashboard/home"}>
              <IoMdHome className="size-6" />
            </Link>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-300">
              <BsArrow90DegRight className="size-6" />
            </a>
          </li>
          <li className="mb-4">
            <Link className="hover:text-gray-300" to={"timesheet"}>
              <HiDocumentChartBar className="size-6" />
            </Link>
            <a href="#" className="hover:text-gray-300"></a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              <LiaClipboardListSolid className="size-6" />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              <RiSettings3Fill className="size-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
