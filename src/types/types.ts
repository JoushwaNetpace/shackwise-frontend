export interface IPriorityOption {
  label: string;
  placeHolder: string;
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
