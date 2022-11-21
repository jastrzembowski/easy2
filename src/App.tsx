import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import {AnimatePresence} from "framer-motion"
import "./App.css";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import CreateContainer from "./components/createcontainer/CreateContainer"
import Business from "./components/bussiness/Business";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Nav />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/for-business" element={<Business />} />
        <Route path="/createItem" element={<CreateContainer/>} />
      </Routes>
      </AnimatePresence>
  );
}

export default App;
