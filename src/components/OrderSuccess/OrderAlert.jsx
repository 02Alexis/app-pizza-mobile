import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./OrderAlert.scss";
import { searchParamsContext } from "../../Routes/AppRoutes";

const OrderAlert = () => {
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

  const gifUrl =
    "https://cdn.dribbble.com/users/282075/screenshots/4756095/media/c040a598a798352b85b88c5e89af9a47.gif"; // URL del gif en Internet

  return (
    <div className="order-alert">
      <img src={gifUrl} alt="Green checkmark" className="order-alert__gif" />
      <h2 className="order-alert__title">Tu orden está en proceso</h2>
      <p className="order-alert__text">
        Te avisaremos cuando llegue un repartidor
      </p>
      <Link to={`/Home/${userSearch.userName}`}>
        <button className="order-alert__button">Aceptar</button>
      </Link>
    </div>
  );
};

export default OrderAlert;
