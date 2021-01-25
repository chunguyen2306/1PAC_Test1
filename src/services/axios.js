import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://images-api.nasa.gov',
  timeout: 10000
})

export default axiosInstance;