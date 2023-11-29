import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../Footer/Footer";

const Design = ({ user, isAuthenticated }) => {
  return (
    <>
      <div className="box" style={{ width: "100%", height: "100%" }}> 
        <Navbar user={user} isAuthenticated={isAuthenticated} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Design;
