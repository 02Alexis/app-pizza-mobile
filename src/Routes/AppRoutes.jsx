import React, { createContext, useState } from "react";
import Login from "../pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Detail from "../pages/Detail/Detail";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import OrderSuccessful from "../pages/OrderSuccessful/OrderSuccessful";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { Layout } from "../components/Layout/Layout";

export const searchParamsContext = createContext({});

const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [filters, setFilters] = useState({});

  return (
    <BrowserRouter>
      <searchParamsContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          username,
          setUsername,
          filters,
          setFilters
        }}
      >
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="Home/:userName" element={<Home />}></Route>
            <Route path="Search" element={<Search />}></Route>
            <Route path="Detail" element={<Detail />}></Route>
            <Route path="ShoppingCart" element={<ShoppingCart />}></Route>
            <Route path="OrderSuccessful" element={<OrderSuccessful />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </searchParamsContext.Provider>
    </BrowserRouter>
  );
};

export default AppRoutes;
