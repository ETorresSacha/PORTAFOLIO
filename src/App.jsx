import { useState } from "react";

import "./App.css";
import LandingPage from "./components/landingPage/Landing";
import { ThemeProvider } from "@emotion/react";
import theme from "./temaConfig";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./components/home/Home";
// import Projects from "./components/landingPage/opcionesNav/Projects";
// import Profile from "./components/landingPage/opcionesNav/Profile";
// import Contact from "./components/landingPage/opcionesNav/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/proyectos" element={<Projects />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/contactame" element={<Contact />} /> */}
      </Routes>
    </ThemeProvider>
  );
}
export default App;
