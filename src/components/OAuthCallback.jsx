import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { accessTokenState } from "../States/authSlice";
import { useNavigate } from "react-router-dom";

function OauthCallback() {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("access_token");
    const error = params.get("error");

    console.log("OAuthCallback - Received token:", token);

    if (error) {
      setError(error);
      setTimeout(() => navigate("/signin"), 3000);
      return;
    }

    if (token) {
      try {
        // First set the token in localStorage
        localStorage.setItem("access_token", token);
        // Then set it in Recoil state
        setAccessToken(token);

        // Verify token was properly set
        const storedToken = localStorage.getItem("access_token");
        console.log(
          "OAuthCallback - Verified token in localStorage:",
          storedToken
        );

        // Small delay to ensure state is properly set before navigation
        setTimeout(() => {
          console.log("OAuthCallback - Token set, navigating to dashboard");
          navigate("/dashboard", { replace: true });
        }, 100);
      } catch (err) {
        console.error("OAuthCallback - Error setting token:", err);
        setError("Failed to process authentication. Please try again.");
        setTimeout(() => navigate("/signin"), 3000);
      }
    } else {
      setError("No access token received. Please try again.");
      setTimeout(() => navigate("/signin"), 3000);
    }
  }, [setAccessToken, navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-destructive mb-4">
            Authentication Error
          </h2>
          <p className="text-muted-foreground">{error}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Redirecting to sign in...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Completing Authentication</h2>
        <p className="text-muted-foreground">
          Please wait while we log you in...
        </p>
      </div>
    </div>
  );
}

export default OauthCallback;
