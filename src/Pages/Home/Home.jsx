import React, { useEffect, useRef, useState } from "react";
import { getProducts } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import Carousel from "react-material-ui-carousel";
import "./Home.css";
import Loader from "../../Components/Layout/Loader/Loader";
import Utility from "../../Components/Product/Utility";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

function getWindowSize() {
  const { innerWidth } = window;
  return innerWidth;
}

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, product} = useSelector(
    (state) => state.products
  );
  const [windowSize, setWindowSize] = useState(getWindowSize());
  // const [windowSize, setWindowSize] = useState(getWindowSize());
  // const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    // console.log(user);
    dispatch(getProducts());
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="banner">
            <div className="bannerSlider">
              <Carousel
                // height="30rem"
                // height={windowSize > "500px" ? "30rem" : "20rem"}
                stopAutoPlayOnHover={true}
                animation="fade"
                className={
                  windowSize < "500px"
                    ? "carouselHeightResponsive"
                    : "carouselHeight"
                }
              >
                {product &&
                  product.map((item, i) => (
                    <div
                      className="bannerImage"
                      key={i}
                      style={{
                        backgroundImage: `linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.5%, #1A1A1A 100%), url(${
                          item.images && item.images.url
                        })`,
                      }}
                    >
                      <Utility product={item} />
                    </div>
                  ))}
              </Carousel>
              {/* <h1>{windowSize}</h1> */}
            </div>
          </div>
          <div className="container">
            <h2 className="homeHeading">Featured Podcasts</h2>
            <div className="cardHolder">
              <Swiper
                modules={[Navigation, Autoplay, Parallax]}
                breakpoints={{
                  320: { slidesPerView: 2, spaceBetween: 1 },
                  480: { slidesPerView: 2, spaceBetween: 2 },
                  768: { slidesPerView: 3, spaceBetween: 5 },
                  1024: { slidesPerView: 5, spaceBetween: 10 },
                }}
                parallax
                navigation
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                // navigation
              >
                {product &&
                  product.map((item) => (
                    <SwiperSlide key={item._id}>
                      <ProductCard key={item._id} product={item} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <div className="advertise">
              {/* <img src="/Ad2.jpg" alt="" /> */}
            </div>
            <h2 className="homeHeading">Trending Podcasts</h2>
            <div className="cardHolder">
              <Swiper
                modules={[Navigation, Autoplay, Parallax]}
                // spaceBetween={10}
                // slidesPerView={5}
                parallax
                navigation
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                breakpoints={{
                  320: { slidesPerView: 2, spaceBetween: 1 },
                  480: { slidesPerView: 2, spaceBetween: 2 },
                  768: { slidesPerView: 3, spaceBetween: 5 },
                  1024: { slidesPerView: 5, spaceBetween: 10 },
                }}
                // navigation
              >
                {product &&
                  product.map((item) => (
                    <SwiperSlide key={item._id}>
                      <ProductCard key={item._id} product={item} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
