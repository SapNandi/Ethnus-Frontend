import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        // transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="productCard"
      >
        <img
          className="productImage"
          src={product.images.url}
          alt={product.name}
        />
        <p>{product.name}</p>
        <div>
          <span className="productCardSpan">{product.category}</span>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
