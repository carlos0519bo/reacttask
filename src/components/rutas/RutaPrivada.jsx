import React, { useContext, useEffect } from "react";
import { Navigate, Outlet  } from "react-router";
import AuthContext from "../../context/autenticacion/AuthContext";

const RutaPrivada = () => {
  const { autenticado, usuarioAutenticado } = useContext(AuthContext);

  // useEffect(() => {
  //   usuarioAutenticado();
  // }, [])

  return !autenticado ? <Navigate to="/"/> : <Outlet/>


  {/* // return autenticado ? children : <Navigate to="/" />; */}
};

export default RutaPrivada;
