import axios from "axios";
import { getLocalStore } from "./index";

var axiosInstance = axios.create({});
<<<<<<< HEAD
axiosInstance.defaults.baseURL = "https://api.athqinshealthcare.com/api"
=======

axiosInstance.defaults.baseURL = "https://api.athqinshealthcare.com/api"
// axiosInstance.defaults.baseURL = "http://localhost:7006/api"

>>>>>>> be212c79528baa4b5e56b014513b5b4a016458ff
let token = getLocalStore('accessToken');


axiosInstance.interceptors.request.use(
  function (config) {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
      return config;

  },
  function (error) {
     return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  }
);
export default axiosInstance;

