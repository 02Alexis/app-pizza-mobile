import axios from "axios";

const baseURL = "http://localhost:4000";

export const getPizzas = async () => {
  return axios
    .get(`${baseURL}/pizzas`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error: pizzas", error);
    });
};

export const getPizzaById = async (id) => {
  return axios
    .get(`${baseURL}/pizzas/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error: pizzas", error);
    });
}
