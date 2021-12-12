import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const ListaProyectos = () => {
  //Importamos proyectos del state inicial
  const { proyectos, obtenerProyectos } = useContext(ProyectoContext);

  //Obtener proyectos cuando cargamos el componente
  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line
  }, []);

  //Revisamos si proyectos tiene contenido
  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} key={proyecto.id} />
      ))}
    </ul>
  );
};

export default ListaProyectos;
