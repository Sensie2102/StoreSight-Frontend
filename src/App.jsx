
import OauthCallback from "./components/OAuthCallback";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout"; 
import Overview from "./pages/Overview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/google/callback" element={<OauthCallback />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/overview" element={<Overview />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
