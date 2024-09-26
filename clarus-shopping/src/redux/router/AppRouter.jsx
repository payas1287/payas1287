import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../../components/Navbar";
import Home from "../../pages/Home/";
import Basket from "../../pages/Basket"

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
