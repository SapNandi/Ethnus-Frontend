import axios from "axios";
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstant";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_PRODUCT_REQUEST,
    });
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_DOMAIN_DEV}getPodcast`
    );
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(
      `${import.meta.env.VITE_API_DOMAIN_DEV}podcastDetails/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
