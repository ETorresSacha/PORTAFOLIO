import React from "react";
import Nav from "../nav/Nav";
import InicioHome from "./HomeLanding";
import OptionsNavigate from "../nav/opcionesNav/OptionsNavigate";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import NavBar from "../protafolio1/navbar/NavBar";
import Header from "../protafolio1/header/Header";
import Cover from "../cover/Cover";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Transitions from "../protafolio1/transition/Transitions";

const Home = () => {
  // Opciones del Nav
  const optionsNav = ["Inicio", "Proyectos", "Perfil", "Contáctame"];
  return (
    <div className="conteiner-landing">
      <Cover />
      <Header />
      <NavBar />
      <Transitions />
      <div>
        <h1 className="title-landing">¡Hola! Soy Erik</h1>
        <h3 className="text-landing">Desarrollador web Full Stack</h3>
        <div>
          <img src="../../../../image/home-4.png"></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            color: "white",
          }}
        >
          <GitHubIcon sx={{ width: "30px", height: "30px" }} />
          <LinkedInIcon sx={{ width: "30px", height: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
