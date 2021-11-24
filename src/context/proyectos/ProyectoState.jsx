import React from "react";
import { uuid } from "short-uuid";
import { useReducer } from "react/cjs/react.development";
import ProyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  MOSTRAR_PROYECTO,
  ELIMINAR_PROYECTO,
} from "../../types/Index";

const ProyectoState = (props) => {
  const proyectos = [
    { nombre: "Portafolio", id: 1 },
    { nombre: "Python", id: 2 },
    { nombre: "Viajar", id: 3 },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null
  };

  //Dispatch para ejecutar las acciones
  const [state, disptach] = useReducer(ProyectoReducer, initialState);

  //Sereie de funciones para el CRUD
  const mostrarFormulario = () => {
    disptach({
      type: FORMULARIO_PROYECTO,
    });
  };

  const obtenerProyectos = () => {
    disptach({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  const agregarProyecto = (proyecto) => {
    proyecto.id = uuid();

    disptach({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  //Mostrar error del formulario de creación de proyecto
  const mostrarError = () => {
    disptach({
      type: VALIDAR_FORMULARIO
    })
  };

  //Mostrar el proyecto seleccionado
  const proyectoSeleccionado = proyectoId => {
     disptach({
       type: MOSTRAR_PROYECTO,
       payload: proyectoId
     })
  }

  //Eliminar el proyecto
  const eliminarProyecto = proyectoId => {
      disptach({
        type: ELIMINAR_PROYECTO,
        payload: proyectoId
      })
  }

  return (
    <ProyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoSeleccionado,
        eliminarProyecto
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
