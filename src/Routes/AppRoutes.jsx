import React, { createContext, useState } from "react";
import Login from "../pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Detail from "../pages/Detail/Detail";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import OrderSuccessful from "../pages/OrderSuccessful/OrderSuccessful";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const searchParamsContext = createContext({});

const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  const [filters, setFilters] = useState({});
  const [idSelectedPizza, setIdSelectedPizza] = useState(0);
  const [pizzaSelectedDetail, setPizzaSelectedDetail] = useState({});

  return (
    <BrowserRouter>
      <searchParamsContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          username,
          setUsername,
          filters,
          setFilters,
          user,
          setUser,
          idSelectedPizza,
          setIdSelectedPizza,
          pizzaSelectedDetail,
          setPizzaSelectedDetail,
        }}
      >
        <Routes>
          <Route path={"/app-pizza-mobile"}>
            <Route index element={<Login />} />
            <Route path="Home/:userName" element={<Home />} />
            <Route path="Search" element={<Search />} />
            <Route path="Detail/:pizzaId" element={<Detail />} />
            <Route path="ShoppingCart" element={<ShoppingCart />} />
            <Route path="OrderSuccessful" element={<OrderSuccessful />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </searchParamsContext.Provider>
    </BrowserRouter>
  );
};

export default AppRoutes;
