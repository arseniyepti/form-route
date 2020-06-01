import axios from "axios";
import { showModal } from "../heplers/helpers";

export const axiosInstanceAuth = axios.create({
  baseURL: "https://conduit.productionready.io/api",
  validateStatus: function (status) {
    if (status === 401) {
      console.log(8787);
      showModal(true);
    }
    console.log(status);
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
    Promise.reject(err);
  }
);
