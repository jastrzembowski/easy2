import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

export default function CartItem({ item, flag, setFlag, key }) {
  let items = [];

  // const cartDispatch = () => {
  //   dispatch({
  //     type: actionType.SET_CART_ITEMS,
  //     cartItems: items,
  //   });
  //   localStorage.setItem("cartItems", JSON.stringify(items));
  // };

  //  const removeItemFromCart = (cartItems, cartItemToRemove) => {
  //     const existingCartItem = cartItems.find(
  //       (cartItem) => cartItem.id === cartItemToRemove.id
  //     );
  //     if (existingCartItem.quantity === 1) {
  //       cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  //       setFlag(flag + 1);
  //       cartDispatch();
  //     }
  //     cartItems.map((cartItem) =>
  //       cartItem.id === cartItemToRemove.id
  //         ? { ...cartItem, quantity: cartItem.quantity - 1 }
  //         : cartItem

  //     );
  //     setFlag(flag + 1);
  //     cartDispatch();
  //   };
  // useEffect(() => {
  //   items = cartItems;
  // }, [items]);

  return (
    <div className="item">
      <img src={item?.imageUrl} alt={`${Date.now() + item.title}`} />
      <div className="text">
        <p className="name">{item?.title}</p>
        <p className="price">{item?.price} zł</p>
      </div>

      <div className="button">
        <motion.div
          whileTap={{ scale: 0.75 }}
          // onClick={() => removeItemFromCart}
        >
          <BiMinus />
        </motion.div>
      </div>
    </div>
  );
}
