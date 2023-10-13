import { useState } from "react";

import "./App.css";
import LandingPage from "./components/landingPage/Landing";
import { ThemeProvider } from "@emotion/react";
import theme from "./temaConfig";
import { Routes, Route } from "react-router-dom";

import Home from "./components/protafolio1/rutasRendrizado/home/Home";
import RutaProyectos from "./components/protafolio1/rutasRendrizado/proyectos/RutaProyectos";
import RutaPerfil from "./components/protafolio1/rutasRendrizado/perfil/RutaPerfil";
import RutaContactame from "./components/protafolio1/rutasRendrizado/contactame/RutaContactame";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<RutaProyectos />} />
        <Route path="/perfil" element={<RutaPerfil />} />
        <Route path="/contactame" element={<RutaContactame />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
