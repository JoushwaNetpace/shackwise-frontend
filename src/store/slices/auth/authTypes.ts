export interface IAuthUser {
  id: string;
  name: string;
  email: string;
}

export interface IAuthResponse {
  user: IAuthUser;
  token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface PasswordPayload {
  email?: string; // For reset-password or forgot-password
  oldPassword?: string; // For change-password
  newPassword: string;
}
