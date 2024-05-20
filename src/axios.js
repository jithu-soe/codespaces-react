import axios from "axios";

const envBaseUrl = "https://frontend-assessment-server.onrender.com/api";

const instance = axios.create({
  baseURL: envBaseUrl,
});

export const getRequest = async (url, params = {}, responseType = "json") => {
  try {
    const response = await instance.get(url, { params, responseType });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const postRequest = async (url, data, options = {}) => {
  try {
    if (options.contentType) {
      instance.defaults.headers["Content-Type"] = options.contentType;
    }
    const response = await instance.post(url, data);
    instance.defaults.headers["Content-Type"] = "application/json";
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export default instance;
