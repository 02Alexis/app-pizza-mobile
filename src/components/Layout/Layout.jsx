import React, { useEffect, useState } from "react";
import "./Layout.scss";
import { getAministrador } from "../../Services/getAdministrador";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [administrador, setAdministrador] = useState({});
  const id = 2;

  useEffect(() => {
    const fetchAdministrador = async () => {
      const administradorLog = await getAministrador(id);
      if (!administrador.length) {
        setAdministrador(administradorLog);
      }
    };
    fetchAdministrador();
  }, [administrador.length]);

  return (
    <>
      <div className="layout">
        <div className="info">
          <h1 className="info__title">Home</h1>
          <p className="info__greeting">
            ¡Qué bueno verte {administrador.userName}!
          </p>
        </div>
        <figure className="layout__imagePerfil">
          <img src={administrador.perfil} alt="Foto de perfil" />
        </figure>
      </div>
      <Outlet />
    </>
  );
};
