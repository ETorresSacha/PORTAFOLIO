import React from "react";
import Nav from "../nav/Nav";
import InicioHome from "../landingPage/opcionesNav/Inicio";
import OptionsNavigate from "../nav/opcionesNav/OptionsNavigate";

const Home = () => {
  // Opciones del Nav
  const optionsNav = ["Inicio", "Proyectos", "Perfil", "Contáctame"];
  return (
    <div>
      {" "}
      <section className="conteiner-landing">
        <Nav optionNavigate={<OptionsNavigate optionsNav={optionsNav} />} />
        <InicioHome />
      </section>
    </div>
  );
};

export default Home;
