import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const AUTH_TOKEN = import.meta.env.VITE_API_TOKEN;
const TIMEOUT_MS = parseInt(import.meta.env.VITE_REQUEST_TIMEOUT_MS) || 500;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT_MS,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

export default api;
