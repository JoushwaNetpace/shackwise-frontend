// src/store/types/stateTypes.ts

import { IIUserModelType } from "../../types/types";
import { IAuthUser } from "../slices/auth/authTypes";

export enum RateModeEnum {
  COMPARE = "COMPARE",
  SHARE = "SHARE",
}

export interface UserState {
  user: IIUserModelType | null; // Single user model
  loading: boolean; // Loading state
  acceptInvite?: boolean; // Loading state
  error: string | null; // Error message
  userPriority?: PriorityPayload | null; // Priority payload
  rateMode?: RateModeEnum | ""; // New rate mode property with enum values
}
export interface PriorityState {
  loading: boolean; // Loading state
  error: string | null; // Error message
  userPriority?: PriorityPayload | null; // Error message
}
export interface PropertyState {
  loading: boolean; // Loading state
  propertyDetail: any | undefined; // Loading state
  error: string | null; // Error message
  propertyList?: [] | null; // Error message
}

// Combine all state interfaces into a RootState interface
export interface RootState {
  user: UserState;
}

export interface AuthState {
  user: IAuthUser | null;
  token: string | null;
  refreshToken: string | null;
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
  kitchenDesign: PriorityField;
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

export interface modalState {
  showInviteConnect?: boolean;
  showShareCompare?: boolean;
  showHowItWorks?: boolean;
  loading?: boolean;
  error?: string | null;
}

export interface PropertySearchPayload {
  latitude?: number;
  longitude?: number;
  address?: string;
  mls_active?: boolean;
  size?: boolean;
  searchType?: "A" | "C" | "N" | "S" | "Z" | "G" | "T"; // A = full address, C = city, etc.
}
export interface GetPropertyDetailPayload {
  id?: string;
  address?: string;
  exact_match?: boolean;
}

export interface GenericPayloadResponse {
  data: any; // Replace `any` with a specific type if known, e.g., `Property[]`
}
