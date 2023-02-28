import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://amplycms.com.br/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  console.log(config.headers.Authorization)
  return config;
});

export default instance;
