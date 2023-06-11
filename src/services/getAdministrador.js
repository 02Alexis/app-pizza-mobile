import axios from "axios";
const API_FAKE = "http://localhost:4000/";
const endpointAdministradores = "administrators";

export const getAministrador = async (idAdministrador) => {
  try {
    const { data } = await axios.get(
      `${API_FAKE}${endpointAdministradores}?id=${idAdministrador}`
    );
    return data[0];
  } catch (error) {
    console.log(error);
    return {};
  }
};


