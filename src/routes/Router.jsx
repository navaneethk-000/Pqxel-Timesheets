import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import OtpForm from "../components/OtpForm";
import SignUp from "../components/SignUp";
import Main from "../components/Main";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="signup" element={<SignUp />}>
            <Route index element={<OtpForm />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="dashboard/home" element={<Home />} />
            <Route path="timesheet" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
