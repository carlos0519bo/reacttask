import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const { proyecto, eliminarProyecto } = useContext(ProyectoContext);
  const { tareasDelProyecto } = useContext(TareaContext);

  if (!proyecto) return <h2>Selecciona un proyecto</h2>;
  //Desestructuramos el array para sacar la información
  const [proyectoSeleccionado] = proyecto;

  //Función para eliminar un proyecto.
  const onClickEliminar = () => {
    eliminarProyecto(proyectoSeleccionado.id);
  };

  return (
    <>
      <h2>Proyecto: {proyectoSeleccionado.nombre}</h2>
      <ul className="listado-tareas">
        {tareasDelProyecto.length === 0 ? (
          <li className="tarea">
            <p>No tienes tareas</p>
          </li>
        ) : (
          tareasDelProyecto.map((tarea) => (
            <Tarea tarea={tarea} key={tarea.id} />
          ))
        )}
      </ul>
      <button className="btn btn-eliminar" onClick={onClickEliminar}>
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
