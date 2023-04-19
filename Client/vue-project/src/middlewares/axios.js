import axios from 'axios'


const apiClient = axios.create({
baseURL: 'https://localhost:4000/',
withCredentials: false,
headers: {
    // 'Authorization': token,
    Accept: 'application/json', 
    "Content-Type": 'application/json'

}

})

export default apiClient;