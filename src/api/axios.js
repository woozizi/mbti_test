import axios from "axios";

export const jsonApi = axios.create({
  baseURL: "http://localhost:4000",
});

export const serverApi = axios.create({
  baseURL: "https://www.nbcamp-react-auth.link",
});
