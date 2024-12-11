// src/store/slices/priorityActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_PROPERTY_DETAIL,
  SEARCH_PROPERTY_LIST,
} from "../../types/actionTypes";
import {
  GenericPayloadResponse,
  GetPropertyDetailPayload,
  PropertySearchPayload,
} from "../../types/stateTypes";
import { postRequest } from "../../../config/request";

import { REAPI_ENDPOINTS } from "../../../constants/constants";

export const searchProperty = createAsyncThunk<
  GenericPayloadResponse,
  PropertySearchPayload
>(SEARCH_PROPERTY_LIST, async (payload) => {
  const response = await postRequest(
    REAPI_ENDPOINTS.PROPERTY_SEARCH,
    {
      ...payload,
    },
    "reapi"
  );
  return response.data; // Assuming the API returns the user data
});
export const getPropertyDetail = createAsyncThunk<
  GenericPayloadResponse,
  GetPropertyDetailPayload
>(GET_PROPERTY_DETAIL, async (payload) => {
  const response = await postRequest(
    REAPI_ENDPOINTS.PROPERTY_DETAIL,
    {
      ...payload,
    },
    "reapi"
  );
  return response.data; // Assuming the API returns the user data
});
