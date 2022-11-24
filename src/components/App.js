import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import { AuthProvider } from "../contexts/AuthContext";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UpdateProfile from "./pages/UpdateProfile";

function App() {
    return (
        <AuthProvider>
            <Router basename="/">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/update-profile"
                        element={
                            <PrivateRoute>
                                <UpdateProfile />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
