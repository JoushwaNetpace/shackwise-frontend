import { createAsyncThunk } from "@reduxjs/toolkit";

import { postRequest } from "../../../config/request";
import {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  CHANGE_PASSWORD,
  RESET_PASSWORD,
} from "../../types/actionTypes";
import {
  IAuthResponse,
  LoginPayload,
  PasswordPayload,
  RegisterPayload,
} from "./authTypes";
import { ENDPOINTS } from "../../../constants/constants";

// Async thunk for login
export const login = createAsyncThunk<IAuthResponse, LoginPayload>(
  LOGIN,
  async (payload) => {
    const response = await postRequest(ENDPOINTS.LOGIN, payload);
    return response.data;
  }
);

// Async thunk for register
export const register = createAsyncThunk<IAuthResponse, RegisterPayload>(
  REGISTER,
  async (payload) => {
    const response = await postRequest(ENDPOINTS.REGISTER, payload);
    return response.data;
  }
);

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
