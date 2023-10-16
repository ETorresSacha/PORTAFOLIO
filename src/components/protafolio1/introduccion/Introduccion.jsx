import React from "react";
import { fadeIn } from "../../../utils/motionTrnsitions";
import { motion } from "framer-motion";
import "./introduction.css";

const Introduccion = () => {
  return (
    <div className="conteiner-introduccion">
      <motion.div
        id="emboltura"
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <div className="conteiner-perfil">
          <h3 className="title-introduction">¡Hola! Soy Erik</h3>
          <h1 className="subtitle-introduction">Desarrollador Full Stack</h1>
          <h4 className="text-introduction">
            Optimizo el rendimiento y proporciono soluciones personalizados que
            se adaptan a tus necesidades.
          </h4>
          <div
            id="botones"
            // style={{
            //   display: "flex",
            //   flexWrap: "wrap",
            //   justifyContent: "space-evenly",
            // }}
            className="flex flex-row justify-evenly flex-wrap items-center  md:gap-10 md:flex-row"
          >
            <a
              id="boton1"
              style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
              href="/projects"
              className="px-3 py-1 my-2 transition-all border-2 text-white cursor-pointer  rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </a>
            <a
              id="boton2"
              style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
              href="/contact"
              className="px-3 py-1 my-2 transition-all border-2  cursor-pointer text-orange-500 border-orange-500 rounded-xl hover:shadow-xl hover:shadow-orange-500"
            >
              Contacta conmigo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Introduccion;
