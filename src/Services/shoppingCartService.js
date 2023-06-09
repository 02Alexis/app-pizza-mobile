import axios from 'axios';

const baseURL = 'http://localhost:4000';

export const getShoppingcart = () => {
    return axios.get(`${baseURL}/shoppingCart`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error: shoppingcart', error);
      });
};

export const addToCart = (pizza) => {
    return axios.post(`${baseURL}/shoppingCart`, pizza)
      .catch(error => {
        console.error('Error:', error);
      });
};
  
export const removeFromCart = (pizza) => {
    return axios.delete(`${baseURL}/shoppingCart/${pizza.id}`)
      .catch(error => {
        console.error('Error:', error);
      });
};


//Ejemplo de como usar el post y el remove

// import React, { useState } from 'react';
// import { addToCart, removeFromCart } from './services/cartService';

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCartHandler = (pizza) => {
//     addToCart(pizza);
//     setCartItems([...cartItems, pizza]);
//   };

//   const removeFromCartHandler = (pizza) => {
//     removeFromCart(pizza);
//     const updatedCartItems = cartItems.filter((item) => item.id !== pizza.id);
//     setCartItems(updatedCartItems);
//   };

//   return (
//     <div>
//       <h1>Pizzas</h1>
//       <h2>Carrito</h2>
//       {cartItems.length === 0 ? (
//         <p>El carrito está vacío</p>
//       ) : (
//         <ul>
//           {cartItems.map((pizza) => (
//             <li key={pizza.id}>
//               {pizza.nombre} - {pizza.precio}
//               <button onClick={() => removeFromCartHandler(pizza)}>
//                 Eliminar
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}

//       <h2>Pizzas Disponibles</h2>
//       {/* Renderizar la lista de pizzas disponibles */}
//     </div>
//   );
// };

// export default App;
