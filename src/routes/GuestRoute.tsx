import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../store/slices/auth/authSelectors";

const GuestRoute = ({ children }: { children: React.ReactNode }) => {
  const authToken = useSelector(selectAuthToken);

  if (authToken) {
    // Redirect to home if user is already authenticated
    return <Navigate to="/home" replace />;
  }

  // Render the children if not authenticated
  return <>{children}</>;
};

export default GuestRoute;
