// src/store/slices/userSelectors.ts

export const selectUserPriority = (state: any) => state.priority.userPriority;
export const selectLoading = (state: any) => state.priority.loading;
export const selectError = (state: any) => state.priority.error;
