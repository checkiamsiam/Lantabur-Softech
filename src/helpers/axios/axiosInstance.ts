import axios from "axios";
import { envConfig } from "../config/envConfig";

const axiosInstance = axios.create({
  baseURL: envConfig.backendUrl,
});
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 100000;
