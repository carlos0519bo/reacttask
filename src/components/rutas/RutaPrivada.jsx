import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, Route } from "react-router";
import AuthContext from "../../context/autenticacion/AuthContext";

const RutaPrivada = ({ children }) => {
  const { autenticado } = useContext(AuthContext);

  return autenticado ? children : <Navigate to="/" />;
};

export default RutaPrivada;
