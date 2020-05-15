import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://conduit.productionready.io/api",
});
export default axiosInstance;
