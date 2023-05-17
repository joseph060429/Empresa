import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:4000/",
  withCredentials: false,
  headers: {
    'Authorization': localStorage.getItem('token') ? localStorage.getItem('token') : null,
    //"Content-Type": "application/json",
  },
});

// axios.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) config.headers.Authorization = token;
//       return config;
    
//   },(error) => {
//     return Promise.reject(error);
// });

export default apiClient;
