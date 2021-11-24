import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const Proyecto = ({ proyecto }) => {
  const { proyectoSeleccionado } = useContext(ProyectoContext);
  const {obtenerTareas} = useContext(TareaContext);

  //Función para agregar el proyecto actual
  const mostrarProyecto = id => {
    proyectoSeleccionado(id);// Muestra el proyecto clicado
    obtenerTareas(id)
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => mostrarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
