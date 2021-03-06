import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_FORM,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  EDITAR_TAREA,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA
} from "../../types/Index";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasDelProyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [action.payload, ...state.tareas],
        errorformulario: false,
      };
    case VALIDAR_FORM:
      return {
        ...state,
        errorformulario: true,
      };
    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    case ACTUALIZAR_TAREA:
    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea
        ),
      };
    case EDITAR_TAREA:
      return {
        ...state,
        tareaseleccionada: action.payload,
      };
    case LIMPIAR_TAREA:
      return{
        ...state,
        tareaseleccionada: null
      }

    default:
      return state;
  }
};
