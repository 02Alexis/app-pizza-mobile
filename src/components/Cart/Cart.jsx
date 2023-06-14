import React, { useEffect, useState } from 'react';
import { getShoppingcart } from '../../Services/shoppingcartService';
import './Cart.scss';

const Cart = () => {
  const [selectedPizzas, setSelectedPizzas] = useState([]);

  useEffect(() => {
    // Obtener las pizzas seleccionadas usando la función getPizzas del servicio
    getShoppingcart()
      .then((data) => {
        const filteredPizzas = data.filter((pizza) => pizza.quantity >= 1);
        setSelectedPizzas(filteredPizzas);
      })
      .catch((error) => {
        console.error('Error: pizzas', error);
      });
  }, []);


  return (
    <div className="cart-container">
      <h1>Carrito</h1>
      {selectedPizzas.map((pizza) => (
        <div key={pizza.id} className="pizza-card">
          <img src={pizza.img} alt={pizza.name} className="pizza-image" />
          <div className="pizza-details">
            <h3 className="pizza-name">{pizza.name}</h3>
            <p className="pizza-quantity">Cantidad: {pizza.quantity}</p>
            <p className="pizza-price">Precio: {pizza.price}</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Cart;
