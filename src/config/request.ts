import axiosInstance from "./axiosInstance"; // Import the Axios instance

// Function to handle GET requests
export const getRequest = async (endpoint: string): Promise<any> => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response; // Return the full response for more details if needed
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Function to handle POST requests
export const postRequest = async (
  endpoint: string,
  data: any
): Promise<any> => {
  const response = await axiosInstance.post(endpoint, data);
  return response; // Return the full response for more details if needed
};
// Function to handle PUT requests
export const putRequest = async (endpoint: string, data: any): Promise<any> => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response; // Return the full response for more details if needed
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

// Function to handle PATCH requests
export const patchRequest = async (
  endpoint: string,
  data: any
): Promise<any> => {
  try {
    const response = await axiosInstance.patch(endpoint, data);
    return response; // Return the full response for more details if needed
  } catch (error) {
    console.error("Error patching data:", error);
    throw error;
  }
};

// Function to handle DELETE requests
export const deleteRequest = async (endpoint: string): Promise<any> => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response; // Return the full response for more details if needed
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
