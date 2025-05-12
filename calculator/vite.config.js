import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const AUTH_TOKEN = import.meta.env.VITE_API_TOKEN;
const TIMEOUT_MS = parseInt(import.meta.env.VITE_REQUEST_TIMEOUT_MS);
const WINDOW_SIZE = parseInt(import.meta.env.VITE_WINDOW_SIZE);
const res = await axios.get(`${API_BASE_URL}/${numberType}`, {
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`
  },
  timeout: TIMEOUT_MS
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
