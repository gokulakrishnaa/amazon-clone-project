import axios from "axios";

const instance = axios.create({
  baseURL: "https://node-money-manager.herokuapp.com",
});

export default instance;
