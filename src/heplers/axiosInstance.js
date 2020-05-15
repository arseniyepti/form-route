import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://conduit.productionready.io/api",
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  },
});
export default axiosInstance;
