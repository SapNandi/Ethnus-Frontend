import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Backdrop from "@mui/material/Backdrop";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined"
import AppRegistrationRounded from "@mui/icons-material/AppRegistrationRounded";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";

const Navbar = ({ user, isAuthenticated }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    alert.success("You are Logged Out!!");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="leftNav">
        <div className="Logo">
          <Link to="/">
            <h1>PODTUBE</h1>
          </Link>
        </div>
      </div>
      <div className="rightNav">
        <h2>{isAuthenticated ? user.user.name : "Guest"}</h2>
        {isAuthenticated ? (
          <Link onClick={handleLogout}>LOGOUT</Link>
        ) : (
          <Link to="/loginSignup">SIGNIN</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
