import React, { useEffect, useRef, useState } from "react";
import "./rowcontainer.scss";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/StateProvider";
import { getAllFoodItems } from "../../utils/firebaseFunctions";
import { actionType } from "../../context/reducer";

export default function RowContainer({ flag, data, scrollValue }) {
  const [{ cartItems, menu }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);
  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_MENU,
        menu: data,
      });
    });
  };

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };
  useEffect(() => {
    data === undefined && fetchData();
  }, []);

  useEffect(() => {
    addToCart();
  }, [items]);
  return (
    <div
      ref={rowContainer}
      className={`${flag ? "row-container main" : "row-container menu"}`}
    >
      {data && data.length > 0
        ? data.map((item) => (
            <div className="box" key={item.id}>
              <div className="item">
                <img src={item?.imageUrl} alt="325" />
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="add-to-cart"
                  onClick={() => setItems([...cartItems, item])}
                >
                  <MdShoppingBasket />
                </motion.div>
              </div>
              <div className="text-holder">
                <p className="title">{item?.title}</p>
                <p className="description">{item?.description}</p>
                <p className="price">{item?.price} zł</p>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}
