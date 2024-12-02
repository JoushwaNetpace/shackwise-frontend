import { createAsyncThunk } from "@reduxjs/toolkit";

import { postRequest } from "../../../config/request";
import {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  CHANGE_PASSWORD,
  RESET_PASSWORD,
  VERIFY_EMAIL,
  LOGOUT,
} from "../../types/actionTypes";
import {
  IAuthResponse,
  LoginPayload,
  PasswordPayload,
  RegisterPayload,
} from "./authTypes";
import { ENDPOINTS } from "../../../constants/constants";
export const login = createAsyncThunk<IAuthResponse, LoginPayload>(
  LOGIN,
  async (payload) => {
    try {
      const response = await postRequest(ENDPOINTS.LOGIN, payload);
      return response;
    } catch (error: any) {
      // Directly throw the error
      throw new Error(error.response?.data?.message || "Login failed");
    }
  }
);

// Async thunk for register
export const register = createAsyncThunk<IAuthResponse, RegisterPayload>(
  REGISTER,
  async (payload) => {
    try {
      const response = await postRequest(ENDPOINTS.REGISTER, payload);
      return response;
    } catch (error: any) {
      // Directly throw the error
      throw new Error(error.response?.data?.message || "Register failed");
    }
  }
);
// Async thunk for logout
// Async thunk for logout
export const logout = createAsyncThunk(LOGOUT, async () => {
  try {
    // Send a request to logout
    await postRequest(ENDPOINTS.LOGOUT, {}); // Adjust with the correct API endpoint and method
  } catch (error: any) {
    // Directly throw the error
    throw new Error(error.response?.data?.message || "Logout failed");
  }
});

// Async thunk for forgot password
export const forgotPassword = createAsyncThunk<string, { email: string }>(
  FORGOT_PASSWORD,
  async (payload) => {
    const response = await postRequest(ENDPOINTS.FORGOT_PASSWORD, payload);
    return response.data.message; // Assuming the API returns a success message
  }
);

// Async thunk for change password
export const changePassword = createAsyncThunk<string, PasswordPayload>(
  CHANGE_PASSWORD,
  async (payload) => {
    const response = await postRequest(ENDPOINTS.CHANGE_PASSWORD, payload);
    return response.data.message;
  }
);

// Async thunk for reset password
export const resetPassword = createAsyncThunk<string, PasswordPayload>(
  RESET_PASSWORD,
  async (payload) => {
    const response = await postRequest(ENDPOINTS.RESET_PASSWORD, payload);
    return response.data.message;
  }
);
// Async thunk for verify email
export const verifyEmailAction = createAsyncThunk<string, { token: string }>(
  VERIFY_EMAIL,
  async (payload) => {
    const response = await postRequest(ENDPOINTS.VERIFY_EMAIL, payload);
    return response;
  }
);
