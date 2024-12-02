export const ENDPOINTS = {
  // AUTH
  LOGIN: "/auth/login",
  REGISTER: "/auth/register/user",
  VERIFY_EMAIL: "/auth/verify-email",
  RESEND_VERIFICATION_EMAIL: "/auth/resend-verify-email",
  CHANGE_PASSWORD: "/auth/change-password",
  RESET_PASSWORD: "/auth/reset-password",
  FORGOT_PASSWORD: "/auth/forgot-password",
  GET_USER_DETAIL: "/auth/user",
  LOGOUT: "/auth/logout",
};

export const ROLE_ENUM = {
  HOME_BUYER: "HOME_BUYER",
  SUPER_ADMIN: "SUPER_ADMIN",
  HOME_AGENT: "HOME_AGENT",
} as const;
