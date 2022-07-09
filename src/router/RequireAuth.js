import React from "react";
import { Navigate, Outlet } from "react-router";
import { isUserLoggedIn } from "../utils/auth.js";

const RequireAuth = () => {
    if (!isUserLoggedIn()) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};

export default RequireAuth;
