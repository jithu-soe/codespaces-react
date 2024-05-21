// import axios from "axios";

// const envBaseUrl = "https://frontend-assessment-server.onrender.com/api";

// const instance = axios.create({
//   baseURL: envBaseUrl,
// });

// export const getRequest = async (url, params = {}, responseType = "json") => {
//   try {
//     const response = await instance.get(url, { params, responseType });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Something went wrong");
//   }
// };

// export const postRequest = async (url, data, options = {}) => {
//   try {
//     if (options.contentType) {
//       instance.defaults.headers["Content-Type"] = options.contentType;
//     }
//     const response = await instance.post(url, data);
//     instance.defaults.headers["Content-Type"] = "application/json";
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Something went wrong");
//   }
// };

// export default instance;


import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = 'https://frontend-assessment-server.onrender.com/api';

// Function for making POST requests
export const postRequest = async (url, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${url}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error making post request');
  }
};
