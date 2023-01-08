import axios from "axios";

const baseURL = "";

const axiosClient = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
  },
});
axiosClient.interceptors.request.use((config) => config);
export default axiosClient;
