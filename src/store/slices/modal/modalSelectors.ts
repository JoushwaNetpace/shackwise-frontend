import { RootState } from "../../store";

export const selectShowInviteConnect = (
  state: RootState
): boolean | undefined => state.modal.showInviteConnect;

export const selectShowShareCompare = (state: RootState): boolean | undefined =>
  state.modal.showShareCompare;

export const selectShowHowItWorks = (state: RootState): boolean | undefined =>
  state.modal.showHowItWorks;

export const selectLoading = (state: RootState): boolean | undefined =>
  state.modal.loading;

export const selectError = (state: RootState): string | null | undefined =>
  state.modal.error;
