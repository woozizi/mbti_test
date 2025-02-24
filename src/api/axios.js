import axios from "axios";

export const jsonApi = axios.create({
  baseURL: "https://abounding-dandelion-roadway.glitch.me",
});

export const serverApi = axios.create({
  baseURL: "https://www.nbcamp-react-auth.link",
});
