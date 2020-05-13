import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://conduit.productionready.io/api",
  withCredentials: true,
});
export default axiosInstance;
