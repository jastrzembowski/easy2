import React, { useEffect, useState } from "react";
import "./mainrecommended.scss";
import RowContainer from "./RowContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function MainRecommended() {

  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue]);
  return (
    <section>
      <div className="items-box">
        <p className="title">Polecamy:</p>
        <div className="buttons">
          <motion.div whileTap={{ scale: 0.75 }} onClick={() => setScrollValue(scrollValue<0? prevValue => prevValue - 200 : -200) }>
            <MdChevronLeft />
          </motion.div>
          <motion.div whileTap={{ scale: 0.75 }} onClick={() => setScrollValue(scrollValue>0?  prevValue => prevValue + 200 :200)}>
            <MdChevronRight />
          </motion.div>
        </div>
      </div>
      <RowContainer
      scrollValue={scrollValue}
        flag={true}
        // data={menu?.filter((n) => n.category === "recommended")}
      />
    </section>
  );
}
