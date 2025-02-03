import axios from "axios";

const url = "http://localhost:5000";

export const registerUser = async (userData) => {
  const response = await axios.post(`${url}/api/users/register`, userData);
  return response.data;
};

export const loginUser = async (loginData) => {
  const response = await axios.post(`${url}/api/users/login`, loginData);
  return response.data;
};
