import axios from 'axios';

const baseURL = 'http://localhost:4000';


export const getShoppingcart = () => {
  return axios.get(`${baseURL}/shoppingcart`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error: shoppingcart', error);
    });
};


  