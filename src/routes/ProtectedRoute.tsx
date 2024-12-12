import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../store/slices/auth/authSelectors";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const authToken = useSelector(selectAuthToken);
  if (!authToken) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the children if authenticated
  return <>{children}</>;
};

export default ProtectedRoute;
