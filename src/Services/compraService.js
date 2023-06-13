import axios from 'axios';

const baseURL =
  "https://minibackend-app-pizza-production.up.railway.app";

export const getCompra = () => {
    return axios.get(`${baseURL}/compra`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error: compra', error);
      });
};

