import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import Forgot from "../pages/auth/Forgot";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Routing;
