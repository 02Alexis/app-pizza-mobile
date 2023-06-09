import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { getPizzas } from "../../../Services/pizzasService";
import './Cards.scss';

const Cards = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizzas().then((data) => {
      setPizzas(data);
    });
  }, []);

  return (
    <div className="cards-container">
      <h1>Pizzas</h1>
      <div className="cards">
        {pizzas.map((pizza) => (
          <Card key={pizza.id} className="pizza-card">
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <div className="price-button-container">
                <Button variant="primary">{pizza.price}</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
