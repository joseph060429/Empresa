import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:4000/",
  withCredentials: false,
  headers: {
    //  'Authorization': token,
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    
  },(error) => {
    return Promise.reject(error);
});

export default apiClient;
