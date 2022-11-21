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
    if (window.scrollY >= 30) {
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
          navbar ? "desktop navbar-white" : " desktop navbar-transparent"
        }
      >
        <ul className="nav-buttons__holder">
          <li>
            {" "}
            <Link to="/for-business">MENU</Link>
          </li>
          <li>
            <Link to="/for-business">DLA FIRM </Link>
          </li>
          <li>
            {" "}
            <Link to="/for-business">CATERING </Link>
          </li>
        </ul>
        <Link to="/">
          {" "}
          <img src={easylogo} alt="logo easybar" className="nav-logo"></img>
        </Link>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="nav-contact__box"
        >
          <motion.li whileTap={{ scale: 0.1 }}>
            <FontAwesomeIcon icon={faEnvelope} />
          </motion.li>
          <motion.li whileTap={{ scale: 0.6 }}>
            <FontAwesomeIcon icon={faFacebook} />
          </motion.li>

          <motion.li whileTap={{ scale: 0.6 }}>
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="cart-count">
              <p>2</p>
            </div>
          </motion.li>
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
                      <p onClick={() => setisMenu(false)}>
                        <FontAwesomeIcon icon={faAdd} />
                        Dodaj produkt
                      </p>
                    </Link>
                  )}

                  <p onClick={logout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    Wyloguj
                  </p>
                </motion.div>
              )}
            </div>
          </li>
        </motion.ul>
      </nav>
      <nav
        className={navbar ? "mobile navbar-white" : "mobile navbar-transparent"}
      >
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
        </motion.ul>
        <Link to="/">
          <img src={easylogo} alt="logo easybar" className="nav-logo"></img>
        </Link>
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
                  <p onClick={() => setisMenu(false)}>
                    <FontAwesomeIcon icon={faAdd} />
                    Dodaj produkt{" "}
                  </p>
                </Link>
              )}
              <p>Menu</p>
              <p>
                <Link to="/for-business">Dla firm</Link>
              </p>
              <p>Catering</p>
              <p onClick={logout}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                Wyloguj
              </p>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
