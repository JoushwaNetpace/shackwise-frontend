import { createSlice } from "@reduxjs/toolkit";
import { getPropertyDetail, searchProperty } from "./propertyActions"; // Import the fetchUser action
import { PropertyState } from "../../types/stateTypes";

// Initial state
const initialState: PropertyState = {
  propertyList: [],
  propertyDetail: null,
  loading: false,
  error: null,
};

// Create user slice
const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchProperty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProperty.fulfilled, (state, action) => {
        console.log("Fulfilled payload:", action.payload);
        state.loading = false;
        state.propertyList = action.payload.data;
      })
      .addCase(searchProperty.rejected, (state, action) => {
        console.error("Thunk rejected:", action.error);

        state.loading = false;
        state.error = action.error.message || "Failed to set priority";
      });
    builder
      .addCase(getPropertyDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPropertyDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.propertyDetail = action.payload.data;
      })
      .addCase(getPropertyDetail.rejected, (state, action) => {
        console.error("Thunk rejected:", action.error);

        state.loading = false;
        state.error = action.error.message || "Failed to set priority";
      });
  },
});

// Export the reducer
export default propertySlice.reducer;
