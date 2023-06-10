import axios from 'axios';

const baseURL = 'http://localhost:4000';


export const getPizzas = () => {
  return axios.get(`${baseURL}/pizzas`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error: pizzas', error);
    });
};


  