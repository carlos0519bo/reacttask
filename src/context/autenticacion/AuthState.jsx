import React, {useReducer} from 'react';
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
  } from "../../types/Index";
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'
  

  const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: false,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Función que registra a los usuarios
    const registrarUsuario = async datos => {
        
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });

            //Obtener usuario
            usuarioAutenticado();
        } catch (error) {
            // console.log(error.response.data.msg)
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            });
        }
    };

    //Retorna cuando el usuario autenticado
    const usuarioAutenticado = async () =>{
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token)
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });
            
            //Obtener usuario
            usuarioAutenticado();
        } catch (error) {
            console.log(error)
            dispatch({
                type: LOGIN_ERROR,
            })
        }
    };

    //Cuando el usuario inicia sesión
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error)
            const alerta = {
                msg: 'error aquí',
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }

    return(
        <AuthContext.Provider value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            registrarUsuario,
            iniciarSesion,
            usuarioAutenticado,

        }}>
            {props.children}
        </AuthContext.Provider>
    )
  }

  export default AuthState;
