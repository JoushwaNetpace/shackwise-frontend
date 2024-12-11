import axiosInstance from "./axiosInstance"; // Default Axios instance
import { repApiAxiosInstance } from "./repApiAxiosInstance";

// Helper function to determine the correct Axios instance
const getAxiosInstance = (type?: string) =>
  type === "reapi" ? repApiAxiosInstance : axiosInstance;

// Function to handle GET requests
export const getRequest = async (
  endpoint: string,
  type?: string
): Promise<any> => {
  try {
    const instance = getAxiosInstance(type);
    const response = await instance.get(endpoint);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Function to handle POST requests
export const postRequest = async (
  endpoint: string,
  data: any,
  type?: string
): Promise<any> => {
  try {
    const instance = getAxiosInstance(type);
    const response = await instance.post(endpoint, data);
    return response;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Function to handle PUT requests
export const putRequest = async (
  endpoint: string,
  data: any,
  type?: string
): Promise<any> => {
  try {
    const instance = getAxiosInstance(type);
    const response = await instance.put(endpoint, data);
    return response;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

// Function to handle PATCH requests
export const patchRequest = async (
  endpoint: string,
  data: any,
  type?: string
): Promise<any> => {
  try {
    const instance = getAxiosInstance(type);
    const response = await instance.patch(endpoint, data);
    return response;
  } catch (error) {
    console.error("Error patching data:", error);
    throw error;
  }
};

// Function to handle DELETE requests
export const deleteRequest = async (
  endpoint: string,
  type?: string
): Promise<any> => {
  try {
    const instance = getAxiosInstance(type);
    const response = await instance.delete(endpoint);
    return response;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
