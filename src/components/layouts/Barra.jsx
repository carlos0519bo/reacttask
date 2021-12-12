import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/autenticacion/AuthContext";

const Barra = () => {
  //Extraer la información de autenticación
  const { usuario, usuarioAutenticado } = useContext(AuthContext);

  useEffect(() => {
    usuarioAutenticado();
  }, []);
  return (
    <header className="app-header">
        {usuario ? 
      <p className="nombre-usuario">
        Hola, <span>{usuario.name}</span>
      </p> : null
    }
      <nav className="nav-principal">
        <a href="!#">Cerrar Sesión</a>
      </nav>
    </header>
  );
};

export default Barra;
