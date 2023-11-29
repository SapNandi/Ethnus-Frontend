import React from "react";
import { GrFacebook, GrLinkedin, GrInstagram, GrYoutube } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footContainer">
          <div className="sec aboutus">
            <h2>PODTUBE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              recusandae, quis voluptatum laboriosam animi possimus atque ad
              illum est pariatur!
            </p>
            <ul className="sci">
              <li>
                <a href="#">
                  <GrFacebook className="social" />
                </a>
              </li>
              <li>
                <a href="#">
                  <GrLinkedin className="social"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <GrInstagram className="social"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <GrYoutube className="social"/>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Support</h2>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Provacy Policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Watch</h2>
            <ul>
              <li>
                <a href="#">Podcast</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Stand Up</a>
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2>Contact Us</h2>
            <ul className="info">
              <li>
                <span>
                  <IoCall className="social"  />
                </span>
                <p>
                  <a href="tel:+12345678900">9876543210</a>{" "}
                </p>
              </li>
              <li>
                <span>
                  <HiOutlineMail className="social"  />
                </span>
                <p>
                  <a href="mailto:dummyemail@gmail.com">dummyemail@gmail.com</a>{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>Copyright © 2023 Podtube. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
