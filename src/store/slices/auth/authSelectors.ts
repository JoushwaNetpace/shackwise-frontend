import { AuthState } from "../../types/stateTypes";

// Existing individual selectors
export const selectAuthUser = (state: { auth: AuthState }) => state.auth.user;
export const selectAuthToken = (state: { auth: AuthState }) => state.auth.token;
export const selectAuthLoading = (state: { auth: AuthState }) =>
  state.auth.loading;
export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;
export const selectAuthSuccessMessage = (state: { auth: AuthState }) =>
  state.auth.successMessage;

// New combined selector
export const selectAuthData = (state: { auth: AuthState }) => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
});
