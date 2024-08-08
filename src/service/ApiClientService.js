import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  // timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default apiClient;
