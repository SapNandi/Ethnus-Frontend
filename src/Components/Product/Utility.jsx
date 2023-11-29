import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./Utility.css";
import { Link } from "react-router-dom";

const Utility = ({ product }) => {
//   console.log(product.name);
  return (
    <>
      <div className="bannerWrapper">
        <div className="content">
          <div className="title">
            <h1>{product && product.name}</h1>
            <p>{product && product.description}</p>
            <Link to={`/product/${product._id}`} style={{textDecoration:"none"}}>
              <div className="bannerButton">
                <h2>Show More</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utility;
