import { useRecoilValue } from "recoil";
import { isAuthenticatedState } from "../States/authSlice";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = () => {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Check if token exists in localStorage
      const token = localStorage.getItem("access_token");
      console.log("ProtectedRoute - Token in localStorage:", !!token);

      if (!token) {
        setError("No authentication token found");
      }

      // Small delay to ensure state is properly set
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 100);

      return () => clearTimeout(timer);
    } catch (err) {
      console.error("ProtectedRoute - Error checking token:", err);
      setError("Error checking authentication status");
      setIsLoading(false);
    }
  }, []);

  console.log("ProtectedRoute - isAuthenticated:", isAuthenticated);
  console.log("ProtectedRoute - current path:", location.pathname);
  console.log("ProtectedRoute - isLoading:", isLoading);
  console.log("ProtectedRoute - error:", error);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !isAuthenticated) {
    console.log(
      "ProtectedRoute - redirecting to signin due to:",
      error || "not authenticated"
    );
    // Store the attempted URL for redirect after login
    localStorage.setItem("redirect_after_login", location.pathname);
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
