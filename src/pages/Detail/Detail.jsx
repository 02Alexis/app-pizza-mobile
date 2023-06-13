import React, { useContext, useEffect } from "react";
import { searchParamsContext } from "../../Routes/AppRoutes";
import { getPizzaById } from "../../Services/pizzasService";
import FooterDetail from "../../components/FooterDetail/FooterDetail";
import "./Detail.scss";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { idSelectedPizza, pizzaSelectedDetail, setPizzaSelectedDetail, user } =
    useContext(searchParamsContext);

  let userSearch = {};
  if (user && Object.keys(user).length > 0) {
    userSearch = user;
  } else {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      userSearch = JSON.parse(storedUser);
    }
  }

  const navigate = useNavigate();

  const handleHome = () => {
    navigate(`/Home/${userSearch.userName}`);
  };

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

    if (pizzaIdSelected !== pizzaSelectedDetail.id) {
      fetchPizza();
    }
  }, [pizzaIdSelected, pizzaSelectedDetail, setPizzaSelectedDetail]);

  return (
    <div className="detailPage">
      <figure className="figurePizza">
        <img src={pizzaSelectedDetail.img} alt={pizzaSelectedDetail.name} />
        <div className="containerAllPizzas">
          <span
            className="material-symbols-outlined containerAllPizzas__arrow"
            onClick={handleHome}
          >
            arrow_back_ios
          </span>
          <p className="containerAllPizzas__title" onClick={handleHome}>
            Todas las pizzas
          </p>
        </div>
      </figure>
      <section className="detailsPizza">
        <h1 className="detailsPizza__name">{pizzaSelectedDetail.name}</h1>
        <div className="containerPriceAndReviews">
          <span className="containerPriceAndReviews__price">
            {`$ ${pizzaSelectedDetail.price}`}
          </span>
          <span className="containerPriceAndReviews__reviews">{`★ ${pizzaSelectedDetail.previews} Reviews`}</span>
        </div>
        <h4 className="detailsPizza__description">Descripción</h4>
        <p className="detailsPizza__description--text">
          {pizzaSelectedDetail.description}
        </p>
        {pizzaSelectedDetail?.recomendation?.length ? (
          pizzaSelectedDetail.recomendation.map((recomendation) => (
            <div key={recomendation.id} className="containerRecomendations">
              <figure className="containerRecomendations__figure">
                <img src={recomendation.imgU} alt="" />
              </figure>
              <div className="containerRecomendations__info">
                <div className="recomendationsInfo">
                  <h6 className="recomendationsInfo__userName">
                    {recomendation.nameU}
                  </h6>
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
      <FooterDetail className="footer" />
    </div>
  );
};

export default Detail;
