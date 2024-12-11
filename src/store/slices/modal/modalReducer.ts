import { createSlice } from "@reduxjs/toolkit";
import { modalState } from "../../types/stateTypes";
import {
  changeHowItWorksModalAction,
  changeInviteConnectModalAction,
  changeShareCompareModalAction,
} from "./modalActions";

// Initial state
const initialState: modalState = {
  showInviteConnect: false,
  showShareCompare: false,
  showHowItWorks: false,
  loading: false,
  error: null,
};

// Create modal slice
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Helper to handle pending state
    const setLoadingState = (state: modalState) => {
      state.loading = true;
      state.error = null;
    };

    // Helper to handle rejected state
    const setErrorState = (state: modalState, action: any) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    };

    builder
      // Invite Connect Modal
      .addCase(changeInviteConnectModalAction.pending, setLoadingState)
      .addCase(changeInviteConnectModalAction.fulfilled, (state, action) => {
        state.loading = false;
        state.showInviteConnect = action.payload;
      })
      .addCase(changeInviteConnectModalAction.rejected, setErrorState)

      // Share Compare Modal
      .addCase(changeShareCompareModalAction.pending, setLoadingState)
      .addCase(changeShareCompareModalAction.fulfilled, (state, action) => {
        state.loading = false;
        state.showShareCompare = action.payload;
      })
      .addCase(changeShareCompareModalAction.rejected, setErrorState)

      // How It Works Modal
      .addCase(changeHowItWorksModalAction.pending, setLoadingState)
      .addCase(changeHowItWorksModalAction.fulfilled, (state, action) => {
        state.loading = false;
        state.showHowItWorks = action.payload;
      })
      .addCase(changeHowItWorksModalAction.rejected, setErrorState);
  },
});

// Export the reducer
export default modalSlice.reducer;
