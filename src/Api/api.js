import axios from "axios";

const API_URL = "https://api.green-api.com";

export async function getStateInstance(idInstance, apiTokenInstance) {
  try {
    const response = await axios.get(`${API_URL}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function checkWhatsapp(idInstance, apiTokenInstance, phoneNumber) {
  try {
    const response = await axios.post(`${API_URL}/waInstance${idInstance}/checkWhatsapp/${apiTokenInstance}`, {
      phoneNumber,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function receiveNotification(idInstance, apiTokenInstance) {
  try {
    const response = await axios.get(`${API_URL}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteNotification(idInstance, apiTokenInstance, notificationId) {
  try {
    const response = await axios.delete(
      `${API_URL}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${notificationId}`
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function sendMessage(idInstance, apiTokenInstance, chatId, message) {
  try {
    const response = await axios.post(`${API_URL}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
      chatId,
      message,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
