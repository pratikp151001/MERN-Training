import axios from "axios";
export const axiosRequest = axios.create({
  baseUrl: "https://jsonplaceholder.typicode.com/"
});