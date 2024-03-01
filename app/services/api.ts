import axios from "axios";

const api = axios.create({
  baseURL: "https://personal-beta-b666c12c6edc.herokuapp.com/",
  // baseURL: "http://localhost:3001/",
});

export { api };