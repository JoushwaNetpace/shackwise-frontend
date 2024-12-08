// src/store/types/stateTypes.ts

import { IIUserModelType } from "../../types/types";
import { IAuthUser } from "../slices/auth/authTypes";

export interface UserState {
  user: IIUserModelType | null; // Single user model
  loading: boolean; // Loading state
  error: string | null; // Error message
}

// Combine all state interfaces into a RootState interface
export interface RootState {
  user: UserState;
}

export interface AuthState {
  user: IAuthUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}
