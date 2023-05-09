import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const api = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
});

export default api;
