import axios from "axios";

const baseURL = "https://minibackend-app-pizza-production.up.railway.app";

export const getShoppingcart = async () => {
  return axios
    .get(`${baseURL}/shoppingcart`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error: shoppingcart", error);
    });
};
