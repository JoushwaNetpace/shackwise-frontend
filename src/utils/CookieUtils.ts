import Cookies from "js-cookie";

// Function to store the token in the cookie
export const storeTokenInCookie = (token: string) => {
  Cookies.set("authToken", token, {
    expires: 1, // Expires in 1 day
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "Strict", // Prevents CSRF attacks
  });
};

export const getTokenFromCookie = () => {
  return Cookies.get("authToken"); // Returns the token stored in the cookie, or undefined if not found
};
