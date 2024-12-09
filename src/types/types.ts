export interface IPriorityOption {
  label: string;
  placeHolder: string;
  name?: string;
  mode?: "priority" | "rate"; // Union of string literals
}

export interface typeErrorResponse {
  success: boolean;
  message: string;
  data: object;
}
export interface IProperty {
  _id: string;
  price: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft_area: number;
  description: string;
  images: string[];
}

export interface IPropertyRating {
  percentage: 0 | 25 | 50 | 75 | 100;
  userPic: string;
  title?: string;
}
export interface ProgressBarItemProps extends IPropertyRating {
  // Add any additional props specific to ProgressBarItem here if needed
}
export interface IPropertyDetail {
  price: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  cars: number;
  sqftArea: number;
  description: string;
  imageUrl: string;
  compareMode?: boolean;
}

export const ROLE_ENUM = {
  HOME_BUYER: "HOME_BUYER",
  SUPER_ADMIN: "SUPER_ADMIN",
  HOME_AGENT: "HOME_AGENT",
} as const;

export type RoleType = keyof typeof ROLE_ENUM;
// export interface ISocialAccountInfo {
//   accountType: SocialAccountType;
//   accessToken: string;
//   tokenExpiry: Date;
//   refreshToken?: string;
//   accountID: string;
// }

export interface ILocation {
  type: string; // default is "Point"
  coordinates: number[];
}

export interface IIUserModelType {
  email: string;
  avatar?: string; // URL
  name: string;
  username: string;
  isActive?: boolean;
  role: RoleType;
  phoneNo?: string;
  // socialAccount?: ISocialAccountInfo[];
  updatedAt?: Date;
  createdAt?: Date;
  address?: string;
  location: ILocation;
  otp?: string | null;
  password: string;
  passwordResetCode?: string | null;
  isVerified?: boolean;
}

export interface ITextInput {
  name?: string;

  value: string; // The value of the input
  title: string; // The value of the input
  placeHolder: string; // The value of the input
  setValue: (value: string) => void; // Function to update the input value
  type?: string; // Type of the input (e.g., "text", "password")
  isPasswordField?: boolean; // Boolean to determine if it's a password field
  isNumericField?: boolean; // Boolean to determine if it's a password field
  maxLength?: number; // Boolean to determine if it's a password field
  inputMode?: string; // Boolean to determine if it's a password field
  error?: boolean; // Boolean to indicate if there's an error
  setError?: (error: boolean) => void; // Function to set the error state
  isPasswordVisible?: boolean; // Boolean to indicate if there's an error
  setIsPasswordVisible?: (value: boolean) => void; // Function to set the error state
}
