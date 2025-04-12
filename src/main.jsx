import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App.jsx";
import { accessTokenState } from "./States/authSlice";

// Initialize Recoil state with values from localStorage
const initializeState = ({ set }) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    console.log("Initializing Recoil with token from localStorage");
    set(accessTokenState, token);
  }
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot initializeState={initializeState}>
      <App />
    </RecoilRoot>
  </StrictMode>
);
