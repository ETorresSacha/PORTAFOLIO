import React from "react";
import Nav from "../nav/Nav";
import InicioHome from "./HomeLanding";
import OptionsNavigate from "../nav/opcionesNav/OptionsNavigate";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import NavBar from "../protafolio1/navbar/NavBar";
import Header from "../protafolio1/header/Header";

const Home = () => {
  // Opciones del Nav
  const optionsNav = ["Inicio", "Proyectos", "Perfil", "Contáctame"];
  return (
    <div>
      <section className="conteiner-landing">
        <Header />
        <NavBar />
      </section>
    </div>
  );
};

export default Home;
