import React, {useContext, useEffect} from "react";
import AuthContext from "../../context/autenticacion/AuthContext";
import Barra from "../layouts/Barra";
import Slidebar from "../layouts/Slidebar";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";

const Proyectos = () => {
  //Extraer la información de autenticación
  const {usuarioAutenticado} = useContext(AuthContext);

  useEffect(() => {
    usuarioAutenticado();
  }, [])

  return (
    <div className="contenedor-app">
      <Slidebar />

      <div className="seccion-principal">
        <Barra />
        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
