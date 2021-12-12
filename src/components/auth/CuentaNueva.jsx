import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import AlertaContext from "../../context/alertas/AlertaContext";
import AuthContext from "../../context/autenticacion/AuthContext";


const CuentaNueva = () => {
  //Extraemos los valores de alertaContext
  const { alerta, mostrarAlerta } = useContext(AlertaContext);
  const { registrarUsuario, mensaje, autenticado } = useContext(AuthContext);

  //En caso de que el usuario ya exista
  const history = useNavigate();
  useEffect(() => {
      if (autenticado) {
          history('/proyectos');
      };

      if (mensaje) {
        mostrarAlerta(mensaje.msg, mensaje.categoria)
      }
  }, [mensaje, autenticado, history])

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
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    //condición de contraseña mínimo 6 caracteres
    if (password.length < 6) {
      mostrarAlerta(
        "La contraseña debe tener mínimo 6 caracteres",
        "alerta-error"
      );
      return;
    }

    //Comprobar que las contraseñas coincidan
    if (password !== confirmar) {
      mostrarAlerta("Las contraseñas no coinciden", "alerta-error");
      return;
    }

    //Pasar a la acción
    registrarUsuario({
      name,
      email,
      password,
    });
  };

  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
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
