import axios from "axios";

export const jsonApi = axios.create({
  baseURL: import.meta.env.VITE_JSON_SERVER_URL,
});

export const serverApi = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});
