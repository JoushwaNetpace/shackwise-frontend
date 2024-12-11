import axios, { AxiosInstance } from "axios";

// Define a type for your API responses if needed

// Create the second Axios instance: repApiAxiosInstance
const repApiAxiosInstance: AxiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_ENV == "production"
      ? process.env.REACT_APP_REAL_ESTATE_API_URL
      : "https://cors-anywhere.herokuapp.com/" +
        process.env.REACT_APP_REAL_ESTATE_API_URL, // Base URL for Real Estate API
  // baseURL:  process.env.REACT_APP_REAL_ESTATE_API_URL, // Base URL for Real Estate API
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_REAL_ESTATE_API_KEY,
    // "x-user-id": "UniqueUserIdentifier", // Dynamic or hardcoded as needed
  },
});

export { repApiAxiosInstance };
