import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { errorToaster, successToaster } from "../../components/toastify";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      successToaster("Logged Out Successfully");
      navigate("/");
    } catch (err) {
      errorToaster("Something Went Wrong");
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div>dashboard</div>
    </>
  );
};

export default Dashboard;
