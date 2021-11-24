import { BrowserRouter, Routes, Route } from "react-router-dom";
import CuentaNueva from "./components/auth/CuentaNueva";
import Login from "./components/auth/Login";
import Proyectos from "./components/proyectos/Proyectos";
import ProyectoState from "./context/proyectos/ProyectoState";
import TareaState from "./context/tareas/TareaState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cuenta_nueva" element={<CuentaNueva />} />
            <Route path="/proyectos" element={<Proyectos />} />
          </Routes>
        </BrowserRouter>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
