import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const { email, password } = useSelector((state) => state.yetkiSlice);

  return email === "osman" && password === "1453" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
