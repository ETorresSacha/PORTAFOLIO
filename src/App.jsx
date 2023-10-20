import { useState } from "react";

import "./App.css";
//import Landing from "./rutas/portafolio2/landingPage/Landing";
import { ThemeProvider } from "@emotion/react";
import theme from "./temaConfig";
import { Routes, Route } from "react-router-dom";

import Home from "./rutas/portafolio1/home/Home";
import RutaProyectos from "./rutas/portafolio1/proyectos/RutaProyectos";
import RutaPerfil from "./rutas/portafolio1/perfil/RutaPerfil";
import RutaContactame from "./rutas/portafolio1/contactame/RutaContactame";
import Cv from "./components/cv/Cv";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<RutaProyectos />} />
        <Route path="/perfil" element={<RutaPerfil />} />
        <Route path="/contactame" element={<RutaContactame />} />
        {/* <Route path="/pdf" element={<Cv />} /> */}
      </Routes>
    </ThemeProvider>
  );
}
export default App;
