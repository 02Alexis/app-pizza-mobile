import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards/Cards';

const HomeMain = () => {
  return (
    <div>
      <Cards />
      <Link to="/ShoppingCart">
        <button>Ir al carrito</button>
      </Link>
    </div>
  );
};

export default HomeMain;
