import React from "react";
import { Navigate, Outlet } from "react-router";
import { isUserLoggedIn } from "../utils/auth.js";

const RequireUnauth = () => {
    if (isUserLoggedIn()) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default RequireUnauth;
