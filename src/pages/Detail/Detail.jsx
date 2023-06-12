import React, { useContext, useEffect, useState } from "react";
import { searchParamsContext } from "../../Routes/AppRoutes";
import { getPizzaById } from "../../Services/pizzasService";
import FooterDetail from "../../components/FooterDetail/FooterDetail";
import "./Detail.scss";

const Detail = () => {
  const { idSelectedPizza } = useContext(searchParamsContext);
  const [pizzaSelectedDetail, setPizzaSelectedDetail] = useState({});

  let pizzaIdSelected = 0;

  if (idSelectedPizza && idSelectedPizza > 0) {
    pizzaIdSelected = idSelectedPizza;
  } else {
    const storedPizzaId = sessionStorage.getItem("pizzaId");
    if (storedPizzaId) {
      pizzaIdSelected = JSON.parse(storedPizzaId);
    }
  }

  useEffect(() => {
    const fetchPizza = async () => {
      const pizzaSelected = await getPizzaById(pizzaIdSelected);
      if (pizzaSelected && pizzaSelected !== pizzaSelectedDetail) {
        setPizzaSelectedDetail(pizzaSelected);
      }
    };
    fetchPizza();
  }, [pizzaIdSelected, pizzaSelectedDetail]);

  return (
    <>
      <figure>
        <img src={pizzaSelectedDetail.img} alt={pizzaSelectedDetail.name} />
        <div>
          <span className="material-symbols-outlined arrow">
            arrow_back_ios
          </span>
          <p>Todas las pizzas</p>
        </div>
      </figure>
      <section>
        <h1>{pizzaSelectedDetail.name}</h1>
        <div>
          <span className="card-price">{pizzaSelectedDetail.price}</span>
          <span>★ {pizzaSelectedDetail.previews}</span>
        </div>
        <h4>Descripción</h4>
        <p>{pizzaSelectedDetail.description}</p>
        {pizzaSelectedDetail?.recomendation?.length ? (
          pizzaSelectedDetail.recomendation.map((recomendation) => (
            <div key={recomendation.id}>
              <figure>
                <img src={recomendation.imgU} alt="" />
              </figure>
              <div>
                <div>
                  <h6>{recomendation.nameU}</h6>
                  <p>4d ago</p>
                </div>
                <span>★ ★ ★ ★</span>
                <p>{recomendation.recomendationU}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay recomendaciones</p>
        )}
      </section>
      <FooterDetail />
    </>
  );
};

export default Detail;
