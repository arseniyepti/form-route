import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://conduit.productionready.io/api",
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  },
});

export const axiosInstanceAuth = axios.create({
  baseURL: "https://conduit.productionready.io/api",
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  },
});

axiosInstanceAuth.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    if (token) {
      request.headers.Authorization = `Token ${token}`;
    }
    return request;
  },
  (err) => Promise.reject(err)
);
