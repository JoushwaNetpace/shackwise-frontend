import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { getTokenFromCookie } from "../utils/CookieUtils";

// Define a type for your API responses if needed
interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

// Create the default Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Base URL from environment variables
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor for axiosInstance
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => response.data,
  (error) => Promise.reject(error)
);

// Create the second Axios instance: repApiAxiosInstance
const repApiAxiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_REAL_ESTATE_API_URL, // Base URL for Real Estate API
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_REAL_ESTATE_API_KEY,
    "x-user-id": "UniqueUserIdentifier", // Dynamic or hardcoded as needed
  },
});

// // Example of making a POST request with repApiAxiosInstance
// async function fetchAutoComplete(searchQuery: string) {
//   try {
//     const response = await repApiAxiosInstance.post("/AutoComplete", {
//       search: searchQuery,
//     }, {
//       headers: {
//         "x-user-id": "UniqueUserIdentifier", // Dynamic or hardcoded as needed
//       },
//     });
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.error("Error fetching autocomplete:", error);
//     throw error;
//   }
// }

export { axiosInstance, repApiAxiosInstance };
