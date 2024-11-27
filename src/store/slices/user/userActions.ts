// src/store/slices/userActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IIUserModelType } from "../../../types/types";
import { getRequest } from "../../../config/request";
import { FETCH_USER } from "../../types/actionTypes";

// Async thunk for fetching the user
export const fetchUser = createAsyncThunk<IIUserModelType, void>(
  FETCH_USER,
  async () => {
    const response = await getRequest("/user"); // Fetch the user from API
    return response.data; // Assuming the API returns the user data
  }
);
