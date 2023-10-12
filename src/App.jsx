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
import Projects from "./components/projects/Projects";
import Profile from "./components/profile/Profile";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/contactame" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
