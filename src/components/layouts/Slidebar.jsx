import React, { useContext } from "react";
import ListaProyectos from "../proyectos/ListaProyectos";
import NuevoProyecto from "../proyectos/NuevoProyecto";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const Slidebar = () => {
  const { proyectos } = useContext(ProyectoContext);

  return (
    <aside>
      <h1>
        Mern <span>Tasks</span>
      </h1>
      <NuevoProyecto />
      <div className="proyectos">
        {proyectos.length === 0 ? (
            <h2>Sin proyectos...<br />¡Crea uno!</h2>
        ) : (
          <h2>Mis Proyectos</h2>
        )}
        <ListaProyectos />
      </div>
    </aside>
  );
};

export default Slidebar;
