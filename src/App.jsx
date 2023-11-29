import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Components/Product/ProductDetails";
import LoginSignUp from "./Pages/User/LoginSignUp";
import Profile from "./Pages/User/Profile";
import store from "./store";
import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
import Design from "./Components/Layout/Design/Design";

function App() {
  // Load the user state when loggedin
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            {/* {isAuthenticated && <Navbar user={user} />} */}
            <Route
              element={<Design user={user} isAuthenticated={isAuthenticated} />}
            >
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/loginSignup" element={<LoginSignUp />} />
              <Route path="/account" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
