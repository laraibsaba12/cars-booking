
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Booking from "./Components/Booking";

function AppContent() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  const [error, setError] = useState("");

  // LOGIN WITH BACKEND
  const handleLogin = async (username, password) => {
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username.trim(),
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid username or password.");
        return false;
      }

      if (!data.token) {
        setError("Login failed: server did not return a token.");
        return false;
      }

      localStorage.setItem("token", data.token);

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      setIsLoggedIn(true);
      navigate("/booking");

      return true;
    } catch (err) {
      setError("Cannot connect to server. Please start your backend.");
      return false;
    }
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Navigate to="/booking" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/booking" replace />
          ) : (
            <>
              {error && (
                <div className="fixed left-1/2 top-4 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-xl border border-red-500/30 bg-red-950 p-4 text-center text-sm text-red-300">
                  {error}
                </div>
              )}

              <Login onLogin={handleLogin} />
            </>
          )
        }
      />

      <Route
        path="/signup"
        element={
          isLoggedIn ? (
            <Navigate to="/booking" replace />
          ) : (
            <SignUp />
          )
        }
      />

      <Route
        path="/booking"
        element={
          isLoggedIn ? (
            <Booking onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
