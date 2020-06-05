import axios from "axios";
import { showModal } from "../heplers/helpers";

export const axiosInstanceAuth = axios.create({
  baseURL: "https://conduit.productionready.io/api",
  validateStatus: function (status) {
    if (status === 401) {
      showModal(true);
    }
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
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstanceAuth.interceptors.response.use(
  function (response) {
    return response;
  },
  (err) => {
    if (err.response.status === 401) {
      localStorage.setItem("token", "");
      localStorage.setItem("username", "");
      window.location.reload();
    }
    return Promise.reject(err);
  }
);
