import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductDetails.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductDetails, clearError } from "../../actions/productAction";
import { useAlert } from "react-alert";
import Loader from "../Layout/Loader/Loader";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.user);
  const { loading, error, item } = useSelector((state) => state.productDetails);
  const { id } = useParams();
  const alert = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isAuthenticated) {
      alert.error("Login to Access The Feature!!");
      navigate("/");
      dispatch(clearError());
    }
    dispatch(getProductDetails(id));
  }, [id]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="productDetails">
          <div className="wrapper">
            <div className="left">
              <div className="video">
                <iframe
                  width="100%"
                  height="100%"
                  src={item.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="content">
                <div className="title">
                  <h1>{item.name}</h1>
                </div>
                <hr style={{width:"98%", marginLeft:"1rem"}}/>
                <div className="desc">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            <div className="right">
              {product &&
                product.map((item, i) => (
                  <div className="products">
                    <Link to={`/product/${item._id}`}>
                      <img src={item.images.url} alt="" />
                      <p>{item.name}</p>
                      <small>{item.category}</small>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
