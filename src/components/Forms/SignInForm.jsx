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

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const setAccessToken = useSetRecoilState(accessTokenState);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/token",
        new URLSearchParams({
          username: email,
          password: password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const { access_token } = response.data;
      localStorage.setItem("access_token", access_token);
      setAccessToken(access_token);
      navigate("/dashboard");
    } catch (error) {
      console.log("Unable to sign in", error);
    }
  };

  const handleGoogleSignIn = () => {
    try {
      const currentUrl = window.location.href;
      localStorage.setItem("redirect_after_oauth", currentUrl);
      window.location.href = "http://localhost:8000/auth/google/login";
    } catch {
      setError("Failed to initiate Google Sign In. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-foreground">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-md text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <Label
                htmlFor="signin-email"
                className="block text-sm font-medium text-foreground"
              >
                Email
              </Label>
              <Input
                id="signin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="signin-password"
                className="block text-sm font-medium text-foreground"
              >
                Password
              </Label>
              <Input
                id="signin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mt-1"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Login
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
            onClick={handleGoogleSignIn}
            className="w-full border border-gray-300 flex items-center justify-center space-x-2"
            variant="outline"
          >
            <FcGoogle size={20} />
            <span>Sign in with Google</span>
          </Button>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-primary hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInForm;
