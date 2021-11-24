import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_FORM,
  ELIMINAR_TAREA,
} from "../../types/Index";

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
        tareas: [...state.tareas, action.payload],
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
          tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
      };

    default:
      return state;
  }
};
