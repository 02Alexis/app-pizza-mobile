import React from "react";
import Error404 from "../../assets/img/404.gif"

const NotFoundPage = () => {
  return (
    <>
    <h1>Error 404</h1>
    <img src={Error404} alt="error404" />
    <h1>Estas perdido colega</h1>
    <button>regresa</button>
    </>
  );
};

export default NotFoundPage;
