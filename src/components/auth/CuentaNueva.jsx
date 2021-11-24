import React, { useState } from "react";
import { Link } from "react-router-dom";

const CuentaNueva = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmar: "",
  });

  const { name, email, password, confirmar } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //Botón para que el usuario inicie sesión
  const submitLog = (e) => {
    e.preventDefault();

    //Verirficar campos vacios

    //condición de contraseña mínimo 6 caracteres

    //Comprobar que las contraseñas coincidan

    //Pasar a la acción
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtén tu cuenta</h1>

        <form onSubmit={submitLog}>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmar"
              id="confirmar"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default CuentaNueva;
