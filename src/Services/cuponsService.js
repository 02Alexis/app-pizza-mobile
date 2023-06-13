import axios from "axios";

const baseURL =
  "https://minibackend-app-pizza-production.up.railway.app";

export const getCupons = async () => {
  return axios
    .get(`${baseURL}/cupons`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error: cupons", error);
    });
};
