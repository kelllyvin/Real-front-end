import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://tori-backend-kev.onrender.com/api",
});
