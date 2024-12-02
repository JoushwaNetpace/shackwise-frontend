// src/hooks/useAuthRedirect.ts
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Adjust this based on where you store your token
    if (!token) {
      navigate("/choose-role");
    }
  }, [navigate]);
};

export default useAuthRedirect;
