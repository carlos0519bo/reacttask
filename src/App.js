import { BrowserRouter, Routes, Route } from "react-router-dom";
import CuentaNueva from "./components/auth/CuentaNueva";
import Login from "./components/auth/Login";
import Proyectos from "./components/proyectos/Proyectos";
import RutaPrivada from "./components/rutas/RutaPrivada";
import tokenAuth from "./config/tokenAuth";
import AlertaState from "./context/alertas/AlertaState";
import AuthState from "./context/autenticacion/AuthState";
import ProyectoState from "./context/proyectos/ProyectoState";
import TareaState from "./context/tareas/TareaState";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cuenta_nueva" element={<CuentaNueva />} />
                <Route element={<RutaPrivada />}/>
                <Route path="/proyecto" element={<Proyectos/>}/>
              </Routes>
            </BrowserRouter>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
