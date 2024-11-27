import React, { ReactNode, useEffect, useState } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error: Error) => {
    console.error("Error caught in Error Boundary: ", error);
    setHasError(true);
  };

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      handleError(event.error);
    };

    window.addEventListener("error", errorHandler);
    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return (
      <div className="text-center p-4">
        <h1 className="display-4">Something went wrong.</h1>
        <p className="lead">
          We're sorry for the inconvenience. Please try again later.
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
