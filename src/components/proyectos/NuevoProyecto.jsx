import React, { useState, useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const NuevoProyecto = () => {
  //obtenemos el state del fomulario
  const {
    formulario,
    mostrarFormulario,
    agregarProyecto,
    errorformulario,
    mostrarError,
  } = useContext(ProyectoContext);

  //state para proyecto
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const submitProyecto = (e) => {
    e.preventDefault();
    //validar el campo
    if (nombre.trim() === "") {
      mostrarError();
      return;
    }

    //agregar al state
    agregarProyecto(proyecto);

    //reiniciar el form
    setProyecto({
      nombre: "",
    });
  };

  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>

      {formulario && (
        <form className="formulario-nuevo-proyecto" onSubmit={submitProyecto}>
          <input
            type="text"
            className="input-text"
            name="nombre"
            value={nombre}
            placeholder="Nombre del proyecto"
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      )}
      {errorformulario ? (
        <p className="mensaje error">Ingrese el nombre del proyecto</p>
      ) : null}
    </>
  );
};

export default NuevoProyecto;
