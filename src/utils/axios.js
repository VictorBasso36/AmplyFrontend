import axios from 'axios';
import Cookies from 'js-cookie';

const csrftoken = Cookies.get('XSRF-TOKEN');
axios.defaults.headers.common['X-XSRF-TOKEN'] = csrftoken;

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  // Adiciona o token CSRF ao cabeçalho
  const csrfToken = Cookies.get('XSRF-TOKEN');
  if (csrfToken) {
    config.headers['X-XSRF-TOKEN'] = csrfToken;
  }
  return config;
});

export async function request(method, path, data) {
  try {
    const response = await api[method](path, data);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
}
