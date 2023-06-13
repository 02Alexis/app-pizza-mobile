import React, { useContext, useState } from "react";
import "./FooterDetail.scss";
import { searchParamsContext } from "../../Routes/AppRoutes";
import { getShoppingcart } from "../../Services/shoppingcartService";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const baseURL = "https://minibackend-app-pizza-production.up.railway.app";

const FooterDetail = () => {
  const { pizzaSelectedDetail } = useContext(searchParamsContext);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const handleShoppingCart = () => {
    navigate(`/ShoppingCart`);
  };

  const handleIncrement = () => {
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);
    }
  };

  const handleAddToCart = async () => {
    try {
      const response = await getShoppingcart();
      const pizzasInCart = response;
      const pizzaExists = pizzasInCart.some(
        (pizza) => pizza.id === pizzaSelectedDetail.id
      );

      if (pizzaExists) {
        // La pizza ya está en el carrito, realizar solicitud PUT para actualizar la cantidad
        const updatedPizza = {
          ...pizzaSelectedDetail,
          quantity: quantity,
        };

        const putPromise = axios.put(
          `${baseURL}/shoppingcart/${pizzaSelectedDetail.id}`,
          updatedPizza
        );

        // Muestra el Sweet Alert mientras se realiza la solicitud POST en segundo plano
        Swal.fire({
          title: "Processing...",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        await putPromise; // Espera a que se complete la solicitud PUT

        Swal.fire(
          "Good job!",
          `Has actualizado la cantidad de ${pizzaSelectedDetail.name} en el carrito, ahora son ${quantity} unidades.`,
          "success"
        );
      } else {
        const updatedPizza = {
          ...pizzaSelectedDetail,
          quantity: quantity,
        };
        // La pizza no está en el carrito, realizar solicitud POST para añadirla
        const postPromise = axios.post(`${baseURL}/shoppingcart`, updatedPizza);

        // Muestra el Sweet Alert mientras se realiza la solicitud POST en segundo plano
        Swal.fire({
          title: "Processing...",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        await postPromise; // Espera a que se complete la solicitud POST

        Swal.fire(
          "Good job!",
          `Has añadiddo ${quantity} ${pizzaSelectedDetail.name} al carrito.`,
          "success"
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <footer className="footerDetail">
      <div className="footerDetail__counter">
        <span onClick={handleDecrement}>-</span>
        <span>{quantity}</span>
        <span onClick={handleIncrement}>+</span>
      </div>
      <div className="footerDetail__cart">
        <button className="buttonCart" onClick={handleAddToCart}>
          <span className="material-symbols-outlined buttonCart__iconCart">
            shopping_cart
          </span>
        </button>
        <button className="buttonPay" onClick={handleShoppingCart}>
          Pagar
        </button>
      </div>
    </footer>
  );
};

export default FooterDetail;
