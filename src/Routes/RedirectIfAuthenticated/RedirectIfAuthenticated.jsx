import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function RedirectIfAuthenticated() {
 const user = localStorage.getItem("user");
 return user ? <Navigate to="/" /> : <Outlet />
}

export default RedirectIfAuthenticated