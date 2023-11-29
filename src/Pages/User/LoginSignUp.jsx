import React, { useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../Components/Layout/Loader/Loader";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FaceIcon from "@mui/icons-material/Face";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
// import Cookies from "universal-cookie";
import { login, clearError, register } from "../../actions/userAction";
import { useAlert } from "react-alert";
import locationData from "../../locationData.json";
import Resizer from "react-image-file-resizer";

const LoginSignUp = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  // const cookies = new Cookies();

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loacalUser, setLocalUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const { name, email, password, phone } = loacalUser;

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
    alert.success("Logged In Successfully!!");
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    // console.log(countryName, stateName);

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("phone", phone);

    dispatch(register(myForm));
    alert.success("Registerd Successfully!!");

  };

  const registerDataChange = (e) => {
    setLocalUser({ ...loacalUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      alert.info(error);
      dispatch(clearError());
    }

    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, alert, isAuthenticated, navigate]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="LoginSignUpContainer">
          <div className="LoginSignUpBox">
            <div>
              <div className="login_signUp_toggle">
                <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
              </div>
              <button ref={switcherTab}></button>
            </div>
            <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
              <div className="loginEmail">
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="loginPassword">
                <LockOpenIcon />
                <input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  required
                  name="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <div id="eyeContainer" onClick={handleShow}>
                  {show ? (
                    <AiFillEye
                      style={{
                        fontSize: "1.8rem",
                        color: "rgba(0, 0, 0, 0.623)",
                      }}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      style={{
                        fontSize: "1.8rem",
                        color: "rgba(0, 0, 0, 0.623)",
                      }}
                    />
                  )}
                </div>
              </div>
              <Link
                to="/password/forgot"
                style={{ fontFamily: "Roboto", fontWeight: 600 }}
              >
                Forget Password ?
              </Link>
              <input type="submit" value="Login" className="loginBtn" />
            </form>
            <form
              className="signUpForm"
              ref={registerTab}
              encType="multipart/form-data"
              onSubmit={registerSubmit}
            >
              <div className="signUpName">
                <FaceIcon />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  value={name}
                  onChange={registerDataChange}
                />
              </div>
              <div className="signUpEmail">
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={registerDataChange}
                />
              </div>
              <div className="signUpEmail">
                <LocalPhoneOutlinedIcon/>
                <input
                  type="phone"
                  placeholder="Phone"
                  required
                  name="phone"
                  value={phone}
                  onChange={registerDataChange}
                />
              </div>
              <div className="signUpPassword">
                <LockOpenIcon />
                <input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  required
                  name="password"
                  value={password}
                  onChange={registerDataChange}
                />
                <div id="eyeContainer" onClick={handleShow}>
                  {show ? (
                    <AiFillEye
                      style={{
                        fontSize: "1.8rem",
                        color: "rgba(0, 0, 0, 0.623)",
                      }}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      style={{
                        fontSize: "1.8rem",
                        color: "rgba(0, 0, 0, 0.623)",
                      }}
                    />
                  )}
                </div>
              </div>
              <input type="submit" value="Register" className="signUpBtn" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignUp;
