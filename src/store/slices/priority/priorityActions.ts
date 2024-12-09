// src/store/slices/priorityActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IIUserModelType } from "../../../types/types";
import { getRequest, patchRequest, postRequest } from "../../../config/request";
import {
  CREATE_PRIORITY,
  GET_USER_PRIORITY,
  UPDATE_USER_PRIORITY,
} from "../../types/actionTypes";
import { ENDPOINTS } from "../../../constants/constants";
import { PriorityPayload } from "../../types/stateTypes";

// Async thunk for creating user priority
export const createUserPriority = createAsyncThunk<
  IIUserModelType,
  PriorityPayload
>(CREATE_PRIORITY, async (payload) => {
  const response = await postRequest(ENDPOINTS.CREATE_PRIORITY, payload); // Fetch the user from API

  return response; // Assuming the API returns the user data
});
// Async thunk for creating user priority
export const updateUserPriority = createAsyncThunk<
  IIUserModelType,
  PriorityPayload
>(UPDATE_USER_PRIORITY, async (payload) => {
  const response = await patchRequest(
    ENDPOINTS.UPDATE_USER_PRIORITY + payload.priorityId,
    payload
  ); // Fetch the user from API

  return response; // Assuming the API returns the user data
});
// Async thunk for getting user priority
export const getUserPriority = createAsyncThunk<IIUserModelType, void>(
  GET_USER_PRIORITY,
  async () => {
    const response = await getRequest(ENDPOINTS.GET_USER_PRIORITY); // Fetch the user from API

    return response; // Assuming the API returns the user data
  }
);
