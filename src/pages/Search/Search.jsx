import React, { useContext, useEffect, useState } from "react";
import "./Search.scss";
import { FormularioSearch } from "../../components/FormSearch/FormSearch";
import iconPizza from "../../assets/icon/icon-pizza-line.svg";
import FooterSearch from "../../components/FooterSearch/FooterSearch";
import { getPizzas } from "../../Services/getPizzas";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { searchParamsContext } from "../../Routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Search() {
  const [pizzas, setPizzas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [initialSearch, setInitialSearch] = useState("");
  const [filteredPizzas, setFilteredPizzas] = useState([]);

  const { setIdSelectedPizza } = useContext(searchParamsContext);
  const navigate = useNavigate();

  const handleNewPizza = (pizza) => {
    if (pizza.pizzaName) {
      setSearchParams({ pizza: pizza.pizzaName });
    } else {
      setSearchParams({});
      console.log("No hay pizza");
    }
  };

  const handlePizzaClick = (pizzaId) => {
    setIdSelectedPizza(pizzaId);
    sessionStorage.setItem("pizzaId", JSON.stringify(pizzaId));
    Swal.fire(
      "Good job!",
      "Vamos a ver el detalle de la pizza que escogiste!",
      "success"
    ).then(() => {
      navigate(`/Detail/${pizzaId}`);
    });
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
    } else {
      setFilteredPizzas([]);
    }

    if (!searchParams?.get("pizza")) {
      setInitialSearch("");
    }
  }, [pizzas, searchParams]);

  return (
    <div className="searchPage">
      <Layout />
      <FormularioSearch
        pizzaName={initialSearch}
        handlePizza={handleNewPizza}
      />
      {filteredPizzas.length ? (
        <div className="search-cards-container">
          <h1>
            {filteredPizzas.length === 1
              ? "1 Resultado"
              : `${filteredPizzas.length} Resultados`}
          </h1>
          <div className="search-cards">
            {filteredPizzas.map((pizza) => (
              <Link
                key={pizza.id}
                /* to={`/Detail/${pizza.id}`} */
                onClick={() => handlePizzaClick(pizza.id)}
              >
                <div
                  className="search-pizza-card"
                  style={{ backgroundImage: `url(${pizza.img})` }}
                >
                  <div className="search-card-body">
                    <h2 className="search-card-title">{pizza.name}</h2>
                    <span className="search-card-price">{pizza.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <section className="containerPizza">
          <figure className="containerPizza__figure">
            <img src={iconPizza} alt="Ícono de pizza" />
          </figure>
          <p>Busca la pizza que más te gusta.</p>
        </section>
      )}
      <FooterSearch />
    </div>
  );
}

export default Search;
