import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import Nav from "./components/nav/Nav";
import CreateContainer from "./components/createcontainer/CreateContainer";
import CartContainer from "./components/CartContainer";
import Business from "./components/bussiness/Business";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Nav />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/for-business" element={<Business />} />
        <Route path="/createItem" element={<CreateContainer />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      {/* {cartShow && ( */}
        <CartContainer />
      {/* )} */}
    </AnimatePresence>
  );
}

export default App;
