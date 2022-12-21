import React, { useState, useEffect } from "react";
import "./cartcontainer.scss";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";

import { actionType } from "../context/reducer";
import CartItem from "./CartItem";

export default function CartContainer() {
  const [tot, setTot] = useState(null);
  const [flag, setFlag] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
      className="cart-container"
    >
      <div className="cart-box">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace />
        </motion.div>
        <p className="title">Koszyk</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="clear-button"
          // onClick={clearCart}
        >
          Wyczyść <RiRefreshFill />
        </motion.p>
      </div>

      <div className="cart-bottom">
        <div className="cart-items">
          {/* {cartItems &&
            cartItems.map((item) => (
              <CartItem
                key={`${Date.now() + item?.id}`}
                item={item}
                setFlag={setFlag}
                flag={flag}
              />
            ))} */}
        </div>

        <div className="total">
          <div className="total-box">
            <p>Podsumowanie</p>
            <p>{tot} zł</p>
          </div>
          <div className="total-box">
            <p>Dowóz</p>
            <p>8zł</p>
          </div>
          <div className="line"></div>
          <div className="total-box">
            <p>Łącznie do zapłaty</p>
            <p>{tot + 8}zł</p>
          </div>
          {/* {user ? (
            <motion.button whileTap={{ scale: 0.8 }} type="button">
              Złóż zamówienie
            </motion.button>
          ) : (
            <motion.button whileTap={{ scale: 0.8 }} type="button">
              Zaloguj się aby zamówić{" "}
            </motion.button>
          )} */}
        </div>
      </div>
    </motion.div>
  );
}
