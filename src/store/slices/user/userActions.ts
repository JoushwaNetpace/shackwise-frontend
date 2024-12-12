// src/store/slices/userActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IIUserModelType } from "../../../types/types";
import { getRequest } from "../../../config/request";
import { ACCEPT_INVITE, FETCH_USER, SET_MODE } from "../../types/actionTypes";
import { ENDPOINTS } from "../../../constants/constants";
import { RateModeEnum } from "../../types/stateTypes";

type AcceptInvite = boolean;

// Async thunk for fetching the user
export const fetchUser = createAsyncThunk<IIUserModelType, void>(
  FETCH_USER,
  async () => {
    const response = await getRequest(ENDPOINTS.GET_USER_DETAIL); // Fetch the user from API
    return response.data; // Assuming the API returns the user data
  }
);
export const setAcceptInvite = createAsyncThunk<boolean, AcceptInvite>(
  ACCEPT_INVITE,
  async (payload) => payload
);
export const setRatingModeAction = createAsyncThunk<string, RateModeEnum>(
  SET_MODE,
  async (payload) => payload
);
