import React from "react";
import Nav from "../nav/Nav";
import "./landing.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startOption } from "../../toolkit/slice";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import Button from "@mui/material/Button";
import { useRef } from "react";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import OptionsNavigate from "../nav/opcionesNav/OptionsNavigate";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Projects from "./opcionesNav/Projects";
import Profile from "./opcionesNav/Profile";
import Contact from "./opcionesNav/Contact";
const LandingPage = () => {
  const navigate = useNavigate();
  const Inicio = useRef();
  const Perfil = useRef();
  const Proyectos = useRef();
  const Contáctame = useRef();

  const dispatch = useDispatch();

  const { option } = useSelector((state) => state.clothes);

  // Opciones del Nav
  const optionsNav = ["Inicio", "Proyectos", "Perfil", "Contáctame"];

  // Scroll to section
  useEffect(() => {
    if (option === "Inicio")
      window.scrollTo({
        top: Inicio.current.offsetTop,
        behavior: "smooth",
      });
    if (option === "Proyectos")
      window.scrollTo({
        top: Proyectos.current.offsetTop,
        behavior: "smooth",
      });
    if (option === "Perfil")
      window.scrollTo({
        top: Perfil.current.offsetTop,
        behavior: "smooth",
      });
    if (option === "Contáctame")
      window.scrollTo({
        top: Contáctame.current.offsetTop,
        behavior: "smooth",
      });

    return () => dispatch(startOption(""));
  }, [option]);

  //SCROLL To Top
  const scrollToTop = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Boton de Scroll TO Top
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 632) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Inicio */}
      <section ref={Inicio} className="conteiner-landing">
        <Nav optionNavigate={<OptionsNavigate optionsNav={optionsNav} />} />
        <div className="conteiner-text">
          <h1 className="title-landing">¡Hola! Soy Erik</h1>
          <h3 className="text-landing">Desarrollador web Full Stack</h3>
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
      </section>

      {/* Opciones del nav */}

      <section
        ref={Proyectos}
        style={{
          width: "100%",
          height: "auto",
          justifyContent: "center",
          background:
            "linear-gradient(180.2deg,rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%)",
        }}
      >
        <Projects />
      </section>

      <section
        ref={Perfil}
        style={{
          width: "100%",
          height: "100vh",
          border: "solid green",
          background:
            "linear-gradient(180.2deg,rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%)",
        }}
      >
        <Profile />
      </section>

      <section
        ref={Contáctame}
        style={{
          width: "100%",
          height: "auto",
          background:
            "linear-gradient(180.2deg,rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%)",
        }}
      >
        <Contact />
      </section>

      {/* Boton para volver al Top = 0 */}
      {show && (
        <Button
          onClick={() => scrollToTop()}
          style={{
            position: "fixed",
            right: 50,
            bottom: 50,
            background: "#f0e8e8",
            borderRadius: 40,
          }}
        >
          <KeyboardDoubleArrowUpRoundedIcon
            fontSize="large"
            sx={{ color: "black" }}
          />
        </Button>
      )}
      <Footer />
    </div>
  );
};

export default LandingPage;
