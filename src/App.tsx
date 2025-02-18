import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Inicio = () => <h1>Inicio</h1>;
const Servicio = () => <h1>Servicio</h1>;
const Nosotros = () => <h1>Nosotros</h1>;
const Proyectos = () => <h1>Proyectos</h1>;
const Contacto = () => <h1>Contacto</h1>;

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;