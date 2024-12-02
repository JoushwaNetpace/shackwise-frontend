// src/hooks/useConditionalRedirect.ts
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useConditionalRedirect = (value: any, redirectPath: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (value === undefined || value === null) {
      navigate(redirectPath);
    }
  }, [value, redirectPath, navigate]);
};

export default useConditionalRedirect;
