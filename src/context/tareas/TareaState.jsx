import React, { useReducer } from "react";
import TareaContext from "./TareaContext";
import TareaReducer from "./TareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_FORM,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  EDITAR_TAREA,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types/Index";
import { uuid } from "short-uuid";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Crear navbar", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Crear portafolio", estado: true, proyectoId: 2 },
      { id: 3, nombre: "Crear repositorios", estado: true, proyectoId: 3 },
      { id: 4, nombre: "Crear navbar", estado: true, proyectoId: 1 },
      { id: 5, nombre: "Crear navbar", estado: true, proyectoId: 2 },
      { id: 6, nombre: "Crear navbar", estado: true, proyectoId: 3 },
      { id: 7, nombre: "Crear navbar", estado: true, proyectoId: 1 },
    ],
    tareasDelProyecto: null,
    errorformulario: false,
    tareaseleccionada: null,
  };

  //Creamos nuestro dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //Obtenemos las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  //funciñón para agregar una tarea al proyecto
  const agregarTarea = (tarea) => {
    tarea.id = uuid();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  //Mostrar error
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORM,
    });
  };

  //Eliminar tarea
  const eliminarTarea = (tareaId) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: tareaId,
    });
  };

  //Cambiar estado tarea
  const cambiarEstado = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  //Editar tarea seleccionada
  const editarTarea = (tarea) => {
    dispatch({
      type: EDITAR_TAREA,
      payload: tarea,
    });
  };

  //Actualizar tarea.
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  //Elimina la tarea seleccionada
  const eliminarSeleccion = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasDelProyecto: state.tareasDelProyecto,
        errorformulario: state.errorformulario,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        mostrarError,
        eliminarTarea,
        cambiarEstado,
        editarTarea,
        actualizarTarea,
        eliminarSeleccion,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
