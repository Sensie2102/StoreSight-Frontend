import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { accessTokenState } from "../../States/authSlice";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const setAccessToken = useSetRecoilState(accessTokenState);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Validate passwords match
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const response = await axios.post(
        "http://localhost:8000/auth/signup",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { access_token } = response.data;
      localStorage.setItem("access_token", access_token);
      setAccessToken(access_token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Unable to sign up", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 422) {
          setError("Invalid input. Please check your details and try again.");
        } else if (error.response.status === 409) {
          setError(
            "Email already exists. Please use a different email or sign in."
          );
        } else {
          setError("Failed to sign up. Please try again.");
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from server. Please try again.");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handleGoogleSignup = () => {
    try {
      const currentUrl = window.location.href;
      localStorage.setItem("redirect_after_oauth", currentUrl);
      window.location.href = "http://localhost:8000/auth/google/login";
    } catch {
      setError("Failed to initiate Google Sign Up. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-foreground">
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-md text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <Label
                htmlFor="signup-name"
                className="block text-sm font-medium text-foreground"
              >
                Name
              </Label>
              <Input
                id="signup-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="signup-email"
                className="block text-sm font-medium text-foreground"
              >
                Email
              </Label>
              <Input
                id="signup-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="signup-password"
                className="block text-sm font-medium text-foreground"
              >
                Password
              </Label>
              <Input
                id="signup-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="signup-confirm-password"
                className="block text-sm font-medium text-foreground"
              >
                Confirm Password
              </Label>
              <Input
                id="signup-confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
                className="mt-1"
              />
            </div>
            <Button
              type="submit"
              variant="default"
              className="w-full hover:bg-primary/90"
            >
              Sign Up
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            onClick={handleGoogleSignup}
            className="w-full border flex items-center justify-center space-x-2"
            variant="outline"
          >
            <FcGoogle size={20} />
            <span>Sign up with Google</span>
          </Button>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-primary hover:underline"
            >
              Sign In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpForm;
