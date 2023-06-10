import React, { useEffect, useState } from 'react';
import { getPizzas } from "../../../Services/pizzasService";
import './Cards.scss';
import { Link } from 'react-router-dom';


const Cards = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizzas().then((data) => {
      setPizzas(data);
    });
  }, []);

  const handlePizzaClick = (pizzaId) => {
    sessionStorage.setItem('SelectedPizza', pizzaId);
  };

  return (
    <div className="cards-container">
      <h1>Pizzas</h1>
      <div className="cards">
        {pizzas.map((pizza) => (
          <Link key={pizza.id} to={`/Detail`} onClick={() => handlePizzaClick(pizza.id)}>
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
