import axios from "axios";

const baseURL = "http://localhost:4000";

export const getCupons = async () => {
  return axios
    .get(`${baseURL}/cupons`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error: cupons", error);
    });
};
