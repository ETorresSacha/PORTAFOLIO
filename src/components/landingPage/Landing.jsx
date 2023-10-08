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
import Logo from "../nav/opcionesNav/Logo";
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
  const optionsNav = ["Inicio", "Perfil", "Proyectos", "Contáctame"];

  // Scroll to section
  useEffect(() => {
    if (option === "Inicio")
      window.scrollTo({
        top: Inicio.current.offsetTop,
        behavior: "smooth",
      });
    if (option === "Perfil")
      window.scrollTo({
        top: Perfil.current.offsetTop,
        behavior: "smooth",
      });
    if (option === "Proyectos")
      window.scrollTo({
        top: Proyectos.current.offsetTop,
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
        <Nav
          logo={<Logo />}
          optionNavigate={<OptionsNavigate optionsNav={optionsNav} />}
        />

        <div
          className="conteiner-text"
          style={{
            border: "solid",
          }}
        >
          <h1 className="title-landing">¡Hola! Soy Erik</h1>
          <h3>Desarrollador web Full Stack</h3>
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <GitHubIcon />
            <LinkedInIcon />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "auto",
            // borderRadius: "1200px 390px 420px 200px",
            // background:
            //   "radial-gradient(circle, rgba(176,174,238,1) 0%, rgba(29,30,31,1) 100%)",
            // //background: "linear-gradient(rgba(226, 233, 241, 0.918), rgba(187, 187, 187, 0.912))",
            // boxShadow: "0 0 20px #ffffff, 0 0 40px #ffffff, 0 0 80px #ffffff",

            height: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <div
            style={{
              border: "solid",
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "1200px 350px 250px 250px",
              position: "absolute",
              top: "342px",
            }}
          ></div> */}
          <img
            style={{
              maxWidth: "70%",
              minWidth: "15%",
              position: "relative",

              //background:"radial-gradient(circle, rgba(176,174,238,1) 0%, rgba(29,30,31,1) 100%)",
            }}
            src="../../../image/foto.png"
          />
        </div>
        {/* <div className="btn-landig">
          <Button
            sx={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              border: 2,
              borderRadius: 3,
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              color: "white",
              width: 200,
              height: 48,
              padding: "0 30px",
            }}
            onClick={() => navigate(`/home`)}
          >
            Ver mas
          </Button>
        </div> */}
      </section>

      {/* Opciones del nav */}
      <section
        ref={Perfil}
        style={{ width: "100%", height: "100vh", background: "gray" }}
      >
        <Profile />
      </section>
      <section
        ref={Proyectos}
        style={{
          width: "100%",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Projects />
      </section>
      <section ref={Contáctame} style={{ width: "100%", height: "100vh" }}>
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
