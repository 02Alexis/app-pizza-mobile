import React, { useContext, useEffect, useState } from "react";
import { getPizzas } from "../../../Services/pizzasService";
import "./Cards.scss";
import { Link } from "react-router-dom";
import { searchParamsContext } from "../../../Routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cards = () => {
  const { setIdSelectedPizza } = useContext(searchParamsContext);
  const [pizzas, setPizzas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPizzas().then((data) => {
      setPizzas(data);
    });
  }, []);

  const handlePizzaClick = (pizzaId) => {
    setIdSelectedPizza(pizzaId);
    sessionStorage.setItem("pizzaId", JSON.stringify(pizzaId));
    Swal.fire(
      "Good job!",
      "Vamos a ver el detalle de la pizza que escogiste.!",
      "success"
    ).then(() => {
      navigate(`/Detail/${pizzaId}`);
    });
  };

  return (
    <div className="cards-container">
      <div className="cards">
        {pizzas.map((pizza) => (
          <Link
            key={pizza.id}
            /*             to={`/Detail/${pizza.id}`} */
            onClick={() => handlePizzaClick(pizza.id)}
          >
            <div
              className="pizza-card"
              style={{ backgroundImage: `url(${pizza.img})` }}
            >
              <div className="card-body">
                <h2 className="card-title">{pizza.name}</h2>
                <span className="card-price">{pizza.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
