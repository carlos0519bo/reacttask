import React, { useContext, useState } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const FormTarea = () => {
  const { proyecto } = useContext(ProyectoContext);
  const {agregarTarea, errorformulario, mostrarError, obtenerTareas} = useContext(TareaContext);

  //State de la tarea
  const [tarea, setTarea] = useState({
    nombre: '',
  });

  const {nombre} = tarea;

  if (!proyecto) return null;

  //Desestructuramos el array para sacar la información
  const [proyectoSeleccionado] = proyecto;

  const onChangeTarea = e => {
    setTarea({
      ...tarea,
      [e.target.name] : e.target.value
    });
  }


  const onSubmit = e => {
    e.preventDefault();

    // validar
    if (nombre.trim() === '') {
      mostrarError();
      return;
    }

    //enviar validación

    //Agregar tarea al state de tareas
    tarea.proyectoId = proyectoSeleccionado.id;
    tarea.estado = false;
    agregarTarea(tarea);

    //Obtenemos las tareas del proyecto seleccionado
    obtenerTareas(proyectoSeleccionado.id)

    //Reiniciar el form
    setTarea({
      nombre: ''
    })
  }

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={onChangeTarea}
            className="input-text"
            placeholder="Nombre de la tarea"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
      {errorformulario ? (
        <p className="mensaje error">Ingrese el nombre del proyecto</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
