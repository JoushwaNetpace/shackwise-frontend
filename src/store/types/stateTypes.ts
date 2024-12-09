// src/store/types/stateTypes.ts

import { IIUserModelType } from "../../types/types";
import { IAuthUser } from "../slices/auth/authTypes";

export interface UserState {
  user: IIUserModelType | null; // Single user model
  loading: boolean; // Loading state
  error: string | null; // Error message
  userPriority?: PriorityPayload | null; // Error message
}
export interface PriorityState {
  loading: boolean; // Loading state
  error: string | null; // Error message
  userPriority?: PriorityPayload | null; // Error message
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

interface PriorityField {
  rating: number;
  note?: string;
}

export interface PriorityPayload {
  userId: string;
  affordability: PriorityField;
  listPMarketV: PriorityField;
  location: PriorityField;
  kitchenSize: PriorityField;
  masterBedroom: PriorityField;
  masterBathroom: PriorityField;
  secondaryBathroom: PriorityField;
  secondaryBedroom: PriorityField;
  livingEntertainment: PriorityField;
  basement: PriorityField;
  outdoorYardSpace: PriorityField;
  parkingGarage: PriorityField;
  overallCondition: PriorityField;
  priorityId?: string;
}
