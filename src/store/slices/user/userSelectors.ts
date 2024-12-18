// src/store/slices/userSelectors.ts

import { UserState } from "../../types/stateTypes";

export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectUserNotifications = (state: { user: UserState }) =>
  state.user.notifications;
export const selectAcceptInvite = (state: { user: UserState }) =>
  state.user.acceptInvite;
export const selectRatingMode = (state: { user: UserState }) =>
  state.user.rateMode;
export const selectLoading = (state: { user: UserState }) => state.user.loading;
export const selectError = (state: { user: UserState }) => state.user.error;
