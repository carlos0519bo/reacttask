import React, {useContext} from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";


const Tarea = ({ tarea }) => {

  const {proyecto} = useContext(ProyectoContext);
  const {eliminarTarea, obtenerTareas} = useContext(TareaContext);

  //Desestructuramoa el proyecto
  const [proyectoSeleccionado] = proyecto;

  //función para eliminar una tarea
  const onClickEliminar = (tareaId) => {
    eliminarTarea(tareaId);
    obtenerTareas(proyectoSeleccionado.id);
  }

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
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
