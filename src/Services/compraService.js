import axios from 'axios';

const baseURL = 'http://localhost:4000';

export const getCompra = () => {
    return axios.get(`${baseURL}/compra`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error: compra', error);
      });
};

