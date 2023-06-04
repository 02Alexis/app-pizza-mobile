import React from "react";
import Login from "../pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Detail from "../pages/Detail/Detail";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import OrderSuccessful from "../pages/OrderSuccessful/OrderSuccessful";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { Layout } from "../components/Layout/Layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="Home" element={<Home />} />
          <Route path="Search" element={<Search />} />
          <Route path="Detail" element={<Detail />} />
          <Route path="ShoppingCart" element={<ShoppingCart />} />
          <Route path="OrderSuccessful" element={<OrderSuccessful />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;