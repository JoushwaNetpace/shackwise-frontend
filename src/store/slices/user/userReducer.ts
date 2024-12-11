import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, setAcceptInvite } from "./userActions"; // Import the fetchUser action
import { UserState } from "../../types/stateTypes";

// Initial state
const initialState: UserState = {
  user: null,
  loading: false,
  acceptInvite: false,
  error: null,
};

// Create user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser(state) {
      // Fixed incorrect `clear:User` syntax
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        // console.log("fetch user filled>>", action.payload);
        state.loading = false;
        state.user = action.payload; // Update the user state with the fetched user data
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user";
      });
    builder
      .addCase(setAcceptInvite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setAcceptInvite.fulfilled, (state, action) => {
        state.loading = false;
        state.acceptInvite = action.payload; // Update the user state with the fetched user data
      })
      .addCase(setAcceptInvite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to set accept invite";
      });
  },
});

// Export the reducer
export default userSlice.reducer;

// Export actions
export const { clearUser } = userSlice.actions; // Fixed incorrect spacing
