import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Register from "../../pages/Auth/Register/Register";

const RegisterWrapper: React.FC = () => {
  const { userType } = useParams();

  // If userType is not defined, redirect to choose-role
  if (!userType) {
    return <Navigate to="/choose-role" replace />;
  }

  // If userType is defined, render the Register component
  return <Register />;
};

export default RegisterWrapper;
