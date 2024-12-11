import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  INVITE_CONNECT_MODAL,
  SHARE_COMPARE_MODAL,
  HOW_IT_WORKS_MODAL,
} from "../../types/actionTypes";

// Define the payload type for modals (boolean)
type ModalPayload = boolean;

// Thunks with proper type definitions
export const changeInviteConnectModalAction = createAsyncThunk<
  boolean,
  ModalPayload
>(INVITE_CONNECT_MODAL, async (payload) => {
  return payload;
});

export const changeShareCompareModalAction = createAsyncThunk<
  boolean,
  ModalPayload
>(SHARE_COMPARE_MODAL, async (payload) => {
  return payload;
});

export const changeHowItWorksModalAction = createAsyncThunk<
  boolean,
  ModalPayload
>(HOW_IT_WORKS_MODAL, async (payload) => {
  return payload;
});
