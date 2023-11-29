import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstant";
import axios from "axios";

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    // const { data } = await axios.post(
    //   `https://glivobackendnew.onrender.com/api/v1/login`,
    //   { email, password },
    //   config
    // );
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_DOMAIN_DEV}login`,
      { email, password },
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    // const { data } = await axios.post(
    //   `https://glivobackendnew.onrender.com/api/v1/register`,
    //   userData,
    //   config
    // );
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_DOMAIN_DEV}register`,
      userData,
      config
    );

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    // const { data } = await axios.get(`https://glivobackendnew.onrender.com/api/v1/me`, {
    //   withCredentials: true,
    // });
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_DOMAIN_DEV}me`,
      {
        withCredentials: true,
      }
    );

    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// Logout User
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`${import.meta.env.VITE_API_DOMAIN_DEV}logout`, {
      withCredentials: true,
    });
    // await axios.get(`https://glivobackendnew.onrender.com/api/v1/logout`, { withCredentials:true });

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
