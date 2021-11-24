import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChangeEmail = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onChangePass = () => {};

  //Botón para que el usuario inicie sesión
  const submitLog = (e) => {
    e.preventDefault();

    //Verirficar campos vacios

    //Pasar a la acción

  };


  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={submitLog}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Correo electrónico"
              onChange={onChangeEmail}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Contraseña"
              onChange={onChangePass}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link to={'/cuenta_nueva'} className="enlace-cuenta">
            Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
