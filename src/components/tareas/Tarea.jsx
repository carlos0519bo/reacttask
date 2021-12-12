import React, {useContext} from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";


const Tarea = ({ tarea }) => {

  const {proyecto} = useContext(ProyectoContext);
  const {eliminarTarea, obtenerTareas, cambiarEstado, editarTarea} = useContext(TareaContext);

  //Desestructuramoa el proyecto
  const [proyectoSeleccionado] = proyecto;

  //función para eliminar una tarea
  const onClickEliminar = (tareaId) => {
    eliminarTarea(tareaId);
    obtenerTareas(proyectoSeleccionado.id);
  }

  //Función que cambia el estado de la tarea
  const onClickEstado = tarea => {
    if (tarea.estado) {
      tarea.estado = false
    } else {
      tarea.estado = true
    }
    cambiarEstado(tarea);
  }

  //Función para editar la tarea
  const onClickEditar = tarea => {
    editarTarea(tarea)
  }

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo" onClick={()=>onClickEstado(tarea)}>
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={()=>onClickEstado(tarea)}>
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={()=> onClickEditar(tarea)}>
          Editar
        </button>
        <button type="button" className="btn btn-secundario" onClick={()=>onClickEliminar(tarea.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
