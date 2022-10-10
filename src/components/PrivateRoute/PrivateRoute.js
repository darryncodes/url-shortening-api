import React from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    return <>{currentUser ? children : navigate("/login")}</>;
}

export default PrivateRoute;
