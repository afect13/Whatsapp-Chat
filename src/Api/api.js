import axios from "axios";

const API_URL = "https://api.green-api.com";

export async function getStateInstance(idInstance, apiTokenInstance) {
  try {
    const response = await axios.get(`${API_URL}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
