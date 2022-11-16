import React, { useState } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faAdd,
  faArrowRightFromBracket,
  faEnvelope,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import avatar from "../../images/avatar.png";
import easylogo from "../../images/easylogo.png";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setisMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setisMenu(!isMenu);
    }
  };
  const logout = () => {
    setisMenu(false);
    localStorage.clear();
    dispatch({ type: actionType.SET_USER, user: null });
  };
  const changeNav = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <>
      <p className="nav-address">Gdańsk, Warneńska 8c/2 | 575 535 645</p>
      <nav
        className={
          navbar ? "navbar navbar-white" : " navbar navbar-transparent"
        }
      >
        <ul className="nav-buttons__holder">
          <li>MENU</li>
          <li>
            <Link to="/for-business">DLA FIRM </Link>
          </li>
          <li>CATERING</li>
        </ul>
        <Link to="/">
          {" "}
          <img src={easylogo} alt="logo easybar"></img>
        </Link>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="nav-contact__box"
        >
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="cart-count">
              <p>2</p>
            </div>
          </li>
          <li>
            <div>
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user ? user.photoURL : avatar}
                alt="avatar"
                className="avatar"
                onClick={login}
              />
              {isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="login-dropdown"
                >
                  {user && user.email === "jastrzembowskikamil@gmail.com" && (
                    <Link to={"/createItem"}>
                      <p>
                        <FontAwesomeIcon icon={faAdd} />
                        New Item
                      </p>
                    </Link>
                  )}
                  <p onClick={logout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    Logout
                  </p>
                </motion.div>
              )}
            </div>
          </li>
        </motion.ul>
      </nav>
    </>
  );
};

export default Nav;
