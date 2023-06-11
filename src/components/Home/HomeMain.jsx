import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cards from "./Cards/Cards";

const HomeMain = () => {
  const navigate = useNavigate();

  const handleSearchPage = () => {
    navigate("/Search");
  };

  return (
    <div>
      <Cards />
      <Link to="/ShoppingCart">
        <button>Ir al carrito</button>
      </Link>
      <button onClick={handleSearchPage}>Buscar</button>
    </div>
  );
};

export default HomeMain;
