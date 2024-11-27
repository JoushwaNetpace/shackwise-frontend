// src/store/types/stateTypes.ts

import { IIUserModelType } from "../../types/types";

export interface UserState {
  user: IIUserModelType | null; // Single user model
  loading: boolean; // Loading state
  error: string | null; // Error message
}

// Combine all state interfaces into a RootState interface
export interface RootState {
  user: UserState;
}
