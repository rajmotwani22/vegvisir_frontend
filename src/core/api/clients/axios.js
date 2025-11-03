/**
=========================================================
* Core API Client - Axios Configuration
=========================================================
* Centralized axios instance with interceptors for authentication,
* error handling, and request/response transformation.
*/

import axios from "axios";
import { API_CONFIG, STORAGE_KEYS, ROUTES } from "core/config";

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - Add auth token to requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle common errors
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - clear token and redirect to login
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      window.location.href = ROUTES.LOGIN;
    }
    return Promise.reject(error);
  }
);

export default apiClient;
