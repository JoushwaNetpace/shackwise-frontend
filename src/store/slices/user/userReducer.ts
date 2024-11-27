// src/store/slices/userReducer.ts
import { createSlice } from '@reduxjs/toolkit';
import { fetchUser  } from './userActions'; // Import the fetchUser  action
import { UserState } from '../../types/stateTypes';

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clear:User  (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser .pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser .fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Update the user state with the fetched user data
      })
      .addCase(fetchUser .rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch user';
      });
  },
});

// Export the reducer
export default userSlice.reducer;

// Export actions
export const { clearUser  } = userSlice.actions;