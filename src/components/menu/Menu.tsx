import React, { useEffect, useState } from "react";
import "./menu.scss";
import { categories } from "../../utils/data";
import { IoFastFood } from "react-icons/io5";
import { motion } from "framer-motion";
import RowContainer from "../main/RowContainer";
import { useStateValue } from "../../context/StateProvider";
const Menu = () => {
  const [filter, setfilter] = useState("recommended");
  const [{ menu, dispatch }] = useStateValue();
  return (
    <section>
      <div className="flex-box">
        <p className="menu-title">Nasze menu:</p>
        <div className="filter-box">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.6 }}
                key={category.id}
                className={`${
                  filter === category.urlParamName
                    ? "category-box active"
                    : "category-box"
                }`}
                onClick={() => setfilter(category.urlParamName)}
              >
                <div className="icon">
                  <IoFastFood />
                </div>
                <p>{category.name}</p>
              </motion.div>
            ))}
        </div>
        <div className="content-box">
          <RowContainer
            flag={false}
            scrollValue={0}
            data={menu?.filter((n: any) => n.category == filter)}
/>
        </div>
      </div>
    </section>
  );
};

export default Menu;
