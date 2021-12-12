import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertaContext from "../../context/alertas/AlertaContext";
import AuthContext from "../../context/autenticacion/AuthContext";

const Login = () => {

   //Extraemos los valores de alertaContext
   const { alerta, mostrarAlerta } = useContext(AlertaContext);
   const { iniciarSesion, mensaje, autenticado } = useContext(AuthContext);

     //En caso de que el usuario o contraseña este incorrecta o no exista
  const history = useNavigate();
  useEffect(() => {
      if (autenticado) {
          history('/proyectos');
      }

      if (mensaje) {
        mostrarAlerta(mensaje.msg, mensaje.categoria)
      }
  }, [mensaje, autenticado, history])

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

  //Botón para que el usuario inicie sesión
  const submitLog = (e) => {
    e.preventDefault();

    //Verirficar campos vacios
    if (email.trim() === '' || password.trim() === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
    }

    //Pasar a la acción
    iniciarSesion({email, password});
  };


  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
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
              onChange={onChangeEmail}
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
