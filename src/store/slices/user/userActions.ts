// src/store/slices/userActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IIUserModelType } from "../../../types/types";
import { getRequest } from "../../../config/request";

// Async thunk for fetching the user
export const fetchUser = createAsyncThunk<IIUserModelType, void>(
  "user/fetchUser ",
  async () => {
    const response = await getRequest("/user"); // Fetch the user from API
    return response.data; // Assuming the API returns the user data
  }
);
