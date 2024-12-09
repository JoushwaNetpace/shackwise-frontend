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

  // PRIORITY
  CREATE_PRIORITY: "/priority",
  GET_USER_PRIORITY: "/priority/user-priority",
  UPDATE_USER_PRIORITY: "/priority/",
};
export const REAPI_ENDPOINTS = {
  AUTOCOMPLETE: "/AutoComplete",
};

export const ROLE_ENUM = {
  HOME_BUYER: "HOME_BUYER",
  SUPER_ADMIN: "SUPER_ADMIN",
  HOME_AGENT: "HOME_AGENT",
} as const;
