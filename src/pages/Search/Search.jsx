import React, { useEffect, useState } from "react";
import "./Search.scss";
import { FormularioSearch } from "../../components/FormularioSearch/FormularioSearch";
import iconPizza from "../../assets/icon/icon-pizza-line.svg";

function Search() {
  const [pizzaName, setPizzaName] = useState("");

  const handleNewPizza = (pizza) => {
    setPizzaName(pizza.pizzaName);
  };

  useEffect(() => {
    console.log(pizzaName);
  }, [pizzaName]);

  return (
    <div className="searchPage">
      <FormularioSearch pizzaName={""} handlePizza={handleNewPizza} />
      <section className="containerPizza">
        <figure className="containerPizza__figure">
          <img src={iconPizza} alt="Ícono de pizza" />
        </figure>
        <p>Busca la pizza que más te gusta.</p>
      </section>
      <span className="material-symbols-outlined iconHome">
        import_contacts
      </span>
    </div>
  );
}

export default Search;
