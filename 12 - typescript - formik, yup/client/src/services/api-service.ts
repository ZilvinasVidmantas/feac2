import axios from 'axios';

export const ApiService = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'cors': 'no-cors',
    'Access-Control-Allow-Origin': '*'
  }
});

ApiService.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
})

