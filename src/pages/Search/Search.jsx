import React, { useEffect, useState } from "react";
import "./Search.scss";
import { FormularioSearch } from "../../components/FormularioSearch/FormularioSearch";
import iconPizza from "../../assets/icon/icon-pizza-line.svg";
import FooterSearch from "../../components/FooterSearch/FooterSearch";
import { getPizzas } from "../../Services/getPizzas";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [pizzas, setPizzas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [initialSearch, setInitialSearch] = useState("");
  const [filteredPizzas, setFilteredPizzas] = useState([]);

  const handleNewPizza = (pizza) => {
    setSearchParams({ pizza: pizza.pizzaName });
  };

  useEffect(() => {
    const fetchPizzas = async () => {
      const arrayPizzas = await getPizzas();
      if (!pizzas.length) {
        setPizzas(arrayPizzas);
      }
    };
    fetchPizzas();

    if (pizzas && pizzas.length && searchParams?.get("pizza")) {
      const filteredPizzas = pizzas.filter((pizza) =>
        pizza.name.toLowerCase().includes(searchParams.get("pizza"))
      );
      setFilteredPizzas(filteredPizzas);
    }

    if (!searchParams?.get("pizza")) {
      setInitialSearch("");
    }
  }, [pizzas, searchParams]);

  return (
    <div className="searchPage">
      <FormularioSearch
        pizzaName={initialSearch}
        handlePizza={handleNewPizza}
      />
      <section className="containerPizza">
        <figure className="containerPizza__figure">
          <img src={iconPizza} alt="Ícono de pizza" />
        </figure>
        {filteredPizzas.length ? (
          <ul className="containerPizza__list">
            {filteredPizzas.map((pizza) => (
              <li key={pizza.id} className="containerPizza__list__item">
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Busca la pizza que más te gusta.</p>
        )}
      </section>
      <FooterSearch />
    </div>
  );
}

export default Search;
