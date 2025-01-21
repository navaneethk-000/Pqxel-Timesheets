import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

function Dashboard() {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
