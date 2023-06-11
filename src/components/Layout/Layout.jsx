import React, { useContext } from "react";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import { searchParamsContext } from "../../Routes/AppRoutes";

export const Layout = () => {
  const { user } = useContext(searchParamsContext);

  let userSearch = {};
  if (user && Object.keys(user).length > 0) {
    userSearch = user;
  } else {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      userSearch = JSON.parse(storedUser);
    }
  }

  return (
    <>
      <div className="layout">
        <div className="info">
          <h1 className="info__title">Home</h1>
          <p className="info__greeting">
            ¡Qué bueno verte {userSearch.userName}!
          </p>
        </div>
        <figure className="layout__imagePerfil">
          <img src={userSearch.perfil} alt="Foto de perfil" />
        </figure>
      </div>
      <Outlet />
    </>
  );
};
