import { createSlice } from "@reduxjs/toolkit";
import {
  createUserPriority,
  getUserPriority,
  updateUserPriority,
} from "./priorityActions"; // Import the fetchUser action
import { PriorityState } from "../../types/stateTypes";

// Initial state
const initialState: PriorityState = {
  userPriority: null,
  loading: false,
  error: null,
};

// Create user slice
const prioritySlice = createSlice({
  name: "priority",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserPriority.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserPriority.fulfilled, (state, action) => {
        console.log("Fulfilled payload:", action.payload.data);
        state.loading = false;
        state.userPriority = action.payload.data;
      })
      .addCase(createUserPriority.rejected, (state, action) => {
        console.error("Thunk rejected:", action.error);

        state.loading = false;
        state.error = action.error.message || "Failed to set priority";
      });
    builder
      .addCase(updateUserPriority.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserPriority.fulfilled, (state, action) => {
        console.log("Fulfilled payload:", action.payload.data);
        state.loading = false;
        state.userPriority = action.payload.data;
      })
      .addCase(updateUserPriority.rejected, (state, action) => {
        console.error("Thunk rejected:", action.error);

        state.loading = false;
        state.error = action.error.message || "Failed to set priority";
      });
    builder
      .addCase(getUserPriority.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserPriority.fulfilled, (state, action) => {
        console.log("get user Fulfilled payload:", action.payload);
        state.loading = false;
        state.userPriority = action.payload.data;
      })
      .addCase(getUserPriority.rejected, (state, action) => {
        console.error("Thunk rejected:", action.error);

        state.loading = false;
        state.error = action.error.message || "Failed to set priority";
      });
  },
});

// Export the reducer
export default prioritySlice.reducer;
