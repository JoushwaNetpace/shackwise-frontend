import * as Yup from "yup";
import { ROLE_ENUM } from "./constants";

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  role: Yup.string()
    .oneOf(
      [ROLE_ENUM.HOME_BUYER, ROLE_ENUM.HOME_AGENT],
      "Role must be either HOME_BUYER or HOME_AGENT"
    )
    .required("Role is required"),
  phoneNo: Yup.string().length(11, "Phone Number must be 11 digits").nullable(),
  email: Yup.string()
    .email("Valid email is required")
    .required("Email is required"),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), undefined],
      "Password and Confirm Password must match"
    )
    .required("Confirm Password is required"),
});
export const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
