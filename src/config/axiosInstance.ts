// src/api/axiosInstance.ts

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { getTokenFromCookie } from "../utils/CookieUtils";

// Define a type for your API responses if needed
interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Make sure to set this in your .env file
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // You can modify the request config here, e.g., add authorization tokens
    const token = getTokenFromCookie(); // Example token retrieval

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    // Handle the response data
    return response.data; // Modify this as per your API response structure
  },
  (error) => {
    // Handle response errors
    const { response } = error;
    if (response) {
      // The request was made and the server responded with a status code
      // console.error("Error Response:", response.data);
      // console.error("Error Status:", response.status);
    } else {
      // The request was made but no response was received
      // console.error("Error Message:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
